import React from "react";

function NavigationButton({ name, navigate, number, active }) {
    return (
        <div className={`nav-button ${number} ${active}`} onClick={navigate}>
            <p className="nav-text">{name}</p>
        </div>
    )
}

export default NavigationButton;