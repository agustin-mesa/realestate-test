import type { Metadata, Viewport } from 'next';
import './globals.css';
import { ReactNode } from 'react';
import GlobalProvider from '@/providers/GlobalProvider';

export const metadata: Metadata = {
	title: {
		default: 'Estatery - Buy, Rent, or Sell Properties Easily',
		template: '%s | Estatery'
	},
	description:
		'A great platform to buy, sell, or even rent your properties without any commissions. Find your dream home with Estatery.',
	keywords: [
		'real estate',
		'property',
		'buy house',
		'rent apartment',
		'sell property',
		'estatery'
	],
	authors: [{ name: 'Estatery Team' }],
	creator: 'Estatery',
	publisher: 'Estatery',
	formatDetection: {
		email: false,
		address: false,
		telephone: false
	},
	alternates: {
		canonical: '/',
		languages: {
			'en-US': '/en-US',
			'es-ES': '/es-ES'
		}
	},
	openGraph: {
		title: 'Estatery - Buy, Rent, or Sell Properties Easily',
		description:
			'A great platform to buy, sell, or even rent your properties without any commissions.',
		url: 'https://estatery.com',
		siteName: 'Estatery',
		images: [
			{
				url: '/assets/images/hero-bg.png',
				width: 1200,
				height: 630,
				alt: 'Estatery - Real Estate Platform'
			}
		],
		locale: 'en_US',
		type: 'website'
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Estatery - Buy, Rent, or Sell Properties Easily',
		description:
			'A great platform to buy, sell, or even rent your properties without any commissions.',
		images: ['/assets/images/hero-bg.png'],
		creator: '@estatery'
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1
		}
	},
	verification: {
		google: 'your-google-verification-code',
		yandex: 'your-yandex-verification-code',
		yahoo: 'your-yahoo-verification-code'
	}
};

export const viewport: Viewport = {
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: '#7065f0' },
		{ media: '(prefers-color-scheme: dark)', color: '#7065f0' }
	],
	width: 'device-width',
	initialScale: 1,
	maximumScale: 5,
	userScalable: true
};

export default function RootLayout({
	children
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="antialiased">
				<GlobalProvider>{children}</GlobalProvider>
			</body>
		</html>
	);
}
