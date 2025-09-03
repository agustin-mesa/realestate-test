import UiButton from '@/shared/components/ui/UiButton';
import UiCalendar from '@/shared/components/ui/UiCalendar';
import UiInput from '@/shared/components/ui/UiInput';
import UiTabView from '@/shared/components/ui/UiTabView';
import UiText from '@/shared/components/ui/UiText';

const PropertySearchTabs = () => {
	const tabs = [
		{
			header: 'Rent',
			children: (
				<div className="flex min-w-3xl gap-8 p-2 pl-5">
					<div className="border-v1-neutral-950/10 flex flex-1 border-r pr-8">
						<UiInput
							id="location"
							label="Location"
							defaultValue="Barcelona, Spain"
							placeholder="Write location"
							containerClassName="w-full"
						/>
					</div>
					<div className="border-v1-neutral-950/10 flex flex-1 border-r pr-8">
						<UiCalendar
							id="when"
							label="When"
							placeholder="Select Move-in Date"
							containerClassName="w-full"
						/>
					</div>
					<div className="flex flex-1 flex-col">
						<UiButton
							variant="primary"
							label="Browse Properties"
							className="!px-6 !py-4"
						/>
					</div>
				</div>
			)
		},
		{
			header: 'Buy',
			children: (
				<div className="flex min-w-3xl gap-8 p-2 pl-5">
					<UiText type="h4" className="text-v1-neutral-600 max-w-lg font-medium">
						Here another text for the buy tab
					</UiText>
				</div>
			)
		},
		{
			header: 'Sell',
			children: (
				<div className="flex min-w-3xl gap-8 p-2 pl-5">
					<UiText type="h4" className="text-v1-neutral-600 max-w-lg font-medium">
						Here another text for the sell tab
					</UiText>
				</div>
			)
		}
	];

	return <UiTabView tabs={tabs} />;
};

export default PropertySearchTabs;
