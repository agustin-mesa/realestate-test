import * as React from 'react';
import { SVGProps } from './types';

const IconChevronDown = ({ width = 16, height = 16, fill, ...props }: SVGProps) => (
	<svg
		width={width}
		height={height}
		viewBox={`0 0 ${width} ${height}`}
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<g clipPath="url(#clip0_124_150)">
			<path
				d="M3.33331 5.66667L7.99998 10.3333L12.6666 5.66667"
				stroke={fill}
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</g>
		<defs>
			<clipPath id="clip0_124_150">
				<rect width={16} height={16} fill="white" />
			</clipPath>
		</defs>
	</svg>
);
export default IconChevronDown;
