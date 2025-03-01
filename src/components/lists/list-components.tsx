import { ListItemType } from "./type-list.ts";
import ListItem from "./list-item.tsx";

type TitleType = {
	name: string;
	id: number;
};

function ListComponents({ data, onDelete }: { data: ListItemType[]; onDelete(index: number) }) {
	const title: TitleType[] = [
		{ name: "Назва товару", id: 1 },
		{ name: "Закупна кількість", id: 2 },
		{ name: "Закупна ціна", id: 3 },
		{ name: "Кількість продажу", id: 4 },
		{ name: "Ціна продажу", id: 5 },
		{ name: "Дохід", id: 6 },
	];

	return (
		<div className="mt-5 mb-5 p-3 border rounded">
			<div className="d-flex justify-content-between gap-1">
				{title.map(item => {
					return (
						<p
							className="text-white text-truncate m-0 w-100 text-center"
							style={{ fontSize: "12px" }}
							key={item.id}>
							{item.name}
						</p>
					);
				})}
			</div>
			<div className="mt-1 px-3 mt-3">
				{data.map((item, index) => (
					<ListItem
						onDelete={onDelete}
						dataObg={item}
						id={index}
					/>
				))}
			</div>
		</div>
	);
}

export default ListComponents;
