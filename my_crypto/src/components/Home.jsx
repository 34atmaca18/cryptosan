import React from 'react'
import {Main,Middle,Api,Footer,Background} from './index.js'

const Home = () => {
    const coins = Api()
    return (
        <div>
            <Background />
            <Main />
            <Middle coins={coins}/>
            <Footer />
        </div>
    )
}

export default Home