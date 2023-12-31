import React from "react";
import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
const FoodCard = ({ title, calories, image, ingredients }) => {
  const [Saved, SetSaved] = useState(false);
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <div className="m-5 border-black border-2 w-2/12 bg-slate-400 rounded-xl overflow-hidden">
        <img src={image} alt="image" />
        <div className="m-3">{title}</div>
        <div>
          <h1 className="m-3">{calories}</h1>
        </div>
        <div>
          {ingredients.map((ingredient) => {
            <div>
              <li>{ingredient}</li>
            </div>;
          })}
        </div>
        <button
          className="border-black border-2 rounded-lg p-2 m-2 w-2/3 "
          onClick={openModal}
        >
          View Recipe
        </button>
        {Saved ? (
          <button
            className="border-black border-2 rounded-lg p-2 m-2 w-2/3"
            onClick={() => SetSaved(false)}
          >
            Unsave
          </button>
        ) : (
          <button
            className="border-black border-2 rounded-lg p-2 m-2 w-2/3"
            onClick={() => SetSaved(true)}
          >
            Save
          </button>
        )}
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <img src={image} alt="image" className="w-full" />
                  <div className="m-3">{title}</div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default FoodCard;
