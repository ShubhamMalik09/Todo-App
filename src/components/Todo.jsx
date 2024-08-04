import React, { useEffect, useState } from "react";
import { AiOutlineSearch, AiOutlinePlus } from "react-icons/ai";
import Tasks from "./Tasks";
import TaskModal from "./TaskModal";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Todo = () => {
  const newsearch = useParams();
  const [searching, setSearching] = useState(newsearch?.search ? (newsearch.search):(""));
  const [taskModal, setTaskModal] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [update, setUpdate] = useState("");
  const navigate = useNavigate(); 

  const handleUpdate = () => {
    console.log("update is call");
    setUpdate(Date.now());
  };

  //Get all the tasks
  useEffect(() => {
    const fetchTask = async () => {
      setLoading(true);
      await axios
        .get("http://localhost:3030/data")
        .then((res) => setTasks(res.data));
      setLoading(false);
    };
    fetchTask();
  }, [update]);
  return (
    <div className="w-full min-h-screen bg-gray-900 pt-32 text-white">
      <div className="w-7/12 flex flex-col items-center justify-center mx-auto gap-5">
        <h1 className=" font-bold text-5xl">YOUR TASKS</h1>
        <div className="flex justify-around items-center w-full px-5 border rounded-xl py-5 border-gray-900 bg-gray-800">
          <div className="flex items-center justify-center gap-1 text-xl font-medium">
            <input className="bg-slate-700 w-full outline-none py-2 px-1 rounded-md" type="text" onChange={(e)=>{
              setSearching(e.target.value)
            }} value={searching}/>
            <div>
              <AiOutlineSearch className="w-[30px] h-[30px] hover:text-blue-500 hover:cursor-pointer" onClick={()=> navigate("/"+searching)}/>
            </div>
          </div>
          <button onClick={() => setTaskModal(true)} className="flex items-center justify-center gap-1 text-xl font-medium border-2  bg-gray-900 border-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600">
            <AiOutlinePlus />
            <p>Add Task</p>
          </button>
        </div>
        <div className="mt-3 bg-gray-800 w-full rounded-lg">
          {!loading && <Tasks tasks={tasks} handleUpdate={handleUpdate} search={newsearch?.search ? (newsearch.search):("")}/>}
        </div>
      </div>
      {taskModal && (
        <TaskModal setTaskModal={setTaskModal} handleUpdate={handleUpdate} />
      )}
    </div>
  );
};

export default Todo;
