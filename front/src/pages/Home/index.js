import React from 'react';
import Banner from './Banner';
import MainView from './MainView';
import Tags from './Tags';

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