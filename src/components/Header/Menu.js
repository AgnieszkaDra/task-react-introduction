import React from "react";
import MenuItem from "./MenuItem";

class Menu extends React.Component {
    renderElements(){
        return (
            this.props.elements.map((element, index) =>
                <MenuItem key={index}text={element.text}/>)
        )
    }
    render(){
        const navStyles = {
            display: 'flex',
            justifyContent: 'flex-start',
            listStyleType: 'none',
        }
        return <ul style={navStyles}>{this.renderElements()}</ul>
    }
}

export default Menu