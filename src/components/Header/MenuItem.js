import React from "react";

class MenuItem extends React.Component {
    render(){
        const liStyles = {
            padding: '20px'
        }
        return <li style={liStyles}>{this.props.text}</li>
    } 
}

export default MenuItem