import React, { useState, useEffect } from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

function Confidentiality(props) {
  const [data, setData] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  let updateData = (bodyScroll, reviewScroll, consultationScroll, faqScroll, contactsScroll) => {
    setData({
      body: bodyScroll,
      review: reviewScroll,
      consultation: consultationScroll,
      faq: faqScroll,
      contacts: contactsScroll
    })
  }

  return(
    <div className='wrapper'>
      <Header scrollData={data}/>
      
      <div className='content'>
        <div className='policy'>
          <div className='welcomeHD'>
            <h2 className='welcomeHD__title welcomeHD__title_max'>Политика конфиденциальности</h2>
            <p className='welcomeHD__description welcomeHD__description_max'>Настоящая Политика конфиденциальности регулирует 
            порядок обработки и использования персональных данных физических лиц, пользующихся 
            сервисами Сайта <a href={process.env.NODE_ENV === 'deploy' ? 'https://seathson.github.io/human-design-landing/' : ''}>https://humdesign.ru</a></p>
            <p className='welcomeHD__description welcomeHD__description_max'>Передавая Оператору персональные данные 
            посредством использования Сайта, Пользователь дает свое согласие (добровольное и бессрочное) на 
            использование персональных данных на условиях, изложенных в настоящей Политике конфиденциальности. 
            Данное согласие является сознательным. Пользователь дает согласие на обработку персональных данных 
            свободно, своей волей и в своем интересе. Согласие не является письменным, так как Оператор не 
            обрабатывает специальные и биометрические персональные данные. Согласие дается в соответствии с 
            п. 1 ст. 9 Федерального закона от 27.07.2006 N 152-ФЗ (ред. от 22.02.2017) 
            "О персональных данных".</p>
            <p className='welcomeHD__description welcomeHD__description_max'>Если Пользователь не согласен 
            с условиями настоящей Политики конфиденциальности, он обязан прекратить использование Сайта.</p>
            <p className='welcomeHD__description welcomeHD__description_max'>Безусловным акцептом настоящей 
            Политики конфиденциальности является начало использования Сайта Пользователем.</p>
            <p className='welcomeHD__description welcomeHD__description_max'>Оператор может обновлять 
            Политику по мере необходимости. Рекомендуем Пользователям периодически проверять актуальность 
            данной Политики. Продолжая пользоваться Сайтом после изменения Политики, Вы подтверждаете 
            согласие с внесенными изменениями.</p>
          </div>

          <div className='policy__art'>
            <h2><strong>1. Термины</strong></h2>
            <p>1.1.&nbsp;Сайт&nbsp;— сайт, расположенный в сети Интернет по адресу&nbsp;<a href={process.env.NODE_ENV === 'deploy' ? 'https://seathson.github.io/human-design-landing/' : ''}>https://humdesign.ru</a> Все исключительные права на Сайт и его отдельные элементы (включая программное обеспечение, дизайн) принадлежат Оператору в полном объеме. Передача исключительных прав Пользователю не является предметом настоящей Политики конфиденциальности.</p>
            <p>1.2.&nbsp;Пользователь&nbsp;— лицо использующее Сайт.</p>
            <p>1.3.&nbsp;Персональные данные&nbsp;— персональные данные Пользователя, которые Пользователь предоставляет о себе в процессе использования Сайта.</p>
            <p>1.4.&nbsp;Обработка персональных данных&nbsp;— любое действие (операция) или совокупность действий (операций), совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных.</p>
            <p>1.5. Конфиденциальность персональных данных&nbsp;— обязательное для соблюдения Оператором или иным получившим доступ к персональным данным лицом требование не допускать их распространения без согласия субъекта персональных данных или наличия иного законного основания.</p>
            <h2><strong>2.</strong>&nbsp;<strong>Состав информации о Пользователях</strong></h2>
            <p>2.1. Оператор обрабатывает следующие персональные данные:</p>
            <ul>
              <li>Имя Пользователя</li>
              <li>Адрес электронной почты</li>
              <li>IP адрес пользователя</li>
            </ul>
            <p>2.2. Обработка указанных выше персональных данных осуществляется Оператором исключительно в целях заключения и исполнения&nbsp;гражданско-правовых договоров; предоставления&nbsp;доступа Пользователю к сервисам, информации и/или материалам, содержащимся на cайте:&nbsp;<a href={process.env.NODE_ENV === 'deploy' ? 'https://seathson.github.io/human-design-landing/' : ''}>https://humdesign.ru</a>&nbsp;и для уточнения&nbsp;деталей заказа.&nbsp;&nbsp;Персональные данные Оператором не распространяются и не передаются третьим лицам.</p>
            <p>2.3. Для получения интернет рассылки о рекламных акциях и получения рекламно-информационных материалов (направляются Пользователям для того, чтобы можно было сориентироваться в информации, представленной на сайте) необходимо указать только имя Пользователя и Адрес электронной почты. Пользователь может в любой момент отказаться от рассылки путем направления Оператору запроса на отказ от рассылки по адресу:&nbsp;<a href="mailto:humdesign@bk.ru">humdesign@bk.ru</a>&nbsp;или нажатием соответствующей кнопки «отписаться от рассылки» в теле письма рассылки.</p>
            <p>2.4. Обезличенные данные Пользователей, собираемые с помощью сервисов интернет-статистики (Google Analytics, Яндекс Метрика и других), служат для сбора информации о действиях Пользователей на сайте, улучшения качества сайта и его содержания.</p>
            <h2><strong>3. Порядок обработки персональных данных </strong></h2>
            <p>3.1. Оператор обязуется использовать Персональные данные в соответствии с Федеральным Законом «О персональных данных» № 152-ФЗ от 27 июля 2006 г. и настоящей политикой конфиденциальности.</p>
            <p>3.2. В отношении персональных данных Пользователя сохраняется их конфиденциальность, кроме случаев, когда указанные данные являются общедоступными.</p>
            <p>3.3. Оператор имеет право хранить персональные данные только на серверах на территории Российской Федерации.</p>
            <p>3.4. Оператор имеет право передавать персональные данные Пользователя без согласия Пользователя следующим лицам:</p>
            <p>3.4.1 государственным органам, в том числе органам дознания и следствия, и органам местного самоуправления по их мотивированному запросу;</p>
            <p>3.4.2 в иных случаях, прямо предусмотренных действующим законодательством РФ.</p>
            <p>3.5. Оператор имеет право передавать персональные данные третьим лицам, не указанным в п. 3.4. настоящей Политики конфиденциальности, в следующих случаях:</p>
            <p>3.5.1 Пользователь выразил свое согласие на такие действия;</p>
            <p>3.5.2 передача необходима в рамках использования Пользователем Сайта или оказания Услуг Пользователю;</p>
            <p>3.5.3 передача происходит в рамках продажи или иной передачи бизнеса (полностью или в части), при этом к приобретателю переходят все обязательства по соблюдению условий настоящей Политики.</p>
            <p>3.6. Оператор осуществляет автоматизированную обработку персональных данных.</p>
            <h2><strong>4. Права и обязанности Пользователя</strong></h2>
            <p>4.1. Пользователь обязуется не предоставлять третьим лицам в пользование компьютерное устройство в случае, если с него возможен свободный доступ к личному кабинету Пользователя.</p>
            <p>4.2.&nbsp;Пользователь гарантирует, что все персональные данные являются актуальными и не относятся к третьим лицам.</p>
            <p>4.3. Пользователь вправе изменять, удалять свои персональные данные.</p>
            <h2><strong>5. Защита персональных данных</strong></h2>
            <p>5.1. Оператор осуществляет надлежащую защиту персональных данных в соответствии с законодательством РФ и принимает необходимые и достаточные организационные и технические меры для защиты персональных данных.</p>
            <p>5.2.&nbsp;Для обеспечения безопасности персональных данных при их обработке Оператор принимает меры для защиты персональных данных от неправомерного или случайного доступа к ним, их уничтожения, изменения, блокирования, копирования, предоставления, распространения, а также от иных неправомерных действий в отношении персональных данных.</p>
            <p>5.3. В целях обеспечения информационной безопасности Оператором предпринимаются следующие меры для защиты персональной информации:</p>
            <p>— обязательное использование брандмауэров, антивирусных систем;</p>
            <p>— резервное копирование данных;</p>
            <p>— использование стандартных отраслевых мер безопасности.</p>
            <p>Персональная информация хранится на сервере компании и может быть использована для последующего информирования клиентов о новых акциях и услугах, а также для проведения маркетинговых, статистических и иных исследований.</p>
            <h2><strong>6. Cookies</strong></h2>
            <p>6.1. Оператор использует файлы «cookies». Файлы «cookies» – это небольшие текстовые файлы, размещаемые на жестких дисках устройств Пользователей во время использования различных сайтов, предназначенные для содействия в настройке пользовательского интерфейса в соответствии с предпочтениями Пользователей.</p>
            <p>6.2. Большинство браузеров позволяют отказаться от получения файлов «cookies» и удалить их с жесткого диска устройства.</p>
            <h2><strong>7. Иные положения</strong></h2>
            <p>7.1. К настоящей Политике конфиденциальности и отношениям между Пользователем и Оператором, возникающим в связи с применением Политики конфиденциальности, подлежит применению право Российской Федерации.</p>
            <p>7.2. Все возможные споры, вытекающие из настоящего Соглашения, подлежат разрешению в соответствии с действующим законодательством по месту регистрации Оператора.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Перед обращением в суд Пользователь должен соблюсти обязательный досудебный порядок и направить Оператору соответствующую претензию в письменном виде. Срок ответа на претензию составляет 30 (тридцать) рабочих дней.</p>
            <p>7.3. Если по тем или иным причинам одно или несколько положений Политики конфиденциальности будут признаны недействительными или не имеющими юридической силы, это не оказывает влияния на действительность или применимость остальных положений Политики конфиденциальности.</p>
            <p>7.4. Оператор имеет право в любой момент изменять Политику конфиденциальности (полностью или в части) в одностороннем порядке без предварительного согласования с Пользователем. Все изменения вступают в силу на следующий день после размещения на Сайте.</p>
            <p>7.5. Пользователь обязуется самостоятельно следить за изменениями Политики конфиденциальности путем ознакомления с актуальной редакцией.</p>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default Confidentiality