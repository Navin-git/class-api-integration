import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const ProductTimeline = ({ invoiceList }) => {
  return (
    <VerticalTimeline animate={false}>
      {invoiceList?.map((item, index) => (
        <VerticalTimelineElement
          key={index}
          className="vertical-timeline-element--work"
          contentStyle={{ background: "crimson", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  crimson" }}
          date="2011 - present"
          iconStyle={{ background: "crimson", color: "#fff" }}
          icon={<>hello</>}
        >
          <h1>{item?.name}</h1>
          <p>{item?.rate}</p>
          <button>clickme</button>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default ProductTimeline;
