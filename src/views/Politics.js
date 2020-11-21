import React, { useState, useEffect } from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

function Politics(props) {
  const [data, setData] = useState(null)

  let updateData = (bodyScroll, consultationScroll, faqScroll, contactsScroll) => {
    setData({
      body: bodyScroll,
      consultation: consultationScroll,
      faq: faqScroll,
      contacts: contactsScroll
    })
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='wrapper'>
      <Header scrollData={data}/>

      <div className='content'>
        <div className='policy'>
          <div className='welcomeHD'>
            <h2 className='welcomeHD__title welcomeHD__title_max'>Оплата и возврат</h2>
          </div>
          <div className='policy__art'>
            <h2>Оплата банковской картой онлайн</h2>
            <p>На нашем сайте вы можете оплатить услугу банковской картой Visa, MasterCard или Мир, а так же электронными средствами платежа. После подтверждения выбранной услуги откроется защищенное окно со страницей платёжного сервиса, где Вам необходимо ввести данные Вашей банковской карты либо аккаунта электронного кошелька. Для дополнительной аутентификации держателя карты используется протокол 3D Secure. Если Ваш банк поддерживает данную технологию, Вы будете перенаправлены на его сервер для дополнительной идентификации. Информацию о правилах и методах дополнительной идентификации уточняйте, пожалуйста, в банке, выдавшем Вам банковскую карту.</p>

            <h2>Возврат</h2>
            <p>Согласно постановления правительства РФ от 19 января 1998 г. в случае обнаружения недостатков услуги, свойства которой не позволяют устранить их, покупатель вправе по своему выбору потребовать замены такой услуги услугой надлежащего качества либо соразмерного уменьшения покупной цены. Вместо предъявления указанных требований покупатель вправе отказаться от приобретенной услуги и потребовать возврата уплаченной за услугу денежной суммы.&nbsp;Так как на данном сайте услугой является консультация, то возврат возможен лишь при не наступлении даты начала действия консультации.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Politics