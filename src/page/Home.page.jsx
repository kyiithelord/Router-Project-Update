import React from "react";
import { BookListComponents } from "../components";
import useFetch from "../hook/useFetch";
import { GetBookData } from "../service/book.service";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { data, error, loading } = useFetch(GetBookData, "book");
  return (
    <div className="">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="flex flex-wrap justify-between">
          {data.map((i) => (
            <Link key={i.id} to={`/detail/${i.slug}`}>
              <BookListComponents data={i} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
