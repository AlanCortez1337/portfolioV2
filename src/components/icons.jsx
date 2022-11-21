import { IoDocumentText, IoLogoLinkedin, IoLogoGithub, IoArrowDownCircle } from "react-icons/io5/index.js";

export default function icons({iconName}) {

    return(
        <>
            {iconName === "downArrow" ? 
                <IoArrowDownCircle 
                    size={"3em"}
                    color={"var(--icon-colors)"}
                />
                :
                <>
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
                </>
            }
        </>
    );
}