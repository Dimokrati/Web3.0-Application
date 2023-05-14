import { Navbar, Footer, Services, Welcome } from "../components";

const Home = () => {
    return (
        <div className='min-h-screen selection:text-black selection:bg-white scroll-smooth snap-y'>
            <div className='gradient-bg-welcome snap-start'>
                <Navbar />
                <Welcome />
            </div>
            <Services />
            <Footer />
        </div>
    )
}
  
export default Home;