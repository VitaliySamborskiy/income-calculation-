import { Data } from "./types-input.ts";

function Input({ data }: { data: Data }) {
	const inputProps = {
		className: data.class,
		type: data.type,
		id: data.id,
		name: data.name,
		placeholder: data.placeholder,
		value: data.value || "",
		onChange: data.onChange,
	};

	return (
		<div className={`d-flex gap-2 flex-column ${data.classBlock}`}>
			<label
				className="text-white"
				htmlFor={data.id}>
				{data.label}
			</label>
			<input {...inputProps} />
		</div>
	);
}

export default Input;
