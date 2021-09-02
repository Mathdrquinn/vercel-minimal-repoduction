import React from "react";
import getConfig from "next/config";

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

export default function Page({ count }) {
  return (
    <div>
      <h1>I am working with count: {count}</h1>
      <code>{JSON.stringify(serverRuntimeConfig)}</code>
      <code>{JSON.stringify(publicRuntimeConfig)}</code>
    </div>
  );
}

export const getServerSideProps = async () => {

  console.log('gSP: serverRuntimeConfig', serverRuntimeConfig)
  console.log('gSP: publicRuntimeConfig', publicRuntimeConfig)

  return {
    props: {
      count: 1,
    },
  };
};
