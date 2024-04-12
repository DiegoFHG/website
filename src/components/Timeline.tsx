import { useEffect, useState } from "react";
import { Chrono } from "react-chrono";
import { FaScroll } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";

const formatter = new Intl.DateTimeFormat(
  new Intl.NumberFormat().resolvedOptions().locale,
  {
    year: "numeric",
    month: "numeric",
    day: undefined,
  }
).format;

export default function Timeline() {
  const [isMobile, setIsMobile] = useState(window.screen.width < 1024);
  const [events, setEvents] = useState([
    {
      title: !isMobile ? "April 2015" : "2015",
    },
    {
      title: !isMobile ? "November 2015" : "2015",
    },
    {
      title: !isMobile ? "July 2023" : "2023",
    },
    {
      title: !isMobile ? "September 2023" : "2023",
    },
  ]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 1024) setIsMobile(true);
      else setIsMobile(false);
    });
  }, []);

  useEffect(() => {
    setEvents([
      {
        title: !isMobile ? "April 2015" : "2015",
      },
      {
        title: !isMobile ? "November 2015" : "2015",
      },
      {
        title: !isMobile ? "July 2023" : "2023",
      },
      {
        title: !isMobile ? "September 2023" : "2023",
      },
    ]);
  }, [isMobile]);

  const eventsCards = [
    {
      title: "Java Enterprise Course",
      inverse: true,
      range: ["Apr 1, 2015", "Sep 1, 2015"],
    },
    {
      title: "C# .NET & ASP.NET Course",
      inverse: false,
      range: ["Sep 1, 2015", "Nov 1, 2015"],
    },
    {
      title: "College Graduation, Informatics Engineering",
      inverse: true,
      desc: "European University of The Atlantic (UNEATLANTICO)",
    },
    {
      title: "Artificial Intelligence Master's Degree Enrollment",
      inverse: false,
      desc: "IMF Smart Education & UCAV & Indra",
    },
  ];

  const theme = {
    primary: "white",
    secondary: "black",
    detailsColor: "white",
    cardDetailsColor: "none",
    titleColorActive: "white",
    titleColor: "white",
    iconBackgroundColor: "black",
    cardTitleColor: "white",
    cardBgColor: "none",
  };

  const fontSizes = {
    cardTitle: "1.5rem",
  };

  return (
    <Chrono
      items={events}
      allowDynamicUpdate
      fontSizes={fontSizes}
      mode={isMobile ? "VERTICAL" : "VERTICAL_ALTERNATING"}
      borderLessCards
      hideControls
      theme={theme}
      timelinePointDimension={30}
      cardHeight={100}
    >
      <div className="chrono-icons">
        <FaScroll size={30} />
        <FaScroll size={30} />
        <FaGraduationCap size={30} />
        <FaGraduationCap size={30} />
        <FaScroll size={30} />
      </div>
      {eventsCards.map((event, index) => (
        <div
          key={`event-${index}`}
          className={
            "flex w-full pr-2 pl-2 " +
            (!isMobile
              ? event.inverse
                ? "justify-end"
                : "justify-start"
              : "justify-start")
          }
        >
          <div className="flex flex-col">
            <h1 className="text-lg font-bold">{event.title}</h1>
            <h2 className="text-md font-semibold">{event.desc}</h2>
            {event.range ? (
              <span className="text-gray">{`${formatter(
                new Date(Date.parse(event.range[0]))
              )} - ${formatter(new Date(Date.parse(event.range[1])))}`}</span>
            ) : null}
          </div>
        </div>
      ))}
    </Chrono>
  );
}
