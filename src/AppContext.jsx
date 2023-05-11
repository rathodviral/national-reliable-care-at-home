import React, { createContext, useEffect, useState } from "react";
import { getLayouts } from "./utilities";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [isLoaderShow, setLoaderShow] = useState(true);
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [menu, setMenu] = useState([]);
  const [slider, setSlider] = useState([]);
  const [presentation, setPresentation] = useState([]);
  const [service, setService] = useState([]);
  const [work, setWork] = useState(null);
  const [testimonial, setTestimonial] = useState([]);
  const [footer, setFooter] = useState([]);
  const [social, setSocial] = useState([]);
  const [about, setAbout] = useState([]);
  const [contact, setContact] = useState(null);
  const [action, setAction] = useState(null);
  const [serviceDetail, setServiceDetail] = useState(null);
  const [pages, setPages] = useState([]);

  const getLayoutListData = async () => {
    const data = await getLayouts();
    const parsedData = data.map((item) => {
      return {
        ...item,
        content: JSON.parse(item.content),
        other: JSON.parse(item.other)
      };
    });
    setData(parsedData);
    setLoaderShow(false);

    const h = parsedData.find((x) => x.type.toLowerCase() === "header");
    const s = parsedData.find((x) => x.type.toLowerCase() === "slider");
    const p = parsedData.find((x) => x.type.toLowerCase() === "presentation");
    const sr = parsedData.find((x) => x.type.toLowerCase() === "service");
    const w = parsedData.find((x) => x.type.toLowerCase() === "work");
    const t = parsedData.find((x) => x.type.toLowerCase() === "testimonial");
    const f = parsedData.find((x) => x.type.toLowerCase() === "footer");
    const so = parsedData.find((x) => x.type.toLowerCase() === "social");
    const a = parsedData.find((x) => x.type.toLowerCase() === "about");
    const c = parsedData.find((x) => x.type.toLowerCase() === "contact");
    const ac = parsedData.find((x) => x.type.toLowerCase() === "action");
    const sd = parsedData.find(
      (x) => x.type.toLowerCase() === "service-detail"
    );
    const pg = parsedData.filter((x) => x.type.toLowerCase() === "page");

    if (h && h.content) {
      setTitle(h.content.title);
      setMenu(h.content.menu);
    }
    if (s && s.content) {
      setSlider(s.content);
    }
    if (p && p.content) {
      setPresentation(p.content);
    }
    if (sr && sr.content) {
      setService(sr.content);
    }
    if (w && w.content) {
      setWork(w.content);
    }
    if (t && t.content) {
      setTestimonial(t.content);
    }
    if (f && f.content) {
      setFooter(f.content);
    }
    if (so && so.content) {
      setSocial(so.content);
    }
    if (a && a.content) {
      setAbout(a.content);
    }
    if (c && c.content) {
      setContact(c.content);
    }
    if (ac && ac.content) {
      setAction(ac.content);
    }
    if (sd && sd.content) {
      setServiceDetail(sd.content);
    }
    if (pg && pg.length > 0) {
      setPages(pg);
    }
  };

  useEffect(() => {
    getLayoutListData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AppContext.Provider
      value={{
        layoutData: data,
        isLoaderShow,
        title,
        menu,
        slider,
        presentation,
        service,
        work,
        testimonial,
        footer,
        social,
        about,
        contact,
        action,
        serviceDetail,
        pages,
        setLoaderShow
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
