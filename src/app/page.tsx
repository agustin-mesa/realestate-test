import { MainLayout } from '@/layouts';
import { FeaturesSection, HeroSection } from '@/modules/home/components';
import { Header } from '@/shared/components';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Home - Find Your Dream Property',
	description:
		'Discover the best properties for sale and rent. Buy, sell, or rent your property easily with our commission-free platform.',
	openGraph: {
		title: 'Estatery - Find Your Dream Property',
		description:
			'Discover the best properties for sale and rent. Buy, sell, or rent your property easily with our commission-free platform.',
		images: ['/assets/images/hero-bg.png']
	},
	alternates: {
		canonical: '/'
	}
};

// Esta página usa SSR por defecto en Next.js App Router
export default function Home() {
	return (
		<MainLayout>
			<Header />
			<HeroSection />
			<FeaturesSection />
		</MainLayout>
	);
}
