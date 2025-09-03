import IconQuote from '@/shared/components/ui/icons/quote';
import UiText from '@/shared/components/ui/UiText';
import Image from 'next/image';

const TestimonialCard = () => {
	return (
		<div className="bg-v1-neutral-0 absolute top-0 left-0 flex max-w-xs flex-col gap-6 rounded-lg p-6">
			<div className="flex gap-4">
				<div className="flex flex-col">
					<Image
						src="/assets/images/avatar.png"
						alt="Avatar"
						width={68}
						height={68}
						draggable={false}
					/>
				</div>
				<div className="flex flex-col gap-2">
					<div className="flex flex-col">
						<UiText type="h4" className="text-v1-neutral-950 font-bold">
							Manuel Villa
						</UiText>
						<UiText type="body2" className="text-v1-neutral-950/50">
							Renter
						</UiText>
					</div>
					<div className="flex gap-2">
						<UiText type="body2" className="text-v1-neutral-950/50">
							Moved with
						</UiText>
						<Image
							src="/assets/logo/logo-estatery.svg"
							alt="Estatery"
							width={80}
							height={80}
							draggable={false}
						/>
					</div>
				</div>
			</div>

			<div className="flex gap-4">
				<div className="bg-v1-neutral-950 flex size-10 items-center justify-center rounded-full">
					<IconQuote fill="#fff" />
				</div>
				<UiText type="body2" className="flex-1">
					I loved how smooth the move was, and finally got the house we wanted.
				</UiText>
			</div>

			<div className="border-v1-neutral-950/10 flex items-center justify-between border-t pt-4">
				<div className="flex flex-col items-center">
					<UiText type="h4" className="text-xl font-extrabold">
						$1,500
					</UiText>
					<UiText type="body2" className="text-v1-neutral-950/50">
						Saved up to
					</UiText>
				</div>
				<div className="flex flex-col items-center">
					<UiText type="h4" className="text-xl font-extrabold">
						-24hrs
					</UiText>
					<UiText type="body2" className="text-v1-neutral-950/50">
						Process time
					</UiText>
				</div>
			</div>
		</div>
	);
};

export default TestimonialCard;
