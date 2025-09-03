import { ReactNode } from 'react';

export interface SearchFormData {
	location: string;
	moveInDate: Date | null;
	propertyType: 'rent' | 'buy' | 'sell';
}

export interface TabItem {
	header: string;
	content: ReactNode;
}
