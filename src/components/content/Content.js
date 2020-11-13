import React from 'react'
import '../../assets/sass/all.sass'

function Content() {
  return(
    <div className='content'>

        <div className='welcomeHD'>
          <h1 className='welcomeHD__miniTitle'>УЗНАЙТЕ СВОЙ ДИЗАЙН СЧАСТЛИВОГО ЧЕЛОВЕКА</h1>
          <h2 className='welcomeHD__title'>ДИЗАЙН ЧЕЛОВЕКА</h2>
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
            <div className='vertical-line vertical-line_right'></div>
          </div>
        <div className='bodygraph'>
          <iframe className='bodygraph__rave' title='Rave' src="https://embed.charta.life" frameBorder="0" name='chart' id='chart' style={{height: 1500 + 'px', backgroundColor: '#F9F9F9'}}></iframe>
        </div>
    </div>
  )
}

export default Content