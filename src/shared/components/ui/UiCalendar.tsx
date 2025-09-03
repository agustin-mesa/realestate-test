'use client';
import { helpers } from '@/shared/utils/helpers';
import IconCalendar from '@/shared/components/ui/icons/calendar';
import { Calendar, type CalendarProps } from 'primereact/calendar';

interface UiCalendarProps extends Omit<CalendarProps, 'className'> {
	label?: string;
	className?: string;
	containerClassName?: string;
	showIcon?: boolean;
}

const UiCalendar = ({
	label,
	className,
	containerClassName,
	showIcon = true,
	id,
	...props
}: UiCalendarProps) => {
	return (
		<div
			className={helpers.cn('text-v1-neutral-25 relative flex flex-col', containerClassName)}
		>
			{label && (
				<label
					htmlFor={id}
					className="text-v1-neutral-950/70 text-sm leading-5 font-medium"
				>
					{label}
				</label>
			)}
			<div className="flex items-center gap-2">
				<div suppressHydrationWarning>
					<Calendar
						id={id}
						pt={{
							root: {
								className: '!border-none'
							}
						}}
						inputClassName={helpers.cn(
							'!border-none !px-0 !py-1 !font-bold !ring-0 placeholder:!text-v1-neutral-950',
							className
						)}
						{...props}
					/>
				</div>
				{showIcon && <IconCalendar fill="#000929" height={20} width={20} />}
			</div>
		</div>
	);
};

export default UiCalendar;
