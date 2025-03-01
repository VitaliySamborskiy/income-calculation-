import { AutoComplete } from "primereact/autocomplete";
import React, { useState } from "react";
import { DataAutoComplete } from "./types-input.ts";

function AutoCompleteFunk({ data }: { data: DataAutoComplete }) {
	const [filterSkins, setFilterSkins] = useState([]);
	const [selectedSkin, setSelectedSkin] = useState(null);

	const searchSkin = event => {
		const query = event.query.toLowerCase();
		const filtered = data.dataListItems.filter(skin => skin.name.toLowerCase().includes(query));
		setFilterSkins(filtered);
	};

	return (
		<div className={`d-flex gap-2 flex-column ${data.classBlock}`}>
			<label className="text-white">{data.label}</label>
			<AutoComplete
				inputId={"nameProduct"}
				name={"name"}
				value={selectedSkin}
				suggestions={filterSkins}
				completeMethod={searchSkin}
				field="name"
				placeholder={data.placeholder}
				onChange={event => setSelectedSkin(event.value)}
				className="bg-dark rounded text-white w-100"
			/>
		</div>
	);
}

export default AutoCompleteFunk;
