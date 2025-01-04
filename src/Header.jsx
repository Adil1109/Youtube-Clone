import { useState, useEffect } from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import Logo from './logo.png';

function Header({ toggleSidebar }) {
	const [searchQuery, setSearchQuery] = useState('');
	const [showSearch, setShowSearch] = useState(false);
	const [isSmallScreen, setIsSmallScreen] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia('(max-width: 768px)');
		const handleMediaChange = () => setIsSmallScreen(mediaQuery.matches);
		handleMediaChange();

		mediaQuery.addEventListener('change', handleMediaChange);

		return () => mediaQuery.removeEventListener('change', handleMediaChange);
	}, []);

	return (
		<div className='header'>
			{/* Left Section */}
			{!showSearch && (
				<div className='headerLeft'>
					<MenuIcon onClick={toggleSidebar} />
					<Link to='/'>
						<img className='headerLogo' src={Logo} alt='Logo' />
					</Link>
				</div>
			)}

			{/* Search Input */}
			<div
				className={`searchInput`}
				style={{
					flex: isSmallScreen && showSearch ? 1 : isSmallScreen && 0,
					display:
						isSmallScreen && showSearch ? 'flex' : isSmallScreen && 'none',
					margin: 'auto',
				}}>
				<input
					onChange={(e) => setSearchQuery(e.target.value)}
					value={searchQuery}
					type='text'
					placeholder='Search'
				/>
				<Link to={`/search/${searchQuery}`}>
					<SearchIcon className='searchButton' />
				</Link>
			</div>
			{showSearch && (
				<CloseIcon
					className='closeButton'
					onClick={() => setShowSearch(false)}
				/>
			)}

			{/* Right Section */}
			{!showSearch && (
				<div className='headerIcons'>
					{isSmallScreen && !showSearch && (
						<SearchIcon
							className='searchToggleIcon headerIcon'
							onClick={() => setShowSearch(true)}
						/>
					)}
					<VideoCallIcon className='headerIcon' />
					<NotificationsIcon className='headerIcon' />
					<AccountCircleIcon className='headerIcon' />
				</div>
			)}
		</div>
	);
}

export default Header;
