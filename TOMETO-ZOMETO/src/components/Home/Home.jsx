import React from 'react'
import HomeBanner from './Home_Banner';
import MainCat from './Main_Cat';
import Collection from './Collection';
import Footer from './Footer';
const Home = () => {
    return (
        <div>
            <HomeBanner/>
            <MainCat />
            <Collection/>
            <Footer/>
        </div>
    )
}

export default Home
