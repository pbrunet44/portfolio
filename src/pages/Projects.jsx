import eventSchedulerHome from '../assets/project_photos/event_scheduler/home.png'
import eventSchedulerEventList from '../assets/project_photos/event_scheduler/event-list.png'
import eventSchedulerSignup from '../assets/project_photos/event_scheduler/signup.png'

import ProjectList from '../components/ProjectList'

    const projects = [
        {
            "name": "Event Scheduling Web App", 
            "desc": "A web app made with React, Express, and MongoDB to help coordinate meetings for attendees with complex schedules.", 
            "photos": [eventSchedulerHome, eventSchedulerEventList, eventSchedulerSignup],
            "url": "https://github.com/pbrunet44/Event_Scheduler"
        },
        {
            "name": "Portfolio Website for Client in Art Industry (Coming Soon)", 
            "desc": "A portfolio website for a client in the art industry, showcasing their work to potiential clients.",
        },
    ]

export default function Projects() {
    return (
        <div className="">
            <h1 className="text-center text-6xl m-5">
                PROJECTS
            </h1>
            <ProjectList projects={projects}/>
        </div>
    );
}