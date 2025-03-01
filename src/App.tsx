import Title from "./components/main-text.tsx";
import FormComponent from "./components/input/form-component.tsx";
import "./scss/custom-prime.scss";
import ListComponents from "./components/lists/list-components.tsx";
import { ListItemType } from "./components/lists/type-list.ts";
import IconsSpraite from "./components/icons/icons-spraite.tsx";
import { useEffect, useState } from "react";

function App() {
	const [dataItems, setDataItems] = useState<ListItemType[]>([]);

	const handeleFormSubmit = (formData: ListItemType) => {
		setDataItems(prevItems => [...prevItems, formData]);
	};

	const deleteItems = (index: number) => {
		setDataItems(dataItems.filter((_, indexEl) => indexEl !== index));
	};

	useEffect(() => {
		setDataItems(JSON.parse(localStorage.getItem("data")));
	}, []);

	useEffect(() => {
		setTimeout(() => {
			localStorage.setItem("data", JSON.stringify(dataItems));
		}, 0);
	}, [dataItems]);

	return (
		<>
			<Title />
			<FormComponent onSubmit={handeleFormSubmit} />
			<ListComponents
				data={dataItems}
				onDelete={deleteItems}
			/>
			<IconsSpraite />
		</>
	);
}

export default App;
