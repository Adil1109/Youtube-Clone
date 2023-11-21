import { useState } from 'react';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import Logo from './logo.png';

function Header() {
	const [searchQuery, setSearchQuery] = useState('');
	return (
		<div className='header'>
			<div className='headerLeft'>
				<MenuIcon />
				<Link to='/'>
					<img className='headerLogo' src={Logo} alt='' />
				</Link>
			</div>
			<div className='searchInput'>
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
			<div className='headerIcons'>
				<VideoCallIcon className='headerIcon' />
				<NotificationsIcon className='headerIcon' />
				<AccountCircleIcon className='headerIcon' />
			</div>
		</div>
	);
}

export default Header;
