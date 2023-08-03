import Avatar from '../img/eu.jpg';
import SocialNetworks from './SocialNetworks';
import InformationContainer from '../components/InformationContainer';

import '../styles/components/sidebar.sass';

const curriculoUrl = './src/files/curriculo.pdf';

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={ Avatar } alt="Daniela Almeida" />
      
      <p className="title">Desenvolvedora FullStack</p>
      
      <SocialNetworks />

      <InformationContainer />

      <a href={curriculoUrl} className="btn" download={"curriculo.pdf"}>
        Download currículo
      </a>
    </aside>
  )
}

export default Sidebar
