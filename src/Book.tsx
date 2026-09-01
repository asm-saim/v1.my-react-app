interface BookType {
  name: string;
}
// export default function Book({ name }: { name: string }) {}
export default function Book({ name }: BookType) {
  return <h4>Book Name: {name}</h4>;
}
