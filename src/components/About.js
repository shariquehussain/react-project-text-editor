import React from 'react'
import '../App.css';

export default function About(props) {

    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor: props.mode === 'dark' ? '#042743' : 'white',
        borderColor: props.mode === 'dark' ? 'white' : 'black'
    }

    // const accord = document.getElementsByClassName('contentBx');

    // for (let i = 0; i <= accord.length; i++) {
    //   accord[i].addEventListener('click', function () {
    //     this.classList.toggle('active');
    //   });
    // }



    return (
        <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
            <h1 className='heading'>About us</h1>
            <div className='about'>
              
                <div className="accord">
                    <div className="contentBx">
                        <div className="lable">Analyze your text</div>
                        <div className="content">
                            <p>  Texteditor gives you a way to analyze your text qucikly and efficiently. Be it word count ,characters count or many more Text Analysis is about parsing texts in order to extract machine-readable facts from them. The purpose of Text Analysis is to create structured data out of free text content. The process can be thought of as slicing and dicing heaps of unstructured, heterogeneous documents into easy-to-manage and interpret data pieces.</p>
                        </div>
                    </div>

                    <div className="contentBx">
                        <div className="lable">Free to use</div>
                        <div className="content">
                            <p> Texteditor is a free charactor tool provides instant characters count word count statistics for a given text.Thousands of companies have integrated Rich Text Editor into content management systems, e-learning, discussion forums, Web e-mail, and other applications. Plus, Rich Text Editor allows developers to easily customize and extend the editor.</p>
                        </div>
                    </div>

                    <div className="contentBx">
                        <div className="lable">Browser compatible</div>
                        <div className="content">
                            <p> Cross-browser compatibility is the ability of a website or web application to function across different browsers and degrade gracefully when browser features are absent or lacking in any computer and phones very easy to use and very responsive.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


