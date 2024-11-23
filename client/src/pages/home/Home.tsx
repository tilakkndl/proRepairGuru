import InfoHeader from '../../components/shared/InfoHeader'
import Header from '../../components/shared/Header'
import LandingBox from '../../components/specific/LandingBox'
import ClientReviewHeading from '../../components/specific/ClientReviewHeading'
import ClientReviewList from '../../components/specific/ClientReviewList'
import InfoFooter from '../../components/shared/InfoFooter'
import Footer from '../../components/shared/Footer'

const Home = () => {
  return (
    <>
    <div className=''>

    <InfoHeader />
    <Header />
    <LandingBox />
    <ClientReviewHeading />
    {/* <ClientReview /> */}
    <ClientReviewList />
    <InfoFooter />
    <Footer/>

    </div>
    </>
  )
}

export default Home