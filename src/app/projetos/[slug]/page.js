import Renderer from "@/renderer/Renderer";
import { getProject } from "@/services/project.service";

export default async function ProjetoPage({ params }) {

    const { slug } = await params;

    const project = await getProject(slug);

    return (
        <main>

            <Renderer
                blocks={project.layout}
            />

        </main>
    );

}