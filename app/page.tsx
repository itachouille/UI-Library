import Navbar from "@/components/Navbar"
import { AppSidebar } from "@/components/sidebar/app-sidebar"

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <AppSidebar />
    </main>
  )
}
