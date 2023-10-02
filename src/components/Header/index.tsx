import React, { useState } from "react";
import InformationCircleIcon from "@heroicons/react/24/outline/InformationCircleIcon";
import Logo from "@assets/logo.svg";

const Header = () => {
  const [modal, modalToggler] = useState<boolean>(false);

  return (
    <div className="pb-4 border-b flex flex-col sm:flex-row gap-3 justify-between items-start sm:items-center">
      <h1 className="flex items-center gap-3 text-3xl font-extrabold tracking-tighter">
        <img
          src={Logo}
          alt="Sentence Counter logo"
          width={32}
          height={32}
          className="block w-8 h-8"
        />
        <span>Sentence Counter</span>
      </h1>
      <p className="flex gap-1 items-center text-sm text-gray-400">
        <span>
          A text tool by{" "}
          <a className="underline" href="https://github.com/caducarvalho/">
            Cadu Carvalho
          </a>
        </span>
        <button
          type="button"
          onClick={() => modalToggler(true)}
          className="bg-transparent border-none cursor-pointer"
        >
          <InformationCircleIcon className="h-6 w-6" />
        </button>
      </p>

      <div
        className={`fixed inset-0 z-10 bg-gray-500 bg-opacity-75 w-screen overflow-y-auto transition-all ${
          modal ? "opacity-100 visible" : "opacity-0 hidden"
        }`}
      >
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
          <div className="transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white p-4 flex flex-col gap-4 sm:p-6">
              <img
                src={Logo}
                alt="Sentence Counter logo"
                width={64}
                height={64}
                className="block w-16 h-16 mx-auto"
              />
              <p className="text-sm text-center text-gray-500">
                <strong>Sentence Counter</strong> is a small application to
                count word or character length of individual sentences in a
                text, so you can visualize and fix missized sentences on the go.
              </p>
            </div>
            <div className="bg-gray-100 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                onClick={() => modalToggler(false)}
                className="inline-flex w-full justify-center rounded-md bg-red-600 ring-1 ring-gray-900/20 ring-inset px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
