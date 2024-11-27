import React from 'react'

export default function About(props) {
   
  const myStyle={
    color : props.mode === 'dark'?'white':'#12273d',
    backgroundColor : props.mode === 'dark'?'#12273d':'white'
  }

  const mySubStyle={
    color : props.mode === 'dark'?'white':'#1d4167',
    backgroundColor : props.mode === 'dark'?'#1d4167':'white'
  }
    
    

  return (
        <div className='container' style={myStyle}>
            <h1 className='my-3'>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyse your text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={mySubStyle}>
                    Textutils gives a way to analyze your text quickly and efficiently. It is a word and character count.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free to use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={mySubStyle}>
                    Textutils is a free character counter tool that provides instant character count and word count statistics for a giventext.It gives information about how many minutes are required to read the text that is typed. It repots the number of words and characters Thus it is suitable for writing text without limit. 
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={mySubStyle}>
                    This word counter software works in any web browsers like chrome. firefox i.e., and even works in smartphones. It suits to count characters for blogs, books essays etc.
                </div>
                </div>
            </div>
            </div>
                </div>
  )
}
