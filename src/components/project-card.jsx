import {IoLogoGithub } from "react-icons/io5/index.js";
import { BiLinkExternal } from "react-icons/bi";
import "../styles/card.css";

export default function Card({project}) {

    return(
        <div className="card">
            <img src="../../public/assets/teamQuizDemo.gif" alt="spotlight" />
            <div className="card-icons">
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