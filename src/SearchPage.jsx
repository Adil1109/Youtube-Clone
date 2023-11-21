import './SearchPage.css';
import ChannelCard from './ChannelCard';
import SearchedVideoCard from './SearchedVideoCard';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
function SearchPage() {
	return (
		<div className='searchPage'>
			<div className='searchPageFilter'>
				<TuneOutlinedIcon />
				<h2>FILTER</h2>
			</div>
			<hr />
			<ChannelCard
				image='https://lh3.googleusercontent.com/ogw/ADGmqu9w_Cw19wmoiSvUJ_XYlA3xZLXal_-a8Ja3Z6UG-A=s83-c-mo'
				channel='Md Adil Hossain'
				verified
				subs='1M'
				noOfVideos={20}
				description='Build your Carrier here in programming in this Channel'
			/>
			<hr />

			<SearchedVideoCard
				title='How to become a web developer'
				views='2.3M'
				timestamp='3 days ago'
				subs='1M'
				channelImage='https://lh3.googleusercontent.com/ogw/ADGmqu9w_Cw19wmoiSvUJ_XYlA3xZLXal_-a8Ja3Z6UG-A=s83-c-mo'
				description='In this video we are gonna learn how to make a text small in a webpage using html small tag, we will learn how make a text big using big tag..'
				channel='Md Adil Hossain'
				image='https://i.ytimg.com/an_webp/ogKgRorhxNM/mqdefault_6s.webp?du=3000&sqp=CMyTmYIG&rs=AOn4CLDhn6v2tLbUkfoEfH4vuNMFwglIjg'
			/>
		</div>
	);
}

export default SearchPage;
