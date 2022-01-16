import React, { useState } from 'react'
import EditTask from './EditTask'

export default function Card({taskObj, index, deleteTask, updateListArray}) {

    const [modal, setModal] = useState(false);
    const colors = [
        {
            primaryColor: "#5d93e1",
            secondaryColor: "#ecf3fc"
        },
        {
            primaryColor: "#f9d288",
            secondaryColor: "#fefaf1"
        },
        {
            primaryColor: "#5dc250",
            secondaryColor: "#f2faf1"
        },
        {
            primaryColor: "#f48687",
            secondaryColor: "#fdf1f1"
        },
        {
            primaryColor: "#b964f7",
            secondaryColor: "#f3f0fd"
        }
    ]

    const handleDelete = () => {
        deleteTask(index)
    }

    const toggle = () => {
        setModal(!modal)
    }

    const updateTask = (obj) => {
        updateListArray(obj, index)
    }

    return (
        <div className='card-wrapper mr-5'>
            <div className='card-top' style={{"backgroundColor": colors[index%5].primaryColor}}></div>
            <div className='task-holder'>
                <span className='card-header' style={{"backgroundColor": colors[index%5].secondaryColor, "borderRadius": "10px"}}>{taskObj.name}</span>
                <p className='mt-2'>{taskObj.description}</p>
                <div style={{"position": "absolute", "right": "20px", "bottom": "20px"}}>
                    <i className='far fa-edit mx-3' style={{"color": colors[index%5].primaryColor, "cursor": "pointer"}} onClick = {() => setModal(true)}></i>
                    <i className='far fa-trash-alt' style={{"color": colors[index%5].primaryColor, "cursor": "pointer"}} onClick = {handleDelete}></i>
                </div>
            </div> 
            <EditTask modal = {modal} toggle = {toggle} updateTask={updateTask} taskObj = {taskObj} />           
        </div>
    )
}
