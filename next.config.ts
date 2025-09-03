import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	// Optimizaciones para Core Web Vitals
	images: {
		formats: ['image/webp', 'image/avif'],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
		minimumCacheTTL: 31536000, // 1 año
		dangerouslyAllowSVG: true,
		contentDispositionType: 'attachment',
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
	},

	// Compresión y optimización
	compress: true,

	// Optimización de bundle
	experimental: {
		optimizePackageImports: ['primereact'],
		turbo: {
			rules: {
				'*.svg': {
					loaders: ['@svgr/webpack'],
					as: '*.js'
				}
			}
		}
	},

	// Headers para performance y seguridad
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'X-DNS-Prefetch-Control',
						value: 'on'
					},
					{
						key: 'X-XSS-Protection',
						value: '1; mode=block'
					},
					{
						key: 'X-Frame-Options',
						value: 'SAMEORIGIN'
					},
					{
						key: 'X-Content-Type-Options',
						value: 'nosniff'
					},
					{
						key: 'Referrer-Policy',
						value: 'origin-when-cross-origin'
					}
				]
			},
			{
				source: '/assets/(.*)',
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, max-age=31536000, immutable'
					}
				]
			}
		];
	}
};

export default nextConfig;
