import { useState } from 'react'
import './App.css'


function App() {

  // page 번호
  const [tab, setTab] = useState(0);

  console.log(tab)

  return (
    <>
      <h1>App</h1>

      <div className="tab-ui">

        <div className="tab-group">

          <a 
            style={ tab === 0 ? {backgroundColor: '#fd9f23', color: 'white'} : null}
            onClick={() => setTab(0)} 
            href="#tab1"
            >HTML</a>

          <a 
            style={ tab === 1 ? {backgroundColor: '#fd9f23', color: 'white'} : null}
            onClick={() => setTab(1)}
            href="#tab2"
            >CSS</a>

          <a 
            style={ tab === 2 ? {backgroundColor: '#fd9f23', color: 'white'} : null}
            onClick={() => setTab(2)} 
            href="#tab3"
            >JavaScript</a>

        </div>

        <div className="tab-contents">
          { 
            tab ===  0 &&
            <article id='#tab1'>
              <h1>HTML</h1>
              <p>Hyper Text Markup Language</p>
            </article> 
          }
        
          {
          tab ===  1 && 
          <article id='#tab2'>
            <h1>CSS</h1>
            <p>Cascaing Stlye Sheet</p>
          </article> 
          }

          {
          tab ===  2 && 
          <article id='#tab3'>
            <h1>Java Script</h1>
            <p>Web Programing Language</p>
          </article> 
          }

        </div>

      </div>

    </>
  )
}

export default App
