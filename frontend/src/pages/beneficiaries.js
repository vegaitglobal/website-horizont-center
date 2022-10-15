import { LayoutDefault } from "layouts";

import { NextSeo } from "next-seo";
import ENV from "config/env";
import beneficiariesService from "./api/beneficiariesService";
import BeneficiariesList from "components/beneficiaries/beneficiariesList";
import { useState } from "react";

const { BASE_URL = "", BASE_API_URL = "", BASE_SEO = "", STATIC_DIR = "", AUTHOR } = ENV;

function GettingStarted(props) {
  const {
    pathname,
    data: {
      title,
      results,
      pageNumber,
      pageSize,
      total,
      metaTitle,
      description,
      metaDescription,
      slug,
      services,
      block_top = {},
    },
  } = props;

  const SEOS = {
    title,
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
  const [activepageNumber, setactivepageNumber] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(Math.ceil(total / pageSize));
  function changeNumberOfPages(totalRecords, pageSize) {
    setNumberOfPages(Math.ceil(totalRecords / pageSize));
  }
  return (
    <>
      <NextSeo {...SEOS} />
      <LayoutDefault>
        <BeneficiariesList
          intialBeneficiaries={results}
          pathname={pathname}
          activePageNumber={activepageNumber}
        ></BeneficiariesList>
      </LayoutDefault>
    </>
  );
}

export async function getServerSideProps(ctx) {
  const { resolvedUrl } = ctx;
  const responseData = await beneficiariesService.getAllBeneficiaries(process.env.PROFILE_PAGE_SIZE, 1);
  return { props: { data: responseData, pathname: resolvedUrl } };
}

export default GettingStarted;
