import { useState, useEffect } from "react";

export const Input = () => {
  const inputHandler = (event) => {
    event.stopPropagation();
    console.log(event.nativeEvent);
  };

  return (
    <div className="box">
      <div className="border border-1 border-warning">
        <input
          className="m-5"
          onClick={inputHandler}
          type="text"
          name="i"
          id="i"
        />
      </div>
    </div>
  );
};
