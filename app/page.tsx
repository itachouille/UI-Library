import DashboardSidebar from "@/components/DashboardSidebar"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import Navbar from "@/components/Navbar"

export default function Home() {
  return (
    <main className="w-full">
      <MaxWidthWrapper>
        <Navbar />
        <DashboardSidebar />
      </MaxWidthWrapper>
    </main>
  )
}
