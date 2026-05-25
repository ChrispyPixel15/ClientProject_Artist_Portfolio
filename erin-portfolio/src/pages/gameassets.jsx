import React, { useEffect, useState } from "react";
import './gameassets.css'
import { gameAssetData } from "../data/gameAssetData.jsx";
import { CaretLeftIcon, CaretRightIcon, XIcon } from "@phosphor-icons/react";

function GameAssets() {
    const [rowCount, setRowCount] = useState(0);
    const [viewIllus, setViewIllus] = useState(false);
    const [imageId, setImageId] = useState(0);

    useEffect(() => {
        if (gameAssetData.length % 2 !== 0) {
            const num = (gameAssetData.length / 2) - 0.5;
            setRowCount(num + 1);
        }
        else {
            setRowCount(gameAssetData.length / 2);
        }
    }, [])

    return (
        <div className="illustration-content">
            <h1 className="heading">Game Assets</h1>
            <div className="line-one"></div>
            <div className="line-two"></div>
            <section className="illustrations">
                {
                    gameAssetData.map((illus) => {
                        const rowNum = illus.id % 2 !== 0 ? (illus.id / 2 - 0.5) + 1 : illus.id / 2 ;

                        return (
                            <div key={illus.id} className="image-container">
                                <img 
                                    src={illus.img} 
                                    className={`${rowNum % 2 !== 0 ? "rowOdd" : "rowEven"} ${illus.id % 2 !== 0 ? "imageOdd" : "imageEven"}`} 
                                    onClick={() => {
                                        setViewIllus(true);
                                        setImageId(illus.id);
                                        document.body.scroll = "no";
                                        document.documentElement.style.overflow = 'hidden';
                                    }}
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
                            gameAssetData.filter((illus) => illus.id === imageId).map((ill) => (
                                <div key={ill.id} className="illustration-data">
                                    <div className="arrow-images" onClick={() =>{
                                        setImageId(
                                            imageId === 1 ? gameAssetData.length : imageId - 1
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
                                            imageId === gameAssetData.length ? 1 : imageId + 1
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

export default GameAssets;