import React, { useEffect, useState } from 'react';
import '../App.css';
import { search } from '../services/services';
import SearchResultType from '../utils/yelptypes';
import { Button, DatePicker, version, Input, Space, PageHeader } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

function Home1() {
	return (
		<div>
			<h1>Home</h1>
			<nav>
				<Link to="/">Home</Link> | <Link to="about">About</Link>
			</nav>
		</div>
	);
}

function ShowResult(props: SearchResultType) {
	return (
		<div>
			<h1> about to show total </h1>
			<h1> total results = {props.total} </h1>
		</div>
	);
}

const Bottom = (data: any) => {
	return (
		<div>
			<h1> this is a search result page</h1>
			<p>about to show results</p>
			<p> total = {data.total}</p>
		</div>
	);
};

function CallSearch(SearchText: any) {
	const data = search({
		params: {
			term: SearchText,
			latitude: 37.786882,
			longitude: -122.399972,
		},
	});
	//console.log(data);
}

const SerializeSearchQuery = (input1: string) => {
	const params = {
		term: input1,
		latitude: '37.786882',
		longitude: '-122.399972',
	};
	return params;
};

const Top = () => {
	const [text_searched, set_text_searched] = useState('Empty');
	const [searchParams, setSearchParams] = useSearchParams();
	const navigate = useNavigate();

	const HandleSearch1 = () => {
		//CallSearch(text_searched);
		navigate('/search', { state: { term: text_searched, latitude: '37.786882', longitude: '-122.399972' } });
		//const params = SerializeSearchQuery(text_searched);
		//setSearchParams(params);
		//navigate('/search', { state: text_searched });
	};

	return (
		<PageHeader
			ghost={false}
			onBack={() => window.history.back()}
			title="Yelp"
			subTitle="This is a Home page"
			extra={[
				<Input
					key="1"
					type="text"
					placeholder=" Enter your search"
					name="search"
					allowClear
					onChange={(event) => set_text_searched(event.target.value)}></Input>,

				<Button key="2" type="primary" style={{ marginLeft: 8 }} onClick={() => HandleSearch1()}>
					Search
				</Button>,
			]}></PageHeader>
	);
};

function Home() {
	return (
		<div>
			<Top />

			<div>
				<nav>
					<Link to="/home">Home</Link>
					<Link to="/search"> Results </Link>
				</nav>
			</div>
		</div>
	);
}

export default Home;
