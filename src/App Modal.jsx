import { useState } from 'react'
import './App.css'
import Modal from './components/Modal'

function App() {
  // modal = ture(창 열림) | false(창 닫힘)
  const [modal, setModal] = useState(false);

  return (
    <>
      <h1>App</h1>

      {/* 
        삼항연산자 : 조건 ? 처리문1(참) : 처리문 2(거짓) 
        
        <Modal setModal={setModal} 설정한 상태 변경을 자식컴퍼넌트인 Modal.jsx로 넘긴다
      */}
      { 
        modal ? <Modal setModal={setModal} /> :null
      }

      <button
       onClick={() => {setModal(true)}}
       >모달창 열기</button>

    </>
  )
}

export default App
