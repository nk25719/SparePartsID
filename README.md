🧠 What We're Building
AI-powered spare parts identification and lookup assistant — a tool designed to help engineers, technicians, and support staff:

✅ Identify parts using:
📎 A part number (typed or scanned)

🖼️ A photo of the component

💬 A natural language description (e.g. "white plastic gear for patient bed")

✅ Retrieve from a master knowledge module:
📚 Manuals and datasheets (PDFs)

🗂️ Parts catalogs from multiple vendors

🧾 Previous repair logs or usage history (future expansion)




# SparePartsID
AI assistant (web-based or mobile) that helps users identify spare parts by name, part number, image, or natural language description—and provides usage and compatibility info.

## Scope
| Task            | Description                                                              |
| --------------- | ------------------------------------------------------------------------ |
| Target Industry | Medical devices, electronics, automotive, etc.     |
| User Types      | Technicians, engineers, inventory staff.         |
| Input Types     | part number, description, image               |
| Output          | Part details, datasheet, usage, alternatives |
| Devices         | Will it run on mobile, web, both? Online/offline?                        |




## Agent Tasks
1. Data Ingestion	Extract part numbers, names, specs, and compatibility info from datasheets, manuals, images, and emails.
2. Image Analysis	Use vision models to identify parts from photos or match them to a database.
3. NLP Search	Allow users to type “I need the connector used with XYZ ventilator” → Agent searches and suggests the correct part.
4. Data Entry	Auto-fill forms or ERP fields (e.g., part #, supplier, stock, usage, alternatives).
5. Decision Support	Based on part type or fault symptom, suggest common replacement parts.
6. Integration	Connect to tools like Firebase, Notion, Google Sheets, or inventory platforms to sync changes.



## We now have:

- 🔗 Connected to Firebase project aibe-c0c91
- 📁 Hosting public directory: public
- 🛡️ Firestore rules + indexes downloaded and saved
- 🔄 GitHub Actions CI/CD setup linked to: nk25719/SparePartsID
- 🛠️ GitHub Actions build script: npm ci && npm run build
- 🧠 Workflows for pull request deploy + live deploy from main branch





# 📁 Project Structure — Spare Parts UI

This structure is designed for a Vite + React project integrated with Firebase and built for spare part search and display.

      

     spare-parts-ui/
                  ├── index.html
                  ├── package.json
                  ├── vite.config.js
                  ├── public/
                  │   └── vite.svg           
                  ├── src/
                  │   ├── App.jsx
                  │   ├── main.jsx
                  │   ├── firebase.js
                  │   ├── App.css
                  │   ├── index.css
                  │   ├── components/
                  │   │   ├── AiSearchForm.jsx
                  │   │   ├── AiSearchForm.css
                  │   │   ├── Header.css
                  │   │   ├── Header.jsx
                  │   │   └── ThemeToggle.jsx
                  │   ├── pages/
                  │   │   ├── AddPart.jsx
                  │   │   ├── IdentifyPart.jsx
                  │   │   ├── PartLibrary.jsx
                  │   │   ├── PartDetail.jsx      
                  │   │   └── SmartSearch.jsx
                  │   └── styles/
                  │       └── PartDetail.css      


