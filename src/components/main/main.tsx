import "./main.scss";
import { ReactComponent as ReactLogo } from "../../img/clipboard.svg";
import { useState } from "react";

export function Main() {
  const upper = document.getElementById("upper") as HTMLInputElement | null;
  const lower = document.getElementById("lower") as HTMLInputElement | null;
  const special = document.getElementById("special") as HTMLInputElement | null;
  const passShow = document.getElementById(
    "passShow"
  ) as HTMLInputElement | null;
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`~!@#$%^&*()_+-=[]{};',./:\"<>?";
  const isChecked = {
    upper: false,
    lower: false,
    special: false,
  };
  const [char, setChar] = useState(0);
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target === upper) {
      isChecked.upper = e.target.checked;
    } else if (e.target === lower) {
      isChecked.lower = e.target.checked;
    } else if (e.target === special) {
      isChecked.special = e.target.checked;
    }
  }
  function handleGeneration() {
    let password = "";
    if (
      isChecked.lower === false &&
      isChecked.special === false &&
      isChecked.upper === false
    ) {
      for (let i = 0; i <= char; i++) {
        let randomNumber = Math.floor(
          Math.random() * chars.slice(0, 10).length
        );
        password += chars.substring(randomNumber, randomNumber + 1);
      }
    } else if (
      isChecked.lower === false &&
      isChecked.special === false &&
      isChecked.upper === true
    ) {
      for (let i = 0; i <= char; i++) {
        let newChars = chars.slice(0, 10).concat("", chars.slice(36, 62));
        let randomNumber = Math.floor(
          Math.random() *
            chars.slice(0, 9).concat("", chars.slice(36, 62)).length
        );
        password += newChars.substring(randomNumber, randomNumber + 1);
      }
    } else if (
      isChecked.lower === false &&
      isChecked.special === true &&
      isChecked.upper === false
    ) {
      for (let i = 0; i <= char; i++) {
        let newChars = chars.slice(0, 9).concat("", chars.slice(63, 92));
        let randomNumber = Math.floor(
          Math.random() *
            chars.slice(0, 9).concat("", chars.slice(63, 92)).length
        );
        password += newChars.substring(randomNumber, randomNumber + 1);
      }
    } else if (
      isChecked.lower === true &&
      isChecked.special === false &&
      isChecked.upper === false
    ) {
      for (let i = 0; i <= char; i++) {
        let newChars = chars.slice(0, 9).concat("", chars.slice(11, 35));
        let randomNumber = Math.floor(
          Math.random() *
            chars.slice(0, 9).concat("", chars.slice(11, 35)).length
        );
        password += newChars.substring(randomNumber, randomNumber + 1);
      }
    } else if (
      isChecked.lower === true &&
      isChecked.special === true &&
      isChecked.upper === false
    ) {
      for (let i = 0; i <= char; i++) {
        let newChars = chars
          .slice(0, 9)
          .concat("", chars.slice(11, 35))
          .concat("", chars.slice(63, 92));
        let randomNumber = Math.floor(
          Math.random() *
            chars
              .slice(0, 9)
              .concat("", chars.slice(11, 35))
              .concat("", chars.slice(63, 92)).length
        );
        password += newChars.substring(randomNumber, randomNumber + 1);
      }
    } else if (
      isChecked.lower === true &&
      isChecked.special === false &&
      isChecked.upper === true
    ) {
      for (let i = 0; i <= char; i++) {
        let newChars = chars
          .slice(0, 9)
          .concat("", chars.slice(11, 35))
          .concat("", chars.slice(36, 62));
        let randomNumber = Math.floor(
          Math.random() *
            chars
              .slice(0, 9)
              .concat("", chars.slice(11, 35))
              .concat("", chars.slice(36, 62)).length
        );
        password += newChars.substring(randomNumber, randomNumber + 1);
      }
    } else if (
      isChecked.lower === false &&
      isChecked.special === true &&
      isChecked.upper === true
    ) {
      for (let i = 0; i <= char; i++) {
        let newChars = chars
          .slice(0, 9)
          .concat("", chars.slice(63, 92))
          .concat("", chars.slice(36, 62));
        let randomNumber = Math.floor(
          Math.random() *
            chars
              .slice(0, 9)
              .concat("", chars.slice(63, 92))
              .concat("", chars.slice(36, 62)).length
        );
        password += newChars.substring(randomNumber, randomNumber + 1);
      }
    } else if (
      isChecked.lower === true &&
      isChecked.special === true &&
      isChecked.upper === true
    ) {
      for (let i = 0; i <= char; i++) {
        let newChars = chars
          .slice(0, 9)
          .concat("", chars.slice(11, 35))
          .concat("", chars.slice(63, 92))
          .concat("", chars.slice(36, 62));
        let randomNumber = Math.floor(
          Math.random() *
            chars
              .slice(0, 9)
              .concat("", chars.slice(63, 92))
              .concat("", chars.slice(11, 35))
              .concat("", chars.slice(36, 62)).length
        );
        password += newChars.substring(randomNumber, randomNumber + 1);
      }
    }
    console.log(isChecked);
    upper!.checked = false;
    lower!.checked = false;
    special!.checked = false;
    passShow!.textContent = `${password}`;
  }
  function copy() {
    navigator.clipboard.writeText(passShow!.innerHTML);
  }
  return (
    <main>
      <h1>Password Generator</h1>
      <div id="passContainer">
        <span id="passShow"> </span>
        <button type="button" onClick={copy}>
          <ReactLogo />
        </button>
      </div>
      <div id="settings">
        <p>
          Password Length{" "}
          <input
            type="numeric"
            name="length"
            id="length"
            onChange={(e) => setChar(Number(e.target.value))}
          />
        </p>
        <p>
          Include Upper case letters
          <input
            type="checkbox"
            name="upper"
            id="upper"
            onChange={handleChange}
          />
        </p>
        <p>
          Include Lower case letters
          <input
            type="checkbox"
            name="lower"
            id="lower"
            onChange={handleChange}
          />
        </p>
        <p>
          Include special characters
          <input
            type="checkbox"
            name="special"
            id="special"
            onChange={handleChange}
          />
        </p>
        <button type="button" id="genPass" onClick={handleGeneration}>
          Generate Password
        </button>
      </div>
    </main>
  );
}
