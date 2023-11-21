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
	return (
		<div className='sidebar'>
			<SidebarItem selected Icon={HomeIcon} title='Home' />
			<SidebarItem Icon={WhatshotIcon} title='Trending' />
			<SidebarItem Icon={SubscriptionsIcon} title='Subscription' />
			<hr />
			<SidebarItem Icon={VideoLibraryIcon} title='Library' />
			<SidebarItem Icon={HistoryIcon} title='History' />
			<SidebarItem Icon={OndemandVideoIcon} title='Your videos' />
			<SidebarItem Icon={WatchLaterIcon} title='Watch Later' />
			<SidebarItem Icon={ThumbUpAltIcon} title='Liked videos' />
			<SidebarItem Icon={ExpandMoreIcon} title='Show more' />

			<hr />
		</div>
	);
}

export default Sidebar;
