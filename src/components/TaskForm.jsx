import React, { useState, useEffect } from "react";


function TaskForm({ isFormOpen, addTask, editToDo, updateTask }) {
  const today = new Date().toISOString().split("T")[0];
  const [addedTask, setAddedTask] = useState("");
  const [dueDate, setDueDate] = useState("");

  useEffect(()=>{
    if (editToDo.edit == true) {
      setAddedTask(editToDo.item.name)
      setDueDate(editToDo.item.dueDate)
    }
  }, [editToDo])

  const handleTaskUpdate = (e) => {
    setAddedTask(e.target.value);
  };
  const handleDueDate = (e) => {
    setDueDate(e.target.value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    const newTask = {
      name: addedTask,
      dueDate: dueDate,
    };
    if (editToDo.edit) {
      updateTask(editToDo.item.id, newTask)
    }else{
      addTask(newTask);
    }
    
    setAddedTask("")
    setDueDate("")
  };

  return (
    <div
      className={`w-[80%] border-2 border-green-950 mx-auto p-[20px] rounded-2xl my-2 ${
        isFormOpen ? "block" : "hidden"
      }`}
    >
      <form action="" className="flex justify-between" onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Add task here"
          className="outline-2 p-[10px]"
          value={addedTask}
          onChange={handleTaskUpdate}
        />
        <div className="space-x-1">
          <label htmlFor="dueDate">Due Date:</label>
          <input
            type="date"
            min={today}
            name="dueDate"
            className="outline-2 p-[10px]"
            value={dueDate}
            onChange={handleDueDate}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-red-500 p-[10px] rounded-[5px] cursor-pointer text-white"
        >
          {editToDo.edit ? "Update" : "Add new Task"}
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
