import React from "react";

class Image extends React.Component {
    render(){
        return <img style={this.props.styles} src={this.props.url} alt={this.props.descr}></img>
    }
}
Image.defaultProps = {
    styles: {
        width:'45%',
        height: 'auto',
        borderRadius: '5px',
        margin: '15px 15px 10px 0',
        float: 'left',
    }
}
export default Image