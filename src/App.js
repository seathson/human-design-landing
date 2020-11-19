import React, { useState } from 'react'
import './App.sass';
import Header from './components/header/Header'
import Content from './components/content/Content'
import Footer from './components/footer/Footer';
import './assets/sass/all.sass'

function App() {
  let myRef
  const [result, setResult] = useState(false)
  const [data, setData] = useState(null)

  let updateData = (bodyScroll, consultationScroll, faqScroll, contactsScroll) => {
    setData({
      body: bodyScroll,
      consultation: consultationScroll,
      faq: faqScroll,
      contacts: contactsScroll
    })
  }

  let updateRef = (elem) => {
    myRef = elem
  }

  let checkClick = (event) => {
    setResult(myRef.contains(event.target))
  }

  return (
    <div className='wrapper' onClick={checkClick}>
      <Header scrollData={data} updateRef={updateRef} result={result}/>
      <Content updateData={updateData}/>
      <Footer />
    </div>
  )
}

export default App