import ProjectCard from "../ProjectCard";

import { ProjectsGridContainer } from "./styles";

export default function ProjectsGrid({ projects }) {
    return (
        <ProjectsGridContainer>
            {projects.map(project => (
                <ProjectCard
                    key={project.publicId}
                    project={project}
                />
            ))}
        </ProjectsGridContainer>
    );
}