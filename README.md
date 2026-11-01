# MSC PRPCEM Documentation Portal

Official documentation repository and knowledge base for **Microsoft Student Club at P. R. Pote (Patil) College of Engineering and Management, Amravati** (`docs.mscprpcem.tech`).

---

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the local documentation server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

3. **Build production bundle:**
   ```bash
   npm run build
   ```

---

## How to Add New Documentation Pages

All documentation is stored as pure **Markdown (`.md`) files**.

1. Create a markdown file in any folder (e.g., `club/about.md`).
2. Add your content using standard markdown:
   ```markdown
   # About Our Club

   Content goes here...
   ```
3. Add the page to the sidebar in `.vitepress/config.mjs`:
   ```javascript
   sidebar: [
     {
       text: 'Club',
       items: [
         { text: 'About', link: '/club/about' }
       ]
     }
   ]
   ```

---

## License

Maintained by **Microsoft Student Club PRPCEM**.
