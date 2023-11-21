import './App.css';
import Header from './Header';
import HomeVideos from './HomeVideos';
import Sidebar from './Sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchPage from './SearchPage';
import VideoPlayPage from './VideoPlayPage';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<div className='appContainer'>
				<Routes>
					<Route
						path='/videoplaypage'
						element={
							<>
								<Sidebar />
								<VideoPlayPage />
							</>
						}
					/>

					<Route
						path='/search/:searchTerm'
						element={
							<>
								<Sidebar />
								<SearchPage />
							</>
						}
					/>

					<Route
						path='/'
						element={
							<>
								<Sidebar />
								<HomeVideos />
							</>
						}
					/>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
