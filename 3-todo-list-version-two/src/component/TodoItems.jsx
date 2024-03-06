import AddItem from "./AddItem"
import style from './TodoItems.module.css'

const todoitems = ({ todoItems }) => {

    return (
        <>
            <div className={style.itemContainer}>
                {todoItems.map(item => (

                    <AddItem todoName={item.name} todoDate={item.date} />
                ))}
            </div>
        </>
    )
}

export default todoitems