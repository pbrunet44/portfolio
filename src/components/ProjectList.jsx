import ProjectTile from "./ProjectTile";

export default function ProjectList({ projects }) {
    return (
        <div className="flex flex-col justify-center wrap">
            {projects.map((project) => (
                <ProjectTile key={project.id} project={project} />
            ))}
        </div>
    );
}