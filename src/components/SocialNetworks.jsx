import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';

import '../styles/components/socialnetworks.sass';

const socialNetworks = [

    {name: "github", icon: <FaGithub />, link: "https://github.com/DanielaAlmeiida"},
    {name: "linkedin", icon: <FaLinkedinIn />, link:"https://linkedin.com/in/daniela-almeida1/"},
    /*{name: "instagram", icon: <FaInstagram />}*/
]

const SocialNetworks = () => {
  return (
    <section id="social-networks">
        {socialNetworks.map((network) => (
            <a href={network.link} className="social-btn" id={network.name} key={network.name} target='_blank'>
                {network.icon}
                
            </a>           
        ))}
    </section>
  )
}

export default SocialNetworks
