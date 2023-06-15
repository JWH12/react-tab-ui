import React, { useState } from 'react'

/* 
  App.jsx 에서  
      { 
        modal ? <Modal setModal={setModal} /> :null
      }
      로 설정 변경한 값을 props로 받고 선언한 뒤 onClick으로 실행 시킨다.
*/
function Modal(props) {

  // console.log(props)

  const setModal = props.setModal;

  return (
    <div className='modal'>
      <div className="modal-content">
        <h2>Modal</h2>
        <p>모달 창입니다.</p>
      </div>
      <button
       onClick={() => {setModal(false)}}
       >닫기</button>
    </div>
  )
}


export default Modal