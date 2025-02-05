# ⚔️ Clash Royale Chest Tracker

A simple web application built with **Node.js**, **Express**, and **EJS** that allows you to track upcoming chests for any Clash Royale player using their player tag.  

## 🚀 Features
- Track upcoming chests by entering a player’s tag.
- Simple, responsive UI powered by **Bootstrap**.
- Displays chest names with clean card layouts.

---

## 🛠️ Tech Stack
- **Backend:** Node.js, Express, Axios  
- **Frontend:** EJS, Bootstrap  
- **API:** [Clash Royale API](https://developer.clashroyale.com/)  

---

## 📦 Installation

1. **Clone the Repository**
   git clone https://github.com/your-username/clash-royale-chest-tracker.git
   cd clash-royale-chest-tracker
   

2. **Install Dependencies**
   
   npm install
   

3. **Get Clash Royale API Key**
   - Sign up at [Clash Royale Developer Portal](https://developer.clashroyale.com/).
   - Generate an API key and whitelist your IP address.

4. **Configure API Key**  
   Open `index.js` and replace:
   ```javascript
   const API_KEY = 'YOUR_CLASH_ROYALE_API_KEY';
   ```
   with your actual API key.

5. **Run the Application**
   
   node app.js
  

6. **Access the App**  
   Open your browser and visit: [http://localhost:3000](http://localhost:3000)

---

## 🔍 Usage

1. Enter your Clash Royale player tag (e.g., `#ABC123`).  
2. Click on **“Track Chests”**.  
3. View the list of upcoming chests.  
4. Click **“Track Another Player”** to search for a different player.

---

## ⚠️ Error Handling
- **Invalid Player Tag:** Displays an error message if the tag is incorrect.  
- **API Key Issues:** Ensure your IP is whitelisted in the Clash Royale API dashboard.

---

## 🙌 Contributing
1. Fork the repository.  
2. Create your feature branch:
   
   git checkout -b feature/new-feature
   
3. Commit your changes:
   
   git commit -m "Add new feature"
   
4. Push to the branch:
   
   git push origin feature/new-feature
   
5. Open a pull request. 🎉

---

## 💬 Contact
For questions or feedback, feel free to reach out:  
- 📧 Email: [ravgautamaujla22@gmail.com](mailto:ravgautamaujla22@gmail.com)  
- 💼 LinkedIn: [https://www.linkedin.com/in/ravgautam-aujla/](#)

---

### ⭐ Don’t forget to **star** the repository if you found it helpful!

