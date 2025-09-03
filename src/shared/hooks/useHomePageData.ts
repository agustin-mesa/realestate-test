import { FeatureData, StatsData, TestimonialData } from '@/modules/home/types';
import { useMemo } from 'react';

interface UseHomePageDataReturn {
	testimonial: TestimonialData;
	stats: StatsData[];
	features: FeatureData[];
}

export const useHomePageData = (): UseHomePageDataReturn => {
	const testimonial = useMemo<TestimonialData>(
		() => ({
			name: 'Manuel Villa',
			role: 'Renter',
			avatar: '/assets/images/avatar.png',
			quote: 'I loved how smooth the move was, and finally got the house we wanted.',
			savedAmount: '$1,500',
			processTime: '-24hrs'
		}),
		[]
	);

	const stats = useMemo<StatsData[]>(
		() => [
			{
				icon: '/assets/images/resources/renters.svg',
				value: '50k+ renters',
				description: 'believe in our service'
			},
			{
				icon: '/assets/images/resources/properties.svg',
				value: '10k+ properties',
				description: 'and house ready for occupancy'
			}
		],
		[]
	);

	const features = useMemo<FeatureData[]>(
		() => [
			{
				icon: '/assets/images/resources/insurance.svg',
				title: 'Property Insurance',
				description:
					'We offer our customer property protection of liability coverage and insurance for their better life.'
			},
			{
				icon: '/assets/images/resources/commission.svg',
				title: 'Lowest Commission',
				description:
					'You no longer have to negotiate commissions and haggle with other agents it only cost 2%!'
			},
			{
				icon: '/assets/images/resources/price.svg',
				title: 'Best Price',
				description:
					'Not sure what you should be charging for your property? No need to worry, let us do the numbers for you.'
			},
			{
				icon: '/assets/images/resources/overall.svg',
				title: 'Overall Control',
				description:
					'Get a virtual tour, and schedule visits before you rent or buy any properties. You get overall control.'
			}
		],
		[]
	);

	return {
		testimonial,
		stats,
		features
	};
};
