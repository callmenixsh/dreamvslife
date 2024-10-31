import React from 'react'
import Footer from '../footer/Footer'

function Layout({ children }) {
    return (
        <>
            <div className="content min-h-screen">
                {children}
            </div>
            <Footer />
        </>
    )
}

export default Layout