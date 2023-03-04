import React from "react";
// import PropTypes from 'prop-types'
import Image from "./Post/Image";


class Pictures extends React.Component {
    renderImages(){
        const li = {
            listStyleType: 'none'
        }
       return this.props.images.map((element) =>        
                <li style={li}>
                    <Image  url={element.url} descr={element.alt} />
                </li>
       )
    }
    render(){
        const center = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }
       return(
            <section>
                <div>
                    <h3 style={center}>Gallery</h3>
                    <ul>
                        {this.renderImages()}
                    </ul>
                </div>
            </section>
        )
    }
}

export default Pictures
