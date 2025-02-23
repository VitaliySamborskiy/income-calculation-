export function SumCounter(price: number, quantity: number, commission: boolean): number {
	const total = Math.round(price * 100) * quantity;
	if (commission) {
		if (total > 0 && total <= 33) {
			return (Math.ceil(total / 1.15) + 1) / 100;
		} else if (total < 100) {
			return Math.ceil(total / 1.15) / 100;
		}
		return Math.round(total / 1.15) / 100;
	}
	return total / 100;
}
