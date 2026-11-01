---
title: "Logistics & Technical Infrastructure — .NET Conf Amravati"
description: "Blueprints for auditorium facilities, stage audio-visual systems, high-density Wi-Fi networking, catering management, and transportation."
---

# Logistics & Technical Infrastructure

A technical conference of scale succeeds or fails on the strength of its physical and digital infrastructure. This document outlines the technical standards, venue layout specifications, power redundancy protocols, and hospitality logistics for **.NET Conf Amravati**.

---

## 1. Venue Architecture & Capacity

```
┌────────────────────────────────────────────────────────────────────────┐
│                        PRPCEM CAMPUS LAYOUT                            │
│                                                                        │
│   [ MAIN AUDITORIUM ]        [ CENTRAL ATRIUM ]     [ SEMINAR HALL A ] │
│   • Capacity: 450 pax        • Registration Kiosks  • Capacity: 180 pax│
│   • Track 1: Keynote/Cloud   • Sponsor Booth Pav.   • Track 2: AI/Labs │
│   • Dual 4K Laser Projection • Refreshments/Tea     • Ultra HD Display │
│                              • Career Lounge                           │
│                                                                        │
│   [ COMPUTER LAB 1 & 2 ]     [ VIP GREEN ROOM ]     [ DINING AREA ]    │
│   • 90 Workstations (Labs)   • Speaker Briefing     • Buffet Service   │
└────────────────────────────────────────────────────────────────────────┘
```

### Venue Specifications
- **Central Main Auditorium:** 450 tiered theater seats, acoustic wall paneling, dual 4K laser projection screens (200-inch diagonal), motorized stage curtains, and central air conditioning.
- **Seminar Hall A (Track 2):** 180 tiered lecture hall seats, interactive smart podium, and dual high-lumen auxiliary projection for parallel specialized tracks.
- **Computer Labs 1 & 2:** 90 networked Intel Core i7 workstations pre-configured with Visual Studio 2022/2025, VS Code, .NET SDKs, Docker Desktop, and Git for hands-on guided workshops.
- **Central Atrium & Foyer:** 4,000 sq ft covered space accommodating 8 sponsor exhibition booths, 4 self-service QR registration desks, and morning/afternoon high-tea service.

---

## 2. Stage Audio-Visual (AV) Engineering

```
[ Stage Presentation Laptop ] ───► HDMI Splitter / Matrix Switcher
                                         │
                ┌────────────────────────┴────────────────────────┐
                ▼                                                 ▼
     [ Primary 4K Projector ]                          [ Stage Confidence Monitor ]
     (Audience View - 200 inch)                        (Speaker View - 42 inch)
```

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

- **Railway & Airport Transfers:** MSC PRPCEM fleet vehicles dispatched for guest pickups from Badnera Junction (BD), Amravati Railway Station (AMI), or Dr. Babasaheb Ambedkar International Airport (Nagpur - NAG).
- **Driver Escort Protocol:** Student concierge team verifies flight/train schedules 2 hours in advance and greets arriving speakers at the platform/terminal exit with official conference name placards.
