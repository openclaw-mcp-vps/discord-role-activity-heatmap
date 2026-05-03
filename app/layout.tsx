import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Discord Role Activity Heatmap",
  description: "Visualize Discord member engagement by role. See which roles are most active with interactive heatmaps."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="055cf027-02ab-44b2-b75f-462a733be5d5"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
