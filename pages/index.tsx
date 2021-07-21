import React from 'react';
import getConfig from 'next/config';

const { serverRuntimeConfig } = getConfig();
console.log(serverRuntimeConfig);

export default function Page({ count }: { count: number }) {
    return <h1>I am working with count: {count}</h1>;
}

export const getServerSideProps = async () => {
    return {
        props: {
            count: 1,
        },
    };
};
