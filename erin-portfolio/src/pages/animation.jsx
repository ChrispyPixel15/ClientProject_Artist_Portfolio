import React, { useEffect, useRef, useState } from "react";
import './animation.css'
import { animationData } from "../data/animationData.jsx";
import { CaretLeftIcon, CaretRightIcon, XIcon } from "@phosphor-icons/react";

function Animation() {
    const [rowCount, setRowCount] = useState(0);
    const [viewIllus, setViewIllus] = useState(false);
    const [imageId, setImageId] = useState(0);
    const videoRef = useRef(null);

    useEffect(() => {
        if (animationData.length % 2 !== 0) {
            const num = (animationData.length / 2) - 0.5;
            setRowCount(num + 1);
        }
        else {
            setRowCount(animationData.length / 2);
        }
    }, [])

    const mouseEnter = () => {
        videoRef.current.play().catch(error => console.error("Video play failed:", error));
    }

    const mouseExit = () => {
        videoRef.current.pause();
        videoRef.current.currentTime = 0; 
    }

    return (
        <div className="illustration-content">
            <h1 className="heading">Animation</h1>
            <div className="line-one"></div>
            <div className="line-two"></div>
            <section className="illustrations">
                {
                    animationData.map((illus) => {
                        const rowNum = illus.id % 2 !== 0 ? (illus.id / 2 - 0.5) + 1 : illus.id / 2 ;

                        return (
                            <div key={illus.id} className="image-container" >
                                <video muted onMouseEnter={(e) => {
                                    e.target.play();
                                }} onMouseLeave={(e) => {
                                    e.target.pause();
                                    e.target.currentTime = 0;
                                }} className={`${rowNum % 2 !== 0 ? "rowOdd" : "rowEven"} ${illus.id % 2 !== 0 ? "imageOdd" : "imageEven"}`}
                                onClick={() => {
                                    setViewIllus(true);
                                    setImageId(illus.id);
                                    document.body.scroll = "no";
                                    document.documentElement.style.overflow = 'hidden';
                                }}>
                                    <source src={illus.img} type="video/mp4" />
                                </video>
                            </div>
                        )                      
                    })
                }
            </section>
            {
                viewIllus ? (
                    <div className="illustration-overlay">
                        <div className="close" onClick={() => {
                            setViewIllus(false);
                            document.body.scroll = "yes";
                            document.documentElement.style.overflow = 'scroll'
                        }}>
                            <XIcon size={30} className="close-icon"/>
                        </div>                        
                        {
                            animationData.filter((illus) => illus.id === imageId).map((ill) => (
                                <div key={ill.id} className="illustration-data">
                                    <div className="arrow-images" onClick={() =>{
                                        setImageId(
                                            imageId === 1 ? animationData.length : imageId - 1
                                        );
                                    }}>
                                        <CaretLeftIcon size={50} color="#ffffff" />
                                    </div>
                                    <div className="viewimage-container">
                                        <video loop={ill.loop} className="view-image" controls muted={ill.loop} autoPlay={ill.loop} >
                                            <source src={ill.img} type="video/mp4" />
                                        </video>
                                    </div>
                                    <div className="image-data">
                                        <p className="image-title">{ill.name}</p>
                                        <p className="image-description">{ill.description}</p>
                                    </div>
                                    <div className="arrow-images" onClick={() => {
                                        setImageId(
                                            imageId === animationData.length ? 1 : imageId + 1
                                        );
                                    }}>
                                        <CaretRightIcon size={50} color="#ffffff" />
                                    </div>
                                </div>                                
                            ))
                        }
                        
                    </div>
                ) : (
                    <></>
                )
            }
        </div>
    )
}

export default Animation;