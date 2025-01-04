import { Link } from 'react-router-dom';
import './VideoCard.css';
// import Avatar from '@mui/material/Avatar';

function VideoCard({
	image,
	title,
	channel,
	views,
	timestamp,
	channelImage,
	path,
}) {
	return (
		<Link className='videoCard' style={{ textDecoration: 'none' }} to={path}>
			<img className='videoCardImage' src={image} alt='' />
			<div className='videoCardInfo'>
				<img className='videoCardAvatar' alt={channel} src={channelImage} />
				<div className='videoCardText'>
					<h4>{title}</h4>
					<p>{channel}</p>
					<p>
						{views} . {timestamp}
					</p>
				</div>
			</div>
		</Link>
	);
}

export default VideoCard;
