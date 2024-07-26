import { pageText } from "../assets/Text";

const YesPage = () => {
  return (
    <>
      <div className="h-[500px] w-[350px] lg:w-4/5 bg-slate-300 flex items-center justify-center flex-col relative">
        <img
          src={pageText[4].imgUrl}
          alt="gif"
          className="h-[270px] w-[270px] rounded-md mb-4"
        />
        <h1 className="text-2xl font-bold text-center px-1">
          {pageText[4].headtext}
        </h1>
        <p className="text-xl mt-1 mb-2">{pageText[4].peraText}</p>
      </div>
    </>
  );
};

export default YesPage;
