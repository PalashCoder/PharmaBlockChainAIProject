"use client";
import Loader from "@/components/Loader";
import "@/css/satoshi.css";
import "@/css/style.css";
import { ChakraProvider } from "@chakra-ui/react";
import "flatpickr/dist/flatpickr.min.css";
import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <ChakraProvider>
          {loading ? <Loader /> : children}
          <Toaster />
        </ChakraProvider>
      </body>
    </html>
  );
}
