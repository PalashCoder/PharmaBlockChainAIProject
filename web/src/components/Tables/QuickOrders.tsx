"use client";
import axios from "axios";
import mongoose from "mongoose";
import Image from "next/image";
import { useEffect, useState } from "react";

const QuickOrders = () => {
  const [allQuickOrders, setAllQuickOrders]: any = useState([]);
  const [onSubmit, setOnSubmit] = useState(false);

  useEffect(() => {
    const fetchallOrders = async () => {
      const response = await axios.get("/api/products/orders/quickorders");
      setAllQuickOrders(response.data.quickorders);
      // console.log(response.data.quickorders);
    };
    fetchallOrders();
    setOnSubmit(false);
  }, [onSubmit]);

  const handleDelete = async (id: mongoose.Schema.Types.ObjectId) => {
    // console.log(id);
    try {
      const response = await axios.delete(
        `/api/products/orders/deleteorder/${id}`,
      );
      setOnSubmit(true);
      // console.log(response);
    } catch (error) {
      console.error("Error deleting the order:", error);
    }
  };
  return (
    <div className="rounded-[10px] border border-stroke bg-white p-4 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:p-7.5">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-[#F7F9FC] text-left dark:bg-dark-2">
              <th className="min-w-[220px] px-4 py-4 font-medium text-dark dark:text-white xl:pl-7.5">
                Urgent Items
              </th>
              <th className="min-w-[150px] px-4 py-4 font-medium text-dark dark:text-white">
                Quantity
              </th>
              <th className="min-w-[120px] px-4 py-4 font-medium text-dark dark:text-white">
                Status
              </th>
              <th className="px-4 py-4 text-right font-medium text-dark dark:text-white xl:pr-7.5">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {allQuickOrders.map((item: any, index: any) => (
              <tr key={index}>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7.5 ${index === allQuickOrders.length - 1 ? "border-b-0" : "border-b"}`}
                >
                  <h5 className="text-dark dark:text-white">{item.itemname}</h5>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${index === allQuickOrders.length - 1 ? "border-b-0" : "border-b"}`}
                >
                  <p className="text-dark dark:text-white">{item.quantity}</p>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${index === allQuickOrders.length - 1 ? "border-b-0" : "border-b"}`}
                >
                  <p
                    className={`inline-flex rounded-full px-3.5 py-1 text-body-sm font-medium ${
                      item.deliverystatus === "Moderate"
                        ? "bg-[#219653]/[0.08] text-[#219653]"
                        : item.deliverystatus === "High"
                          ? "bg-[#D34053]/[0.08] text-[#D34053]"
                          : "bg-[#FFA70B]/[0.08] text-[#FFA70B]"
                    }`}
                  >
                    {item.deliverystatus}
                  </p>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pr-7.5 ${index === allQuickOrders.length - 1 ? "border-b-0" : "border-b"}`}
                >
                  <div className="flex items-center justify-end space-x-3.5">
                    {/* <button className="font-bold text-dark dark:text-white">
                      <Image
                        src="/vectors/tick.svg"
                        height={30}
                        width={30}
                        alt="More"
                        className="hover:rounded-full hover:shadow-md hover:shadow-gray-400"
                      />
                    </button> */}
                    <button className="font-bold text-dark dark:text-white">
                      <Image
                        src="/vectors/cross.svg"
                        height={25}
                        width={25}
                        alt="More"
                        className="p-1 hover:rounded-full hover:shadow-md hover:shadow-gray-400"
                        onClick={() => handleDelete(item._id)}
                      />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QuickOrders;
