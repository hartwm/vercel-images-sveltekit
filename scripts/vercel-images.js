// scripts/vercel-images.js
import fs from 'node:fs';
import dotenv from 'dotenv'
dotenv.config()

const file = '.vercel/output/config.json';

const config = {
  ...JSON.parse(fs.readFileSync(file, 'utf-8')),
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
};

fs.writeFileSync(file, JSON.stringify(config, null, 2));