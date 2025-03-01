import { IncomeObgType } from "./type-list.ts";

export function income(purchasePrice: number, sellingPrice: number): IncomeObgType {
	const sumIncome = sellingPrice - purchasePrice;
	return {
		income:
			Math.sign(sumIncome) === +1
				? `+ ${Math.abs(sumIncome).toFixed(2)} ₴`
				: `- ${Math.abs(sumIncome).toFixed(2)} ₴`,
		colorSvg: Math.sign(sumIncome) === +1 ? "green" : "red",
		orientationSvg: Math.sign(sumIncome) === +1 ? 0 : 180,
	};
}
