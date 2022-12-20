import { LinkedIn, Email, GitHub} from "@material-ui/icons";
import React from "react";
import "../styles/Home.css"

function Home() {
    return (
    <div className="home">
        <div className="about">
            <h2>Hi, I'm Kevin, <br/>a Full Stack Web Developer.</h2>
            <div className="prompt">
                <p>I'm a graduate at Columbia Full Stack Coding Bootcamp. I'm very curious and ambitious front-end developer looking for a role in an established IT company.</p>
                <p>I'm looking for opportunities to work with the latest technologies to tackle on challenges and diverse projects. As a lifelong student, I am open minded into learning new technologies and adapting to it. I am confident in my abilities, constantly working on improving myself, naturally curious, and work well in team environments.</p>
                <p>If I had to summarize me in one sentence that would be tech enthusiast, sport fanatic, foodie, gamer, and an explorer.</p>
                <a target = 'blank' rel='noreferrer' href='https://www.linkedin.com/in/kevin-chen-069b71181/'>
                <LinkedIn />
                </a>
                <a target = 'blank' rel='noreferrer' href='https://github.com/realkevinC'>
                <GitHub />
                </a>
                <a href="mailto:kevinchen1688@yahoo.com"><Email />
                </a>
                
            </div>
        </div>
        <div className="skills">
        <h1> Skills </h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS, React Native, NPM, BootStrap, TailwindCSS, StyledComponents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS, GraphQL, ApolloServer, MySQL, MongoDB
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript</span>
          </li>
        </ol>
        </div>
    </div>
    )
}

export default Home