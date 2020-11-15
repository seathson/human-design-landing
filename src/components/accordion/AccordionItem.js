import React from 'react'

class AccordionItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: false
    }
    
    this.toggleVisible = this.toggleVisible.bind(this)
  }

  toggleVisible() {
    this.setState({
      visible: !this.state.visible
    })

  }

  render() {
    return(
      <div className='accordion__item'>
        <div className='accordion__question' onClick={this.toggleVisible}>{this.props.question} <i className={'fas fa-caret-down accordion__arrow' + (this.state.visible ? ' accordion__arrow_rotate' : '')}></i></div>
        <div 
          className={'accordion__answer' + (this.state.visible ? ' accordion__answer_visible' : '')} 
          ref={(div) => this.answer = div} 
          style={{height: this.state.visible ? this.answer.scrollHeight + 40 + 'px' : ''}}>
            <p>{this.props.answer}</p>
        </div>
      </div>
    )
  }
}

export default AccordionItem