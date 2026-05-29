import React from "react";

function MobileNavigationButton({ name, navigate, number, active }) {
    return (
        <div className={`mob-nav-button mob${number} mob${active}`} onClick={navigate}>
            <p className="mob-nav-text">{name}</p>
        </div>
    )
}

export default MobileNavigationButton;