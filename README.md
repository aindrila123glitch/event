# INNOVEX ’26 — Official Event Website
**Course**: PCCCS382 · IT Workshop  
**Institution**: Institute of Engineering & Management (IEM), Kolkata  
**Coordinator**: Mr. Sharma (Event Coordinator & Faculty Mentor, IEM)  
**Event Date**: 31 October 2026 (12-Hour Offline Hackathon, Kolkata)  

---

## 📌 Project Overview
A modern, responsive, high-performance web platform crafted for **INNOVEX ’26**, an offline 12-hour hackathon with 8 hours of dedicated sprint hacking, teams of 2–4 members, and an open innovation format organized at **IEM**.

The project strictly fulfills all 6 pages and criteria specified in the IT Workshop brief:

| # | Page / Feature | Brief Requirements | Implementation Details |
|---|---|---|---|
| **1** | **Home** (`index.html`) | College name, logo, nav menu, intro | IEM header, brand mark, live countdown timer to 31 Oct 2026, hero metrics, quick links. |
| **2** | **Events** (`events.html`) | At least 5 events: name, date, venue, description | 6 detailed sessions (Flagship Hackathon, PR Sprint, AI Keynote, Pitches, CTF Duel, Ceremony) + category filter. |
| **3** | **Registration** (`register.html`) | Name, roll no, email, phone, dept, gender, event + JS validation | Real-time JS validation, field error handling, interactive Ticket ID generator pass modal with print/copy support. |
| **4** | **Gallery** (`gallery.html`) | At least 6 images, CSS styling, hover effects | 6 photorealistic hackathon images, CSS hover zoom/glow, category filtering, fullscreen lightbox with next/prev navigation. |
| **5** | **About Us** (`about.html`) | Institution & coordinator information | IEM profile, Event Coordination under Mr. Sharma, Organizing Committees with contact cards. |
| **6** | **Contact** (`contact.html`) | Address, email, phone, feedback form | Management House IEM Kolkata address, helplines, feedback form with real-time validation and confirmation toast. |

---

## ⚡ JavaScript Features Included
1. **Live Countdown Timer (`js/main.js`)**: Real-time ticker counting down to 31 October 2026, 08:00 AM IST.
2. **Form Validation & Ticket ID Generator (`js/register.js`)**: Real-time regex verification for email, 10-digit Indian phone number, alphanumeric roll number, department and gender checks, plus generation of an interactive participant badge.
3. **Interactive Fullscreen Lightbox Modal (`js/gallery.js`)**: Image preview modal with keyboard navigation (`ArrowLeft`, `ArrowRight`, `Escape`) and category filtering.
4. **Interactive Feedback Handler (`js/contact.js`)**: Dynamic status feedback and automated toast notification system.
5. **Responsive Mobile Drawer Menu (`js/main.js`)**: Animated hamburger navigation with backdrop blur.

---

## 📂 Folder Structure
```
innovex-website/
├── index.html                  # Page 1: Home
├── events.html                 # Page 2: Events (6 sessions)
├── register.html               # Page 3: Registration with JS validation
├── gallery.html                # Page 4: Photo Gallery with CSS hover & lightbox
├── about.html                  # Page 5: About Us & Coordinators
├── contact.html                # Page 6: Contact & Feedback Form
├── README.md                   # Project Documentation
├── PROJECT_REPORT.md           # Submission Report for PCCCS382 Lab
├── css/
│   └── style.css               # Core Design System, Electric Indigo & Neon Mint theme
├── js/
│   ├── main.js                 # Countdown timer, mobile nav, global toasts
│   ├── register.js             # Registration form validation & ticket pass generator
│   ├── gallery.js              # Gallery category filtering & lightbox navigation
│   └── contact.js              # Feedback form validation & interactive submission
└── assets/
    └── images/
        ├── coding-arena.jpg    # Gallery 1: Overnight coding sprint
        ├── pitch-stage.jpg     # Gallery 2: Stage project presentations
        ├── mentorship.jpg      # Gallery 3: Tech mentor & git flow guidance
        ├── awards-ceremony.jpg # Gallery 4: Winners podium & cheque
        ├── networking-hall.jpg # Gallery 5: Atrium networking & refreshments
        └── community-grand.jpg # Gallery 6: Grand community group photo
```

---

## 🚀 How to Run Locally

### Option 1: Direct File Open
Simply double-click `index.html` to open it in any modern browser (Chrome, Edge, Firefox, Safari).

### Option 2: Local HTTP Server (Python)
```bash
python -m http.server 4500
```
Open [http://localhost:4500/](http://localhost:4500/) in your web browser.
