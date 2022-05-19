import { ListItem } from "./ListItem";

export function List({ data }) {
  return (
    <>
      <section className="container mx-auto relative mt-5 rounded-lg">
        <div className="bg-white p-5 relative shadow-md rounded-lg">
          {data.map((item) => (
            <ListItem {...item} key={item.id} />
          ))}
        </div>
      </section>
    </>
  );
}
