import { CiCirclePlus } from "react-icons/ci";
import Taskpanel from "../components/Taskpanel";
import TaskForm from "../components/TaskForm";
import { useState } from "react";
import { MdCancel } from "react-icons/md";

function ToDoPage() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [tasks, setTasks] = useState([])
  const [editTask, setEditTask] = useState(false)

  const addTask = (newTask) => {
    setTasks([newTask, ...tasks])
  }

  return (
        <>
      <div>
        <header className="bg-green-950 p-16 text-center">
          <h1 className="text-white text-5xl">TO DO APP</h1>
        </header>
        <div className="bg-[#f5f5f5] h-screen ">
          <div className="p-10">
            <div className="flex justify-center">
              <button className="bg-green-950 text-white py-[15px] px-[50px] rounded-l-[10px]">
                Today
              </button>
              <button className="bg-amber-100 p-[15px]">Pending</button>
              <button className="bg-amber-100 p-[15px] rounded-r-[10px]">
                Overdue
              </button>
            </div>
          </div>
          <div>
            <div className="w-[80%] mx-auto flex justify-between">
              <h1 className="text-2xl font-bold">Tasks</h1>
              <button className={`${isFormOpen ? "bg-red-500" : "bg-green-500"} text-white flex p-[5px] items-center rounded-[5px] cursor-pointer`} onClick={() => setIsFormOpen(!isFormOpen)}>
                <span>{isFormOpen ? <MdCancel /> : <CiCirclePlus />}</span>
                <span>{isFormOpen ? "Close" : "Add task"}</span>
              </button>
            </div>
                <div>
                  <TaskForm isFormOpen={isFormOpen} addTask={addTask} editTask={editTask} />
                </div>

                <div className="space-y-3 text-center">
                   {tasks.length === 0 ? (<p>No task added Yet</p>) : tasks.map((task, index)=>(<Taskpanel task={task} index={index}  key={task.id} setEditTask={setEditTask} editTask={editTask} />))}
                </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ToDoPage