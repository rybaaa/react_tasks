import React from 'react'
import {AffairType} from "./HW2";
import affairs from "./Affairs";
import s from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}// need to fix

    return (
        <div className={s.block}>
            <span className={s.item} >{props.affair.name}</span>
            <span className={s.priority}>[{props.affair.priority}]</span>
            <button className={s.button_delete} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
