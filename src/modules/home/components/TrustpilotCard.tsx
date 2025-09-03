import IconStar from '@/shared/components/ui/icons/star';
import UiText from '@/shared/components/ui/UiText';
import Image from 'next/image';

interface TrustpilotCardProps {
	rating?: number;
	reviewCount?: string;
}

const TrustpilotCard = ({ rating = 5, reviewCount = '3,264' }: TrustpilotCardProps) => {
	return (
		<div className="absolute right-0 bottom-0 flex min-w-64 flex-col gap-4 overflow-hidden rounded-tl-lg bg-[url('/assets/images/mask-card.png')] bg-cover bg-center p-4 pb-6">
			<div className="flex items-center justify-between">
				<UiText type="body1" className="text-v1-neutral-0 text-lg font-bold">
					Excellent
				</UiText>
				<Image
					src="/assets/logo/logo-trustpilot.png"
					alt="Trustpilot"
					width={80}
					height={80}
					draggable={false}
				/>
			</div>
			<div className="flex items-center gap-1">
				{Array.from({ length: rating }).map((_, index) => (
					<IconStar key={index} fill="#FFB154" />
				))}
			</div>
			<UiText type="body1" className="text-v1-neutral-0">
				From {reviewCount} reviews
			</UiText>
		</div>
	);
};

export default TrustpilotCard;
