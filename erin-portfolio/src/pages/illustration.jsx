import React, { useEffect, useState } from "react";
import './illustration.css'
import { illustrationData } from "../data/illustrationData";
import { CaretLeftIcon, CaretRightIcon, XIcon } from "@phosphor-icons/react";

function Illustration() {
    const [newData, setNewData] = useState([]);
    const [viewIllus, setViewIllus] = useState(false);
    const [imageId, setImageId] = useState(0);

    useEffect(() => {
        const data = illustrationData.toReversed();
        setNewData(data);
        console.log(data);
    }, [])

    return (
        <div className="illustration-content">
            <h1 className="heading">Illustration</h1>
            <div className="line-one"></div>
            <div className="line-two"></div>
            <section className="illustrations">
                {
                    newData.map((illus, index) => {
                        const rowNum = (index + 1) % 2 !== 0 ? ((index + 1) / 2 - 0.5) + 1 : (index + 1) / 2 ;

                        return (
                            <div key={illus.id} className="image-container"
                                        onClick={() => {
                                        setViewIllus(true);
                                        setImageId(illus.id);
                                        document.body.scroll = "no";
                                        document.documentElement.style.overflow = 'hidden';
                                    }}>
                                <div className="overlay-info">
                                    <p className="title">{illus.name}</p>
                                    <p className="desc">{illus.description}</p>
                                </div>
                                <img 
                                    src={illus.img} 
                                    className={`${rowNum % 2 !== 0 ? "rowOdd" : "rowEven"} ${illus.id % 2 !== 0 ? "imageOdd" : "imageEven"}`} 
                                    loading="lazy"
                                />                                
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
                            newData.filter((illus) => illus.id === imageId).map((ill) => (
                                <div key={ill.id} className="illustration-data">
                                    <div className="arrow-images" onClick={() =>{
                                        setImageId(
                                            imageId === newData.length ? 1 : imageId + 1
                                        );
                                    }}>
                                        <CaretLeftIcon size={50} color="#ffffff" />
                                    </div>
                                    <div className="viewimage-container">
                                        <img src={ill.img} className="view-image" />
                                    </div>
                                    <div className="image-data">
                                        <p className="image-title">{ill.name}</p>
                                        <p className="image-description">{ill.description}</p>
                                    </div>
                                    <div className="arrow-images" onClick={() => {
                                        setImageId(
                                            imageId === 1 ? newData.length : imageId - 1
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

export default Illustration;