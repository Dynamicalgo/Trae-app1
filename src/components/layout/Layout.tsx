import { Sidebar } from "./Sidebar";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <main className="pl-0 md:pl-64 transition-all duration-200 ease-in-out">
        <div className="container py-8">
          {children}
        </div>
      </main>
    </div>
  );
}