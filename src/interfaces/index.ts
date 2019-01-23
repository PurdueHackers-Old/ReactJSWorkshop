export interface IBook {
	id: number;
	title: string;
	author: string;
	createdAt: string;
	updatedAt: string;
}

export interface ICreateBook {
	title: string;
	author: string;
}
