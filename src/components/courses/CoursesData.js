import efset from "../../assets/certificates/efset.png"
import carrerag6one from "../../assets/certificates/carrerag6one.png"
import dpg6one from "../../assets/certificates/dpg6one.png"
import empg6one from "../../assets/certificates/empg6one.png"
import javag6one from "../../assets/certificates/javag6one.png"
import javapoog6one from "../../assets/certificates/javapoog6one.png"
import lpg6one from "../../assets/certificates/lpg6one.png"
import princg6one from "../../assets/certificates/princg6one.png"
import ai from "../../assets/certificates/AI.jpg"
import javascriptintensivo from "../../assets/certificates/javascriptintensivo.jpg"
import modernjs from "../../assets/certificates/modernjs.jpg"
import nodejs from "../../assets/certificates/nodejs.jpg"
import reactdef from "../../assets/certificates/reactdef.jpg"
import reactintensivo from "../../assets/certificates/reactintensivo.jpg"
import selenium from "../../assets/certificates/selenium.jpg"
import testingintro from "../../assets/certificates/testingintro.jpg"
const CoursesData = [
  {
    id: 15,
    title: "EFSET- C2 English Certification",
    description: "Client Admin",
    image: `${efset}`,
    tag: ["All", "QA"],
    gitUrl: "https://cert.efset.org/AYaExw",
    previewUrl: "https://cert.efset.org/AYaExw",
  },  
  {
    id: 16,
    title: "JAVA ORIENTADO A OBJETOS G6 - ONE",
    description: "Client Admin",
    image: `${javag6one}`,
    tag: ["All", "QA"],
    gitUrl: "https://app.aluracursos.com/degree/certificate/38ea40fb-9585-4579-ad88-fe8c8f00e60e?lang",
    previewUrl: "https://app.aluracursos.com/degree/certificate/38ea40fb-9585-4579-ad88-fe8c8f00e60e?lang",
  },
  
  {
    id: 9,
    title: "DESARROLLO PERSONAL G6 - ONE",
    description: "Client Admin",
    image: `${dpg6one}`,
    tag: ["All", "QA"],
    gitUrl: "https://app.aluracursos.com/degree/certificate/e267a8b8-2c9d-4c71-9c74-0dafc529b5e2?lang",
    previewUrl: "https://app.aluracursos.com/degree/certificate/e267a8b8-2c9d-4c71-9c74-0dafc529b5e2?lang",
  },
  {
    id: 10,
    title: "LÓGICA DE PROGRAMACIÓN CON JAVASCRIPT",
    description: "Client Admin",
    image: `${lpg6one}`,
    tag: ["All", "QA"],
    gitUrl: "https://app.aluracursos.com/degree/certificate/ac334c6b-8bb4-45bb-abca-fb82c695f5e8?lang",
    previewUrl: "https://app.aluracursos.com/degree/certificate/ac334c6b-8bb4-45bb-abca-fb82c695f5e8?lang",
  },
  {
    id: 11,
    title: "APRENDE A PROGRAMAR EN JAVA CON ORIENTACIÓN A OBJETOS",
    description: "Client Admin",
    image: `${javapoog6one}`,
    tag: ["All", "QA"],
    gitUrl: "https://app.aluracursos.com/degree/certificate/bddad2c0-10db-4ec8-af53-153edf115499?lang",
    previewUrl: "https://app.aluracursos.com/degree/certificate/bddad2c0-10db-4ec8-af53-153edf115499?lang",
  },
  {
    id: 12,
    title: "EMPRENDIMIENTO, AGILIDAD Y PROTAGONISMO PROFESIONAL G6 - ONE",
    description: "Client Admin",
    image: `${empg6one}`,
    tag: ["All", "QA"],
    gitUrl: "https://app.aluracursos.com/degree/certificate/c37736a8-d45e-416e-9e89-4529b2dcef33?lang",
    previewUrl: "https://app.aluracursos.com/degree/certificate/c37736a8-d45e-416e-9e89-4529b2dcef33?lang",
  },
  {
    id: 13,
    title: "MI CARRERA",
    description: "Client Admin",
    image: `${carrerag6one}`,
    tag: ["All", "QA"],
    gitUrl: "https://app.aluracursos.com/degree/certificate/6e375808-e955-43df-b5fc-82bed59f8815?lang",
    previewUrl: "https://app.aluracursos.com/degree/certificate/6e375808-e955-43df-b5fc-82bed59f8815?lang",
  },
  {
    id: 14,
    title: "PRINCIPIANTE EN PROGRAMACIÓN G6 - ONE",
    description: "Client Admin",
    image: `${princg6one}`,
    tag: ["All", "QA"],
    gitUrl: "https://app.aluracursos.com/degree/certificate/9670b384-416c-42e9-9a35-d9ea794ddef3?lang",
    previewUrl: "https://app.aluracursos.com/degree/certificate/9670b384-416c-42e9-9a35-d9ea794ddef3?lang",
  },
  {
    id: 1,
    title: "Selenium con Java y Cucumber: El curso definitivo",
    description: "Client Admin",
    image: `${selenium}`,
    tag: ["All", "QA"],
    gitUrl: "https://www.udemy.com/certificate/UC-c514ebd9-b5ec-4b9a-8b40-8a6ff0c55e9e/",
    previewUrl: "https://www.udemy.com/certificate/UC-c514ebd9-b5ec-4b9a-8b40-8a6ff0c55e9e/",
  },
  {
    id: 2,
    title: "Introducción al Testing de Software",
    description: "Client Admin",
    image: `${testingintro}`,
    tag: ["All", "QA"],
    gitUrl: "https://www.udemy.com/certificate/UC-3e97d2e7-2b48-4a8f-9862-f2f29caac489/",
    previewUrl: "https://www.udemy.com/certificate/UC-3e97d2e7-2b48-4a8f-9862-f2f29caac489/",
  },
  {
    id: 3,
    title: "React intensivo",
    description: "Client Admin",
    image: `${reactintensivo}`,
    tag: ["All", "QA"],
    gitUrl: "https://www.udemy.com/certificate/UC-bf322a42-5d87-490e-ad0e-f5f53fe97c7d/",
    previewUrl: "https://www.udemy.com/certificate/UC-bf322a42-5d87-490e-ad0e-f5f53fe97c7d/",
  },

  {
    id: 4,
    title: "Javascript Intensivo",
    description: "Client Admin",
    image: `${javascriptintensivo}`,
    tag: ["All", "QA"],
    gitUrl: "https://www.udemy.com/certificate/UC-f0f39cee-c3cb-4e97-b070-f29291394e65/",
    previewUrl: "https://www.udemy.com/certificate/UC-f0f39cee-c3cb-4e97-b070-f29291394e65/",
  },

  {
    id: 5,
    title: "IA & Deep Learning",
    description: "Client Admin",
    image: `${ai}`,
    tag: ["All", "QA"],
    gitUrl: "https://www.udemy.com/certificate/UC-311e23fd-38c6-4d0b-b418-d08892e31ec8/",
    previewUrl: "https://www.udemy.com/certificate/UC-311e23fd-38c6-4d0b-b418-d08892e31ec8/",
  },

  {
    id: 6,
    title: "Node.JS MVC & REST APIs",
    description: "Client Admin",
    image: `${nodejs}`,
    tag: ["All", "QA"],
    gitUrl: "https://www.udemy.com/certificate/UC-490bf473-69db-43cc-a3fc-ac050a6f3ab1/",
    previewUrl: "https://www.udemy.com/certificate/UC-490bf473-69db-43cc-a3fc-ac050a6f3ab1/",
  },

  {
    id: 7,
    title: "Modern JavaScript",
    description: "Client Admin",
    image: `${modernjs}`,
    tag: ["All", "QA"],
    gitUrl: "https://www.udemy.com/certificate/UC-e18c64fa-4027-4687-8d24-d2ff44bae479/",
    previewUrl: "https://www.udemy.com/certificate/UC-e18c64fa-4027-4687-8d24-d2ff44bae479/",
  },

  {
    id: 8,
    title: "React Definitive Guide",
    description: "Client Admin",
    image: `${reactdef}`,
    tag: ["All", "QA"],
    gitUrl: "https://udemy.com/certificate/UC-34f44f36-4eb7-48a4-93f8-ad80d9fdaff7/",
    previewUrl: "https://udemy.com/certificate/UC-34f44f36-4eb7-48a4-93f8-ad80d9fdaff7/",
  },

    
  ];
  
  export default CoursesData;