import React from "react"; //Main React.js library
import ReactDOM from "react-dom/client"; //we use ReactDOM to render into the DOM

// only update the value of this array
const numbers = [1, 2, 3];
const links = [
  "https://www.google.com",
  "https://www.facebook.com",
  "https://www.amazon.com",
];
const text = [
  "Link to google.com",
  "Link to facebook.com",
  "Link to amazon.com",
];
const navlinkItems = numbers.map((number) => (
  <li key={number.toString()} className="nav-item">
    <a className="nav-link" href={links[number - 1]}>
      {text[number - 1]}
    </a>
  </li>
));

const content = <ul className="nav">{navlinkItems}</ul>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(content);
