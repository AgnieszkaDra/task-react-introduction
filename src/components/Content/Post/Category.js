import React from "react";
import Menu from "../../Header/Menu";

const Category = props => {
  
    return (
        <section>
            <h4>{props.title}</h4>
            <Menu elements={props.data}></Menu>
        </section>
    )
}

export default Category