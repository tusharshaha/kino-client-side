import React from 'react';
import Footer from '../../Shared/Footer';
import Header from '../../Shared/Header';

const Layout = ({children}) => {
    return (
        <>
            <Header></Header>
                {children}
            <Footer></Footer>
        </>
    );
};

export default Layout;