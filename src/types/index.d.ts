export interface ICreateBook {
	title: string;
	author: string;
}

export interface IBook extends ICreateBook {
	id: number;
	createdAt: string;
	updatedAt: string;
}
