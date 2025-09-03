import UiText from '@/shared/components/ui/UiText';
import { StatsData } from '@/modules/home/types';
import Image from 'next/image';

interface StatsSectionProps {
	stats?: StatsData[];
}

const defaultStats: StatsData[] = [
	{
		icon: '/assets/images/resources/renters.svg',
		value: '50k+ renters',
		description: 'believe in our service'
	},
	{
		icon: '/assets/images/resources/properties.svg',
		value: '10k+ properties',
		description: 'and house ready for occupancy'
	}
];

const StatsSection = ({ stats = defaultStats }: StatsSectionProps) => {
	return (
		<div className="flex max-w-lg gap-4">
			{stats.map((stat, index) => (
				<div key={index} className="flex flex-1 flex-col gap-4">
					<Image
						src={stat.icon}
						alt={stat.value}
						width={64}
						height={64}
						draggable={false}
					/>
					<div className="flex flex-col">
						<UiText type="h4" className="text-v1-primary-500 font-bold">
							{stat.value}
						</UiText>
						<UiText type="body1" className="font-medium">
							{stat.description}
						</UiText>
					</div>
				</div>
			))}
		</div>
	);
};

export default StatsSection;
