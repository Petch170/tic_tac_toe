import React from "react";

const Tictaxo = () => {
  return (
    <div className=" h-screen ">
      <h1 className=" text-5xl font-bold text-center my-10 text-cyan-200">X|O Game</h1>
      {/* <div className="flex justify-evenly items-center m-auto "> */}
      {/* <div className=" flex flex-col items-center border border-blue-400 bg-blue-400 p-10 rounded-xl">
          <h1 className=" font-bold text-3xl bg-blue-400">X Score</h1>
          <p className=" font-semibold text-6xl pt-3 bg-blue-400">0</p>
        </div> */}
      <div className=" justify-center ">
        <div className=" flex gap-4 justify-center py-2">
          <div className="  w-32 h-32 border bg-[#47646a]  border-none rounded-md"></div>
          <div className="  w-32 h-32 border bg-[#47646a] border-none rounded-md"></div>
          <div className="  w-32 h-32 border bg-[#47646a] border-none rounded-md"></div>
        </div>
        <div className="flex gap-4 justify-center py-2">
          <div className="  w-32 h-32 border bg-[#47646a] border-none rounded-md"></div>
          <div className="  w-32 h-32 border bg-[#47646a] border-none rounded-md"></div>
          <div className="  w-32 h-32 border bg-[#47646a] border-none rounded-md"></div>
        </div>
        <div className="flex gap-4 justify-center py-2">
          <div className="  w-32 h-32 border bg-[#47646a] border-none rounded-md"></div>
          <div className="  w-32 h-32 border bg-[#47646a] border-none rounded-md"></div>
          <div className="  w-32 h-32 border bg-[#47646a] border-none rounded-md"></div>
        </div>
        <button className="flex justify-center items-center border border-none bg-[#7fe3f7] w-40 h-16 cursor-pointer text-3xl mx-auto mt-5 rounded-full">
          {" "}
          Reset{" "}
        </button>
      </div>
      {/* <div className=" flex flex-col items-center border border-blue-400 bg-blue-400 p-10 rounded-xl">
          <h1 className=" font-bold text-3xl bg-blue-400">X Score</h1>
          <p className=" font-semibold text-6xl pt-3 bg-blue-400">0</p>
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default Tictaxo;
