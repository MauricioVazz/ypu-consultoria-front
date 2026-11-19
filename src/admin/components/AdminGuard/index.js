"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import { getCurrentAdmin } from "@/services/auth.service";

export default function AdminGuard({ children }) {
    const pathname = usePathname();
    const router = useRouter();

    const [isChecking, setIsChecking] = useState(true);
    const [admin, setAdmin] = useState(null);

    const isLoginPage = pathname === "/admin/login";

    useEffect(() => {
        if (isLoginPage) return;

        async function validateSession() {
            try {
                const currentAdmin = await getCurrentAdmin();
                setAdmin(currentAdmin);
            } catch {
                router.replace("/admin/login");
            } finally {
                setIsChecking(false);
            }
        }

        validateSession();
    }, [isLoginPage, router]);

    if (isLoginPage) {
        return children;
    }

    if (isChecking || !admin) {
        return null;
    }

    return children;
}
