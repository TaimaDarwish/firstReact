//idont want it to be separate from the component i 
//  want it to be part of the state so we delete the 
// list and we use hook called use.state()
// const tasks=[
//     {
//         id:1,
//         text:'Doctors Appointment',
//         day:'Feb 5th at 2:30pm',
//         reminder:true,
//     },
//     {
//         id:2,
//         text:'Meeting at school',
//         day:'Feb 6th at 1:30pm',
//         reminder:true,
//     },
//     {
//         id:3,
//         text:'Food Shopping',
//         day:'Feb 5th at 2:30pm',
//         reminder:false,
//     },
// ];


import Task from "./Task"

// we create a list using map 
//<></> empty fragment 
// key={task.id} each child should have a unique id 
//we can use context API
const Tasks = ({tasks,onDelete,onToggle}) => {
    
  return (
    //looping through them in tasks.map(task)
    //and outputting the component and passing the task as prop
    <>
      {tasks.map((task)=>(
        <Task key={task.id} // Each child in a list should have a unique key
        task={task}// Passing the task object as a prop to the Task component
         onDelete={onDelete} // Passing the delete function as a prop
          onToggle={onToggle}// Passing the toggle function as a prop
           />
      ))}
    </>
  )
}

export default Tasks
