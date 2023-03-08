<script lang="ts">
  type WpImage = { 
    sourceUrl: string
    srcSet?: string | null
    sizes?: string | null
    title?: string | null
    altText?: string | null
    caption?: string | null
    mimeType?: string | null
    class?: string | null
		mediaDetails?:{
			height?:  string | number | null
			width?: string | number | null
		}
  }
  
	type Keys = 'base' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
	type Breakpoints = {
		[K in Keys]?: string;
	};

	import { dev } from '$app/environment'; 
	let className: string | null = null;
	export { className as class };
	export let image: WpImage;
	export let showTitle = false;
	export let lazy = true;
	export let width: string | number = 1280;
	export let height: string | number = 720;
	export let quality = 70;
	export let unoptimized = false;
	export let sizes: Breakpoints = {}; 

	const imageSizes = [640, 768, 1024, 1280, 1536]
	const breakpoints = { base: -1, sm: 640, md: 768, lg: 1024, xl: 1280, '2xl': 1536 };

	$: mediaSizes = Object.entries({ base: '100vw', ...sizes })
		.map(([k, v]) => [breakpoints[k], v])
		.sort((a, b) => b[0] - a[0])
		.filter((c) => c[0])
		.map((d) => `(min-width: ${d[0]}px) ${d[1]}`)
		.join(',')
		.replace(/\(min-width: -1px\) /g, '');

	const vercelImg = (sourceUrl: string, size: number) =>
		`/_vercel/image?url=${encodeURIComponent(sourceUrl)}&w=${size}&q=${quality} ${size}w`;
 
	$: ({srcSet = null, title = null, altText = null, sourceUrl = '', mediaDetails: { height: imageHeight = null, width: imageWidth = null } = {} } = image || {})
	$: vercelSrcSet = imageSizes.map((size) => vercelImg(image?.sourceUrl, size)).join(',');

	// dynamic srcset only for optimized (w/vercel)
	$: imageSrcSet = unoptimized || dev ? srcSet : vercelSrcSet;

	let element;
</script>
 
 
<img 
	width={width ?? imageWidth}
	height={height ?? imageHeight} 
	title={showTitle ? title : null}
	srcset={imageSrcSet}
	src={sourceUrl}
	alt={altText ?? title}
	class={className}
	loading={lazy ? 'lazy' : 'eager'}
	sizes={mediaSizes}
	bind:this={element}
	{...$$restProps}
/>
