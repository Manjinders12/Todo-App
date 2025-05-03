import React from 'react'
import TaskForm from '../components/TaskForm'

const CreateTask = () => {
    return (
        <div className='container-fluid h-100'>
            <div className='row h-100'>
                <div className='col-lg-6 d-flex align-items-center justify-content-center h-100 flex-column bg-primary text-white'>
                    <div className='w-50'>
                        <TaskForm />
                    </div>
                </div>
                <div className='col-lg-6 d-flex align-items-center justify-content-center h-100 flex-column'>
                    <div className='card rounded-0 w-50'>
                        <div className='card-body'>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateTask