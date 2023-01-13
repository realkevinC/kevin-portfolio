import React from "react";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdSchool, MdWork } from "react-icons/md";

function Experience() {
    return(
        <div className="experience">
        <VerticalTimeline lineColor="#3e497a">

        <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="September 2022 - December 2022"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              Columbia<br/> New York, New York
            </h3>
  
            <h4 className="vertical-timeline-element-subtitle">
              Coding Bootcamp
            </h4>

            <p> Full Stack Web Developer</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date=" Febuary 2022 - September 2022"
            iconStyle={{ background: "#e9d35b", color: "#fff" }}
            icon={<MdWork />}
          >
            <h3 className="vertical-timeline-element-title">
            Account Executive Inside Sale - ANGI
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              WFH
            </h4>
            <p>Sales Rep that made over 100,000$ in revenue for the company</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="August 2015 - December 2019"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              University of Florida <br/> Gainesville, Florida
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Bachelor of Science Degree
            </h4>
            <p>Sports Management</p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>

    )
}

export default Experience