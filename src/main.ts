import './style.css'
import { convertToPhonetic } from './converter'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div id="converterContainer">
    <div id="inputGroup">
      <input id="userInput" type="text" placeholder="Enter Text"></input>
      <button id="convertBtn" type="submit">Convert</button>
    </div>
    <div id="resultGroup">
      <p id="result"></p>
    </div>
  </div>
`

let copyBtn: HTMLButtonElement | null = null;


document.getElementById('userInput')!.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("convertBtn")!.click();
  }
});

document.getElementById('convertBtn')!.addEventListener('click', () => {
  const userInput = (document.getElementById('userInput') as HTMLInputElement).value;
  const phoneticOutput = convertToPhonetic(userInput);
  document.getElementById('result')!.innerText = phoneticOutput;
  
  if (!copyBtn) { // Check if the button doesn't exist
    copyBtn = document.createElement('button');
    copyBtn.innerText = "Copy";
    copyBtn.id = "copyBtn";
    const resultGroup = document.getElementById('resultGroup');
    if (resultGroup) {
      resultGroup.appendChild(copyBtn);
      copyBtn.addEventListener('click', () => {
        const copyText = (document.getElementById('result') as HTMLParagraphElement).innerText;
        navigator.clipboard.writeText(copyText);
        alert('Copied');
      });
    }
  }
  
});