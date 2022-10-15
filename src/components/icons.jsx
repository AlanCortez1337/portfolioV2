import { IoDocumentText, IoLogoLinkedin, IoLogoGithub } from "react-icons/io5/index.js";

export default function icons({iconName}) {

    return(
        <div>
            {iconName === "resume" ?
                <IoDocumentText 
                    size={"3em"}
                    color={"var(--icon-colors)"}
                />
                :
                <>
                    {iconName === "github" ?
                        <IoLogoGithub 
                            size={"3em"}
                            color={"var(--icon-colors)"}
                        />
                        :
                        <IoLogoLinkedin 
                            size={"3em"} 
                            color={"var(--icon-colors)"}
                        />
                    }
                </>
            }
        </div>
    );
}