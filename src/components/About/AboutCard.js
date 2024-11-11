import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { ACTIVITIES_LIST } from "../../utils/constants";

const AboutCard = () => {
  const textStyle = { textAlign: "justify" };
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={textStyle}>
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            {ACTIVITIES_LIST.map((activity, index) => (
              <li key={index}>
                <ImPointRight /> {activity.name}
              </li>
            ))}
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

