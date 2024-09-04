import ClickOutside from "@/components/ClickOutside";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });

  const handleProfile = async () => {
    const data: any = await axios.post("/api/users/me");
    setUserData(data.data.data);
    console.log("rendered");
  };

  const handleSignOut = async () => {
    const response = await axios.get("/api/users/signout");
    console.log(response);
    if (response.data.success) {
      toast.success("Succesfully Logged Out", {
        duration: 2000,
        position: "bottom-right",
      });
      router.push("/signin");
    } else {
      toast.error("Failed Log out.", {
        duration: 2000,
        position: "bottom-right",
      });
    }
  };

  return (
    <ClickOutside onClick={() => setDropdownOpen(false)} className="relative">
      <Link
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        href="#"
      >
        <span
          className="flex items-center gap-2 font-medium text-dark dark:text-dark-6"
          onClick={handleProfile}
        >
          <span className="hidden lg:block">
            <Image
              src="/vectors/profile.svg"
              height={20}
              width={20}
              alt="profile"
            />
          </span>

          <svg
            className={`fill-current duration-200 ease-in ${dropdownOpen && "rotate-180"}`}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.6921 7.09327C3.91674 6.83119 4.3113 6.80084 4.57338 7.02548L9.99997 11.6768L15.4266 7.02548C15.6886 6.80084 16.0832 6.83119 16.3078 7.09327C16.5325 7.35535 16.5021 7.74991 16.24 7.97455L10.4067 12.9745C10.1727 13.1752 9.82728 13.1752 9.59322 12.9745L3.75989 7.97455C3.49781 7.74991 3.46746 7.35535 3.6921 7.09327Z"
              fill=""
            />
          </svg>
        </span>
      </Link>

      {/* <!-- Dropdown Star --> */}
      {dropdownOpen && (
        <div
          className={`absolute right-0 mt-7.5 flex w-[280px] flex-col rounded-lg border-[0.5px] border-stroke bg-white shadow-default dark:border-dark-3 dark:bg-gray-dark`}
        >
          <div className="flex items-center gap-2.5 px-5 py-3">
            <span className="block">
              <span className="block font-medium text-dark dark:text-white">
                {userData.firstname} {userData.lastname}
              </span>
              <span className="block font-medium text-dark-5 dark:text-dark-6">
                {userData.email}
              </span>
            </span>
          </div>

          <div className="p-2">
            <button
              onClick={handleSignOut}
              className="flex w-full items-center gap-2.5 rounded-[7px] p-2.5 text-sm font-medium text-dark-4 duration-300 ease-in-out hover:bg-gray-2 hover:text-dark dark:text-dark-6 dark:hover:bg-dark-3 dark:hover:text-white lg:text-base"
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </ClickOutside>
  );
};

export default DropdownUser;
