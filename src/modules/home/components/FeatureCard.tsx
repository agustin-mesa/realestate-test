import UiText from '@/shared/components/ui/UiText';
import Image from 'next/image';

interface FeatureCardProps {
	icon: string;
	title: string;
	description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
	return (
		<div className="flex flex-1 flex-col gap-4">
			<Image src={icon} alt={title} width={64} height={64} draggable={false} />
			<UiText type="h4" className="text-2xl font-bold">
				{title}
			</UiText>
			<UiText type="body1" className="text-v1-neutral-950/50 max-w-xs font-medium">
				{description}
			</UiText>
		</div>
	);
};

export default FeatureCard;
