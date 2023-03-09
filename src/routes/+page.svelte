<script lang="ts">
  import Image from '$lib/components/Image.svelte'
</script>
<section> 
  <h1>Very Opinionated Example of Using SvelteKit with Vercel Image Optimization</h1>
  <p>Make sure the image sizes in the Image component and the Vercel Image script are the same</p>
  <p>Change build script in vercel to `npm run build:vercel` or change package.json</p>

  <h3>Local Images</h3>
  <Image 
    image={{sourceUrl:'/example.jpg'}} 
    width={1920}  
    height={1277} 
  />  

  <h3>Remote Images</h3>
  <p>Set remote options in scripts/vercel-images.js</p>
  <Image 
    image={{sourceUrl:'https://d2od76x949sv9u.cloudfront.net/koios/wp-content/uploads/2023/01/30164450/paul-kansonkho-9xjHQvdMi4c-unsplash-scaled.jpg'}} 
    width={1920}  
    height={1277} 
  />  

  <h3>Using with Image Sizes</h3>
  <p>Based on Tailwind Breakpoints <small>(Tailwind not installed or required)</small></p>
  <p>In this example it would tell the browser that the image would be full browser width until 
    `lg` breakpoint at which time it would be 50vw and at `xl` breakpoint it would be 33vw
  </p>
  <Image 
    image={{sourceUrl:'/example.jpg'}} 
    width={1920}  
    height={1277} 
    sizes={{lg: '50vw', xl:'33vw'}}
  />  
</section>