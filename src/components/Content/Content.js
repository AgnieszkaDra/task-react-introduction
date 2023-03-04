import React from "react";

class Content extends React.Component {
    render(){
        const { main, right, left} = this.props
        const contentStyle = {
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr 1fr',
        }
        return  <main style={contentStyle} >
                    {/* <div> */}
                        {left}
                        {main}
                        {right}
                    {/* </div> */}
                </main>
    }
}

export default Content