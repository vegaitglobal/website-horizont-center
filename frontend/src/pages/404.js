import ErrorPage from "next/error";
import { LayoutDefault } from "layouts";

const Code404Page = () => {
	return (
		<LayoutDefault>
			<ErrorPage statusCode={404} withDarkMode={false}/>
		</LayoutDefault>
	);
};

export default Code404Page;
