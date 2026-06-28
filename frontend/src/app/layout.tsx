import "./globals.css";

import DashboardShell from "@/components/layout/DashboardShell";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (

    <html lang="en">

      <body>

        <DashboardShell>

          {children}

        </DashboardShell>

      </body>

    </html>

  )

}