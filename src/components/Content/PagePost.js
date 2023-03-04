import React from "react";
import Post from "./Post/Post";

class PagePost extends React.Component {
    render(){
       const posts = [
            {
                title: 'Title 1',
                body: 
                    [
                        {
                            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis justo in quam commodo rutrum. In non leo nec nisi congue porttitor. Fusce id pulvinar turpis, in venenatis massa. Aenean id elit diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce suscipit vulputate risus, a fermentum massa tristique eget. Proin pretium ac risus a pretium. Integer scelerisque quis nibh et placerat. Nam laoreet mattis sem eu feugiat. Ut sem leo, dapibus eget pretium id, mattis in metus. Maecenas venenatis sem at odio rutrum imperdiet. Donec mattis nunc id dui finibus pellentesque. Duis vel urna at diam lobortis tincidunt ut sed nisi. Duis mattis, tellus quis viverra viverra, nunc massa facilisis tellus, at sagittis nulla orci vitae mi. Quisque tempus consectetur rhoncus.'
                        },
                        {
                            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis justo in quam commodo rutrum. In non leo nec nisi congue porttitor. Fusce id pulvinar turpis, in venenatis massa. Aenean id elit diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce suscipit vulputate risus, a fermentum massa tristique eget. Proin pretium ac risus a pretium. Integer scelerisque quis nibh et placerat. Nam laoreet mattis sem eu feugiat. Ut sem leo, dapibus eget pretium id, mattis in metus. Maecenas venenatis sem at odio rutrum imperdiet. Donec mattis nunc id dui finibus pellentesque. Duis vel urna at diam lobortis tincidunt ut sed nisi. Duis mattis, tellus quis viverra viverra, nunc massa facilisis tellus, at sagittis nulla orci vitae mi. Quisque tempus consectetur rhoncus.'
                        },
                        {
                            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis justo in quam commodo rutrum. In non leo nec nisi congue porttitor. Fusce id pulvinar turpis, in venenatis massa. Aenean id elit diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce suscipit vulputate risus, a fermentum massa tristique eget. Proin pretium ac risus a pretium. Integer scelerisque quis nibh et placerat. Nam laoreet mattis sem eu feugiat. Ut sem leo, dapibus eget pretium id, mattis in metus. Maecenas venenatis sem at odio rutrum imperdiet. Donec mattis nunc id dui finibus pellentesque. Duis vel urna at diam lobortis tincidunt ut sed nisi. Duis mattis, tellus quis viverra viverra, nunc massa facilisis tellus, at sagittis nulla orci vitae mi. Quisque tempus consectetur rhoncus.'
                        },
                    ],
                author: 'Iza M.',
                created: '2022-07-19',
                
            },
            {
                title: 'Title 2',
                body: 
                    [
                        {
                            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis justo in quam commodo rutrum. In non leo nec nisi congue porttitor. Fusce id pulvinar turpis, in venenatis massa. Aenean id elit diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce suscipit vulputate risus, a fermentum massa tristique eget. Proin pretium ac risus a pretium. Integer scelerisque quis nibh et placerat. Nam laoreet mattis sem eu feugiat. Ut sem leo, dapibus eget pretium id, mattis in metus. Maecenas venenatis sem at odio rutrum imperdiet. Donec mattis nunc id dui finibus pellentesque. Duis vel urna at diam lobortis tincidunt ut sed nisi. Duis mattis, tellus quis viverra viverra, nunc massa facilisis tellus, at sagittis nulla orci vitae mi. Quisque tempus consectetur rhoncus.'
                        },
                        {
                            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis justo in quam commodo rutrum. In non leo nec nisi congue porttitor. Fusce id pulvinar turpis, in venenatis massa. Aenean id elit diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce suscipit vulputate risus, a fermentum massa tristique eget. Proin pretium ac risus a pretium. Integer scelerisque quis nibh et placerat. Nam laoreet mattis sem eu feugiat. Ut sem leo, dapibus eget pretium id, mattis in metus. Maecenas venenatis sem at odio rutrum imperdiet. Donec mattis nunc id dui finibus pellentesque. Duis vel urna at diam lobortis tincidunt ut sed nisi. Duis mattis, tellus quis viverra viverra, nunc massa facilisis tellus, at sagittis nulla orci vitae mi. Quisque tempus consectetur rhoncus.'
                        },
                        {
                            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis justo in quam commodo rutrum. In non leo nec nisi congue porttitor. Fusce id pulvinar turpis, in venenatis massa. Aenean id elit diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce suscipit vulputate risus, a fermentum massa tristique eget. Proin pretium ac risus a pretium. Integer scelerisque quis nibh et placerat. Nam laoreet mattis sem eu feugiat. Ut sem leo, dapibus eget pretium id, mattis in metus. Maecenas venenatis sem at odio rutrum imperdiet. Donec mattis nunc id dui finibus pellentesque. Duis vel urna at diam lobortis tincidunt ut sed nisi. Duis mattis, tellus quis viverra viverra, nunc massa facilisis tellus, at sagittis nulla orci vitae mi. Quisque tempus consectetur rhoncus.'
                        },
                    ],
                author: 'Paul',
                created: '2021-09-22',
            },
            {
                title: 'Title 3',
                body: 
                    [
                        {
                            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis justo in quam commodo rutrum. In non leo nec nisi congue porttitor. Fusce id pulvinar turpis, in venenatis massa. Aenean id elit diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce suscipit vulputate risus, a fermentum massa tristique eget. Proin pretium ac risus a pretium. Integer scelerisque quis nibh et placerat. Nam laoreet mattis sem eu feugiat. Ut sem leo, dapibus eget pretium id, mattis in metus. Maecenas venenatis sem at odio rutrum imperdiet. Donec mattis nunc id dui finibus pellentesque. Duis vel urna at diam lobortis tincidunt ut sed nisi. Duis mattis, tellus quis viverra viverra, nunc massa facilisis tellus, at sagittis nulla orci vitae mi. Quisque tempus consectetur rhoncus.'
                        },
                        {
                            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis justo in quam commodo rutrum. In non leo nec nisi congue porttitor. Fusce id pulvinar turpis, in venenatis massa. Aenean id elit diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce suscipit vulputate risus, a fermentum massa tristique eget. Proin pretium ac risus a pretium. Integer scelerisque quis nibh et placerat. Nam laoreet mattis sem eu feugiat. Ut sem leo, dapibus eget pretium id, mattis in metus. Maecenas venenatis sem at odio rutrum imperdiet. Donec mattis nunc id dui finibus pellentesque. Duis vel urna at diam lobortis tincidunt ut sed nisi. Duis mattis, tellus quis viverra viverra, nunc massa facilisis tellus, at sagittis nulla orci vitae mi. Quisque tempus consectetur rhoncus.'
                        },
                        {
                            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis justo in quam commodo rutrum. In non leo nec nisi congue porttitor. Fusce id pulvinar turpis, in venenatis massa. Aenean id elit diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce suscipit vulputate risus, a fermentum massa tristique eget. Proin pretium ac risus a pretium. Integer scelerisque quis nibh et placerat. Nam laoreet mattis sem eu feugiat. Ut sem leo, dapibus eget pretium id, mattis in metus. Maecenas venenatis sem at odio rutrum imperdiet. Donec mattis nunc id dui finibus pellentesque. Duis vel urna at diam lobortis tincidunt ut sed nisi. Duis mattis, tellus quis viverra viverra, nunc massa facilisis tellus, at sagittis nulla orci vitae mi. Quisque tempus consectetur rhoncus.'
                        },
                    ],
                author: 'Mary',
                created: '2018-04-10',
            },
        
        ]
        return <section><Post data={posts}/></section>
    }
}

export default PagePost