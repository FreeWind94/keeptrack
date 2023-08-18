import { useState } from "react";
import { Project } from "./Project";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";

interface ProjectsListProps {
    projects: Project[];
}

function ProjectList({ projects }: ProjectsListProps) {
    const [projectBeingEdited, setProjectBeingEdited] = useState({});

    const handleEdit = (project: Project) => {
        setProjectBeingEdited(project);
    }

    return (
        <div className="row">
            {projects.map((project) => (
                <div key={project.id} className="cols-sm">
                    {project === projectBeingEdited ? (
                        <ProjectForm />
                    ) : (
                        <ProjectCard
                            project={project}
                            onEdit={handleEdit}></ProjectCard>
                    )}
                </div>
            ))}
        </div>
    );
}

export default ProjectList;