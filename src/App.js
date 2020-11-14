import React from 'react'
import './App.sass';
import Header from './components/header/Header'
import Content from './components/content/Content'
import Footer from './components/footer/Footer';
import './assets/sass/all.sass'

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Content/>
      <Footer />
    </div>
  )
}

export default App