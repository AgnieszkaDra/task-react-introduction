import React from "react";


class Post extends React.Component {
    renderPost(){
        const posts = this.props.data;
        const footerStyle = {
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center'
        }
         return posts.map((post, index) => (
              <div key={index} style={this.props.styles}>
                <h3>{post.title}</h3>
                {this.renderParagraph(post.body)} 
                <footer style={footerStyle}>
                  {post.author}
                  {post.created}
                </footer>
            </div>
        ))
    }

    renderParagraph(paragraphs){

        return paragraphs.map((p, index) => (
            <p key={index} style={this.props.description}>{p.text}</p>
        )) 

    }
    render(){ 
        return this.renderPost()
    }
}


export default Post