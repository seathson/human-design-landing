import React from 'react'
import './App.sass';
import Header from './components/header/Header'
import Content from './components/content/Content'
import Footer from './components/footer/Footer';
import './assets/sass/all.sass'

function App() {
  setTimeout(() => {
    document.getElementById("chart").style.backgroundColor = 'red'
  }, 3000)
  return (
    <div className='wrapper'>
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default App