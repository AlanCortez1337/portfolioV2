import { IoDocumentText, IoLogoLinkedin, IoLogoGithub } from "react-icons/io5/index.js";

export default function icons({iconName}) {

    return(
        <>
            {iconName === "resume" ?
                <IoDocumentText 
                    size={"3em"}
                    color={"#f8f8f8"}
                />
                :
                <>
                    {iconName === "github" ?
                        <IoLogoGithub 
                            size={"3em"}
                            color={"#f8f8f8"}
                        />
                        :
                        <IoLogoLinkedin 
                            size={"3em"} 
                            color={"#f8f8f8"}
                        />
                    }
                </>
            }
        </>
    );
}