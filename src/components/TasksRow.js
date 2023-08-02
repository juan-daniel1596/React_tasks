export const TasksRow = ({task}) => {
    return (
        <tr key={task.name}>
            <td>
                {task.name}
                <input type="checkbox"
                    checked={task.done}
                    onChange={() => alert('Cambiando valor')}
                />

            </td>
        </tr>
    )

}