import { useNavigate } from "react-router";


export default function ProjectTile({ project }) {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col justify-center items-center">
            <a href={project.url} className="max-w-1/2 bg-gray-500 rounded p-5 m-5 flex flex-col justify-center items-center">
                <h2 className="text-4xl text-center mb-2">{project.name}</h2>
                <p className=" text-xl text-center">{project.desc}</p>
                {project.photos && project.photos.length > 0 && <img src={project.photos[0]} className="min-w-1/2 max-w 2/3 rounded" />}
            </a>
        </div>
    )
}