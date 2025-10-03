## IGFOLIO – React + Vite Portfolio

Simple, fast portfolio built with React and Vite. Includes a contact form wired to EmailJS and a responsive, minimal design.

### Requirements
- Node.js 18+ and npm 9+

### Getting Started
1) Install dependencies
```bash
npm install
```
2) Configure environment variables
   - Copy `.env.example` to `.env` and fill your values:
```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```
3) Start the dev server
```bash
npm run dev
```
Open the URL printed by Vite (usually `http://localhost:5173`).

### EmailJS Setup
1) Create an account at `https://www.emailjs.com`.
2) Create a Service and a Template.
3) Note the Service ID, Template ID, and Public Key; put them into `.env`.
4) Ensure your template uses the following fields:
   - `from_name`
   - `reply_to`
   - `message`

This project submits the form in `src/sections/Hero/Contact/Contact.jsx` with `@emailjs/browser` using those fields.

### Scripts
- `npm run dev` – start Vite dev server
- `npm run build` – production build to `dist/`
- `npm run preview` – preview the production build locally
- `npm run lint` – run ESLint

### Project Structure (root project)
- `src/` – app source (components, sections, styles)
- `public/` – static assets

Note: There is also a nested `IGFOLIO/` folder with another Vite project. Use the root project unless you specifically intend to work in the nested one.

### Build & Deploy
1) Build
```bash
npm run build
```
2) Deploy the `dist/` folder to your host (Netlify, Vercel, GitHub Pages, etc.). Ensure your `.env` values are configured in your host’s environment settings.

### Troubleshooting
- `'vite' is not recognized`: run `npm install` in the project root to install local devDependencies.
- Email not sending: verify your `.env` values match EmailJS dashboard, and that your template fields are `from_name`, `reply_to`, and `message`.

