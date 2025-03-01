import SubForms from "./input-sub-forms.tsx";
import { Data, DataAutoComplete } from "./types-input.ts";
import CounterComponent from "../counting-components/counter.tsx";
import { useEffect, useState } from "react";
import { SumCounter } from "../counting-components/counted-function.ts";
import AutoCompleteFunk from "./avtocomplite.tsx";
import DataSkinsName from "./../../assets/SkinsName.json";
import { ListItemType } from "../lists/type-list.ts";
import JustValidate, { FieldRuleInterface, Rules } from "just-validate";
import { Notify } from "notiflix";

export type ValidationType = {
	inputName: string;
	rules: FieldRuleInterface[];
};

let validator: JustValidate;

function FormComponent({ onSubmit }: { onSubmit(data: ListItemType) }) {
	const [purchasePrice, setPurchasePrice] = useState("");
	const [quantityPurchase, setQuantityPurchase] = useState("");
	const [purchaseSum, setPurchaseSum] = useState(0);
	const [sellingPrice, setSellingPrice] = useState("");
	const [quantitySelling, setQuantitySelling] = useState("");
	const [sellingSum, setSellingSum] = useState(0);

	const rulesValidate: ValidationType[] = [
		{
			inputName: "#nameProduct",
			rules: [
				{
					rule: Rules.Required,
					errorMessage: "Ім'я товару не введено",
				},
			],
		},
		{
			inputName: "#sellingPrice",
			rules: [
				{
					rule: Rules.Required,
					errorMessage: "Ціну продажу не введено",
				},
			],
		},
		{
			inputName: "#quantitySellingProduct",
			rules: [
				{
					rule: Rules.Required,
					errorMessage: "Кількість не введено",
				},
			],
		},
	];

	const PropsInput: DataAutoComplete = {
		classBlock: "w-100 position-relative",
		label: "Назва товару",
		placeholder: "Веддіть назву товару",
		dataListItems: DataSkinsName,
	};

	const PropsPurchasePrice: Data[] = [
		{
			class: "bg-dark rounded border p-2 text-white w-100 ",
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

	const submitFunk = event => {
		event.preventDefault();
		if (validator) {
			validator.validate();
		}
	};

	useEffect(() => {
		if (!validator) {
			validator = new JustValidate(document.getElementById("form"), {
				errorFieldCssClass: "text-danger",
				errorLabelCssClass: "text-danger fs-6 position-absolute top-100",
			});
		}

		rulesValidate.forEach(field => {
			validator.addField(field.inputName, field.rules);
		});

		validator
			.onSuccess(() => {
				Notify.success("Інформація про операцію додана успішно");
				const data = new FormData(document.getElementById("form") as HTMLFormElement);
				onSubmit({
					name: data.get("name").toString(),
					purchaseQuantity: +data.get("quantityPurchaseProduct"),
					purchasePrice: purchaseSum,
					quantitySelling: +data.get("quantitySellingProduct"),
					sellingPrice: sellingSum,
				});
			})
			.onFail(() => {
				Notify.warning("Не всі обовязкові поля заповнені або мають не коректні дані");
			});
	}, [purchaseSum, sellingSum]);

	useEffect(() => {
		setPurchaseSum(SumCounter(+purchasePrice, +quantityPurchase, false));
		setSellingSum(SumCounter(+sellingPrice, +quantitySelling, true));
	}, [purchasePrice, quantityPurchase, sellingPrice, quantitySelling]);

	return (
		<form
			onSubmit={submitFunk}
			className="mt-4 rounded border p-4"
			name="form"
			id="form">
			<AutoCompleteFunk data={PropsInput} />
			<div className="d-flex justify-content-between gap-5 mt-5">
				<div className="w-100 d-flex flex-column gap-4">
					<SubForms
						inputsProps={PropsPurchasePrice}
						classAdd={"w-60 justify-content-between position-relative"}
					/>
					<CounterComponent
						text={"Сума витрат"}
						totalSum={purchaseSum}
					/>
				</div>
				<div className="w-100 d-flex flex-column gap-4">
					<SubForms
						inputsProps={PropsSellingPrice}
						classAdd={"w-60 justify-content-between position-relative"}
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
