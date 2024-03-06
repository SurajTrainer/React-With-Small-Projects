
import styles from './ButtonContainer.module.css'

const ButtonContainer = () => {

    let buttonType = ['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','.','0','00' ]
    return (
        <div className={styles.buttonContainer}>

            {buttonType.map((button) => {
                return (
                    <button className={styles.button}>{button}</button>
                )

            })}

            {/* <button className={styles.button}>1</button>
            <button className={styles.button}>2</button>
            <button className={styles.button}>3</button> */}

        </div>
    )
}

export default ButtonContainer