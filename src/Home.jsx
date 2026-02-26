import IndexLogin from "./components/layout/IndexLogin";
import IndexUnLogin from "./components/layout/IndexUnlogin";

export default function Home() {
	const isLogin = true;

	return <div>{isLogin ? <IndexLogin /> : <IndexUnLogin />}</div>;
}
