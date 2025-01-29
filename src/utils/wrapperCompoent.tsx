import {Outlet} from 'react-router-dom'
import InfoHeader from "../components/shared/InfoHeader";
import Header from "../components/shared/header/Header";
import InfoFooter from "../components/shared/InfoFooter";
import Footer from "../components/shared/Footer";

const WrapperComponent = () => {
  return (
  <>
<InfoHeader/>
<Header/>
<Outlet/>
<InfoFooter/>
<Footer/>
  </>
  )
}

export default WrapperComponent
