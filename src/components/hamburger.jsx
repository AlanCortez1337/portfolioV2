import { useState } from "react";
import Icons from "./icons.jsx";
import "../styles/hamburger-nav.css"


export default function Hamburger() {

    const [openModal, setOpenModal] = useState(false);


    const close = (e) => {
        e.stopPropagation();
        setOpenModal((previous)=>!previous);
    }

    return (
        <>
            <button className="🍔" onClick={()=>{setOpenModal((previous)=>!previous)}}><Icons iconName={"menu"} size="1em"/> Stuff</button>
            <div  className={!openModal ? "background" : "background active"}>
                <div className="modal">
                    <div className="modal-text">
                        <a href="/"><Icons iconName={"home"} size="3em"/><h1>Home</h1></a>
                        <a href="/about/"><Icons iconName={"abt"} size="3em"/><h1>About</h1></a>
                        <a href="/projects/"><Icons iconName={"work"} size="3em"/><h1>Work</h1></a>
                        <a href="/contact/"><Icons iconName={"chat"} size="3em"/><h1>Contact</h1></a>
                        <a href="/"><Icons iconName={"resume"} size="3em"/><h1>Resume</h1></a>
                        
                    </div>
                    <p onClick={close}><Icons iconName={"close"} size="3em"/></p>
                </div>
            </div>
        </>
    );
}