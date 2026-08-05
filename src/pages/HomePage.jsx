import { useNavigate, Link } from "react-router";
import profilePic from "../assets/profile-pic.jpg";
import linkedinLogo from "../assets/linkedin-logo.png";
import githubLogo from "../assets/github-logo.png";
import gmailLogo from "../assets/gmail-logo.png";

export default function HomePage() {
    const navigate = useNavigate();
    return (
        <div className="">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-6xl text-center mt-5 bg-gray-950/50 rounded">
                    Hi, I'm
                </h1>
                <h1 className="text-6xl text-center text-sky-500 mb-5 bg-gray-950/50 rounded">Philip Brunet</h1>
                <h2 className="text-center text-2xl m-5 bg-gray-950/50 rounded">
                    React/Python/AWS full stack developer
                </h2>
                <img src={profilePic} alt="Profile Photo" className="rounded-lg w-80 max-w-2/3 mt-5" />
                <div className="flex gap-5 mb-5">
                    <Link to="https://www.linkedin.com/in/philipbrunet/">
                        <img src={linkedinLogo} alt="LinkedIn" className="bg-white m-2 p-1 rounded w-12"/> 
                    </Link>
                    <Link to="https://github.com/pbrunet44">
                        <img src={githubLogo} alt="GitHub" className="bg-white m-2 p-1 rounded w-12" />
                    </Link>
                    <Link to="mailto:pbrunetdev@gmail.com">
                        <img src={gmailLogo} alt="Gmail" className="bg-white m-2 p-1 rounded w-12"/>
                    </Link>
                </div>
                <p className="mx-2 bg-gray-950/50 rounded">Software developer specializing in web applications using React and Python.</p>
                <p className="mx-2 bg-gray-950/50 rounded">As an AWS Certified Developer, I'll help you create and deploy the website or application you need to get your next big idea off the ground.</p>
                <p className="mx-2 bg-gray-950/50 rounded">Currently studying the latest AI-powered technologies and beginning to use them in new projects.</p>
                <button onClick={() => navigate("/projects")} className="bg-blue-800 hover:bg-blue-500 text-white rounded text-2xl p-4 m-5">Check out my projects!</button>
            </div>
            
        </div>
    );
}