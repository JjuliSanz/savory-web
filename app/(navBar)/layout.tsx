import Sidebar from "@/components/dashboard/Sidebar";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";

export default function NavBarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
