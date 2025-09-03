import { MainLayout } from '@/layouts';
import { FeaturesSection, HeroSection } from '@/modules/home/components';
import { Header } from '@/shared/components';
import { useHomePageData } from '@/shared/hooks/useHomePageData';

export default function Home() {
	const { testimonial, stats, features } = useHomePageData();

	return (
		<MainLayout>
			<Header />
			<HeroSection testimonial={testimonial} stats={stats} />
			<FeaturesSection features={features} />
		</MainLayout>
	);
}
