import { IoDocumentText, IoLogoLinkedin, IoLogoGithub, IoArrowDownCircle, IoArrowForwardCircle, IoMail, IoHome, IoMenu, IoBriefcase, IoChatbubbleEllipses, IoCloseCircle } from "react-icons/io5/index.js";

export default function icons({iconName, size}) {

    return(
        <>
            {iconName === "abt" ?
                <svg width={size} height={size} viewBox="0 0 178 190" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M71.9128 10.3015C79.5952 -3.11182 98.9404 -3.11185 106.623 10.3015L175.346 130.291C181.3 140.687 176.841 153.949 165.816 158.636L97.0929 187.854C92.0927 189.979 86.4429 189.979 81.4428 187.854L12.7196 158.636C1.69443 153.949 -2.76452 140.687 3.18962 130.291L71.9128 10.3015Z" fill="#F8F8F8"/>
                </svg>
                :
                <>
                    {iconName === "home" ? 
                        <IoHome 
                            size={size}
                            color={"var(--icon-colors)"}
                        />
                    : 
                        <>
                            {iconName === "menu" ? 
                                <IoMenu 
                                    size={size}
                                    color={"var(--icon-colors)"}
                                />
                            : 
                                <>
                                {iconName === "work" ? 
                                    <IoBriefcase 
                                        size={size}
                                        color={"var(--icon-colors)"}
                                    />
                                : 
                                    <>
                                    {iconName === "chat" ? 
                                        <IoChatbubbleEllipses 
                                            size={size}
                                            color={"var(--icon-colors)"}
                                        />
                                    : 
                                        <>
                                        {iconName === "close" ? 
                                            <IoCloseCircle 
                                                size={size}
                                                color={"var(--icon-colors)"}
                                            />
                                        : 
                                        <>
                                        {iconName === "mail" ? 
                                            <IoMail 
                                                size={size}
                                                color={"var(--icon-colors)"}
                                            />
                                            :
                                            <>
                                                {iconName === "nextArrow" ?
                                                    <IoArrowForwardCircle 
                                                        size={size}
                                                        color={"var(--icon-colors)"}
                                                    />
                                                    :
                                                    <>
                                                    {iconName === "downArrow" ? 
                                                        <IoArrowDownCircle 
                                                            size={size}
                                                            color={"var(--icon-colors)"}
                                                        />
                                                        :
                                                        <>
                                                            {iconName === "resume" ?
                                                                <IoDocumentText 
                                                                    size={size}
                                                                    color={"var(--icon-colors)"}
                                                                />
                                                                :
                                                                <>
                                                                    {iconName === "github" ?
                                                                        <IoLogoGithub 
                                                                            size={size}
                                                                            color={"var(--icon-colors)"}
                                                                        />
                                                                        :
                                                                        <IoLogoLinkedin 
                                                                            size={size} 
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

            }
        </>
        
    );
}