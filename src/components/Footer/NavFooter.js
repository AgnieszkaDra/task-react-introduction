import React from "react";
import Menu from "../Header/Menu";

class Nav extends React.Component {
    render() {
        const content = [
            {text: 'faq', url: '/faq'},
            {text: 'statute', url: '/statute'},
        ]

        return (
            <nav>
                <Menu elements= {content} ></Menu>
            </nav>
        )
    }
}
   
export default Nav