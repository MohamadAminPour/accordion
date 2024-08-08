import { useState } from "react";

const faqs = [
  {
    title: "where are these chairs assembled ?",
    text: "lorem inpsum dolor sit amet consecteur ,lorem inpsum dolor sit amet consecteur,lorem inpsum dolor sit amet consecteur,lorem inpsum dolor sit amet consecteur",
  },
  {
    title: "where are these chairs assembled ?",
    text: "lorem inpsum dolor sit amet consecteur ,lorem inpsum dolor sit amet consecteur,lorem inpsum dolor sit amet consecteur,lorem inpsum dolor sit amet consecteur",
  },
  {
    title: "where are these chairs assembled ?",
    text: "lorem inpsum dolor sit amet consecteur ,lorem inpsum dolor sit amet consecteur,lorem inpsum dolor sit amet consecteur,lorem inpsum dolor sit amet consecteur",
  },
];

export default function App() {
  return (
    <>
      <Accordion datas={faqs} />
    </>
  );
}

function Accordion({ datas }) {
  return (
    <>
      <div className="Accordion-container">
        {datas.map((data, i) => (
          <AccordionItem
            key={i}
            num={i + 1}
            title={data.title}
            text={data.text}
          />
        ))}
      </div>
    </>
  );
}

function AccordionItem({ num, title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(() => !isOpen);
  }
  return (
    <div className={!isOpen ? "item" : "item active"} onClick={handleToggle}>
      <div className="item-header">
        <div>
          <span className="number">
            {num <= 9 ? `0${num}` : num}
          </span>
          <span className="title">{title}</span>
        </div>
        <span className="icon">{isOpen ? "+" : "-"}</span>
      </div>
      {isOpen && <div className="text">{text}</div>}
    </div>
  );
}
