import { Fragment } from "react";
import { MOCK_PROJECTS } from "./MockProjects";
import { Project } from "./Project";
import ProjectList from "./ProjectList";

function ProjectsPage() {
    const saveProject = (project: Project) => {
        console.log(project);
    };

    return (
        <Fragment>
            <h1>Projects</h1>
            <ProjectList onSave={saveProject} projects={MOCK_PROJECTS} />
        </Fragment>
    );
}

export default ProjectsPage;