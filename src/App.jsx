import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./Components/ButtonComponent";
import ImageComponent from "./Components/ImageComponent";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<ButtonComponent value="uno" />
				<ButtonComponent value="due" />
				<ButtonComponent value="tre" />
				<ImageComponent
					src="https://thumbs.dreamstime.com/b/superficie-praticante-il-surfing-dell-acqua-onda-di-oceano-mare-124362369.jpg"
					alt="aaaaaa"
				/>
			</header>
		</div>
	);
}

export default App;
