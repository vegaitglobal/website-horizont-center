import { LayoutDefault } from "layouts";
import { NextSeo } from "next-seo";
import { Contact } from "components";
import ENV from "config/env";

const { BASE_URL = "", STATIC_DIR = "", AUTHOR } = ENV;

function Documentation(props) {
	const {
		pathname,
	} = props;

	const SEOS = {
		title: "Kontakt",
		canonical: `${BASE_URL}${pathname}`,
		openGraph: [
			{
				url: BASE_URL,
				images: { url: `${BASE_URL}${STATIC_DIR}logo-share.jpg` },
				site_name: AUTHOR,
			},
		],
	};

	return (
		<>
			<NextSeo {...SEOS} />
			<LayoutDefault>
				<Contact/>
			</LayoutDefault>
		</>
	);
}

export async function getServerSideProps(ctx) {
	const { resolvedUrl } = ctx;
	return { props: { pathname: resolvedUrl } };
}

export default Documentation;
