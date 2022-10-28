import React from "react";

const ProfileMenu = () => {
  return (
    <div className="flex items-center gap-3 text-white">
      <p className="cursor-pointer">Chijioke</p>
      <img
        className="rounded-full h-[45px] w-[45px] border-2 border-orange-700 overflow-hidden cursor-pointer"
        src="/images/profile.jpg"
        alt=""
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 cursor-pointer"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    </div>
  );
};

export default ProfileMenu;
