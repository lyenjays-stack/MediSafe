# MediSafe — Smart Medication Management

A complete medication-safety concept: a caring **app** + an AI-verified **smart pill box (MediBox)** that keeps doses on time and families in the loop.

**Course:** HGD134 — Innovative and Creative Students
**Innovator:** Aisha Farhana Zukrina Binti Azzady · 2025698494 · KP2A1
**Campus:** UiTM Kampus Jengka, Pahang

🔗 **Live website:** _https://YOUR-USERNAME.github.io/medisafe-app_
(replace with your real link after you enable GitHub Pages — see below)

---

## What's in this repo

| File | What it is |
|------|-----------|
| **`index.html`** | The full product website + live interactive app demo. This is what shows online. |
| `MediSafe_App__standalone_.html` | The original standalone app version. |
| `src/App.jsx` | The React source code for the app (all 5 screens). |
| `src/main.jsx`, `src/index.css` | React entry point and styles. |
| `package.json`, `vite.config.js` | For developers who want to run the React version. |

---

## 🌐 How to put it online (GitHub Pages)

> **Important:** GitHub Pages shows whatever is in `index.html`. This repo's
> `index.html` is a complete, self-contained website — it works online with
> **no build step**, so the page will no longer be blank.

1. Open your repo on GitHub.
2. Go to **Settings → Pages** (left menu).
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Set **Branch** to `main` and folder to `/ (root)`. Click **Save**.
5. Wait 1–2 minutes, refresh, and your live link appears at the top.

---

## 📱 The app — five screens

- **Today** — dose schedule, progress ring, and a "Take now" button.
- **AI Pill Verification** — camera scan that confirms the right pill before it's taken.
- **History** — weekly adherence chart and a dose log.
- **Caregiver (Family)** — live status, missed-dose alerts, call/message.
- **Add Medication** — name, dose, times, and box compartment.

## 💊 The MediBox — the hardware

A seven-compartment smart dispenser. The correct compartment lights up at dose
time, an ESP32 chip syncs it with the app over Wi-Fi, and the app's camera
verifies the pill before it's taken.

---

## 👩‍💻 For developers (optional)

To run the React source version locally:

```bash
npm install
npm run dev      # opens http://localhost:5173
npm run build    # production build
```

To make it real:
- Replace mock data (`INITIAL_DOSES`, `WEEK`, `HISTORY`, `CARE_EVENTS`) with data from the MediBox device via REST API or Firebase.
- Wire the AI scan to a real camera + model endpoint.
- Wrap with Expo or Capacitor to publish as an iOS/Android app.

---

© 2026 MediSafe · A student innovation project for HGD134.
