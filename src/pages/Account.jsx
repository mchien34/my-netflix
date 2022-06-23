import React from "react";
import SavedShow from "../components/SavedShow";

const Account = () => {
  return (
    <>
      <div className="w-full text-white">
        <img
          className="w-full object-cover h-[400px]"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/5ea364b1-8e59-4693-8ad8-f0eaee32d1bf/3650e362-f4ad-45e6-96c3-da93379f15c2/VN-en-20220530-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="chien"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"></div>
        <div className="absolute top-[20%] p-4 md:p-8" >
          <h1 className="text-3xl md:text-5xl font-bold">My Shows</h1>
        </div>
      </div>
      <SavedShow/>
    </>
  );
};

export default Account;
