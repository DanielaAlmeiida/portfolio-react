import {
    DiHtml5,DiCss3,
    DiJsBadge,
    DiJava,
    DiMysql,
    DiReact,
    DiSass,
    DiPhp,
    DiBootstrap,
    DiAndroid
} from 'react-icons/di'

import '../styles/components/technologiescontainer.sass'

const technologies = [
    { id: "html", name: "HTML5", icon: <DiHtml5 />, description: "Intermediate" },
    { id: "css", name: "CSS3", icon: <DiCss3 />, description: "Intermediate" },
    { id: "js", name: "JavaScript", icon: <DiJsBadge />, description: "Intermediate" },
    { id: "java", name: "Java", icon: <DiJava />, description: "Intermediate" },
    { id: "mysql", name: "MySQL", icon: <DiMysql />, description: "Intermediate" },
    { id: "react", name: "React", icon: <DiReact />, description: "Basic" },
    { id: "sass", name: "SASS", icon: <DiSass />, description: "Basic" },
    { id: "php", name: "PHP", icon: <DiPhp />, description: "Basic" },
    { id: "bootstrap", name: "Bootstrap", icon: <DiBootstrap />, description: "Basic" },
    { id: "android", name: "AndroidStudio", icon: <DiAndroid />, description: "Basic" }
]

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
        <h2>Technologies</h2>
        <div className="technologies-grid">
            {technologies.map((tech) => (
                <div className="technology-card" id={tech.id} key={tech.id}>
                    {tech.icon}
                    <div className="technology-info">
                        <h3>{tech.name}</h3>
                        <p>
                            {tech.description}
                        </p>
                    </div>
                    
                </div>
            ))}
        </div>
    </section>
  )
}

export default TechnologiesContainer
