// scripts/vercel-images.js
import fs from 'node:fs'; 

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
						"hostname": "d2od76x949sv9u.cloudfront.net"
					}, 
				]
			}
};

fs.writeFileSync(file, JSON.stringify(config, null, 2));