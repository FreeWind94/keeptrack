import { Project } from "./Project";

interface ProjectsListProps {
    projects: Project[];
}

function ProjectList({ projects }: ProjectsListProps) {
    return <pre>{JSON.stringify(projects, null, '  ')}</pre>
}

export default ProjectList;