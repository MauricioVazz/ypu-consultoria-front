import AdminGuard from "@/admin/components/AdminGuard";

export default function AdminLayout({ children }) {
    return (
        <AdminGuard>
            {children}
        </AdminGuard>
    );
}
