import { Project } from "./Project";

function formatDescription(description: string): string {
    return description.length > 60
        ? description.substring(0, 60) + '...'
        : description;
}

interface ProjectCardProps {
    project: Project;
}

function ProjectCard(props: ProjectCardProps) {
    const { project } = props;
    const handleEditClik = (projectBeingEdited: Project) => {
        console.log(projectBeingEdited);
    };
    return (
        <div className="card">
            <img src={project.imageUrl} alt={project.name} />
            <section className="section dark">
                <h5 className="strong">
                    <strong>{project.name}</strong>
                </h5>
                <p>{formatDescription(project.description)}</p>
                <p>Budget : {project.budget.toLocaleString()}</p>
                <button
                    className="bordered"
                    onClick={() => {
                        handleEditClik(project);
                    }}
                >
                    <span className="icon-edit"></span>
                    Edit
                </button>
            </section>
        </div>
    );
}

export default ProjectCard;