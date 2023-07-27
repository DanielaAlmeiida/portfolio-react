import Avatar from '../img/eu.jpg';
import SocialNetworks from './SocialNetworks';
import InformationContainer from '../components/InformationContainer';

import '../styles/components/sidebar.sass';


const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={ Avatar } alt="Daniela Almeida" />
      
      <p className="title">Desenvolvedora FullStack</p>
      
      <SocialNetworks />

      <InformationContainer />

      <a href="" className="btn">
        Download currículo
      </a>
    </aside>
  )
}

export default Sidebar
