import Input from "./input.tsx";
import { Data } from "./types-input.ts";

function SubForms({ inputsProps, classAdd }: { inputsProps: Data[]; classAdd: string }) {
	return (
		<fieldset className={`d-flex align-items-center gap-4 ${classAdd}`}>
			{inputsProps.map((inputProps, index) => (
				<Input data={inputProps} />
			))}
		</fieldset>
	);
}

export default SubForms;
