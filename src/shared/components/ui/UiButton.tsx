import { helpers } from '@/shared/utils/helpers';
import { Button, type ButtonProps } from 'primereact/button';

const variants = {
	primary: {
		root: {
			className:
				'justify-center !bg-v1-primary-500 !rounded-lg hover:!brightness-95 outline-none !shadow-none ring-0 !border-transparent'
		},
		label: {
			className: 'text-v1-neutral-0 !flex-none font-semibold'
		}
	},
	secondary: {
		root: {
			className:
				'justify-center !bg-v1-secondary-900 !rounded-lg hover:!brightness-140 outline-none !shadow-none ring-0 !border-transparent'
		},
		label: {
			className: 'text-v1-neutral-0 !flex-none font-semibold'
		}
	},
	outlined: {
		root: {
			className:
				'justify-center !bg-transparent !rounded-lg hover:!brightness-140 outline-none !shadow-none ring-0 !border-v1-neutral-950/10 !border-2'
		},
		label: {
			className: 'text-v1-neutral-950 !flex-none font-semibold'
		}
	}
};

type UiButtonProps = Omit<ButtonProps, 'variant'> & {
	variant?: keyof typeof variants;
};

const UiButton = ({ variant, ...props }: UiButtonProps) => {
	return (
		<Button
			{...props}
			pt={variant ? { ...variants[variant], ...props.pt } : undefined}
			className={helpers.cn('!px-4 !text-center !transition-all', props.className)}
		/>
	);
};

export default UiButton;
