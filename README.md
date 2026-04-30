# 🔐 CipherVault — Secure Text Encryption & Decryption

A web-based text encryption and decryption tool built with pure HTML, CSS, and JavaScript. Supports three encryption algorithms including military-grade AES encryption.

---

## 📌 About the Project

This project was assigned by **Sir Waseem Khan** as part of the **Cybersecurity** course. The goal was to understand how encryption algorithms work by building a real working web application from scratch.

---

## ✨ Features

- 🔒 Encrypt any plain text using three different algorithms
- 🔓 Decrypt cipher text back to its original form
- 📋 Copy output to clipboard with one click
- 💻 Fully client-side — no backend, no data sent to any server
- ⚡ No installation required — just open in browser

---

## 🛠️ Algorithms Supported

| Algorithm | Type | Security Level |
|-----------|------|----------------|
| Caesar Cipher | Shifts letters by a number key | ⭐ Basic (Educational) |
| Vigenère Cipher | Shifts letters using a keyword | ⭐⭐ Moderate (Educational) |
| AES Encryption | Modern standard encryption | ⭐⭐⭐⭐⭐ Strong (Industry Grade) |

---

## 🚀 How to Run

No installation or terminal needed. Just follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/CipherVault.git
   ```
2. Open the project folder
3. Double-click `index.html` to open in your browser
4. Start encrypting!

---

## 🧪 How to Use

### Encrypt
1. Type your message in the **Encryption Panel**
2. Select an algorithm (Caesar, Vigenère, or AES)
3. Enter a key (number for Caesar, word for Vigenère/AES)
4. Click **Encrypt**
5. Copy the encrypted output

### Decrypt
1. Paste the encrypted text in the **Decryption Panel**
2. Select the **same algorithm** used for encryption
3. Enter the **same key** used for encryption
4. Click **Decrypt**

---

## 📁 Project Structure

```
CipherVault/
├── index.html       # Main HTML file
├── style.css        # Styling
├── script.js        # Encryption logic
└── README.md        # Project documentation
```

---

## 🔑 Example

| Field | Value |
|-------|-------|
| Plain Text | `Enemy spotted. Also out of coffee. Send help.` |
| Algorithm | AES |
| Key | `mypassword123` |
| Encrypted | `U2FsdGVkX1...` (random-looking cipher text) |

---

## 🧑‍💻 Built With

- HTML5
- CSS3
- JavaScript (Vanilla)
- [CryptoJS](https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.2.0/crypto-js.min.js) — for AES encryption

---

## 👨‍🎓 Developer

**Zaheer Ud Deen**
Cybersecurity Student

---

## 🙏 Acknowledgement

Special thanks to **Sir Waseem Khan** for assigning this project and making Cybersecurity concepts practical and fun to learn.

---

## 📄 License

This project is for educational purposes only.
