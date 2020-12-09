import React, { useState, useEffect } from 'react'
import Header from '../components/header/Header'
import Content from '../components/content/Content'
import Footer from '../components/footer/Footer'
import { useHistory, useLocation } from 'react-router-dom'

function Home(props) {
  const [data, setData] = useState(null)

  const history = useHistory(null)
  const location = useLocation(null)
  let updateData = (bodyScroll, reviewScroll, consultationScroll, faqScroll, contactsScroll) => {
    setData({
      body: bodyScroll,
      review: reviewScroll,
      consultation: consultationScroll,
      faq: faqScroll,
      contacts: contactsScroll
    })
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  useEffect(() => {

    if (data && history.location.state && history.location.state.prevLocation !== '/') {
      let pos = null

      if (history.location.state.id === 1) {
        pos = data.body
      }

      if (history.location.state.id === 2) {
        pos = data.review
      }

      if (history.location.state.id === 3) {
        pos = data.consultation
      }

      if (history.location.state.id === 4) {
        pos = data.faq
      }

      if (history.location.state.id === 5) {
        pos = data.contacts
      }

      setTimeout(() => window.scrollTo({top: pos, behavior: 'smooth'}), 100)

      history.push({
        pathname: '/',
        state: { prevLocation: location.pathname }
      })
    }
  }, [data, history.location.state])

  return (
    <div className='wrapper'>
      <Header scrollData={data}/>
      <Content updateData={updateData}/>
      <Footer />
    </div>
  )
}

export default Home