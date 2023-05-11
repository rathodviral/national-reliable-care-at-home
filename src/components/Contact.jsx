import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import { ASSETS_URL, getClassName, sendMail } from "../utilities";

const Contact = ({ id, className }) => {
  const { layoutData } = useContext(AppContext);
  const { content: contact } = layoutData.find((item) => item.id === id);
  const submitForm = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    if (form.checkValidity()) {
      const {
        name: { value: name },
        subject: { value: subject },
        message: { value: message },
        email: { value: email }
      } = form.elements;

      const { message: msg } = await sendMail({
        name,
        subject,
        message,
        email
      });
      console.log(msg);
      form.reset();
      // if (status) {
      // } else {
      // }
    } else {
      alert("Form Error");
    }
  };

  return (
    <React.Fragment>
      <div className={`contact-us container pb-0${getClassName(className)}`}>
        <div className="row">
          <div className="contact-form span7">
            <h4>{contact ? contact.title : ""}</h4>
            <p>{contact ? contact.description : ""}</p>
            <form noValidate onSubmit={submitForm}>
              {contact &&
                contact.formControl.map((item) => {
                  const { type = "text", name, label } = item;
                  return (
                    <React.Fragment key={item.name}>
                      <label htmlFor={name} className={`${name}Label`}>
                        {label}
                      </label>
                      {type === "textarea" ? (
                        <textarea
                          name={name}
                          placeholder={`Your ${label}...`}
                        ></textarea>
                      ) : (
                        <input
                          type={type}
                          name={name}
                          placeholder={`Enter your ${label}...`}
                        />
                      )}
                    </React.Fragment>
                  );
                })}
              {contact && <button type="submit">{contact.buttonText}</button>}
            </form>
          </div>
          {contact && (
            <div className="contact-address span5">
              <h4>{contact.map.title}</h4>
              <img
                src={`${ASSETS_URL}/${contact.map.image}`}
                className="img-thumbnail ml-1"
                alt="Author Roopa"
                style={{ maxHeight: "200px", maxWidth: "200px" }}
              />
              {/* <div className="map"></div> */}
              <h4>{contact.address.title}</h4>
              {contact.address.list.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
