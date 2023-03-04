import React from "react";

class Header extends React.Component {
    render(){
        const headerStyle = {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }
        return <header style={headerStyle}>
                <>   
                    {this.props.logo}
                    {this.props.nav}
                </>
                </header>
    }
}

export default Header