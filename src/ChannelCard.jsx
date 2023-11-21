import './ChannelCard.css';
import Avatar from '@mui/material/Avatar';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
function ChannelRow({
	image,
	channel,
	verified,
	subs,
	noOfVideos,
	description,
}) {
	return (
		<div className='channelCard'>
			<Avatar className='channelCardLogo' alt={channel} src={image} />
			<div className='channelCardText'>
				<h4>
					{channel} {verified && <CheckCircleIcon style={{ color: 'gray' }} />}
				</h4>
				<p>
					{subs} subscribers . {noOfVideos} videos
				</p>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default ChannelRow;
