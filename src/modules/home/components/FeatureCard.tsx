import UiText from '@/shared/components/ui/UiText';
import { FeatureData } from '@/modules/home/types';
import Image from 'next/image';

interface FeatureCardProps {
	feature: FeatureData;
}

const FeatureCard = ({ feature }: FeatureCardProps) => {
	return (
		<div className="flex flex-1 flex-col gap-4">
			<Image
				src={feature.icon}
				alt={feature.title}
				width={64}
				height={64}
				draggable={false}
			/>
			<UiText type="h4" className="text-2xl font-bold">
				{feature.title}
			</UiText>
			<UiText type="body1" className="text-v1-neutral-950/50 max-w-xs font-medium">
				{feature.description}
			</UiText>
		</div>
	);
};

export default FeatureCard;
