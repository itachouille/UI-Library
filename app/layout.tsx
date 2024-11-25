import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Challenge Spikes",
  description: "Challenge Spikes by @0xEzis",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://db.onlinewebfonts.com/c/81c9cfcec66a1bb46e90e184f4d04641?family=Aeonik+Pro+Medium"
          rel="stylesheet"
        ></link>
      </head>
      <body className={`${inter.className}`}>{children}</body>
    </html>
  )
}
