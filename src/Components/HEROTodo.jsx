import React from 'react'

const HEROTodo = ({ task_completed, total_tasks }) => {
    return (
        <section className='flex border-2 border-x-0 border-t-0 rounded-b-3xl border-b-green-800 mx-96'>

            <div className=' pt-28 p-12 text-3xl ml-32'>
                <p>Task Done</p>
                <p>Keep it up!</p>
            </div>
            <div className='flex justify-center items-center p-12'>
                <div className='flex justify-center items-center  bg-lime-700 w-48 h-48 text-6xl rounded-full '>
                    {task_completed} / {total_tasks}
                </div>
            </div>
        </section>
    )
}

export default HEROTodo