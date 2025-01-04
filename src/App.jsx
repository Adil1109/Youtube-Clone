import { useState, useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import HomeVideos from './HomeVideos';
import SearchPage from './SearchPage';
import VideoPlayPage from './VideoPlayPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TrendingVideos from './TrendingVideos';

function App() {
	const [isSidebarVisible, setIsSidebarVisible] = useState(true);
	const [isSmallScreen, setIsSmallScreen] = useState(false);

	// Handle screen size change
	useEffect(() => {
		const mediaQuery = window.matchMedia('(max-width: 768px)');
		const handleMediaChange = () => setIsSmallScreen(mediaQuery.matches);
		handleMediaChange();

		mediaQuery.addEventListener('change', handleMediaChange);

		return () => mediaQuery.removeEventListener('change', handleMediaChange);
	}, []);

	// Hide sidebar by default on small screens
	useEffect(() => {
		if (isSmallScreen) {
			setIsSidebarVisible(false);
		} else {
			setIsSidebarVisible(true);
		}
	}, [isSmallScreen]);

	const toggleSidebar = () => {
		setIsSidebarVisible((prev) => !prev);
	};

	return (
		<BrowserRouter>
			<Header toggleSidebar={toggleSidebar} />
			<div className='appContainer'>
				{isSidebarVisible && <Sidebar />}
				<div style={{ width: '100%' }}>
					<Routes>
						<Route path='/videoplaypage/:videoId' element={<VideoPlayPage />} />
						<Route path='/search/:searchTerm' element={<SearchPage />} />
						<Route path='/trending' element={<TrendingVideos />} />
						<Route path='/' element={<HomeVideos />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
