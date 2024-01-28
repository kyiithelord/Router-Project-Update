import React from "react";
import useFetch from "../../hook/useFetch";
import { GetBookData } from "../../service/book.service";
import { useParams, useNavigate } from "react-router-dom";

const DetailBookPage = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const { data, error, loading } = useFetch(GetBookData, `book/${id}`);
  const handleBack = () => {
    nav(-1);
  };
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {error ? (
            <h1>{error}</h1>
          ) : (
            <>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1706247691880-6a8f94ef4cb0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D"
                  alt="barNyar.jpg"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold">{data.book}</h1>
                <h2 className="text-sm text-gray-400">{data.author} </h2>
              </div>
              <div>
                <p>{data.description}</p>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default DetailBookPage;
