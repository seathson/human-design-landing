import React, { useRef, useEffect } from 'react'
import '../../assets/sass/all.sass'
import ServicesList from '../services/ServicesList'
import AccordionList from '../accordion/AccordionList'
import SwiperList from '../swiper/SwiperList'

function Content(props) {
  const services = [
    {id: 1, icon: 'fas fa-book services__icon', href: 'https://up.sale/pay/product/feeddb6d', title: 'Базовое чтение', price: 1200, des: ['Расшифровка Типа', 'Разбор Профиля', 'Механизм "Ложного Я"', 'Разбор четверти', 'Стратегия вашего Типа', 'Ваша Определенность', 'Ваш внутренний Авторитет']},
    {id: 2, icon: 'fab fa-readme services__icon', href: 'https://up.sale/pay/product/315da097', title: 'Расширенное чтение', price: 2000, des: ['Базовое чтение', 'Разбор Каналов', 'Ваши преимущества', 'Полный разбор Ворот Сознательное/Бессознательное', 'Деловая сфера', 'Корректное питание для мозга и тела', 'Среда обитания', 'Источник для вдохновения и успеха']},
    {id: 3, icon: 'fas fa-globe services__icon', href: 'https://up.sale/pay/product/194d7750', title: 'Углубленное чтение', price: 2500, des:['Базовое чтение', 'Расширенное чтение', 'Ваш путь по Архетипам', 'Инкарнационный крест', 'Генетическое предназначение', 'Правильная самореализация']},
    {id: 4, icon: 'far fa-heart services__icon', href: 'https://up.sale/pay/product/70c279a2', title: 'Совместимость', price: 2300, des: ['Основы Композита, правильное применение', 'Формула любви, насыщенность в отношениях и поиски на стороне', 'Совместимость Типов', 'Анализ ваших Ролей в ваших отношениях', 'Сила, мудрость и манипуляции в паре', 'Анализ ваших представлений о любви. Работа над ошибками']},
    {id: 5, icon: 'fas fa-utensils services__icon', href: 'https://up.sale/pay/product/dbe30016', title: 'Составление индивидуального питания', price: 3000, des: ['По учениям Ра Уру Ху', 'Позволит открыть, "загрязненное" нынешними реалиями, истинное Я', 'Вы прийдете к своему Дизайну', 'Раскроет ваши истинные качества','Выстроим полный рацион, в соответствии с вашим Дизайном']}
  ]

  const questions = [
    {id: 1, question: 'Почему мы?', answer: 'За нашими плечами более 19 лет опыта работы и изучения Дизайна Человека. В нашей команде отобрано несколько лучших аналитиков с достойными достижениями в Дизайне. Мы ответим на все интересующие вас вопросы, ведь все они входят в нашу компетенцию.'},
    {id: 2, question: 'Чем может помочь чтение Бодиграфа?', answer: 'Чтение Бодиграфа поможет узнать предписанную вам с рождения программу и научиться следовать ей. Современная реальность такова, что современные люди просто НЕ УМЕЮТ жить. Им приходится учиться, адаптироваться на ходу, плыть против течения судьбы вслепую, надеясь хоть где-то и в чем-то нащупать почву. Потому, не найдя в себе сил отыскать ключ к истинному проявлению своей природы человек готов принять навеянное общественными ценностями Ложное “Я” за единственно возможный шанс к счастью.'},
    {id: 3, question: 'Может ли Human Design изменить мою жизнь?', answer: 'Может, но давайте учтем ряд моментов. Сможете ли вы исполнять все инструкции, что предлагает вам расшифровка? Поверите ли в то, что предлагает вам расшифровка? Насколько вы плохо живете, чтобы была действительная необходимость делать резкие перемены? Возможно, прочитав эти вопросы вы поймете, что вам не надо менять свою жизнь. Расшифровка Бодиграф откроет вам много интересной информации о вас и предложит весьма практичные рекомендации для жизни.'},
    {id: 4, question: 'Почему питание - это важно?', answer: 'Как говорил Ра Уру Ху, на питании строится весь Дизайн, от начала и до конца. Без правильного питания вы не сможете правильно насыщать свои клетки. В следствии чего, вы начинаете проживать не свой Дизайн. Выстроение правильного питания, прежде всего - открытие себя. '}
  ]

  const body = useRef(null)
  const review = useRef(null)
  const consultation = useRef(null)
  const faq = useRef(null)
  
  useEffect(() => {
    props.updateData(body.current.getBoundingClientRect().top - 50, review.current.getBoundingClientRect().top - 50, consultation.current.getBoundingClientRect().top - 50, faq.current.getBoundingClientRect().top + 420, faq.current.getBoundingClientRect().top + 800)
  }, [])

  return(
    <div className='content'>
      <div className='container'>

        <div className='welcomeHD'>
          <h1 className='welcomeHD__miniTitle'>УЗНАЙТЕ СВОЙ ДИЗАЙН СЧАСТЛИВОГО ЧЕЛОВЕКА</h1>
          <h2 className='welcomeHD__title'>Дизайн человека</h2>
          <div className='horizontal-line'></div>
          <p className='welcomeHD__description'>В основе проекта лежит синтез удостоенных Нобелевской премии научных открытий в области генетики, а также подтвердившие свою состоятельность знания и учения с более чем тысячелетней историей: И-Цзин - система древней китайской мудрости, Астрология, Наука о Дифференциации - Дизайн Человека, Психология, Эпигенетика и Молекулярная физика. Все в Вашей жизни – результат Ваших решений, почувствуйте себя хозяином своей жизни.</p>
        </div>

        
        <div className='stage-questions'>
          <div className='segment'>
            <div className='side'>
              <h3 className='side__title'>Получите ответы на самые важные вопросы</h3>
              <ul className='side__description'>
                <li><p>Кто Вы, а кем не являетесь</p></li>
                <li><p>Какое у Вас предназначение</p></li>
                <li><p>Что делает Вас счастливым</p></li>
              </ul>
            </div>
            <div className='side side_right'>
              <h3 className='side__title'>С Вами все в порядке!</h3>
              <ul className='side__description'>
                <li><p>Исцелите вашу родовую травму</p></li>
                <li><p>Поймите причины ваших поступков и настроений</p></li>
                <li><p>Начните принимать правильные решения</p></li>
              </ul>
            </div>
          </div>
        </div>
          
        <div className='stage-compatibility'>
          <div className='vertical-line vertical-line_left'></div>
          <div className='main-block'>
            <h3 className='main-block__miniTitle'>Узнайте вашу</h3>
            <h2 className='main-block__mainTitle'>Совместимость</h2>
            <p className='main-block__downTitle'>Используйте правильный подход в любых отношениях</p>
            <h4 className='main-block__childTitle'>Качество жизни определяется качеством общения</h4>
            <ul className='main-block__description'>
              <li><p>Cтаньте мастером общения с любым человеком</p></li>
              <li><p>Как на вас могут влиять люди и как вы обычно реагируете</p></li>
              <li><p>Чем вас дополняет партнер, а где манипулирует</p></li>
              <li><p>Что в вашем союзе двигает вас вперед, а что мешает</p></li>
            </ul>
          </div>

          <div className='dna-contain'>
            <div className='dna'>
              <div className='dna__nucleobase'></div>
              <div className='dna__nucleobase'></div>
              <div className='dna__nucleobase'></div>
              <div className='dna__nucleobase'></div>
              <div className='dna__nucleobase'></div>
              <div className='dna__nucleobase'></div>
              <div className='dna__nucleobase'></div>
              <div className='dna__nucleobase'></div>
              <div className='dna__nucleobase'></div>
              <div className='dna__nucleobase'></div>
            </div>
          </div>
        </div>

        <div className='stage-comfort'>
          <div className='atom-contain'>
            <div className='atom'>
              <div className='atom__one'></div>
              <div className='atom__two'></div>
              <div className='atom__three'></div>
              <div className='atom__nucleus'></div>
            </div>
          </div>

          <div className='comfort'>
          <div className='vertical-line vertical-line_right'></div>
            <h3 className='main-block__miniTitle main-block__miniTitle_right'>Наши компетенции</h3>
            <h2 className='main-block__mainTitle main-block__mainTitle_right'>Ваши удобства</h2>
            <h4 className='main-block__childTitle main-block__childTitle_right'>В Вашем распоряжении:</h4>
            <ul className='main-block__description main-block__description_right'>
              <li><p>Персональные прогнозы на каждый день</p></li>
              <li><p>Проверка совместимости с партнером</p></li>
              <li><p>Подробное персональное прочтение</p></li>
            </ul>
            <h4 className='main-block__childTitle main-block__childTitle_right'>Наши компетенции:</h4>
            <ul className='main-block__description main-block__description_right'>
              <li><p>19 лет практики и преподавания</p></li>
              <li><p>Команда экспертов и аналитиков</p></li>
              <li><p>Используют компании Rambler & Co</p></li>
            </ul>
          </div>
        </div>
        
        <div ref={body} className='stage-bodygraph'>
          <h1 className='stage-bodygraph__title'>Рассчитайте карту</h1>
          <div className='horizontal-line'></div>
          <div className='bodygraph'>
            <div className='bodygraph__contain'>
              <iframe className='bodygraph__rave' title='Rave' src='https://embed.charta.life' frameBorder='0' name='chart' id='chart' style={{height: 1500 + 'px', backgroundColor: '#FFFFFF'}}></iframe>
            </div>
          </div>
        </div>

        <div ref={review} className='stage-review'>
          <div className='stage-review__container'>
          <h1 className='stage-faq__title'>Отзывы</h1>
          <div class="horizontal-line"></div>
            <SwiperList />
          </div>
        </div>

        <div ref={consultation} className='stage-consultation'>
          <h1 className='stage-consultation__title'>Заказать консультацию</h1>
          <div className='horizontal-line'></div>
          <div className='stage-consultation__services'>
            <div className='services'>
              <ServicesList services={services}/>
            </div>
          </div>
        </div>

        <div ref={faq} className='stage-faq'>
          <h1 className='stage-faq__title'>Часто задаваемые вопросы</h1>
          <div className='horizontal-line'></div>
          <AccordionList questions={questions}/>
        </div>
      </div>
    </div>
  )
}

export default Content