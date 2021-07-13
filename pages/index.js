import React, { useState } from "react";
import { gql } from "@apollo/client";
import client from "../apollo-client";
import Modal from "./components/modal";

export default function MyModal({ services, segments, types }) {
  let [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md bg-opacity-50 hover:bg-opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open Modal
        </button>
      </div>
      <Modal
        services={services}
        segments={segments}
        types={types}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        closeModal={closeModal}
        openModal={openModal}
      />
    </>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Options {
        services {
          service
        }
        types {
          type
        }
        segments {
          segment
        }
      }
    `,
  });

  return {
    props: {
      services: data.services,
      types: data.types,
      segments: data.segments,
    },
  };
}
