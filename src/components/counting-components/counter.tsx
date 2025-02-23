export function CounterComponent({
	text,
	totalSum,
	subText,
}: {
	text: string;
	totalSum: number;
	subText?: string;
}) {
	return (
		<div className="w-100">
			<div className="d-flex justify-content-between w-100">
				<p className="text-white mb-0">{text}</p>
				<p className="text-white fw-bold mb-0">{totalSum} ₴</p>
			</div>
			{subText ? (
				<p
					className="text-white mt-1 mb-0"
					style={{ fontSize: "12px" }}>
					{subText}
				</p>
			) : null}
		</div>
	);
}

export default CounterComponent;
