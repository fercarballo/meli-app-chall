import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { List } from "../components/List";
import Loading from "../components/Loading";
import { useFetch } from "../hooks/useFetch";
import Footer from "./Footer";

export function Search() {
  const [page, setPage] = useState(1);
  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get("search");
  const { data } = useFetch({
    url: `/sites/MLA/search?q=${searchValue}&offset=${page * 10}&limit=10`,
  });
  function handleNextClick() {
    setPage((prevValue) => prevValue + 1);
    document.body.scrollIntoView();
  }

  if (!data) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loading />{" "}
      </div>
    );
  }

  return (
    <>
      <div className="">
        <List data={data.results} />
        <div className="flex container mx-auto relative justify-center ">
          <button
            id="back"
            className="bg-white mt-4 mb-4 p-5 rounded-md text-2xl shadow-md"
            onClick={() => {
              handleNextClick(setPage(-1));
            }}
          >
            Back
          </button>
          <div className="flex container mx-auto relative justify-end ">
            <button
              className="bg-white mt-4 mb-4 p-5 rounded-md text-2xl shadow-md"
              onClick={handleNextClick}
            >
              Next
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
