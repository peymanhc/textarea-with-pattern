import React, { useState } from "react";
import "./styles.css";

export const AddPattern = ({
  setValue,
  node,
  tagClass,
  seperator,
  pattern,
}) => {
  const [Id, setId] = useState(0);

  const handleAddClick = () => {
    let box = document.getElementById("box");
    const selection = window.getSelection();
    const tagName = selection.anchorNode.parentNode.nodeName;
    if (tagName === "PRE") {
      const range = selection.getRangeAt(0);
      const textNode = document.createTextNode(
        `${seperator}${pattern}${seperator} `
      );
      const span = document.createElement("span");
      span.setAttribute("id", `pattern-${Id}`);
      span.setAttribute("contenteditable", "false");
      span.setAttribute("class", `${tagClass} box-item`);
      span.appendChild(textNode);
      range.insertNode(span);
      range.setStartAfter(span);
      range.collapse(true);
      selection.removeAllRanges();
      selection.addRange(range);
    } else {
      box.innerHTML = box.innerHTML.replace("<br>", "");
      if (box.innerText[box.innerText.length - 1] == "\n") {
        box.innerHTML = box.innerHTML.replace(/\n$/, "");
      }
      box.innerHTML += `<span id="pattern-${Id}" contenteditable="false" class="${tagClass} box-item">${seperator}${pattern}${seperator}</span> `;
      box.focus();
      let range = document.createRange();
      range.selectNodeContents(box);
      range.collapse(false);
      let sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    }
    setId(Id + 1);
    setValue(box.innerText);
  };

  return node
    ? React.cloneElement(node, {
        onClick: handleAddClick,
        id: "AddPattern",
      })
    : null;
};

export const TextAreaPattern = ({ setValue, node, classRoot }) => {
  const onChangeValue = (textContent) => {
    setValue(textContent);
  };
  const handleRemoveClick = (e) => {
    let box = document.getElementById("box");
    let node = e.target;
    if (node.id.includes("pattern")) {
      box.removeChild(node);
      let nextNode = node.nextSibling;
      box.removeChild(nextNode);
    }
  };
  return node
    ? React.cloneElement(node, {
        onClick: (e) => handleRemoveClick(e),
        id: "box",
        class: `${classRoot}`,
        contentEditable: true,
        onInput: (e) => onChangeValue(e.target.textContent),
      })
    : null;
};
