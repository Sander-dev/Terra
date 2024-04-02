import React, { useState } from "react";
import { TETabs, TETabsItem } from "tw-elements-react";

export default function Tabs(props) {
  const [buttonActive, setButtonActive] = useState("tab1");

  const handleButtonClick = () => {
    if (value === buttonActive) {
      return;
    }
    setButtonActive(value);
  };

  return (
    <TETabs className="mt-5">
      <TETabsItem
        onClick={() => handleButtonClick("tab1")}
        active={buttonActive === "tab1"}
        tag="button"
        color="dark"
        className="transition hover:duration-200 ease-in-out"
      >
        Contato
      </TETabsItem>
      <TETabsItem
        onClick={() => handleButtonClick("tab2")}
        active={buttonActive === "tab2"}
        tag="button"
        color="dark"
        className="transition hover:duration-200 ease-in-out"
      >
        Quem somos
      </TETabsItem>
      <TETabsItem
        onClick={() => handleButtonClick("tab3")}
        active={buttonActive === "tab3"}
        tag="button"
        color="dark"
        className="transition hover:duration-200 ease-in-out"
      >
        FAQ
      </TETabsItem>
    </TETabs>
  );
}
