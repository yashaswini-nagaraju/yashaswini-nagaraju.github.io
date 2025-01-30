import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { ABOUT_TEXT, ABOUT_ACTIVITIES_TITLE, ACTIVITIES_LIST } from "../../utils/constants";
import "./About.css";

const AboutCard = () => {
  return (
    <Card className="about-card-view">
      <Card.Body className="about-body">
        <p dangerouslySetInnerHTML={{ __html: ABOUT_TEXT }} />
        <blockquote className="blockquote mb-0">
          <p>{ABOUT_ACTIVITIES_TITLE}</p>
          <ul className="about-activity">
            {ACTIVITIES_LIST.map((activity) => (
              <li key={activity.id}>
                <ImPointRight /> {activity.name}
              </li>
            ))}
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
};

export default AboutCard;


