import './globals.css'

export const metadata = {
  title: 'DMI Landing',
  description: 'Design Made Intelligent',
}

// Fix: Properly type the children prop
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