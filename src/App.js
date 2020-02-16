import React,{useState,useRef, useCallback} from 'react';


function App() {

  const [obj , setObj]  = useState([])
  
/* Memoizing 테스트 해보자 */

  /* 일반변수 & 일반함수 */
  let count = 0;
  const render = () => {            
    count += 1;
    setObj( obj => obj.concat({ id : count , name : "1" }) )
    
  }

    /* useRef & 일반함수 */
  /* const count = useRef(0);
  const render = () => {            
    count.current += 1;
    setObj( obj => obj.concat({ id : count.current , name : "1" }) )
    
  } */

  /* 일반변수 & useCallback */
  /* let count = 0;
  const render = useCallback(
    () => {        
      count += 1;
      setObj( obj => obj.concat({ id : count , name : "1" }) )      
    },[]
  ) */



  
  /* useMemo & 일반변수 */
 /*  const count = React.useMemo( () => {        
    let a = 0;
    return {
      get : () => a += 1    
      ,info : () => a
    }
  },[]);
  const render = () => {    
    setObj( obj.concat({ id : count.get() , name : "1" }) )    
  }
*/

const cnt = () => {
  console.log( count )
}

const reRender = () => {
  setObj([...obj])
} 
  const modi = () => {
    setObj(  
        obj.filter(item => { 
          item.id === 1 && ( item.name ="2" )
          return item;        
        })      
    )
  }

  return (
    <>
    <button onClick={render}>랜더링</button>
    <button onClick={reRender}>리랜더링</button>
    <button onClick={cnt}>count확인</button>
    <button onClick={modi}>수정</button>
    <br/>
    <div>
      memo &nbsp;&nbsp;&nbsp;
      { obj.map( item => <Memoize key={item.id} id={item.id} name={item.name}></Memoize> )}
    </div>
    <div>
      nonMemo &nbsp;&nbsp;&nbsp;
      { obj.map( item => <NonMemoize key={item.id} test={item}></NonMemoize> )}
    </div>
    </>    
  );
}

const Memoize = React.memo((props) => {
  console.log('memoize')
  return (
    <>
    <span>{props.id}</span>
    </>
  )
})

const NonMemoize = (props) => {
  console.log('nonMemoize')
  return (
    <span>{props.test.id}</span>
  )
}

export default App;
