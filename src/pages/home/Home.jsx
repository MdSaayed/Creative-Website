import Banner from '../../components/banner/Banner';
import JoinWithUs from '../../components/banner/JoinWithUs';
import Brands from '../../components/brands/Brands';
import HashtagPerformance from '../../components/hashtagPerformance/HashtagPerformance';
import Impressions from '../../components/impressions/Impressions';
import PostSchedule from '../../components/postSchedule/PostSchedule';
import Reviews from '../../components/reviews/Reviews';

const Home = () => {
    return (
        <div className=' '>
            <Banner />
            <Brands />
            <Impressions />
            <PostSchedule />
            <HashtagPerformance />
            <Reviews />
            <JoinWithUs />
        </div>
    );
};

export default Home;