
import styles from './App.module.css'
import Display from './component/Display'
import ButtonContainer from './component/ButtonContainer'
import { useState } from 'react'

function App() {

  let [calVal, setcalVal] = useState('')

  const onBtnClick = (buttonText) => {
    if (buttonText === 'C') {
    setcalVal('')
    }else if (buttonText === '=') {
      let result = eval(calVal)
      setcalVal(result)
    }else{
      let newText = calVal + buttonText;
      setcalVal(newText)
    }
  }
  return (
    <>
      

      <div className={styles.calculator}>
       <Display disVal = {calVal}/>
       <ButtonContainer onBtnClick = {onBtnClick}/>
      </div>
    </>
  )
}

export default App
