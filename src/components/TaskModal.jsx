import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

const TaskModal = ({ edit = false, title = "", description = "",created_at="", id ,setTaskModal ,handleUpdate}) => {
  const [active, setActive] = useState(false);
  const [inputData, setInputData] = useState({title:title, description:description, created_at:created_at, updated_at:''});

  const handleSubmit = async() => {
    if (!active) return;

    // To Edit the previous task
    if (edit) {
      inputData.updated_at=Date.now();
      await axios.put('http://localhost:3030/data/'+id,inputData).then(res => {toast.success("Task updated successfully")
        handleUpdate();
        setTaskModal(false);
      }).catch(err => console.log(err));
    } else { 
      // Creates a new task
      inputData.created_at=Date.now();
      inputData.updated_at=Date.now();
      inputData.completed=false;
      console.log(inputData);
      await axios.post('http://localhost:3030/data',inputData).then(res => {toast.success("Task created successfully")
        handleUpdate();
        setTaskModal(false);
      }).catch(err => console.log(err));
    }
};
    const handleChange = (e)=>{
        setActive(false);
        if(((e.target.name)==="title" && e.target.value!==title) || ((e.target.name)==="description" && e.target.value!==description)){
            setActive(true);
        }
    }
  return (
    <div className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-gray-600 bg-opacity-10 backdrop-blur-sm">
      <div className="w-11/12 max-w-[350px] rounded-lg border-blue-700 border-2 bg-richblack-800 p-6 gap-6">
        <h1 className="text-3xl font-bold">{edit ? "Edit Task" : "Add Task"}</h1>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col items-start my-2">
            <h2 className="text-xl">Title</h2>
            <input
              type="text"
              name="title"
              onChange={(e) => {
                handleChange(e)
                setInputData({...inputData,title:e.target.value});
              }}
              value={inputData.title}
              className="outline-none bg-gray-700 rounded-md py-1 px-2"
            />
          </div>
          <div className="flex flex-col items-start">
            <h2 className="text-xl">Description</h2>
            <input
              type="text"
              name="description"
              onChange={(e) => {
                handleChange(e);
                setInputData({...inputData,description:e.target.value});
              }}
              value={inputData.description}
              className="outline-none bg-gray-700 rounded-md py-1 px-2"
            />
          </div>
        </div>
        <div className="flex justify-between mt-5">
          <button onClick={()=>setTaskModal(false)} className=" text-xl font-medium border-2  bg-gray-900 border-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600">Cancel</button>
          <button onClick={handleSubmit} className={`${active?"hover:bg-blue-600 border-blue-500 bg-gray-900 ":"bg-gray-500 border-none hover:cursor-default"} text-xl font-medium border-2   px-4 py-2 rounded-lg`}>{edit ? "Edit Task" : "Add Task"}</button>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
