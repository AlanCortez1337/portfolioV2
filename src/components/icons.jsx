import { IoDocumentText, IoLogoLinkedin, IoLogoGithub, IoArrowDownCircle, IoArrowForwardCircle, IoMail } from "react-icons/io5/index.js";

export default function icons({iconName}) {

    return(
        <>
            {iconName === "mail" ? 
                 <IoMail 
                    size={"1.75em"}
                    color={"var(--icon-colors)"}
                />
                :
                <>
                    {iconName === "nextArrow" ?
                        <IoArrowForwardCircle 
                            size={"1.75em"}
                            color={"var(--icon-colors)"}
                        />
                        :
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
                    }
                </>
            }
        </>
        
    );
}