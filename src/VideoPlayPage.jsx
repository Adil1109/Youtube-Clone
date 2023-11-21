import './VideoPlayPage.css';

function VideoPlayPage() {
	return (
		<div className='playerContainer'>
			<iframe
				className='player'
				width='840'
				height='472'
				src='https://www.youtube.com/embed/dFJ-Sh6bbR4'
				frameBorder={0}
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
				allowfullscreen></iframe>
		</div>
	);
}

export default VideoPlayPage;
