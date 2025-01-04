import { Link } from 'react-router-dom';
import './SidebarItem.css';

function SidebarRow({ selected, Icon, title, path }) {
	return (
		<Link to={path} className={`sidebarRow ${selected && 'selected'}`}>
			<Icon className='sidebarRow__icon' />
			<h2 className='sidebarRow__title'>{title}</h2>
		</Link>
	);
}

export default SidebarRow;
