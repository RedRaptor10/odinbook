import Sidebar from './Sidebar';
import Timeline from './Timeline';
import Contacts from './Contacts';

const Home = ({user}) => {
    return (
        <main id="home">
            <Sidebar user={user} />
            <Timeline />
            <Contacts />
        </main>
    );
};

export default Home;