import React from 'react'

class Accordion extends React.Component{
    static defaultProps = {
        sections: []
    }
  
    state ={
        currentSectionIndex: null,
    }

    handleButtonClick(index){
        console.log('button clicked!', { index })
        this.setState({ currentSectionIndex: index })
      }

    renderSections(sections, index, currentSectionIndex) {
        return (
                <li className="ListItem" key={index} >
                    <button type='button' onClick={() => this.currentSectionIndex(index)}>
                        {sections.title}
                    </button>
                    {(currentSectionIndex === index) && <p>{sections.content}</p>}
                </li>
        )
      }
      render(){
        const { currentSectionIndex } = this.state
        const { sections } = this.props
            return (
            <ul className='Accordion'>
                {sections.map((sections, index) =>
                this.renderSections(sections, index, currentSectionIndex)
                )}
            </ul>
            )

      }

}

export default Accordion