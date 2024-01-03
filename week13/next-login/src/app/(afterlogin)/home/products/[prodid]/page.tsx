"use client";
import React, { useEffect, useState } from "react";
type Params = {
  params: {
    prodid: String;
  };
};
// type Details = {
//   prod: {
//     id: Number;
//     name: String;
//     description: String;
//     url: String;
//   };
// };
import axios from "axios";
export default function Details({ params }: Params) {
  const [prod, setprod] = useState([]);
  useEffect(() => {
    axios(
      "https://6565f015eb8bb4b70ef29ee3.mockapi.io/categories/" + params.prodid
    )
      .then((res) => {
        setprod(res.data);
      })
      .then(() => {
        console.log(prod);
      });
  }, []);
  return (
    <>
      {prod && (
        <div className="bg-white overflow-hidden shadow rounded-lg border">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              User Profile
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              This is some information about the user.
            </p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">ID</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <br />
                  {(prod as any).id}
                  {/* {prod.id} */}
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Full name</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {(prod as any).name}
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">URL</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {(prod as any).url}
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Description
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {(prod as any).description}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      )}
    </>
  );
}
