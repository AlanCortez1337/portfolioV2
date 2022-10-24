import {IoLogoGithub } from "react-icons/io5/index.js";
import { BiLinkExternal } from "react-icons/bi";
import "../styles/card.css";

export default function Card({project}) {
    // need to make metadata file for project
    return(
        <div className="card">
            {/* replace it with project name metadata */}
            <h2 className="card-title">Spotlight: ACM Team Quiz</h2>
            {/* replace it with project demo metadata */}
            <img src="/assets/teamQuizDemo.gif" alt="spotlight" />
            <div className="card-icons">
                {/* make into a tags that redirects using meta data */}
                <BiLinkExternal 
                    size={"3em"}
                    color={"var(--icon-colors)"}
                />
                <IoLogoGithub 
                    size={"3em"}
                    color={"var(--icon-colors)"}
                />
            </div>
        </div>
    );

}