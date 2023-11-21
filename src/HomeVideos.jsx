import { Link } from 'react-router-dom';
import './HomeVideos.css';
import VideoCard from './VideoCard';

function RecommendedVideos() {
	return (
		<div className='homeVideos'>
			<h2>Recommended</h2>
			<div className='homeVideoItem'>
				<Link style={{ textDecoration: 'none' }} to={'/videoplaypage'}>
					<VideoCard
						title='How to become a web developer'
						views='2.3M Views'
						timestamp='3 days ago'
						channelImage='https://img.indiefolio.com/fit-in/1100x0/filters:format(webp):fill(transparent)/project/body/714da1692e8f8d34baff1457ecab1e02.png'
						channel='Adil Hossain'
						image='https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/top11.png'
					/>
				</Link>
				<Link style={{ textDecoration: 'none' }} to={'/videoplaypage'}>
					<VideoCard
						title='Microsoft New product'
						views='2.8M Views'
						timestamp='2 days ago'
						channelImage='https://thedesignlove.com/wp-content/uploads/2018/02/Case-Study-The-Microsoft-Logo-Evolution-5.jpg'
						channel='Microsoft'
						image='https://mspoweruser.com/wp-content/uploads/2019/08/Edge-Android-Honey-extension.jpg'
					/>
				</Link>
				<Link style={{ textDecoration: 'none' }} to={'/videoplaypage'}>
					<VideoCard
						title='Google has a plan'
						views='3M Views'
						timestamp='4 days ago'
						channelImage='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/768px-Google_%22G%22_Logo.svg.png'
						channel='Google'
						image='https://cdn.lifehack.org/wp-content/uploads/2017/02/22104014/131.jpg'
					/>
				</Link>
				<Link style={{ textDecoration: 'none' }} to={'/videoplaypage'}>
					<VideoCard
						title='Why JavaScript is so popular'
						views='1.8M Views'
						timestamp='7 days ago'
						channelImage='https://thumbs.dreamstime.com/b/javascript-icon-logo-javascript-often-abbreviated-as-js-programming-language-conforms-to-ecmascript-specification-204759326.jpg'
						channel='JS'
						image='https://www.reachfirst.com/wp-content/uploads/2018/08/Web-Development.jpg'
					/>
				</Link>
				<Link style={{ textDecoration: 'none' }} to={'/videoplaypage'}>
					<VideoCard
						title='How encryption works...'
						views='1.1M Views'
						timestamp='10 days ago'
						channelImage='https://upload.wikimedia.org/wikipedia/commons/c/c8/Logo_de_PFTA.jpg'
						channel='Power'
						image='https://www.eff.org/files/styles/resized_banner/public/banner_library/twitter-lock-1.png?itok=XwYtWt1s'
					/>
				</Link>
				<Link style={{ textDecoration: 'none' }} to={'/videoplaypage'}>
					<VideoCard
						title='How to become a web developer'
						views='2.3M Views'
						timestamp='3 days ago'
						channelImage='https://img.indiefolio.com/fit-in/1100x0/filters:format(webp):fill(transparent)/project/body/714da1692e8f8d34baff1457ecab1e02.png'
						channel='Adil Hossain'
						image='https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/top11.png'
					/>
				</Link>
				<Link style={{ textDecoration: 'none' }} to={'/videoplaypage'}>
					<VideoCard
						title='Microsoft New product'
						views='2.8M Views'
						timestamp='2 days ago'
						channelImage='https://thedesignlove.com/wp-content/uploads/2018/02/Case-Study-The-Microsoft-Logo-Evolution-5.jpg'
						channel='Microsoft'
						image='https://mspoweruser.com/wp-content/uploads/2019/08/Edge-Android-Honey-extension.jpg'
					/>
				</Link>
				<Link style={{ textDecoration: 'none' }} to={'/videoplaypage'}>
					<VideoCard
						title='Google has a plan'
						views='3M Views'
						timestamp='4 days ago'
						channelImage='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/768px-Google_%22G%22_Logo.svg.png'
						channel='Google'
						image='https://cdn.lifehack.org/wp-content/uploads/2017/02/22104014/131.jpg'
					/>
				</Link>
				<Link style={{ textDecoration: 'none' }} to={'/videoplaypage'}>
					<VideoCard
						title='Why JavaScript is so popular'
						views='1.8M Views'
						timestamp='7 days ago'
						channelImage='https://thumbs.dreamstime.com/b/javascript-icon-logo-javascript-often-abbreviated-as-js-programming-language-conforms-to-ecmascript-specification-204759326.jpg'
						channel='JS'
						image='https://www.reachfirst.com/wp-content/uploads/2018/08/Web-Development.jpg'
					/>
				</Link>
				<Link style={{ textDecoration: 'none' }} to={'/videoplaypage'}>
					<VideoCard
						title='How encryption works...'
						views='1.1M Views'
						timestamp='10 days ago'
						channelImage='https://upload.wikimedia.org/wikipedia/commons/c/c8/Logo_de_PFTA.jpg'
						channel='Power'
						image='https://www.eff.org/files/styles/resized_banner/public/banner_library/twitter-lock-1.png?itok=XwYtWt1s'
					/>
				</Link>
				<Link style={{ textDecoration: 'none' }} to={'/videoplaypage'}>
					<VideoCard
						title='How to become a web developer'
						views='2.3M Views'
						timestamp='3 days ago'
						channelImage='https://img.indiefolio.com/fit-in/1100x0/filters:format(webp):fill(transparent)/project/body/714da1692e8f8d34baff1457ecab1e02.png'
						channel='Adil Hossain'
						image='https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/top11.png'
					/>
				</Link>
				<Link style={{ textDecoration: 'none' }} to={'/videoplaypage'}>
					<VideoCard
						title='Microsoft New product'
						views='2.8M Views'
						timestamp='2 days ago'
						channelImage='https://thedesignlove.com/wp-content/uploads/2018/02/Case-Study-The-Microsoft-Logo-Evolution-5.jpg'
						channel='Microsoft'
						image='https://mspoweruser.com/wp-content/uploads/2019/08/Edge-Android-Honey-extension.jpg'
					/>
				</Link>
				<Link style={{ textDecoration: 'none' }} to={'/videoplaypage'}>
					<VideoCard
						title='Google has a plan'
						views='3M Views'
						timestamp='4 days ago'
						channelImage='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/768px-Google_%22G%22_Logo.svg.png'
						channel='Google'
						image='https://cdn.lifehack.org/wp-content/uploads/2017/02/22104014/131.jpg'
					/>
				</Link>
				<Link style={{ textDecoration: 'none' }} to={'/videoplaypage'}>
					<VideoCard
						title='Why JavaScript is so popular'
						views='1.8M Views'
						timestamp='7 days ago'
						channelImage='https://thumbs.dreamstime.com/b/javascript-icon-logo-javascript-often-abbreviated-as-js-programming-language-conforms-to-ecmascript-specification-204759326.jpg'
						channel='JS'
						image='https://www.reachfirst.com/wp-content/uploads/2018/08/Web-Development.jpg'
					/>
				</Link>
				<Link style={{ textDecoration: 'none' }} to={'/videoplaypage'}>
					<VideoCard
						title='How encryption works...'
						views='1.1M Views'
						timestamp='10 days ago'
						channelImage='https://upload.wikimedia.org/wikipedia/commons/c/c8/Logo_de_PFTA.jpg'
						channel='Power'
						image='https://www.eff.org/files/styles/resized_banner/public/banner_library/twitter-lock-1.png?itok=XwYtWt1s'
					/>
				</Link>
			</div>
		</div>
	);
}

export default RecommendedVideos;
