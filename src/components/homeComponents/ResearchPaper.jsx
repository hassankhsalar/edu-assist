"use client";
import rp from "@/data/researchPapers.json";

const ResearchPaper = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center py-4 mb-6">Research Papers</h1>

      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-3">
      {rp.map((rp, index) => (
        <div
          key={index}
          className="w-full dark:bg-slate-800 md:min-w-[60%] md:max-w-[90%] relative bg-white boxShadow rounded-xl flex sm:flex-row flex-col gap-[20px] p-4"
        >
          <div className="w-full sm:w-[50%]">
            <img
              src="https://img.freepik.com/free-photo/close-up-portrait-handsome-young-hipster-man-hazel-eyes-wearing-trendy-plaid-shirt-posing-near-city-cafe_291049-1495.jpg?t=st=1722616951~exp=1722620551~hmac=88c27af52ea53d69a3f15a046cd8f7fe8c8036a5c733e1e1449b78bc68aeef24&w=360"
              alt="image"
              className="w-full sm:w-[100px] h-[100px] object-cover sm:rounded-full"
            />
          </div>

          <div className="">
            <h1 className="text-[1.4rem] dark:text-[#abc2d3] font-bold leading-[24px]">
              {rp.topic}
            </h1>
            <span className="text-[0.9rem] text-gray-400">{rp.researcherName}</span>

            <p className="text-gray-600 mt-3 dark:text-[#abc2d3]/90 text-[0.9rem]">
              {rp.description}
            </p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ResearchPaper;
