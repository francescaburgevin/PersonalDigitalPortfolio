import React from 'react';

const divStyle = {
    float: "right",
    border: "none",
    background: "transparent"
}

const xStyle = {
    cursor: "pointer",
    fontSize: "large",
    color: "gray"
}

const CloseX = () => {

    function hideModal() {
        document.querySelector(".intro-mod").classList.remove("show");
        document.querySelector(".edu-mod").classList.remove("show");
        document.querySelector(".fade").classList.remove("translucide");
    };


    return (
        <div style={divStyle}>
            <button style={xStyle} onClick={hideModal}>fermer</button>
        </div>
    );
};

export default CloseX;