
import { cookies } from "next/headers";
import { notFound } from "next/navigation";

import Renderer from "@/renderer/Renderer";
import Header from "@/components/layout/Header";

import { getProject } from "@/services/project.service";

export default async function ProjetoPage({ params }) {
    const { slug } = await params;

    const cookieStore = await cookies();
    const token = cookieStore.get("ypu_admin_token")?.value;

    const cookieHeader = token
        ? `ypu_admin_token=${token}`
        : "";

    let project;

    try {
        project = await getProject(slug, cookieHeader);
    } catch (error) {
        if (error.status === 404) {
            notFound();
        }

        throw error;
    }

    return (
        <main>
            <Header/>

            <Renderer blocks={project.layout} />
        </main>
    );
}
