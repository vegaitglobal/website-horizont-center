import React, { useState } from "react";

import { LayoutDefault } from "layouts";

import { NextSeo } from "next-seo";

import ENV from "config/env";
import { Card } from "../shared-components/card/card";

const { BASE_URL = "", BASE_API_URL = "", BASE_SEO = "", STATIC_DIR = "", AUTHOR } = ENV;

export const Home = (props) => {
  const {
    pathname,
    data: { title, metaTitle, description, metaDescription, packages = [], services = [], block_top = {} },
  } = props;

  const [visible, setVisible] = useState(true);

  const onDismiss = () => setVisible(false);

  const SEOS = {
    title: title,
    description: metaDescription,
    canonical: `${BASE_URL}${pathname}`,
    openGraph: [
      {
        url: BASE_URL,
        images: { url: `${BASE_URL}${STATIC_DIR}logo-share.jpg` },
        site_name: AUTHOR,
      },
    ],
    ...BASE_SEO,
  };

  return (
    <>
      <NextSeo {...SEOS} />
      <LayoutDefault pathname={pathname}>
        <Card
          category="Tempor"
          description="Felis lectus tortor massa a eget viverra integer faucibus adipiscing. Faucibus nunc, auctor arcu magna cursu"
          smallDescription="Morbi sem pharetra varius porttitor amet, nulla arcu massa tempor ridiculus."
          date="20.09.2022"
          onClick={() => {}}
        />
      </LayoutDefault>
    </>
  );
};

export async function getServerSideProps(ctx) {
  const { resolvedUrl } = ctx;
  const res = await fetch(`${BASE_API_URL}/api`);
  const json = await res.json();
  return { props: { data: json, pathname: resolvedUrl } };
}

export default Home;
