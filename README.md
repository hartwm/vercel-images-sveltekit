# Sveltekit Example with Vercel Image Optimization
[Vercel Image Documentation](https://vercel.com/docs/concepts/image-optimization)

Vercel Site: https://vercel-images-sveltekit.vercel.app/

Set Vercel Build Script to:
```
npm run build:vercel
```

Update remote image settings in `scripts/vercel-images.js`
[Vercel Build Output API](https://vercel.com/docs/build-output-api/v3#build-output-configuration/supported-properties/images)
```
images: {
  "sizes": [640, 768, 1024, 1280, 1536],
  "domains": [],
  "minimumCacheTTL": 60,
  "formats": ["image/avif", "image/webp"],
  "remotePatterns": [ 
    { 
      "hostname": "xxxxxxxx.cloudfront.net"
    }, 
  ]
}
```
