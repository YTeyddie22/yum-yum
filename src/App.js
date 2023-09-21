import Menu from "./menu";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

function App() {
	const x = "Teddy";

	return (
		<div className="container">
			<Header />

			<Menu />

			<Footer />
		</div>
	);
}

export default App;
