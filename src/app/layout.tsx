import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import GlobalError from "@/app/global-error";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Space-x-launches-app",
	description: "App using GraphQL and Apollo Client for quering data",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ErrorBoundary errorComponent={GlobalError}>
			<html lang="en">
				<body className={`${geistSans.variable} ${geistMono.variable}`}>
					{children}
				</body>
			</html>
		</ErrorBoundary>
	);
}
