import UiText from '@/shared/components/ui/UiText';
import Image from 'next/image';
import PropertySearchTabs from '@/modules/property-search/components/PropertySearchTabs';
import StatsSection from '@/modules/home/components/StatsSection';
import TestimonialCard from '@/modules/home/components/TestimonialCard';
import TrustpilotCard from '@/modules/home/components/TrustpilotCard';

const HeroSection = () => {
	return (
		<main className="bg-v1-background h-dvh">
			<div className="from-v1-primary-50 to-v1-primary-50/0 ml-auto flex h-dvh bg-gradient-to-b pt-32">
				<div className="max-w-screen-3xl ml-auto flex">
					<div className="z-10 flex max-w-xl flex-1 flex-col gap-10 pt-10">
						<UiText type="display1" className="max-w-lg text-6xl">
							Buy, rent, or sell your property easily
						</UiText>
						<UiText type="h4" className="max-w-lg font-medium">
							A great platform to buy, sell, or even rent your properties without any
							commisions.
						</UiText>

						<div className="flex gap-4">
							<PropertySearchTabs />
						</div>

						<StatsSection />
					</div>

					<div className="3xl:max-w-max relative flex max-w-4xl flex-1 justify-end">
						<TestimonialCard />
						<Image
							src="/assets/images/hero-bg.png"
							alt="Hero"
							width={1000}
							height={1000}
							className="object-cover object-left"
							draggable={false}
						/>
						<TrustpilotCard />
					</div>
				</div>
			</div>
		</main>
	);
};

export default HeroSection;
