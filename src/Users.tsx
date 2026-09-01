import UserCard from "./UserCard";

interface UserType {
  name: string;
  age: number;
}

const users: UserType[] = [
  { name: "Hasim", age: 29 },
  { name: "Wasi", age: 56 },
  { name: "Kabir", age: 45 },
  { name: "Jaki", age: 16 },
  { name: "Gazanfar", age: 67 },
  { name: "Daneal", age: 45 },
];

export default function Users() {
  return (
    <div>
      {users.map((user) => (
        <UserCard name={user.name} age={user.age}></UserCard>
      ))}
    </div>
  );
}
// export default function Users() {
//   return (
//     <div>
//       {users.map((user) => (
//         <li>username: {user.name}</li>
//       ))}
//     </div>
//   );
// }
