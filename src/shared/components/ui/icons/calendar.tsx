import * as React from 'react';
import { SVGProps } from './types';

const IconCalendar = ({ width = 16, height = 16, fill, ...props }: SVGProps) => (
	<svg
		width={width}
		height={height}
		viewBox="0 0 16 16"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<g opacity={0.5}>
			<path
				d="M2.06177 6.26949H13.9444"
				stroke={fill}
				strokeWidth={1.5}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M10.9614 8.87313H10.9675"
				stroke={fill}
				strokeWidth={1.5}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M8.0031 8.87313H8.00928"
				stroke={fill}
				strokeWidth={1.5}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M5.03862 8.87313H5.0448"
				stroke={fill}
				strokeWidth={1.5}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M10.9614 11.4641H10.9675"
				stroke={fill}
				strokeWidth={1.5}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M8.0031 11.4641H8.00928"
				stroke={fill}
				strokeWidth={1.5}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M5.03862 11.4641H5.0448"
				stroke={fill}
				strokeWidth={1.5}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M10.6958 1.33331V3.52717"
				stroke={fill}
				strokeWidth={1.5}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M5.31033 1.33331V3.52717"
				stroke={fill}
				strokeWidth={1.5}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M10.8255 2.38611H5.18064C3.22285 2.38611 2 3.47673 2 5.48146V11.5146C2 13.5508 3.22285 14.6666 5.18064 14.6666H10.8193C12.7833 14.6666 14 13.5697 14 11.565V5.48146C14.0062 3.47673 12.7895 2.38611 10.8255 2.38611Z"
				stroke={fill}
				strokeWidth={1.5}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</g>
	</svg>
);
export default IconCalendar;
