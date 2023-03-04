import React from "react";

class Footer extends React.Component {
    render(){
        const { copyrights, menu} = this.props
        const footerStyle = {
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center'
        }
        return  <footer style={footerStyle}>
                    {copyrights}
                    {menu}
                </footer>
    }
}

export default Footer