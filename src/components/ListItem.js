import { Link } from "react-router-dom";

export function ListItem(props) {

  return (
    <Link to={`/items/${props.id}`}>
      <article className="flex border-0 border-b-2 border-solid border-gray-300 py-5 justify-between  relative items-start">
        <div className="flex py-12">
          <img
            className="h-auto rounded w-[200px] mr-5"
            src={props.thumbnail}
            alt="thumbnail"
          />
          <div className="flex flex-col py-8">
            <header className="">$ {props.price}</header>
            <main className="mt-5">{props.title}</main>
          </div>
        </div>
        <div className="py-4 mr-5">
          {props.address.state_name}
        </div>
      </article>
      </Link>
  );
}
