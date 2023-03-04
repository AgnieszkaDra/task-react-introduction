import React from "react";
import Pictures from "./Pictures";


class PageGallery extends React.Component {
    render() {
        const images = [
            {
                url: 'https://images.unsplash.com/photo-1677116719762-fd4f4c4b7e35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=716&q=80'
            },
            {
                url: 'https://images.unsplash.com/photo-1571685330542-0da6a6a8edc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                alt: '/',
            },
            {
                url: 'https://images.unsplash.com/photo-1669111959281-7f4cdd990620?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                alt: '/',
            },
            {
                url: 'https://images.unsplash.com/photo-1677177871850-5dc0f6dbfe76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
                alt: '/',
            },
            {
                url: 'https://images.unsplash.com/photo-1677549254885-cf55be3e552b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
                alt: '/',
            },
           
            {
                url: 'https://plus.unsplash.com/premium_photo-1675989167596-915a77b361e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
                alt: '/'
            }
            
        ]
        return <Pictures images={images}/>
        
    }
}

export default PageGallery