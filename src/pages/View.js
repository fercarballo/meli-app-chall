import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { useFetch } from "../hooks/useFetch";
import Footer from "./Footer";

export function View() {
  const params = useParams();
  const { data } = useFetch({ url: `/items/${params.id}` });
  const { data: description } = useFetch({
    url: `/items/${params.id}/description`,
  });
  const { data: categories } = useFetch({
    url: `/categories/${data?.category_id}`,
  });

  console.log("data", data);
  console.log("description", description);
  console.log("categories", categories);

  if (!data || !categories || !description) {
    return <Loading />;
  }

  return (
    <>
      <div className="container mx-auto rounded-md mb-12 ">
        <header className="flex my-3">
          {categories?.path_from_root.map((category) => (
            <div className="mr-1">
              {category.name} {">"}
            </div>
          ))}
        </header>
        <main className="bg-white flex p-1 rounded-md shadow-md sm:flex md:flex flex-col lg:flex-row xl:flex-row xs:flex-row md:min-h-screen w-full">
          <section className="mt-3  ">
            <img
              className="flex justify-center mx-auto"
              src={data.pictures[0].url}
              alt="Imagen de producto"
            />
            <section className="m-3 ">
              <h3 className="text-3xl mb-7 mt-24 ml-3">
                Descripcion del producto
              </h3>
              <p className="m-3 mb-5 text-base">{description.plain_text}</p>
            </section>
          </section>
          <sidebar className="flex flex-col text-2xl p-4 pr-7 m-2 mt-3 border border-gray-300 rounded-md  w-24-sm md:w-full-xs lg:text-2xl">
            <div className="flex flex-col w-full">
              <p className="text-lg mb-2">
                {data.condition === "new" ? "Nuevo" : "Usado"}
              </p>
              <div className="title-item w-80 font-semibold">
                {data.title}
                <p className="py-5 text-4xl font-medium"> $ {data.price} </p>
              </div>
              <button className="w-text-sm md:text-xs lg:text-2xl  text-slate-50 bg-blue-400 hover:bg-buttonMeli rounded-xl shadow-md p-3 mt-7 w-16 md:w-60 lg:w-96 ">
                Comprar
              </button>
            </div>
          </sidebar>
        </main>
      </div>
      <Footer />
    </>
  );
}
