import React from "react";
import { useState } from "react";
import apiData from "../../../API-data/apiPageData";
import "./Newsletter.css";

const NewsletterComponent: React.FC = () => {
  const [email, setEmail] = useState(String);
  const [name, setName] = useState(String);
  const [error, setError] = useState(Boolean);
  const [dispatched, setDispatched] = useState<boolean>(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (nameValidate(name) && emailValidate(email)) {
      sendInfo(name, email);
    } else {
      setError(true);
    }
  };

  const emailValidate = (email: string) => {
    const reg =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(String(email).toLowerCase());
  };
  const nameValidate = (name: string) => {
    return name !== "";
  };

  const sendInfo = (name: string, email: string) => {
    apiData
      .post("/newsletter", {
        email,
        name,
      })
      .then(({ data, status }) => {
        if (status === 200) {
          setDispatched(true);
        }
      })
      .catch((error) => {});
  };

  const newRegister = () => {
    setDispatched(false);
    setError(false);
    setEmail("");
    setName("");
  };

  return (
    <div className="newsletter__container">
      {dispatched ? (
        <div className="newsletter__content">
          <span className="newsletter__firstTitle">
            Seu e-mail foi cadastrado com sucesso!{" "}
          </span>
          <span className="newsletter_secondTitle">
            A partir de agora você receberá as novidade e ofertas exclusivas.
          </span>
          <button className="newsletter__button" onClick={newRegister}>
            Cadastrar novo e-mail
          </button>
        </div>
      ) : (
        <form action="" onSubmit={handleSubmit}>
          <div className="newsletter__titleContainer">
            <h4>Participe de nossas news com promoções e novidades!</h4>
          </div>
          <div className="newsletter__content2">
            <div>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Digite seu nome"
                onChange={(e) => setName(e.target.value)}
                className={`${error ? "newsletterInputError" : null}`}
              />
              <span className="Newsletter_errorLabel">
                {error ? "Preencha com seu nome completo" : null}
              </span>
            </div>
            <div>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Digite seu email"
                onChange={(e) => setEmail(e.target.value)}
                className={`${error ? "newsletterInputError" : null}`}
              />
              <span className="Newsletter_errorLabel">
                {error ? "Preencha com um e-mail válido" : null}
              </span>
            </div>
            <button type="submit">Eu quero!</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default NewsletterComponent;
