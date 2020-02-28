import React, { useState } from 'react';
import '../css/popup.css';


const Popup = props => {    
    const [state,setState] = useState({ 
      isOpen : true
      ,date : props.data.fullDate
      ,content : props.data.content
     })

     
     const inputContent = e => {
       setState({ ...state, content : e.target.value })
     }

     const popup_block = {
        //position: 'relative'
        padding: '0 40px'
        ,margin: '50px auto 50px'
        ,background: '#fff'
        ,width: '800px'
        ,height : '400px'
        ,boxSizing: 'border-box'        
     }

     const title = {
        borderBottom: '1px solid #222'
        ,height : '70px'
        ,lineHeight : '70px'
     }
     
     const content = {
      resize: 'none'
      ,width : '710px'
      ,height : '240px'
     }

    return (
      <>            
          <div className={state.isOpen ? "dim open" : "dim close" }>
              <div style={popup_block}>    
                  <h2 style={title}>일정등록 { state.date.replace( /^(\d{4})(\d{2})(\d{2})$/, '( $1년 $2월 $3일 )' ) }</h2>
                <div>
                  <textarea style={content} onChange={inputContent} value={state.content}></textarea>
                </div>
                <div className="btnArea">
                    <button type="button" onClick={()=>{ props.save({...state,...props.data}) }}>저장</button>
                    <button type="button" onClick={()=>{ props.close(props.data) }}>닫기</button>                  
                </div>
              </div>        
          </div>
      </>
    )
  }
  export default Popup;
