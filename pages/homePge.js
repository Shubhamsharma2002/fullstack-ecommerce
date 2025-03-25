
import Banner from '@/components/Banner'
import Navbar from '@/components/Navbar'
import Topproducts from '@/components/Topproduct'
import React from 'react'

const HomePage = () =>{
    return(
        <div>
            <Navbar/>
            <Banner/>
            <Topproducts/>
        </div>
    )
}

export default HomePage