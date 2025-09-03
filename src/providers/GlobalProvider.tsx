import 'primereact/resources/themes/mdc-light-indigo/theme.css';
import Tailwind from 'primereact/passthrough/tailwind';
import { PrimeReactProvider } from 'primereact/api';
import type { ReactNode } from 'react';

interface GlobalProviderProps {
	children: ReactNode;
}

const GlobalProvider = ({ children }: GlobalProviderProps) => {
	return <PrimeReactProvider value={{ pt: Tailwind }}>{children}</PrimeReactProvider>;
};

export default GlobalProvider;
