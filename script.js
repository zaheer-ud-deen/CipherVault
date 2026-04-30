function caesarCipher(text, shift, decrypt = false) {
  if (decrypt) shift = -shift;
  return text
    .split("")
    .map((char) => {
      const code = char.charCodeAt(0);
      if (char >= "A" && char <= "Z") {
        return String.fromCharCode(((code - 65 + shift + 26) % 26) + 65);
      }
      if (char >= "a" && char <= "z") {
        return String.fromCharCode(((code - 97 + shift + 26) % 26) + 97);
      }
      return char;
    })
    .join("");
}
function vigenereCipher(text, key, decrypt = false) {
  key = key.toUpperCase().replace(/[^A-Z]/g, "");
  if (!key) return text;
  let result = "";
  let keyIndex = 0;
  for (let char of text) {
    if (/[A-Za-z]/.test(char)) {
      const base = char === char.toUpperCase() ? 65 : 97;
      let shift = key.charCodeAt(keyIndex % key.length) - 65;
      if (decrypt) shift = -shift;
      result += String.fromCharCode(
        ((char.charCodeAt(0) - base + shift + 26) % 26) + base,
      );
      keyIndex++;
    } else {
      result += char;
    }
  }
  return result;
}
function encryptText() {
  const text = document.getElementById("encryptInput").value;
  const algorithm = document.getElementById("encryptAlgorithm").value;
  const key = document.getElementById("encryptKey").value;
  let output = "";
  if (!text || !key) {
    alert("Please enter text and key.");
    return;
  }
  switch (algorithm) {
    case "caesar":
      output = caesarCipher(text, parseInt(key));
      break;
    case "vigenere":
      output = vigenereCipher(text, key);
      break;
    case "aes":
      output = CryptoJS.AES.encrypt(text, key).toString();
      break;
  }
  document.getElementById("encryptOutput").value = output;
}
function decryptText() {
  const text = document.getElementById("decryptInput").value;
  const algorithm = document.getElementById("decryptAlgorithm").value;
  const key = document.getElementById("decryptKey").value;
  let output = "";
  if (!text || !key) {
    alert("Please enter text and key.");
    return;
  }
  try {
    switch (algorithm) {
      case "caesar":
        output = caesarCipher(text, parseInt(key), true);
        break;
      case "vigenere":
        output = vigenereCipher(text, key, true);
        break;
      case "aes":
        const bytes = CryptoJS.AES.decrypt(text, key);
        output = bytes.toString(CryptoJS.enc.Utf8);
        if (!output) {
          throw new Error();
        }
        break;
    }
    document.getElementById("decryptOutput").value = output;
  } catch {
    alert("Invalid key or encrypted text.");
  }
}
function copyText(id) {
  const element = document.getElementById(id);
  element.select();
  navigator.clipboard.writeText(element.value);
  alert("Copied to clipboard!");
}
