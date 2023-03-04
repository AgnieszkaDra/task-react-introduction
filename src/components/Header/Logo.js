import React from "react";

const Logo = props => {
    const {fontSize= '20px', text="Logo"} = props
    return (
        <h1 style={{fontSize: fontSize}}>{text}</h1>
    )
}

export default Logo
