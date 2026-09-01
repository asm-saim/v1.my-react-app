interface TaskStat {
  name: string;
  isDone: boolean;
}

export default function Task({ name, isDone }: TaskStat) {
  if (isDone === true) {
    return <li>Pending Task: None, Is Completed:{isDone}</li>;
  }
  return (
    <li>
      Pending Task:{name}, Is Completed:{isDone}
    </li>
  );
}
