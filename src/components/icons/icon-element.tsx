import { IconType } from "./icon-type.ts";

function iconElement({ dataIcon }: { dataIcon: IconType }) {
	return (
		<svg
			className=""
			height={dataIcon.sizeHeight}
			width={dataIcon.sizeWidth}
			fill={dataIcon.color ? dataIcon.color : "white"}
			transform={`rotate(${dataIcon.orientation ? dataIcon.orientation : 0})`}>
			<use xlinkHref={`#${dataIcon.name}`}></use>
		</svg>
	);
}

export default iconElement;
