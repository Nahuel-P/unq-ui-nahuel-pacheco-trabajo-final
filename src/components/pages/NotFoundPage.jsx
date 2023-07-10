import React from "react";
import spock from "./spock404.gif";
import "./NotFoundPage.css";

const NotFoundScreen = () => {

  return (
    <>
    <h1 className="not-found"> No encontramos la página que estás buscando</h1>
    <img
      src={spock}
      alt="spock"
      className="not-found-gif"
    />
    </>
  );
};

export default NotFoundScreen;
