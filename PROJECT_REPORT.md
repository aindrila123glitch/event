# LABORATORY PROJECT REPORT
**Course Code**: PCCCS382  
**Course Name**: IT Workshop  
**Academic Year**: 2026–2027  
**Department**: Department of Computer Science & Engineering (AIML)  
**Institution**: Institute of Engineering & Management (IEM), Kolkata  

---

### Project Title:
**Official Web Portal for AKI HACKS × HACKTOBERFEST ’26**  
*Organized by NEX Club, IEM Kolkata*

---

## 1. Introduction & Objectives
The objective of this project is to develop a fully responsive, aesthetic, and interactive multi-page web platform for **AKI HACKS × HACKTOBERFEST ’26**, a 12-hour offline hackathon scheduled for **31 October 2026** at the IEM Kolkata campus. 

The website satisfies the six primary requirements outlined in the workshop brief:
1. **Home Page**: College & department identification, NEX Club logo badge, responsive navigation, event overview, live countdown timer, and quick statistics.
2. **Events Page**: Schedule of at least five events (implemented 6) with titles, dates, timings, venues, and descriptions.
3. **Registration Page**: Dedicated form accepting Name, Roll No., Email, Phone, Department, Gender, and Event with real-time and on-submit JavaScript validation, plus dynamic Ticket ID generation.
4. **Gallery Page**: Grid of at least six high-resolution hackathon images with CSS hover transitions, category filtering, and an accessible lightbox modal.
5. **About Us Page**: Department profile (CSE - AIML) and comprehensive details of faculty advisors and student coordinators.
6. **Contact Page**: Campus location, official email addresses, emergency phone lines, social handles, and an interactive feedback form.

---

## 2. System Architecture & Technologies Used
- **HyperText Markup Language (HTML5)**: Semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- **Cascading Style Sheets (CSS3)**: Vanilla CSS design system incorporating CSS variables, Flexbox, Grid, glassmorphic backdrop filters, and responsive media queries.
- **JavaScript (ES6+)**:
  - Modular DOM manipulation.
  - Event listeners for live input verification and form validation regex patterns.
  - Interval-based mathematical countdown calculation.
  - Interactive modal views and keyboard listeners.

---

## 3. Page Specifications & Features

### 3.1 Page 1: Home (`index.html`)
- **Institution Header**: Department of Computer Science & Engineering (AIML), IEM Kolkata.
- **Branding**: NEX Club and AKI HACKS dual-tone brand mark.
- **Introduction**: 12-hour offline hackathon format with 8 hours of sprint coding, teams of 2–4 members, and open innovation.
- **Live JavaScript Countdown**: Synchronized to 31 October 2026, 08:00 AM IST.

### 3.2 Page 2: Events (`events.html`)
Includes six offline sessions:
1. *AKI HACKS 2026 Flagship Hackathon* (08:00 AM – 08:00 PM, Management House Auditorium).
2. *Hacktoberfest Open-Source PR Sprint* (11:00 AM – 01:00 PM, CSE AIML Lab 4).
3. *DevRel & Tech Talk: Scaling AI Systems* (02:00 PM – 03:15 PM, Smart Seminar Hall A).
4. *Open Innovation Showcase & Project Pitches* (04:30 PM – 06:45 PM, Main Stage Arena).
5. *Lightning CTF & Speed Coding Duel* (07:00 PM – 07:45 PM, Cyber Arena Lab 2).
6. *Grand Awards & Closing Ceremony* (08:00 PM – 09:00 PM, IEM Auditorium).

### 3.3 Page 3: Registration (`register.html`)
Implements client-side validation for:
- **Full Name**: Non-empty, minimum 3 characters, alphabetical validation.
- **Roll Number**: Mandatory, alphanumeric university roll structure.
- **Email**: Standard RFC 5322 regex validation.
- **Phone**: 10-digit Indian telecommunication format (`^[6-9]\d{9}$`).
- **Department**: Mandatory dropdown selection.
- **Gender**: Single-choice radio input requirement.
- **Event**: Selection of registered track or ceremony pass.
- **Pass Generator**: On valid submission, automatically renders a personalized registration pass modal with a unique ID (e.g. `AKI26-XXXXXX`), copy button, and print button.

### 3.4 Page 4: Gallery (`gallery.html`)
Displays six images covering the full hackathon lifecycle:
1. *Overnight Sprint Arena*: Student teams coding with ambient lighting and monitors.
2. *Stage Project Demonstrations*: Student presentation of AI healthcare models before judges.
3. *Mentorship & Git Architecture*: System design reviews on whiteboards.
4. *Podium & Prize Distribution*: Champions with giant cheque and trophy.
5. *Builder Community Networking*: Atrium networking and refreshment breaks.
6. *Grand Finale Group Photo*: Over 50 builders and organizers with event banners.
Features smooth zoom hover animations, category filters, and keyboard-friendly lightbox viewer.

### 3.5 Page 5: About Us (`about.html`)
- Overview of Department of CSE (AIML), IEM Kolkata.
- NEX Club philosophy and community mission.
- **Faculty Leadership**: Dr. Satyajit Chakrabarti (Director), Dr. Subhabrata Sengupta (HOD), Prof. Anirban Mukherjee (Faculty Coordinator), Prof. Debashree Roy (Lab Convener).
- **Student Leadership**: Soumyadip Roy (President), Ananya Banerjee (Tech Lead), Rohan Mukherjee (Logistics Lead), Priyanshu Sen (Outreach Lead).

### 3.6 Page 6: Contact & Feedback (`contact.html`)
- **Campus Address**: Management House, D-1, Street Number 27, DD Block, Action Area I, Newtown / Salt Lake Sector V, Kolkata 700091.
- **Email Helplines**: `nex@iemcal.com` and `contact@akihacks.xyz`.
- **Contact Numbers**: +91 98300 12345 / +91 98741 56789.
- **Interactive Feedback Form**: Accepts visitor queries with input validation, toast notification, and instant confirmation messaging.

---

## 4. Verification & Testing
- Tested across viewport widths: Desktop (1920x1080), Laptop (1366x768), Tablet (768x1024), and Mobile (375x667).
- HTTP Status: Verified `HTTP/1.0 200 OK` across all HTML documents, CSS files, JavaScript assets, and images.
- All external links verified against official MLH, Instagram (`@_nex_iem_`), and AKI HACKS portals.

---

## 5. Conclusion
The website delivers a production-grade, aesthetically captivating solution that complies with all academic requirements for the PCCCS382 IT Workshop laboratory assignment while serving as a real promotional platform for the AKI HACKS × HACKTOBERFEST ’26 offline hackathon.
