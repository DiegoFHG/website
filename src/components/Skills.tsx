import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

import nodejs from "../images/nodejs.svg";
import react from "../images/react.svg";
import vue from "../images/vue.svg";
import aws from "../images/aws.svg";
import docker from "../images/docker.svg";
import architecture from "../images/architecture.svg";
import linux from "../images/linux.svg";
import python from "../images/python.svg";
import sql from "../images/sql.svg";
import nosql from "../images/nosql.svg";
import cicd from "../images/cicd.svg";
import gcp from "../images/gcp.svg";
import scrum from "../images/scrum.svg";
import rest from "../images/rest.svg";
import messageBrokers from "../images/message-brokers.svg";

const skills = [
  {
    name: "Node.js",
    image: nodejs,
    desc: "I specialize in building systems with Node.js, from full stack applications to real-time applications, using TypeScript/JavaScript",
  },
  {
    name: "React",
    image: react,
    desc: "Utilized React to develop full-stack websites and standalone front-ends, both standalone with tools like Vite and with frameworks like Next.",
  },
  {
    name: "Vue",
    image: vue,
    desc: "Experience using Vue to build full-stack websites and standalone front-ends, both standalone with tools like Vite and with frameworks like Nuxt.",
  },
  {
    name: "Amazon Web Services (AWS)",
    image: aws,
    desc: "Experience using AWS to deploy serverless applications, leveraging tools such as AWS Glue, EC2, Lambda@Edge, and others to build cloud-native applications.",
  },
  {
    name: "Containerization",
    image: docker,
    desc: "Experience using Docker and Docker Compose for both development and production environments. Familiar with deploying services to Kubernetes clusters.",
  },
  {
    name: "System design and architecture",
    image: architecture,
    desc: "Designed systems of various types, including standard resource administration systems and more complex ones with real-time capabilities. Implemented these systems using both monolithic and microservices architectures, applying design patterns such as CLEAN, Hexagonal, and others.",
  },
  {
    name: "Linux",
    image: linux,
    desc: "I have experience using Linux in daily operations, particularly in deploying and maintaining software using its tooling.",
  },
  {
    name: "Python",
    image: python,
    desc: "Designed and implemented back-ends using Flask and FastAPI for various purposes, including writing Apache Spark jobs, automation tasks, data manipulation, and more.",
  },
  {
    name: "SQL Databases",
    image: sql,
    desc: "Designed and implemented applications and systems using relational databases such as MySQL/MariaDB, PostgreSQL, and others.",
  },
  {
    name: "NoSQL Databases",
    image: nosql,
    desc: "Designed and implemented applications and systems using a variety of databases, including MongoDB, Neo4j, Redis, and others.",
  },
  {
    name: "Continuos integration/deployment",
    image: cicd,
    desc: "Created pipelines for popular CI/CD tools such as GitLab CI/CD, Travis CI, and others.",
  },
  {
    name: "Google Cloud Platform",
    image: gcp,
    desc: "Deployed both serverless and traditional applications, utilizing various products such as Firestore to create real-time applications. I've also integrated multiple products to develop comprehensive solutions.",
  },
  {
    name: "Scrum/Agile",
    image: scrum,
    desc: "I have experience applying agile methodologies, including Scrum and a hybrid of Scrum and Kanban, in my previous work.",
  },
  {
    name: "RESTful APIs",
    image: rest,
    desc: "Designed and implemented APIs that adhere to REST principles, along with the HAL and HATEOAS standards.",
  },
  {
    name: "Message brokers",
    image: messageBrokers,
    desc: "I have experience in deploying, configuring and using message brokers such as RabbitMQ and Apache Kafka. This includes setting up asynchronous communication between services and managing bulk job assignment.",
  },
];

export default function Skills() {
  return (
    <Carousel
      opts={{ align: "start", loop: true }}
      plugins={[Autoplay({ delay: 4000 })]}
      className="pr-10 pl-10"
    >
      <CarouselContent>
        {skills.map((skill, index) => (
          <CarouselItem
            className="md:basis-1/2 lg:basis-1/3"
            key={`skill-${index}`}
          >
            <Card className="h-[300px] transition ease-in-out delay-150 duration-300 hover:shadow-lg mr-5 ml-5 mt-10 mb-10">
              <CardContent className="p-4 flex flex-col justify-center h-full">
                <div className="flex flex-col justify-center self-center">
                  {skill.image?.src !== undefined && (
                    <div className="bg-fit h-[100px] w-[100px] mb-4 flex flex-col justify-center self-center">
                      <img src={skill.image?.src} />
                    </div>
                  )}
                  <span className="font-bold self-center text-lg mb-5">
                    {skill.name}
                  </span>
                </div>
                <div className="justify-end flex flex-col">
                  <span className="text-center">{skill.desc}</span>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="ml-10 hidden lg:flex" />
      <CarouselNext className="mr-10 hidden lg:flex" />
    </Carousel>
  );
}
