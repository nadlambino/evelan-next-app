import type { Metadata } from 'next';
import '@/app/styles/globals.css';
import '@/app/styles/users.scss';

export const metadata: Metadata = {
    title: 'Evelan | Ronald Lambino',
    description: 'For Evelan.',
}

export default function RootLayout({
        children,
    }: {
        children: React.ReactNode
    }) {
        return (
            <html lang="en">
            <body>{children}</body>
            </html>
        )
    }
