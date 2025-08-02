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



spare-parts-ui/
├── public/
│   └── favicon.ico              # Favicon or logo
│
├── src/
│   ├── api/
│   │   └── fetchPartData.js     # Calls your AI backend or mock server
│   │
│   ├── assets/
│   │   └── logo.png             # Medical/technical logo
│   │
│   ├── components/
│   │   ├── Header.jsx           # Navbar or top header
│   │   └── PartCard.jsx         # Card to display part info
│   │
│   ├── pages/
│   │   ├── HomePage.jsx         # Intro, explanation
│   │   ├── PartSearch.jsx       # Form: input, upload, description
│   │   └── ResultsPage.jsx      # Shows part details from AI
│   │
│   ├── App.jsx                  # Main app with routing
│   └── main.jsx                 # React entry point
│
├── .gitignore
├── index.html                   # HTML template
├── package.json
├── vite.config.js
└── README.md
