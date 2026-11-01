---
title: "Logistics & Technical Infrastructure — .NET Conf Amravati"
description: "Blueprints for auditorium facilities, stage audio-visual systems, high-density Wi-Fi networking, catering management, and transportation."
---

# Logistics & Technical Infrastructure

A technical conference of scale succeeds or fails on the strength of its physical and digital infrastructure. This document outlines the technical standards, venue layout specifications, power redundancy protocols, and hospitality logistics for **.NET Conf Amravati**.

---

## 1. Venue Architecture & Capacity

<div class="quick-nav-grid" style="margin: 1.5rem 0;">
  <div class="stat-card" style="text-align: left;">
    <div style="font-weight: 700; color: #00A4EF; margin-bottom: 4px;">PRPCEM Seminar Hall</div>
    <div style="font-size: 0.88rem; color: var(--vp-c-text-2);"><strong>Capacity:</strong> 180+ Pax Tiered Hall<br><strong>Historical Role:</strong> Host venue for 2024 & 2025 Editions<br><strong>AV:</strong> Interactive Smart Podium & UHD Dual Projection</div>
  </div>
  <div class="stat-card" style="text-align: left;">
    <div style="font-weight: 700; color: #0078D4; margin-bottom: 4px;">Main Central Auditorium</div>
    <div style="font-size: 0.88rem; color: var(--vp-c-text-2);"><strong>Capacity:</strong> 450–500 Pax Tiered Seating<br><strong>Role:</strong> 2026 1-Day Mega Conference Main Stage<br><strong>AV:</strong> Dual 4K Laser Projection Screens</div>
  </div>
  <div class="stat-card" style="text-align: left;">
    <div style="font-weight: 700; color: #7FBA00; margin-bottom: 4px;">Central Atrium & Foyer</div>
    <div style="font-size: 0.88rem; color: var(--vp-c-text-2);"><strong>Area:</strong> 4,000 sq ft Covered Floor<br><strong>Focus:</strong> QR Check-in Desks<br><strong>Expo:</strong> Sponsor Booths & Career Lounge</div>
  </div>
  <div class="stat-card" style="text-align: left;">
    <div style="font-weight: 700; color: #FFB900; margin-bottom: 4px;">Computer Labs 1 & 2</div>
    <div style="font-size: 0.88rem; color: var(--vp-c-text-2);"><strong>Workstations:</strong> 90 Intel Core i7 PCs<br><strong>Focus:</strong> Guided Technical Labs<br><strong>Setup:</strong> VS 2022/2026, Docker & Local AI</div>
  </div>
</div>

### Venue Specifications
- **PRPCEM Seminar Hall:** 180+ tiered lecture hall seats, interactive smart podium, and dual high-lumen auxiliary projection; served as the dedicated host venue for both the 2024 and 2025 3-day editions.
- **Central Main Auditorium:** 450–500 tiered theater seats, acoustic wall paneling, dual 4K laser projection screens (200-inch diagonal), motorized stage curtains, and central air conditioning; allocated for the 2026 1-day mega event.
- **Computer Labs 1 & 2:** 90 networked Intel Core i7 workstations pre-configured with Visual Studio, VS Code, .NET SDKs, Docker Desktop, and Git for hands-on guided workshops.
- **Central Atrium & Foyer:** 4,000 sq ft covered space accommodating sponsor exhibition booths, self-service QR registration desks, and morning/afternoon high-tea service.

---

## 2. Stage Audio-Visual (AV) Engineering

<div class="diagram-container">
  <div class="diagram-root">
    <div class="diagram-label">Stage Presentation Source</div>
    <div class="diagram-sub">HDMI 2.1 / USB-C DisplayPort Matrix Switcher</div>
  </div>
  <div class="diagram-connector-down"></div>
  <div class="diagram-branches">
    <div class="diagram-branch-card">
      <span class="badge badge-info">Audience View</span>
      <div class="diagram-branch-title">Primary 4K Laser Projector</div>
      <div class="diagram-branch-meta">200-inch Motorized High-Gain Screen (1920x1080p, 60fps)</div>
    </div>
    <div class="diagram-branch-card highlight">
      <span class="badge badge-success">Speaker View</span>
      <div class="diagram-branch-title">Stage Confidence Monitor</div>
      <div class="diagram-branch-meta">42-inch Low-Profile Floor Display with Countdown Clock</div>
    </div>
  </div>
</div>

- **Audio Mixing:** 16-channel digital sound mixing console operated by a dedicated sound engineer.
- **Microphone Allocation:**
  - 2 Shure Wireless UHF Lapel/Headset Mics (Primary & Standby Speaker)
  - 1 Gooseneck Podium Mic (Fixed Backup)
  - 4 Handheld Wireless UHF Microphones (Dedicated to student runners for audience Q&A)
- **Visual Confidence Monitor:** A 42-inch low-profile display angled at the podium base duplicating the projection feed with an embedded countdown timer so speakers can manage pacing without turning their backs to the audience.

---

## 3. High-Density Network & Connectivity

A common failure point at developer conferences is network collapse when hundreds of connected devices attempt to access the local Wi-Fi simultaneously.

### Network Architecture
- **Dedicated Fiber Leased Line:** 300 to 500 Mbps symmetrical leased line configured exclusively for the conference venues, bypassing general campus student traffic.
- **VLAN Segregation:**
  - `VLAN 10 - STAGE & STREAMING` (Priority QoS, Hardwired Gigabit Ethernet, Unthrottled bandwidth).
  - `VLAN 20 - SPONSORS & VIPs` (Dedicated SSID: `DNCA-SPONSORS`, 50 Mbps dedicated bandwidth).
  - `VLAN 30 - ATTENDEE WI-FI` (Captive Portal SSID: `DNCA-FREE-WIFI`, isolated client traffic, 5 Mbps per device bandwidth throttle).
- **Access Point Density:** 6 enterprise Wi-Fi 6 (802.11ax) dual-band access points deployed inside the auditorium and 4 access points in the atrium to support up to 600 concurrent wireless associations.

---

## 4. Power & Generator Redundancy

- **Mains Supply:** 3-phase commercial campus power grid.
- **Online UPS System:** 20 kVA centralized uninterruptible power supply (UPS) guaranteeing zero-millisecond power drop for audio mixing boards, stage projectors, and network switches.
- **Diesel Generator Standby:** 125 kVA campus generator equipped with an Automatic Transfer Switch (ATS) capable of full load takeover within 8 seconds of any grid failure.

---

## 5. Catering & Hospitality Logistics

- **Morning Refreshments (08:00 AM – 09:15 AM):** Freshly brewed filter coffee, tea, and packaged breakfast snacks in the courtyard.
- **Mid-Day Buffet Lunch (01:15 PM – 02:30 PM):**
  - Staggered entry (Track 1 delegates at 01:15 PM, Track 2 delegates at 01:30 PM) across 6 parallel buffet counters to maintain queue wait times below 5 minutes.
  - 100% vegetarian menu prepared by certified local catering partners adhering to strict hygiene guidelines.
- **Speaker Green Room:** Dedicated VIP green room stocked with seasonal fruits, hot beverages, dry fruits, and packaged mineral water throughout the day.

---

## 6. Transportation & Transit Logistics

### Speaker Travel Scheduling & The Holiday Shift
- **Weekday Speaker Travel Bottleneck (2024 & 2025):** The 2024 (Jan 9–11, 2025) and 2025 (Jan 7–9, 2026) editions took place as 3-day events spanning working weekdays (Thursday and Friday). Industry keynote speakers (Microsoft Employees and MVPs) had demanding enterprise work commitments, making mid-week travel to Amravati challenging due to corporate leave constraints. Simultaneously, student attendees had regular weekday college lectures and labs.
- **Permanent Solution for 2026:** Transitioning the conference to an intensive 1-day mega event on **December 25 (Christmas Public Holiday)** allows outstation corporate speakers from Pune, Mumbai, Hyderabad, and Bengaluru to travel freely without weekday leave restrictions, guaranteeing full attendance and seamless transit.

### Transit & Concierge Protocols
- **Railway & Airport Transfers:** MSC PRPCEM fleet vehicles dispatched for guest pickups from Badnera Junction (BD), Amravati Railway Station (AMI), or Dr. Babasaheb Ambedkar International Airport (Nagpur - NAG).
- **Driver Escort Protocol:** Student concierge team verifies flight/train schedules 2 hours in advance and greets arriving speakers at the platform/terminal exit with official conference name placards.
