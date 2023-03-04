import React from "react";
import Header from "./Header/Header";
import Nav from "./Header/Nav";
import Logo from "./Header/Logo";
import Content from "./Content/Content"
import PagePost from "./Content/PagePost";
import PageGallery from "./Content/PageGallery";
import PageCategory from "./Content/PageCategory";
import Copyrights from "./Footer/Copyrights";
import Footer from "./Footer/Footer";
import NavFooter from "./Footer/NavFooter";

const WebsiteLayout = () => {
   
    return (
        <>
            <Header nav={<Nav />} logo={<Logo />} />
            <Content
                left ={ <PageGallery /> }
                main={ <PagePost /> }
                right={ <PageCategory />}
            />
            <Footer
                copyrights={  <Copyrights/> }
                menu={<NavFooter /> }
            />
        </>
    )
}


export default WebsiteLayout

































