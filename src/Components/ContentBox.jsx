import { pageText } from "../assets/Text";
import { useState } from "react";
import YesPage from "./YesPage";

const ContentBox = () => {
  let [count, setCount] = useState(0);
  // const [cls, setCls] = useState("block");

  // switch (count) {
  //   case 4:
  //     setCls("hidden")

  //     break;

  //   default:
  //     setCls("block");
  //     break;
  // }

  function handleYesClick() {
    switch (count) {
      case 0:
        // setCls("hidden");
        setCount(4);

        break;
      case 1:
        setCount(4);
        // setCls("hidden");
        break;
      case 2:
        setCount(4);
        // setCls("hidden");
        break;
      case 3:
        setCount(4);
        // setCls("hidden");
        break;
      case 4:
        // setCls("hidden");
        break;

      default:
        break;
    }
  }
  function handleNoClick() {
    switch (count) {
      case 0:
        // setCls("hidden");
        setCount(1);

        break;
      case 1:
        setCount(2);
        // setCls("hidden");
        break;
      case 2:
        setCount(3);
        // setCls("hidden");
        break;
      case 3:
        setCount(0);
        // setCls("hidden");
        break;
      case 4:
        // setCls("hidden");
        break;

      default:
        break;
    }
  }

  console.log(count);

  return (
    <>
      {/* Buttons For Choice */}
      {
    count < 4 ? (
      <div className="h-[500px] w-[350px] lg:w-4/5 bg-slate-300 flex items-center justify-center flex-col relative">
      {/* GIF Image */}
      <img
        src={pageText[count].imgUrl}
        alt="gif"
        className="h-[270px] w-[270px] rounded-md mb-4"
      />

      {/* Header Text (Primary)*/}
      <h1 className="text-2xl font-bold text-center px-1">
        {pageText[count].headtext}
      </h1>
      {/* Header Text (Secondary)*/}
      <p className="text-xl mt-1 mb-2">{pageText[count].peraText}</p>


        <div
        className={` flex flex-row items-center justify-center gap-9 mt-5   `}
      >
        {/* Yes Button */}
        <button
          onClick={handleYesClick}
          className="  bg-white font-semibold border-none outline-none px-7 py-2 rounded-lg"
        >
          Yes
        </button>

        {/* No Button */}
        <button
          onClick={handleNoClick}
          className={` bg-white font-semibold border-none outline-none px-7 py-2 rounded-lg  `}
          id="no-btn"
        >
          No
        </button>
        </div>
        </div>
    ) : (
      
          <YesPage/>
        )
    }
    </>
  );
};

export default ContentBox;
