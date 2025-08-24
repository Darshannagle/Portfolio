import ClickShop from "./ClickShop.png";
import Coffeenos_Cafe from "./Coffeeno's Cafe.png";

import AWS from "./Logos/AWS.png";
import Expressjs from "./Logos/Express.js.png";
import Figma from "./Logos/Figma.png";
import Java from "./Logos/Java.png";
import JavaScript from "./Logos/JavaScript.png";
import MicrosoftAzure from "./Logos/Microsoft Azure.png";
import MicrosoftSQLServer from "./Logos/Microsoft SQL Server.png";
import MongoDB from "./Logos/MongoDB.png";
import MySQL from "./Logos/MySQL.png";
import Nodejs from "./Logos/Node.js.png";
import PostgreSQL from "./Logos/PostgreSQL.png";
import Reactjs from "./Logos/React.js.png";
import Redis from "./Logos/Redis.png";
import TypeScript from "./Logos/TypeScript.png";
import WatchOutWeather from "./Watch Out Weather.png";
const projectImages: { [key: string]: string } = {
  ClickShop,
  "Coffeeno's Cafe": Coffeenos_Cafe,
  "Watch Out Weather":WatchOutWeather ,
};
const techstackImages: { [key: string]: string } = {
  AWS: AWS,
  "Express.js": Expressjs,
  Figma: Figma,
  Java: Java,
  "JavaScript": JavaScript,
  "Microsoft Azure": MicrosoftAzure,
  "Microsoft SQL Server": MicrosoftSQLServer,
  "MongoDB": MongoDB,
  "MySQL": MySQL,
  "Node.js": Nodejs,
  "PostgreSQL": PostgreSQL,
  "React.js": Reactjs,
  "Redis": Redis,
  "TypeScript": TypeScript
};
export default {
  projectImages,
  techstackImages,
};
