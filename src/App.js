import { ResetCSS } from "./components/global/resetCSS";
import Layout from "./components/layout";

function App() {
	return (
		<main>
			<ResetCSS />
			<Layout>
				<div>User</div>
				<div>Repos</div>
			</Layout>
		</main>
	);
}

export default App;
