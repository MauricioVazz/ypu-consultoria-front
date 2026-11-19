
import LoginForm from "@/admin/components/LoginForm";

export const metadata = {
    title: "Acesso Administrativo | YPU",
    robots: {
        index: false,
        follow: false,
    },
};

export default function LoginPage() {
    return <LoginForm />;
}
