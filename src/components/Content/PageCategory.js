import React from "react";
import Category from "./Post/Category";

class PageCategory extends React.Component {
    render(){
       const posts = [
            {
                title: 'Title 1',
            },
            {
                title: 'Title 2',
            },
            {
                title: 'Title 3',
            },
        
        ]
        const selectTitles = () => {
            return posts.map(post => ({text: post.title}))
        }
        return <section><Category title="Posts" data={selectTitles()}/></section>
    }
   
}
 
export default PageCategory