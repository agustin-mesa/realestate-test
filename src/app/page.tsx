import { MainLayout } from '@/layouts';
import { FeaturesSection, HeroSection } from '@/modules/home/components';
import { Header } from '@/shared/components';

export default function Home() {
	return (
		<MainLayout>
			<Header />
			<HeroSection />
			<FeaturesSection />
		</MainLayout>
	);
}
