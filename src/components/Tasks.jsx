import React from 'react'
import Task from './Task';
const Tasks = ({handleUpdate, tasks,search}) => {
  return (
        <div className='flex flex-col items-center justify-center'>
            {
                // Filter all the tasks based on the search
                tasks.filter((e)=>{ const check = e.title.toLowerCase();
                    return check.includes(search.toLowerCase())
                }).map((task)=>(
                    <Task
                        key={task.id}
                        title={task.title}
                        description={task.description}
                        created_at={task.created_at}
                        updated_at={task.updated_at}
                        id={task.id}
                        check={task.completed}
                        handleUpdate={handleUpdate}
                    />
                ))
            }
        </div>
  )
}

export default Tasks
