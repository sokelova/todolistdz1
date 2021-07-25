import React from 'react'
import {AffairType} from './HW2'
import styl from './Affairs.module.css';

type AffairPropsType = {
    // key не нужно типизировать
    affair:  AffairType
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const {deleteAffairCallback, affair} = props
    const {priority} = props.affair


    const deleteCallback = () => {deleteAffairCallback(affair._id)}

    let className;
    if (priority === "high") {
        className = styl.span_name_high;
    }
    if (priority === "low") {
        className = styl.span_name_low;
    }
    if (priority === "middle") {
        className = styl.span_name_middle;
    }

    return (
        <div>
            <div key={affair._id}  className={styl.container}>
                <span className={styl.name}>{affair.name + " "}</span>
            </div>
            <div  className={styl.container}>
                <span className={className}>{affair.priority}</span>
            </div>
            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
