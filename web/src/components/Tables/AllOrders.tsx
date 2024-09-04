"use client";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import mongoose from "mongoose";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const AllOrders = () => {
  const [orderData, setOrderData] = useState({
    itemname: "",
    quantity: "",
    quickdelivery: false,
    expecteddelivery: new Date(),
  });
  const [allorders, setAllOrders]: any = useState([]);
  const [onSubmit, setOnSubmit] = useState(false);

  useEffect(() => {
    const fetchallOrders = async () => {
      const response = await axios.get("/api/products/orders/getallorders");
      setAllOrders(response.data.orders);
      // console.log(response.data.orders);
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

  const handleOrder = async () => {
    // console.log(orderData);
    const response = await axios.post(
      "/api/products/orders/neworder",
      orderData,
    );
    onClose();
    setOnSubmit(true);
    // console.log(response.data);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  return (
    <div className="rounded-[10px] border border-stroke bg-white p-4 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:p-7.5">
      <button
        onClick={onOpen}
        className="text-body-2xl mb-4 rounded-lg bg-blue-500 px-4 py-2 font-bold text-white dark:text-dark"
      >
        Add New Order
      </button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add a new order!</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Items Name</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Items Name"
                onChange={(e) =>
                  setOrderData({ ...orderData, itemname: e.target.value })
                }
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Quantity</FormLabel>
              <Input
                type="number"
                placeholder="Quantity"
                onChange={(e) =>
                  setOrderData({ ...orderData, quantity: e.target.value })
                }
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Suitable Delivery Date</FormLabel>
              <Input
                placeholder="Suitable Delivery"
                type="datetime-local"
                onChange={(e) => {
                  setOrderData({
                    ...orderData,
                    expecteddelivery: new Date(e.target.value),
                  });
                }}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>
                Quick Delivery(3 Per user, per month), Write Yes
              </FormLabel>
              <Input
                type="boolean"
                placeholder="Quick Delivery"
                onChange={(e) =>
                  setOrderData({
                    ...orderData,
                    quickdelivery:
                      e.target.value.toLowerCase() == "yes" ? true : false,
                  })
                }
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleOrder}>
              Place Order
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-[#F7F9FC] text-left dark:bg-dark-2">
              <th className="min-w-[220px] px-4 py-4 font-medium text-dark dark:text-white xl:pl-7.5">
                Items
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
            {allorders.map((items: any, index: any) => (
              <tr key={index}>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pl-7.5 ${index === allorders.length - 1 ? "border-b-0" : "border-b"}`}
                >
                  <h5 className="text-dark dark:text-white">
                    {items.itemname}
                  </h5>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${index === allorders.length - 1 ? "border-b-0" : "border-b"}`}
                >
                  <p className="text-dark dark:text-white">{items.quantity}</p>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 ${index === allorders.length - 1 ? "border-b-0" : "border-b"}`}
                >
                  <p
                    className={`inline-flex rounded-full px-3.5 py-1 text-body-sm font-medium ${
                      items.deliverystatus === "Delivered"
                        ? "bg-[#219653]/[0.08] text-[#219653]"
                        : items.deliverystatus === "Cancelled"
                          ? "bg-[#D34053]/[0.08] text-[#D34053]"
                          : "bg-[#FFA70B]/[0.08] text-[#FFA70B]"
                    }`}
                  >
                    {items.deliverystatus}
                  </p>
                </td>
                <td
                  className={`border-[#eee] px-4 py-4 dark:border-dark-3 xl:pr-7.5 ${index === allorders.length - 1 ? "border-b-0" : "border-b"}`}
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
                        onClick={() => handleDelete(items._id)}
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

export default AllOrders;
