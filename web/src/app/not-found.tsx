"use client";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const NotFound = () => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const response = async () => {
      const responseData = await axios.get("/api/users/token");
      setToken(responseData.data.data);
    };
    response();
  }, []);

  return (
    <>
      {token ? (
        <DefaultLayout>
          <center className="my-[10rem]">
            <h1 className="text-xl font-bold">Page not Found, 404</h1>
            <Image
              src="/images/illustration/illustration-01.svg"
              height={400}
              width={400}
              alt="404"
            />
            <button className="mt-4">
              <Link
                href="/"
                className="text-body-2xl mb-4 rounded-lg bg-blue-500 p-2 font-bold text-white dark:text-dark"
              >
                Return To Home Page
              </Link>
            </button>
          </center>
        </DefaultLayout>
      ) : (
        <center className="my-[10rem]">
          <h1 className="text-xl font-bold">Page not Found, 404</h1>
          <Image
            src="/images/illustration/illustration-01.svg"
            height={400}
            width={400}
            alt="404"
          />
          <button className="mt-4">
            <Link
              href="/"
              className="text-body-2xl mb-4 rounded-lg bg-blue-500 p-2 font-bold text-white dark:text-dark"
            >
              Return To Home Page
            </Link>
          </button>
        </center>
      )}
    </>
  );
};

export default NotFound;
