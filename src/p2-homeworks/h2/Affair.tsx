import React from 'react'
import {AffairType} from './HW2'
import styl from './Affairs.module.css';

type AffairPropsType = {
    // key не нужно типизировать
    affair:  AffairType
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    // const{deleteAffairCallback,affair,}=props
    // const deleteCallback = () => {deleteAffairCallback(affair._id)}// need to fix

    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}

    let className;
    if (props.affair.priority === "high") {
        className = styl.span_name_high;
    }
    if (props.affair.priority === "low") {
        className = styl.span_name_low;
    }
    if (props.affair.priority === "middle") {
        className = styl.span_name_middle;
    }

    return (
        <div>
            <div key={props.affair._id}  className={styl.container}>
                {/*<span className={styl.className}>{props.affair.name + " "}</span>*/}
                <span className={styl.name}>{props.affair.name + " "}</span>
            </div>
            <div  className={styl.container}>
                {/*<span className={styl.className}>{props.affair.priority}</span>*/}
                <span className={className}>{props.affair.priority}</span>
            </div>
            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
