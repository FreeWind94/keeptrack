import { Project } from "./Project";
import ProjectCard from "./ProjectCard";

interface ProjectsListProps {
    projects: Project[];
}

function ProjectList({ projects }: ProjectsListProps) {
    return (
        <div className="row">
            {projects.map((project) => (
                <div key={project.id} className="cols-sm">
                    <ProjectCard project={project}></ProjectCard>
                </div>
            ))}
        </div>
    );
}

export default ProjectList;