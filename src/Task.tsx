interface TaskStat {
  name: string;
  isDone: boolean;
}

// export default function Task({ name, isDone }: TaskStat) {
//   if (isDone === true) {
//     return <li>Completed Task: {name}</li>;
//   }
//   return <li>Pending Task:{name}</li>;
// }

//using ternary:
// export default function Task({ name, isDone }: TaskStat) {
//   return isDone === true ? <li>Completed Task: {name}</li> : <li>Pending Task:{name}</li>;
// }

//using conditional && : short circuit.
// export default function Task({ name, isDone }: TaskStat) {
//   return isDone === true && <li>Completed Task: {name}</li>;
// }

//using conditional || : short circuit.
export default function Task({ name, isDone }: TaskStat) {
  return isDone === false || <li>Pending Task: {name}</li>;
}
