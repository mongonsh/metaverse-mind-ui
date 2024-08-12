// app/admin/layout.tsx

import { ReactNode } from "react";
import Link from "next/link";
import Header from "@/components/Admin/Header";
export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
}
