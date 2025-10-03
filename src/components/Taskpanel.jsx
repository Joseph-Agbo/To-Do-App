import { FaRegClock } from "react-icons/fa";
import { FaPen } from "react-icons/fa";

function Taskpanel({task}) {
  return (
    <div className="w-[80%] mx-auto bg-white flex justify-between p-[20px]">
      <div className="flex space-x-2 items-center">
        <input type="checkbox" />
        <p>{task.name}</p>
      </div>
      <div className="flex space-x-2 items-center text-zinc-600/35">
        <FaRegClock />
        <p>{task.dueDate}</p>
      </div>
      <div className="flex space-x-2 items-center">
        <FaPen title="edit task" />
        <button className={`m-[10px] w-[30px] h-[30px] bg-red-500 rounded-2xl`}></button>
      </div>
    </div>
  );
}

export default Taskpanel;
