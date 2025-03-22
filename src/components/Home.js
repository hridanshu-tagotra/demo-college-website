import React from 'react'
import Header from './Header'
import Banner from './Banner'
import Footer from './Footer'
import AboutSection from './AboutSection'
import CardSection from './CardSection'
import ChooseUs from './ChooseUs'
const App = () => {
  return (
    <div>
      <Header/>
      <Banner />
      <AboutSection/>
      <CardSection/>
      <ChooseUs/>
      <Footer/>
    </div>
  )
}

export default App;