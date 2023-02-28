import React from 'react';
import Header from './components/Header';
import AppStyle from './App.css'
import UserInput from './components/UserInput'
import UserInputStyle from './components/UserInput.css'
import MemeImage from './components/MemeImage';
import MemeImageStye from './components/MemeImage.css'
import Footer from './components/Footer'
import FooterStyle from './components/Footer.css'


const App = () => {
    return(
        <>
            <Header />
            <UserInput />
            <MemeImage />
            <Footer />
        </>
    )
}

export default App