import React from 'react';

const divStyle = {
    float: "right",
    border: "none",
    background: "transparent"
}

const xStyle = {
    cursor: "pointer",
    fontSize: "large",
}

const CloseX = () => {

    function hideModal() {
        document.querySelector(".intro-mod").classList.remove("show");
        document.querySelector(".edu-mod").classList.remove("show");
    };


    return (
        <div style={divStyle}>
            <button style={xStyle} onClick={hideModal}>X</button>
        </div>
    );
};

export default CloseX;