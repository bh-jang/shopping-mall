export type Rating = {
    rate: number;
	count: number;
}

export type Product = {
    id: number;
    title: string;
	category: string;
	description: string;
	image: string;
	price: number;
	rating: Rating
}