import './SkeletonLoader.css';

function SkeletonLoader() {
	return (
		<div className='skeletonLoader'>
			<div className='skeletonThumbnail'></div>
			<div className='skeletonContent'>
				<div className='skeletonChannelImage'></div>
				<div className='skeletonText'>
					<div className='skeletonTitle'></div>
					<div className='skeletonSubtitle'></div>
				</div>
			</div>
		</div>
	);
}

export default SkeletonLoader;
