import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin | Engage",
  robots: "noindex, nofollow",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Overlays the full viewport to hide the site nav/footer
  return (
    <div className="fixed inset-0 z-[100] overflow-auto bg-[#f5f3f0]">
      {children}
    </div>
  );
}
