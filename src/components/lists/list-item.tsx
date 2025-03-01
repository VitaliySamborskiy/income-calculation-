import IconElement from "../icons/icon-element.tsx";
import { IncomeObgType, ListItemType } from "./type-list.ts";
import { IconType } from "../icons/icon-type.ts";
import React, { useEffect, useState } from "react";
import { income } from "./income.ts";

function ListItem({
	dataObg,
	id,
	onDelete,
}: {
	dataObg: ListItemType;
	id: number;
	onDelete(index: number);
}) {
	const [incomeRes, setIncomeObject] = useState<string>("");
	const [iconDataArrow, setIconDataArrow] = useState<IconType>({
		name: "arrow",
		sizeWidth: 20,
		sizeHeight: 20,
		color: "",
		orientation: 0,
	});

	const DeleteItems = (event: React.MouseEvent<HTMLButtonElement>) => {
		onDelete(+event.currentTarget.id);
	};

	useEffect(() => {
		const result: IncomeObgType = income(dataObg.purchasePrice, dataObg.sellingPrice);
		setIncomeObject(result.income);
		setIconDataArrow({
			...iconDataArrow,
			color: result.colorSvg,
			orientation: result.orientationSvg,
		});
	}, []);

	return (
		<address className="d-flex justify-content-between gap-5 p-3 m-0 border-top position-relative">
			<div className="d-flex justify-content-between align-items-center m-0 w-100 gap-2">
				<IconElement dataIcon={iconDataArrow} />
				<p
					className="text-white text-truncate m-0 w-100"
					style={{ fontSize: "14px" }}>
					{dataObg.name}
				</p>
			</div>
			<p
				className="text-white text-truncate m-0 w-100 text-center"
				style={{ fontSize: "14px" }}>
				x {dataObg.purchaseQuantity}
			</p>
			<p
				className="text-white text-truncate m-0 w-100 text-center"
				style={{ fontSize: "14px" }}>
				{dataObg.purchasePrice} ₴
			</p>
			<p
				className="text-white text-truncate m-0 w-100 text-center"
				style={{ fontSize: "14px" }}>
				x {dataObg.quantitySelling}
			</p>
			<p
				className="text-white text-truncate m-0 w-100 text-center"
				style={{ fontSize: "14px" }}>
				{dataObg.sellingPrice} ₴
			</p>
			<div className="d-flex justify-content-center align-items-center m-0 w-100 pe-4 gap-2">
				<p
					className="text-white text-truncate m-0 w-100 text-end"
					style={{ fontSize: "14px", fontColor: `${iconDataArrow.color}` }}>
					{incomeRes}
				</p>
				<IconElement dataIcon={iconDataArrow} />
			</div>
			<button
				onClick={DeleteItems}
				className="btn btn-danger py-0 end-0 fw-bold text-white px-2 position-absolute"
				id={`${id}`}>
				X
			</button>
		</address>
	);
}

export default ListItem;
