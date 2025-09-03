import { useMemo } from 'react';

export interface NavigationItem {
	label: string;
	href: string;
	hasDropdown?: boolean;
}

interface UseNavigationReturn {
	navigationItems: NavigationItem[];
}

export const ROUTES = {
	home: '/',
	rent: '/',
	buy: '/',
	sell: '/',
	manageProperty: '/',
	resources: '/',
	login: '/',
	signup: '/'
} as const;

export const useNavigation = (): UseNavigationReturn => {
	const navigationItems = useMemo<NavigationItem[]>(
		() => [
			{ label: 'Rent', href: ROUTES.rent },
			{ label: 'Buy', href: ROUTES.buy },
			{ label: 'Sell', href: ROUTES.sell },
			{ label: 'Manage Property', href: ROUTES.manageProperty, hasDropdown: true },
			{ label: 'Resources', href: ROUTES.resources, hasDropdown: true }
		],
		[]
	);

	return {
		navigationItems
	};
};
