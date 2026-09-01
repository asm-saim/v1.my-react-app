export default function UserCard({ name, age }: { name: string; age: number }) {
  return (
    <div className="user">
      <h3>Username: {name}</h3>
      <h3>Age: {age}</h3>
    </div>
  );
}
