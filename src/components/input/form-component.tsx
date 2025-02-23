import SubForms from "./input-sub-forms.tsx";
import { Data, DataAutoComplete } from "./types-input.ts";
import CounterComponent from "../counting-components/counter.tsx";
import { useState, useEffect } from "react";
import { SumCounter } from "../counting-components/counted-function.ts";
import AutoCompleteFunk from "./avtocomplite.tsx";
import DataSkinsName from "./../../assets/SkinsName.json";

function FormComponent() {
	const [purchasePrice, setPurchasePrice] = useState("");
	const [quantityPurchase, setQuantityPurchase] = useState("");
	const [purchaseSum, setPurchaseSum] = useState(0);
	const [sellingPrice, setSellingPrice] = useState("");
	const [quantitySelling, setQuantitySelling] = useState("");
	const [sellingSum, setSellingSum] = useState(0);

	const PropsInput: DataAutoComplete = {
		classBlock: "w-100",
		label: "Назва товару",
		placeholder: "Веддіть назву товару",
		dataListItems: DataSkinsName,
	};

	const PropsPurchasePrice: Data[] = [
		{
			class: "bg-dark rounded border p-2 text-white w-100",
			label: "Ціна закупки",
			type: "number",
			id: "purchasePrice",
			name: "purchasePrice",
			placeholder: "Веддіть ціну покупки",
			classBlock: "w-100",
			value: purchasePrice,
			onChange: event => setPurchasePrice(event.target.value),
		},
		{
			class: "bg-dark rounded border p-2 text-white w-100",
			label: "Кількість товару",
			type: "number",
			id: "quantityPurchaseProduct",
			name: "quantityPurchaseProduct",
			placeholder: "Веддіть кількість товару",
			classBlock: "w-100",
			value: quantityPurchase,
			onChange: event => setQuantityPurchase(event.target.value),
		},
	];

	const PropsSellingPrice: Data[] = [
		{
			class: "bg-dark rounded border p-2 text-white w-100",
			label: "Ціна продажу",
			type: "number",
			id: "sellingPrice",
			name: "sellingPrice",
			placeholder: "Веддіть ціну прожажу",
			classBlock: "w-100",
			value: sellingPrice,
			onChange: event => setSellingPrice(event.target.value),
		},
		{
			class: "bg-dark rounded border p-2 text-white w-100",
			label: "Кількість товару",
			type: "number",
			id: "quantitySellingProduct",
			name: "quantitySellingProduct",
			placeholder: "Веддіть кількість товару",
			classBlock: "w-100",
			value: quantitySelling,
			onChange: event => setQuantitySelling(event.target.value),
		},
	];

	useEffect(() => {
		setPurchaseSum(SumCounter(+purchasePrice, +quantityPurchase, false));
		setSellingSum(SumCounter(+sellingPrice, +quantitySelling, true));
	}, [purchasePrice, quantityPurchase, sellingPrice, quantitySelling]);

	return (
		<form
			className="mt-4 rounded border p-4"
			name="Form">
			<AutoCompleteFunk data={PropsInput} />
			<div className="d-flex justify-content-between gap-5 mt-5">
				<div className="w-100 d-flex flex-column gap-4">
					<SubForms
						inputsProps={PropsPurchasePrice}
						classAdd={"w-60 justify-content-between"}
					/>
					<CounterComponent
						text={"Сума витрат"}
						totalSum={purchaseSum}
					/>
				</div>
				<div className="w-100 d-flex flex-column gap-4">
					<SubForms
						inputsProps={PropsSellingPrice}
						classAdd={"w-60 justify-content-between"}
					/>
					<CounterComponent
						text={"Сума прибутків"}
						totalSum={sellingSum}
						subText={"З урахуванням комісії 15%"}
					/>
				</div>
			</div>
			<button
				type="submit"
				className="p-2 text-white w-100 mt-5 rounded bg-gray border-0 bg-success">
				+ Додати до списку
			</button>
		</form>
	);
}

export default FormComponent;
