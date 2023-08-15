import { Project } from "./Project";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";

interface ProjectsListProps {
    projects: Project[];
}

function ProjectList({ projects }: ProjectsListProps) {
    return (
        <div className="row">
            {projects.map((project) => (
                <div key={project.id} className="cols-sm">
                    <ProjectCard project={project}></ProjectCard>
                    <ProjectForm />
                </div>
            ))}
        </div>
    );
}

export default ProjectList;