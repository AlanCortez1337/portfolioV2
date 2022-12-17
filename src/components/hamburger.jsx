import { useState } from "react";
import "../styles/hamburger-nav.css"


export default function Hamburger() {

    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <button onClick={()=>{setOpenModal((previous)=>!previous)}}>asdfasd {openModal}</button>
            <div onClick={()=>{setOpenModal((previous)=>!previous)}} className={openModal ? "background" : "background active"}>
                <div className="modal">
                    <h1>Home</h1>
                    <h1>About</h1>
                    <h1>Work</h1>
                    <h1>Contact</h1>
                    <h1>Resume</h1>
                    <p onClick={()=>{setOpenModal((previous)=>!previous)}}>close</p>
                </div>
            </div>
        </>
    );
}