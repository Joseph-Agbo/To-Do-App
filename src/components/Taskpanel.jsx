import { FaRegClock } from "react-icons/fa";
import { FaPen } from "react-icons/fa";

function Taskpanel({task, index, setEditTask, editTask}) {
  
  const enableEdit = () => {
    setEditTask(!editTask)
  }
  
  
  
  return (
    <div className="w-[80%] mx-auto bg-white flex justify-between p-[20px]">
      <div className="flex space-x-2 items-center">
        <p>{index+1}</p>
        <input type="checkbox" />
        <p>{task.name}</p>
      </div>
      <div className="flex space-x-2 items-center text-zinc-600/35">
        <FaRegClock />
        <p>{task.dueDate}</p>
      </div>
      <div className="flex space-x-2 items-center">
        <FaPen title="edit task" className="cursor-pointer" onClick={enableEdit} />
        <button className={`m-[10px] w-[30px] h-[30px] bg-red-500 rounded-2xl`}></button>
      </div>
    </div>
  );
}

export default Taskpanel;
