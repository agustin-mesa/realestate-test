export const API_CONFIG = {
	baseURL: process.env.NEXT_PUBLIC_API_URL || 'https://api.example.com',
	timeout: 10000,
	headers: {
		'Content-Type': 'application/json'
	}
} as const;
