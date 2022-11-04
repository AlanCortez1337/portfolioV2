import {IoLogoGithub } from "react-icons/io5/index.js";
import { BiLinkExternal } from "react-icons/bi";
import "../styles/card.css";

export default function Card({title, gif}) {
    // need to make metadata file for project
    return(
        <div className="card">
            {/* replace it with project name metadata */}
            <h2 className="card-title">{title}</h2>
            {/* replace it with project demo metadata */}
            <img src={gif} alt={title} />
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