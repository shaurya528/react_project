import { useState } from "react";


function Task() {

  // ===================== STATE =====================

  // Stores all tasks in an array
  const [tasklist, setTasklist] = useState([]);

  // Stores input value for new task
  const [newtask, setNewtask] = useState("");

  // Stores text while editing a task
  const [edit, setEdit] = useState("");

  // Stores id of task currently being edited
  const [editid, setEditid] = useState(null);


 

  // ===================== ADD TASK =====================

  function handletask() {
    // Prevent adding empty task
    if (newtask.trim() === "") return;

    // Add new task object into tasklist
    setTasklist([
      ...tasklist,
      {
        todotask: newtask,   // task text
        id: Date.now(),      // unique id
        done: false          // task initially not done
      }
    ]);

    // Clear input after adding task
    setNewtask("");
  }

  // ===================== DELETE TASK =====================
 function DeleteTask(id) {
    // filter removes the task whose id matches
    setTasklist(tasklist.filter(d => d.id !== id));
  }
  

  // ===================== SAVE EDITED TASK =====================

  function saveedits(id) {
    // Update only the task being edited
    setTasklist(
      tasklist.map(d =>
        d.id === id ? { ...d, todotask: edit } : d
      )
    );

    // Reset edit states after saving
    setEdit("");
    setEditid(null);
  }


   // ===================== CHECKBOX TASK =====================
function togglecheckbox(id){
  setTasklist(tasklist.map((d)=>(
    d.id===id ? {...d,done:!d.done}:d
  )))
      
 
}
     



  // ===================== JSX =====================

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start p-6">

      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">

        {/* Title */}
        <h1 className="text-2xl font-bold text-center mb-4">
          Todo App
        </h1>

        {/* Input Section */}
        <div className="flex gap-2 mb-4">
          <input
            placeholder="Enter your task"
            value={newtask}
            onChange={(e) => setNewtask(e.target.value)}
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            onClick={handletask}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Add
          </button>
        </div>

        {/* Task List */}
        <ul className="space-y-2">
          {tasklist.map(d => (
            <li
              key={d.id}
              className="flex justify-between items-center bg-gray-50 border rounded-lg px-3 py-2"
            >

              {/* If task is in edit mode */}
              {editid === d.id ? (
                <div className="flex gap-2 w-full">
                  <input
                    value={edit}
                    onChange={(e) => setEdit(e.target.value)}
                    className="flex-1 border border-gray-300 rounded-lg px-2 py-1"
                  />

                  <button
                    onClick={() => saveedits(d.id)}
                    className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600"
                  >
                    Save
                  </button>

                  <button
                    onClick={() => {
                      setEdit("");
                      setEditid(null);
                    }}
                    className="bg-gray-400 text-white px-3 py-1 rounded-lg hover:bg-gray-500"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                // Normal view mode
                <>
                  <p className=" text-white px-3 py-1 rounded-lg" >
                  <input  type="checkbox"checked={d.done} onChange={()=>{
                    togglecheckbox(d.id)
                     
                  }} />
                   <span className={d.done ? "line-through text-blue-400 ":"  text-blue-400"}> {d.todotask}</span>
                  </p>

                  <div className="flex gap-2">
                    <button
                      onClick={() => DeleteTask(d.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
                    >
                      Delete
                    </button>

                    <button
                      onClick={() => {
                        setEditid(d.id);          // enable edit mode
                        setEdit(d.todotask);      // preload text
                      }}
                      className="bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-600"
                    >
                      Edit
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}

export default Task;
