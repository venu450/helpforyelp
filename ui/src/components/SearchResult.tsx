import React, { useEffect, useState } from 'react';
import SearchResultType, { CoordinatesType, LocationType } from '../utils/yelptypes';
import { Card, Input, Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import { Button, Descriptions, PageHeader } from 'antd';
import { search } from '../services/services';
import { URLSearchParamsInit, useLocation } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { RegionType, CenterType, BusinessType, CategoriesType } from '../utils/yelptypes';
import { Image } from 'antd';

interface CustomizedState {
	term: string;
	//latitude: string;
	//longitude: string;
}

function CallSearch(SearchText: any) {
	const InitialCenter: CenterType = {
		latitude: 37.786882,
		longitude: -122.399972,
	};

	const InitialRegion: RegionType = {
		center: InitialCenter,
	};

	const InitialCategories: CategoriesType = {
		alias: 'hstdhb',
		title: 'rgesrhbed',
	};

	const InitialCoordinates: CoordinatesType = {
		latitude: 37.786882,
		longitude: -122.399972,
	};

	const InitialLocation: LocationType = {
		address1: 'tgbdh',
		address2: 'gerhebe',
		address3: 'fvzrg',
		city: 'bdthbd',
		country: 'dgdfgb',
		DisplayAddress: ['grsh', 'gxdth'],
		state: 'gxdfh',
		ZipCode: 'gedhr',
	};

	const InitialBusiness: BusinessType[] = [
		{
			categories: InitialCategories,
			coordinates: InitialCoordinates,
			display_phone: '9381574426',
			distance: 32,
			id: 'vsezbg',
			alias: 'fgvedzr',
			image_url: 'srfgdf',
			is_closed: true,
			Location: InitialLocation,
			name: 'drgezdr',
			phone: 'egdezgrdz',
			price: 'gdeth',
			rating: 4,
			review_count: 12,
			url: 'egseths',
			transactions: ['rgerg', 'wsgr'],
		},
		{
			categories: InitialCategories,
			coordinates: InitialCoordinates,
			display_phone: '9381574426',
			distance: 33,
			id: 'vsezbg',
			alias: 'fgvedzr',
			image_url: 'srfgdf',
			is_closed: true,
			Location: InitialLocation,
			name: 'drgezdr',
			phone: 'egdezgrdz',
			price: 'gdeth',
			rating: 4,
			review_count: 12,
			url: 'egseths',
			transactions: ['rgerg', 'wsgr'],
		},
	];

	const InitialState: SearchResultType = {
		total: 12,
		businesses: InitialBusiness,
		region: InitialRegion,
	};
	const [dataState, setData] = useState(InitialState);
	//console.log(SearchText);
	search({
		params: {
			term: SearchText,
			latitude: 37.786882,
			longitude: -122.399972,
		},
	}).then((data1: any) => {
		//console.log(data1.data);
		setData(data1.data);
	});
	if (dataState.total == 12) return null;
	else {
		//console.log('Inside else part calling bottom');
		return (
			<div>
				<Bottom total={dataState.total} businesses={dataState.businesses} region={dataState.region} />
			</div>
		);
	}
}

const SerializeSearchQuery = (input1: string) => {
	const params = {
		term: 'pizza',
		latitude: '37.786882',
		longitude: '-122.399972',
	};
	return params;
};

const HandleSearch2 = () => {
	const [text_searched, set_text_searched] = useState('');
	const [searchParams, setSearchParams] = useSearchParams();
	const location = useLocation();
	const state = location.state as CustomizedState;
	//console.log('inside handlesearch');
	set_text_searched(state.term);
	const params = SerializeSearchQuery(text_searched);
	setSearchParams(params);
	return <p> updated url </p>;
};

const Top = () => {
	const [text_searched, set_text_searched] = useState('');
	const [searchParams, setSearchParams] = useSearchParams();

	const navigate = useNavigate();
	const location = useLocation();
	const state = location.state as CustomizedState;

	const HandleSearch2 = () => {
		//console.log('inside handlesearch');
		set_text_searched(state.term);

		const params = SerializeSearchQuery(text_searched);
		setSearchParams(params, { replace: true });
	};
	return (
		<PageHeader
			ghost={false}
			onBack={() => window.history.back()}
			title="Yelp"
			subTitle={'This is a Results page'}
			extra={[
				<Input key="1" type="text" placeholder=" Enter your search" name="search" allowClear onChange={(event) => set_text_searched(event.target.value)} />,

				<Button key="2" type="primary" onClick={() => HandleSearch2()}>
					Search
				</Button>,
			]}></PageHeader>
	);
};

function DisplayBusiness(Business: BusinessType) {
	//<Image src={Business.image_url} />
	return (
		<div>
			<Card title={Business.name}>
				<p>Review count : {Business.review_count}</p>
				<p>Rating : {Business.rating}</p>
				<Image src={Business.image_url} />
			</Card>
		</div>
	);
}

function OneBusinessDisplay(props: any) {
	const Business: BusinessType = props.business;
}

function BusinessHelp(Business: BusinessType) {}

const Bottom = (data: SearchResultType) => {
	//console.log('InsideBottom');
	console.log(data);
	const TotalBusiness = data.businesses;
	//const ModifiedBusiness = TotalBusiness.map(DisplayBusiness);
	const ModifiedBusiness = TotalBusiness.map((business) => (
		<div key={business.id}>
			<div>
				<Image src={business.image_url} />
			</div>
		</div>
	));
	return (
		<div>
			<h1> total = {data.total}</h1>
			{TotalBusiness.map((Business) => (
				<DisplayBusiness
					key={Business.id}
					categories={Business.categories}
					coordinates={Business.coordinates}
					display_phone={Business.display_phone}
					distance={Business.distance}
					id={Business.id}
					alias={Business.alias}
					image_url={Business.image_url}
					is_closed={Business.is_closed}
					Location={Business.Location}
					name={Business.name}
					phone={Business.phone}
					price={Business.price}
					rating={Business.rating}
					review_count={Business.review_count}
					url={Business.url}
					transactions={Business.transactions}
				/>
			))}
		</div>
	);
};

const SearchResult = () => {
	const [text_searched, set_text_searched] = useState('Empty');
	const location = useLocation();
	const state = location.state as CustomizedState;
	let flag = 0;
	if (state.term) {
		flag = 1;
	} else {
		flag = 0;
	}
	const [searchParams, setSearchParams] = useSearchParams();
	if (flag == 0) {
		return (
			<div>
				<Top />
			</div>
		);
	} else {
		return (
			<div>
				<Top />
				<h1> Term Searched is {state.term}</h1>
				<CallSearch props={state.term} />
			</div>
		);
	}
};

export default SearchResult;
