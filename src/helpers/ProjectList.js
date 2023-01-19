import Project1 from "../assets/my-daily-almanac.png"
import Project2 from "../assets/lucarios-menu.jpg"
import Project3 from "../assets/gift-guide.jpg"
import Project4 from "../assets/ecommerce.png"
import Project5 from "../assets/chatgpt_sc.png"
import {BsGithub, BsGlobe2} from "react-icons/bs";

export const ProjectList = [
    
    {
        name:"ChatGPT clone",
        image: Project5,
        description:"This is a ChatGPT clone that fetch API data from OpenAi. With this web app you can ask ChatGPT AI questions and it will provide a response.",
        skills:"Vanilla Javascript, Vite, Node.js, OpenAI API, server side and client side connection, CSS, and HTML.",
        GitHub:<a target = 'blank' rel='noreferrer' href='https://github.com/realkevinC/chatgpt-clone'><BsGithub /></a>,
        Link:<a target = 'blank' rel='noreferrer' href='https://chatgpt-clone-8rlxjrx7i-realkevinc.vercel.app/'><BsGlobe2 /></a> 
    },
    {
        name:"Ecommerce Shop",
        image: Project4,
        description:"This is a ecommerence website built using next.js and sanity for backend. User can go to the site click on items they are interested in and add to their cart or buy with stripe payment processing system.",
        skills:"Next.js, Sanity, Stripe API, Javascript, HTML, and CSS",
        GitHub:<a target = 'blank' rel='noreferrer' href='https://github.com/realkevinC/ecommerce'><BsGithub /></a>,
        Link:<a target = 'blank' rel='noreferrer' href='https://kev-ecommerce.herokuapp.com/'><BsGlobe2 /></a>
    },
    {
        name: "Gift Guide",
        image: Project3,
        description: "Gift Guide is an app that allows you to create a wishlist of gifts you'd like to receive from loved ones.",
        skills: "MERN stack, MongoDB, Express, React, Node, JWT, Socket IO, and CSS",
        GitHub:  <a target = 'blank' rel='noreferrer' href='https://github.com/realkevinC/gift-guide-project'><BsGithub /></a>,
        Link:<a target = 'blank' rel='noreferrer' href='https://group2-gift-guide.herokuapp.com/'><BsGlobe2 /></a>
    },
    {
        name: "My Daily Almanac",
        image: Project1,
        description: "My Daily Almanac app is a personalized site for a user to jot down his/her thoughts and see various information tailor to their own interests/specifications/needs.",
        skills: "HTML, CSS, JavaScript,  jQuery, Bulma CSS, FIGMA, and API",
        GitHub:  <a target = 'blank' rel='noreferrer' href='https://github.com/realkevinC/my-daily-almanac'><BsGithub /></a>,
        Link:<a target = 'blank' rel='noreferrer' href='https://mikeyboxx.github.io/my-daily-almanac/'><BsGlobe2 /></a>
    },
    {
        name: "Lucarios Resturant Menu",
        image: Project2,
        description: "Lucario's web app allows users to view the restaurant's menu, log-in to store personal information such as phone number, address, credit card information, and favorited dishes.",
        skills: "HTML 5, CSS, Javascript, HandleBars, Node, Express, MySql, Nodemon, Heroku, Insomnia, and Helmet",
        GitHub:  <a target = 'blank' rel='noreferrer' href='https://github.com/realkevinC/restaurant-menu'><BsGithub /></a>,
        Link:<a target = 'blank' rel='noreferrer' href='https://xyz-restaurant.herokuapp.com/'><BsGlobe2 /></a>
    },
    //template
    // {
    //     name:"",
    //     image: Project#,
    //     description:"",
    //     skills:"",
    //     GitHub:<a target = 'blank' rel='noreferrer' href=''><BsGithub /></a>,
    //     Link:<a target = 'blank' rel='noreferrer' href=''><BsGlobe2 /></a> 
    // },

]
