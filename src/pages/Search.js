import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { List } from "../components/List";
import { useFetch } from "../hooks/useFetch";
import Footer from "./Footer";

export function Search() {
  const [page, setPage] = useState(1);
  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get("search");
  const { data } = useFetch({
    url: `/sites/MLA/search?q=${searchValue}&offset=${page * 10}&limit=10`,
  });
  // const [count, setCount] = useState(0);
  function handleNextClick() {
    setPage((prevValue) => prevValue + 1);
    document.body.scrollIntoView();
    // setCount += 1;
  }

  // function handleBackClick() {
  //   if (count === 0) {
  //     setPage((prevValue) => prevValue - 1);
  //     document.getElementById("back").style.display = "none";
  //     document.body.scrollIntoView();
  //   } else {
  //     document.getElementById("back").style.display = "block";
  //   }
  //   setCount -= 1;
  // }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="">
        <List data={data.results} />
        <div className="flex container mx-auto relative justify-end ">
          {/*        <button
            id="back"
            className="bg-white mt-4 mb-4 p-5 rounded-md text-2xl"
            onClick={handleBackClick}
            setCount={setCount}
          >
            Back
          </button>
  */}
          <button
            className="bg-white mt-4 mb-4 p-5 rounded-md text-2xl shadow-md"
            onClick={handleNextClick}
          >
            Next
          </button>
        </div>
        <Footer />
      </div>
    </>
  );
}
