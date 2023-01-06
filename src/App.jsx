import Menu from './components/Menu.jsx';
import Banner from './components/Banner.jsx';
import Client from './components/Client.jsx';
import AboutUs from './components/AboutUs.jsx';
import WhatWeDo from './components/WhatWeDo.jsx';
import Services from './components/Services.jsx';
import CallToAction from './components/CallToAction.jsx';
import FAQs from './components/FAQs.jsx';
import Footer from './components/Footer.jsx';
import ContactUs from './components/ContactUs.jsx';

export default function App() {
  return (
    <>
      <Menu />
      <Banner />
      <Client />
      <AboutUs />
      <WhatWeDo />
      <Services />
      <CallToAction />
      <FAQs />
      <ContactUs />
      <Footer />
    </>
  );
}