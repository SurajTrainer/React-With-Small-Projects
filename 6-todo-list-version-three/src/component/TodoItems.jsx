import AddItem from "./AddItem"
import style from './TodoItems.module.css'

const todoitems = ({ todoItems, onDelBtn }) => {

    return (
        <>
            <div className={style.itemContainer}>
                {todoItems.map(item => (

                    <AddItem todoName={item.name} todoDate={item.date} onDelBtn={onDelBtn} />
                ))}
            </div>
        </>
    )
}

export default todoitems