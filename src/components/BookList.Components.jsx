import React from "react";

const BookListComponents = ({ data }) => {
  return (
    <div className="w-[200px] h-[300px] border ">
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
    </div>
  );
};

export default BookListComponents;
