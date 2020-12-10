import React from 'react'

function Bodygraph(props) {
  return(
    <iframe className='bodygraph__rave' title='Rave' src='https://embed.charta.life' frameBorder='0' name='chart' id='chart' style={{height: 1500 + 'px', backgroundColor: '#FFFFFF'}}></iframe>
  )
}

export default Bodygraph