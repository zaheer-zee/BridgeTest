import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 md:ml-64 flex flex-col w-full relative">
        <Header />
        <main className="flex-1 pb-12 w-full">
          {children}
        </main>
      </div>
    </div>
  );
}
