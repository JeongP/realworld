import React from 'react';
import Banner from './section/Banner';
import MainView from './section/MainView';
import Tags from './section/Tags';

function Home() {
	return (
		<div class="home-page">
			<Banner />

			<div class="container page">
				<div class="row">
					<MainView />
					<Tags />
				</div>
			</div>
		</div>
	);
}

export default Home;