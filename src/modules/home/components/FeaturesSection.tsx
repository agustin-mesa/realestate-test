import UiButton from '@/shared/components/ui/UiButton';
import UiText from '@/shared/components/ui/UiText';
import Image from 'next/image';
import FeatureCard from '@/modules/home/components/FeatureCard';

const defaultFeatures = [
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
];

const FeaturesSection = () => {
	const leftColumnFeatures = defaultFeatures.slice(0, 2);
	const rightColumnFeatures = defaultFeatures.slice(2);

	return (
		<div className="mx-auto grid max-w-screen-xl grid-cols-3 gap-16 px-8 py-20">
			<div className="bg-v1-neutral-25 border-v1-primary-500/10 relative flex flex-1 flex-col gap-4 rounded-lg border-2 p-8">
				<div className="z-10 flex flex-col gap-4">
					<UiText type="h3" className="text-v1-secondary-900 text-3xl font-bold">
						The new way to find your new home
					</UiText>
					<UiText type="body1" className="text-v1-secondary-900/50 font-medium">
						Find your dream place to live in with more than 10k+ properties listed.
					</UiText>
					<UiButton
						variant="secondary"
						label="Browse Properties"
						className="w-fit"
						size="small"
					/>
				</div>
				<div className="absolute right-0 bottom-0 z-0">
					<Image
						src="/assets/images/resources/house.svg"
						alt="House"
						width={350}
						height={350}
						draggable={false}
					/>
				</div>
			</div>

			<div className="flex flex-col gap-20">
				{leftColumnFeatures.map((feature, index) => (
					<FeatureCard
						key={index}
						description={feature.description}
						icon={feature.icon}
						title={feature.title}
					/>
				))}
			</div>

			<div className="flex flex-col gap-20">
				{rightColumnFeatures.map((feature, index) => (
					<FeatureCard
						key={index}
						description={feature.description}
						icon={feature.icon}
						title={feature.title}
					/>
				))}
			</div>
		</div>
	);
};

export default FeaturesSection;
