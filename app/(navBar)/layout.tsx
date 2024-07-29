import Sidebar from "@/components/dashboard/Sidebar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function NavBarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
