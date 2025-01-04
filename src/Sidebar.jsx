import { useLocation } from 'react-router-dom';
import './Sidebar.css';
import SidebarItem from './SidebarItem';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import HomeIcon from '@mui/icons-material/Home';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Sidebar() {
	const location = useLocation();
	const currentPath = location.pathname;

	return (
		<div className='sidebar'>
			<SidebarItem
				selected={currentPath === '/'}
				Icon={HomeIcon}
				title='Home'
				path={'/'}
			/>
			<SidebarItem
				selected={currentPath === '/trending'}
				Icon={WhatshotIcon}
				title='Trending'
				path={'/trending'}
			/>
			<SidebarItem
				selected={currentPath === '/subscriptions'}
				Icon={SubscriptionsIcon}
				title='Subscription'
			/>
			<hr />
			<SidebarItem
				selected={currentPath === '/library'}
				Icon={VideoLibraryIcon}
				title='Library'
			/>
			<SidebarItem
				selected={currentPath === '/history'}
				Icon={HistoryIcon}
				title='History'
			/>
			<SidebarItem
				selected={currentPath === '/your-videos'}
				Icon={OndemandVideoIcon}
				title='Your videos'
			/>
			<SidebarItem
				selected={currentPath === '/watch-later'}
				Icon={WatchLaterIcon}
				title='Watch Later'
			/>
			<SidebarItem
				selected={currentPath === '/liked-videos'}
				Icon={ThumbUpAltIcon}
				title='Liked videos'
			/>
			<SidebarItem
				selected={currentPath === '/show-more'}
				Icon={ExpandMoreIcon}
				title='Show more'
			/>
			<hr />
		</div>
	);
}

export default Sidebar;
