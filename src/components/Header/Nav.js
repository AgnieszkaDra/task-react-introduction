import React from "react";
import Menu from "./Menu";

class Nav extends React.Component {
    render() {
        const content = [
            {text: 'Home', url: '/home'},
            {text: 'Content', url: '/content'},
            {text: 'Gallery', url: '/gallery'},
            {text: 'Contact', url: '/contact'},
        ]

        return (
            <nav>
                <Menu elements= {content} ></Menu>
            </nav>
        )
    }
}
   
export default Nav

    


