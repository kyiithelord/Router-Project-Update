import React, { useContext, useEffect, useState } from "react";
import useFetch from "../../hook/useFetch";
import { GetBookData } from "../../service/book.service";
import { useParams, useNavigate } from "react-router-dom";
import { ApiContext } from "../../store/ApiContext";

const DetailBookPage = () => {
  const { slug } = useParams();
  const nav = useNavigate();
  const [item, setItem] = useState(null);
  const { data, error, loading } = useContext(ApiContext);

  useEffect(() => {
    const finder = data?.find((i) => i.slug === slug);
    setItem(finder);
  }, [slug, data]);
  const handleBack = () => {
    nav(-1);
  };
  return (
    <div>
      <button
        className="px-3 py-2 border m-3 rounded-lg bg-blue-600 text-white"
        onClick={handleBack}
      >
        Back
      </button>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {error ? (
            <h1>{error}</h1>
          ) : (
            <div className="w-[200px] h-[300px] border ">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1706247691880-6a8f94ef4cb0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D"
                  alt="barNyar.jpg"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold">{item?.book}</h1>
                <h2 className="text-sm text-gray-400">{item?.author} </h2>
              </div>
              <div>
                <p>{item?.description}</p>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default DetailBookPage;
