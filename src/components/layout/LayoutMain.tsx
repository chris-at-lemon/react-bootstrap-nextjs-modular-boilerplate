import React, { useEffect, useState, ReactChild, ReactChildren } from "react";
import Head from "next/head";

interface AuxProps {
  children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}

const LayoutMain = ({ children }: AuxProps) => {
  return (
    <>
      <Head>
        <title>Rainbow Weather</title>
        <meta name="title" content="Rainbow Weather" key="title_name" />
        <meta name="description" content="Get current weather frm around the world" key="description_name" />

        <meta property="og:type" content="website" key="type_property" />
        <meta property="og:site_name" content="Rainbow Weather" key="name_property" />
        <meta property="og:title" content="Get current weather frm around the world" key="title_property" />
        <meta property="og:description" content="Get current weather frm around the world" key="description_property" />
        <meta property="og:keywords" content="Weather" key="keywords_property" />
        <meta property="og:url" content="https://weather-app-omega-virid.vercel.app/" key="url" />
        <meta name="application-name" content="Rainbow Weather" key="appName" />
      </Head>

      <div className="mainWrapper">{children}</div>
    </>
  );
};

export default LayoutMain;
