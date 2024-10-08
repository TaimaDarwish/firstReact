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

import { useState } from "react"


// we create a list using map 
//<></> empty fragment 
// key={task.id} each child should have a unique id 
const Tasks = () => {
    const[tasks,setTasks]=useState([
        {
            id:1,
            text:'Doctors Appointment',
            day:'Feb 5th at 2:30pm',
            reminder:true,
        },
        {
            id:2,
            text:'Meeting at school',
            day:'Feb 6th at 1:30pm',
            reminder:true,
        },
        {
            id:3,
            text:'Food Shopping',
            day:'Feb 5th at 2:30pm',
            reminder:false,
        },
    ])
  return (
    <>
      {tasks.map((task)=>(<h3 key={task.id}>{task.text}</h3>)
    )}
    </>
  )
}

export default Tasks
