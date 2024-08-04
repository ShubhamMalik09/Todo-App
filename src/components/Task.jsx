import React, { useState } from 'react'
import { IoMdArrowDropright,IoMdArrowDropdown } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import TaskModal from './TaskModal';
import axios from 'axios';
import toast from 'react-hot-toast';

const Task = ({title, description, created_at,updated_at, id , handleUpdate,check}) => {
    const [expand,setExpand] = useState(false);
    const [taskModal, setTaskModal] = useState(false);
    
    // Delete the task
    const handleDelete = async()=>{
        await axios.delete("http://localhost:3030/data/"+id).then(res =>{
            console.log("deleted successfully")
            toast.error("task deleted successfully")
            handleUpdate();
        })
    }

    // Marks the task as completed or not
    const handleCheck = async() =>{
        const inputData={
            title:title,
            description:description,
            created_at:created_at,
            updated_at:updated_at,
            completed:!check
        }
        await axios.put('http://localhost:3030/data/'+id,inputData).then(res => {
            handleUpdate();
        }).catch(err => console.log(err));
    }
  return (
    <div className='w-full px-4'>
      <div className='flex w-full justify-evenly gap-2 p-4'>
        <div onClick={()=>setExpand(!expand)} className='w-[5%] hover:text-blue-500'>
            {
                !check && (expand?(<IoMdArrowDropdown className='w-[30px] h-[30px] cursor-pointer'/>):(<IoMdArrowDropright className='w-[30px] h-[30px] cursor-pointer'/>))
            }
        </div>
        <div className='flex flex-col text-md font-normal w-[75%]'>
            <h3 className={`${check && ' line-through'} font-semibold text-xl`}>{title}</h3>
            {
                expand && <p>{description}</p>
            }
            {
                expand && (<p className=' italic'>created_at: {Intl.DateTimeFormat('en-Us', {
                    dateStyle: 'short',
                    timeStyle: 'short'}).format(created_at)}</p>)
            }
            {
                expand && (<p className=' italic'>updated_at:{Intl.DateTimeFormat('en-Us', {
                    dateStyle: 'short',
                    timeStyle: 'short'}).format(updated_at)}</p>)
            }
        </div>
        <div className='flex gap-2 w-[20%] justify-evenly items-start'>
            <div className='hover:text-blue-500 hover:cursor-pointer'>{!check &&<FiEdit onClick={()=>setTaskModal(true)} className='w-[25px] h-[25px] '/>}</div>
            <div className='hover:text-blue-500 hover:cursor-pointer'>{!check &&<AiOutlineDelete onClick={handleDelete} className='w-[25px] h-[25px] '/>}</div>
            <div><input type="checkbox" checked={check} onChange={handleCheck} className='focus:ring-0 bg-gray-800 text-white font w-[20px] h-[20px] translate-y-[20%] cursor-pointer'/></div>
        </div>
      </div>
      {taskModal && <TaskModal edit={true} title={title} description={description} id={id} setTaskModal={setTaskModal} created_at={created_at} handleUpdate={handleUpdate}/>}
    </div>
  )
}

export default Task
