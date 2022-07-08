export type CategoriesType = {
	alias: string;
	title: string;
};

export type CoordinatesType = {
	latitude: number;
	longitude: number;
};

export type LocationType = {
	address1: string;
	address2: string;
	address3: string;
	city: string;
	country: string;
	DisplayAddress: string[];
	state: string;
	ZipCode: string;
};

export type BusinessType = {
	categories: CategoriesType;
	coordinates: CoordinatesType;
	display_phone: string;
	distance: number;
	id: string;
	alias: string;
	image_url: string;
	is_closed: Boolean;
	Location: LocationType;
	name: string;
	phone: string;
	price: string;
	rating: number;
	review_count: number;
	url: string;
	transactions: string[];
};

export type CenterType = {
	latitude: number;
	longitude: number;
};

export type RegionType = {
	center: CenterType;
};

type SearchResultType = {
	total: number;
	businesses: BusinessType[];
	region: RegionType;
};
export default SearchResultType;
