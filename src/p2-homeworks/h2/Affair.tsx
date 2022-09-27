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
    const color = s.priority + ' ' + s[props.affair.priority]

    return (
        <div className={s.block}>
            <div className={s.item} >{props.affair.name}</div>
            <div className={color}>[{props.affair.priority}]</div>
            <div><button className={s.item + ' ' + s.button_delete} onClick={deleteCallback}>X</button></div>
        </div>
    )
}

export default Affair
