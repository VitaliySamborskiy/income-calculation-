import { ChangeEvent } from "react";

export type Data = {
	class: string;
	label: string;
	type: string;
	id: string;
	name: string;
	placeholder: string;
	classBlock?: string;
	value?: string;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export type DataAutoComplete = {
	classBlock: string;
	label: string;
	placeholder: string;
	dataListItems: ItemList[];
};

export type ItemList = {
	name: string;
};
