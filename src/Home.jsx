import IndexLogin from "./Home/IndexLogin";
import IndexUnLogin from "./Home/IndexUnLogin";

export default function Home() {
	return <div>{true ? <IndexLogin /> : <IndexUnLogin />}</div>;
}
