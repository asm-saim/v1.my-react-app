interface TodoProps {
  task: string;
  time: string;
}

function Todo({ task, time }: TodoProps) {
  return (
    <div>
      <h4>Current Tasks remaining: {task}</h4>
      <h5>Time Duration : {time}</h5>
    </div>
  );
}
// function Todo(props:TodoProps) {
//   console.log(props);
//   const { task, time } = props;
//   return (
//     <div>
//       <h4>Current Tasks remaining: {task}</h4>
//       <h5>Time Duration : {time}</h5>
//     </div>
//   );
// }

export default Todo;
