import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function CreateTask({modal, toggle, save}) {

    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        if(name === 'taskName'){
            setTaskName(value);
        }else{
            setDescription(value);
        }
    }

    const handleTaskCreate = () => {
        let taskObj = {}
        taskObj['name'] = taskName;
        taskObj['description'] = description
        setTaskName('')
        setDescription('')
        save(taskObj)
        toggle()
    }

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Create Task</ModalHeader>
                <ModalBody>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='pb-2'>Task Name</label>
                            <input type='text' className='form-control' name = 'taskName' value = {taskName} onChange={handleInputChange} />
                        </div>
                        <div className='form-group'>
                            <label className='pb-2'>Description</label>
                            <textarea rows= '5' className='form-control' name = 'description' value = {description} onChange={handleInputChange}></textarea>
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleTaskCreate}>Create</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}
