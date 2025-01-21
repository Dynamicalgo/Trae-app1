import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <Header />
      <main className="pl-0 md:pl-64 pt-20 transition-all duration-200 ease-in-out">
        <div className="container py-8">
          {children}
        </div>
      </main>
    </div>
  );
}