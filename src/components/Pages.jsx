/* eslint-disable array-callback-return */
import React from "react";
import { lowerCase } from "../utilities";
import Slider from "./Slider";
import Presentation from "./Presentation";
import Services from "./Services";
import { Action } from "./Action";
import Work from "./Work";
import { ServiceDetail } from "./ServiceDetail";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import PageTitle from "./PageTitle";
import About from "./About";

const Pages = ({ list }) => {
  return list.map((item, index) => {
    const sectionType = lowerCase(item.type);
    const isShow = JSON.parse(item.isShow);
    if (sectionType === "slider" && isShow) {
      return <Slider key={index} id={item.id} />;
    } else if (sectionType === "presentation" && isShow) {
      return (
        <Presentation key={index} id={item.id} className={item.className} />
      );
    } else if (sectionType === "page-title" && isShow) {
      return <PageTitle key={index} id={item.id} className={item.className} />;
    } else if (sectionType === "service" && isShow) {
      return <Services key={index} id={item.id} className={item.className} />;
    } else if (sectionType === "action" && isShow) {
      return <Action key={index} id={item.id} className={item.className} />;
    } else if (sectionType === "work" && isShow) {
      return <Work key={index} id={item.id} className={item.className} />;
    } else if (sectionType === "contact" && isShow) {
      return <Contact key={index} id={item.id} className={item.className} />;
    } else if (sectionType === "about" && isShow) {
      return <About key={index} id={item.id} className={item.className} />;
    } else if (sectionType === "service-detail" && isShow) {
      return (
        <ServiceDetail key={index} id={item.id} className={item.className} />
      );
    } else if (sectionType === "testimonial" && isShow) {
      return (
        <Testimonials
          key={index}
          id={item.id}
          className={item.className}
          title="Testimonials"
        />
      );
    }
  });
};

export default Pages;
