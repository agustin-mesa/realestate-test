import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = 'https://estatery.com';
	const currentDate = new Date();

	return [
		{
			url: baseUrl,
			lastModified: currentDate,
			changeFrequency: 'daily',
			priority: 1
		},
		{
			url: `${baseUrl}/properties`,
			lastModified: currentDate,
			changeFrequency: 'daily',
			priority: 0.9
		},
		{
			url: `${baseUrl}/buy`,
			lastModified: currentDate,
			changeFrequency: 'weekly',
			priority: 0.8
		},
		{
			url: `${baseUrl}/rent`,
			lastModified: currentDate,
			changeFrequency: 'weekly',
			priority: 0.8
		},
		{
			url: `${baseUrl}/sell`,
			lastModified: currentDate,
			changeFrequency: 'weekly',
			priority: 0.8
		},
		{
			url: `${baseUrl}/about`,
			lastModified: currentDate,
			changeFrequency: 'monthly',
			priority: 0.6
		},
		{
			url: `${baseUrl}/contact`,
			lastModified: currentDate,
			changeFrequency: 'monthly',
			priority: 0.6
		},
		{
			url: `${baseUrl}/login`,
			lastModified: currentDate,
			changeFrequency: 'monthly',
			priority: 0.4
		},
		{
			url: `${baseUrl}/signup`,
			lastModified: currentDate,
			changeFrequency: 'monthly',
			priority: 0.4
		}
	];
}
