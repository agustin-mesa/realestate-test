import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
	const baseUrl = 'https://estatery.com';

	return {
		rules: [
			{
				userAgent: '*',
				allow: '/',
				disallow: ['/admin/', '/api/', '/private/']
			},
			{
				userAgent: 'Googlebot',
				allow: '/',
				disallow: ['/admin/', '/api/', '/private/']
			}
		],
		sitemap: `${baseUrl}/sitemap.xml`,
		host: baseUrl
	};
}
