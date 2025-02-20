"use client";

import React, { useState } from "react";
function Header() {
  console.log("Header", Math.random());
  const date = new Date();
  return (
    <header className="container flex flex-wrap items-center justify-center p-5 mb-12">
      <div className="flex flex-col justify-center">
        <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          React Counter with New React compiler
        </h1>

        <p className="font-normal text-gray-700 dark:text-gray-400">
          {" "}
          {date.toString()}{" "}
        </p>
      </div>
    </header>
  );
}

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className="container flex flex-col justify-center items-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {count}
        </h5>

        <button
          type="button"
          className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
      </div>
    </>
  );
}
