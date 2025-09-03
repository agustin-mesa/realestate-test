'use client';

import { helpers } from '@/shared/utils/helpers';
import { InputText, type InputTextProps } from 'primereact/inputtext';

interface UiInputProps extends Omit<InputTextProps, 'className'> {
	label?: string;
	className?: string;
	containerClassName?: string;
}

const UiInput = ({ label, className, containerClassName, id, ...props }: UiInputProps) => {
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
			<InputText
				id={id}
				className={helpers.cn(
					'text-v1-neutral-950 w-full !border-none !px-0 !py-1 !font-bold !ring-0',
					className
				)}
				suppressHydrationWarning
				{...props}
			/>
		</div>
	);
};

export default UiInput;
