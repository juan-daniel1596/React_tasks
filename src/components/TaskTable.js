import {TasksRow} from './TasksRow'
export const TaskTable = ({tasks}) =>{

return(
    <table>
    <thead>
      <tr>
      <th> Tasks </th>
      </tr>
    </thead>
    <tbody>
            {

              tasks.map (task =>(
               <TasksRow task={task}/>
              ))

            }

            
    </tbody>
  </table>
)




}