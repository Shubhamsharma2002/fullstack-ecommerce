
import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Topproducts from '@/components/Topproduct'
import React from 'react'

const HomePage = () =>{
    return(
        <div>
            <Navbar/>
            <Banner/>
            <Topproducts/>
            <Footer/>
        </div>
    )
}

export default HomePage