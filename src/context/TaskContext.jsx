import { Children, createContext } from 'react'

const TaskContext = createContext();
export const TaskProvider = ({ children }) => {

    //addtask
    const addTask = async (formData) => {
        const config = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }
        try {
            const response = await fetch(` http://localhost:5001/tasks`, config)
            alert("Task added successfully")

        } catch (error) {
            console.log(error)

        }
    }

    return (
        <TaskContext.Provider value={{
            addTask

        }}>
            {children}
        </TaskContext.Provider>
    )

}

export default TaskContext;