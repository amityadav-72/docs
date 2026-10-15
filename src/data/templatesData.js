export const letterTemplates = [
  {
    id: "principal-permission",
    name: "Principal Permission Letter (Event Approval)",
    category: "Administrative",
    recipientRole: "The Principal",
    collegeName: "P. R. Pote (Patil) College of Engineering & Management, Amravati",
    subjectPrefix: "Permission to organize technical event / workshop titled",
    description: "Official permission letter submitted to the College Principal for administrative sanction, venue allocation, and student participation.",
    defaultFields: {
      eventTitle: "Azure Cloud & AI Bootcamp: Hands-on Workshop",
      eventDate: "24th October 2026",
      eventTime: "10:00 AM to 04:30 PM",
      venue: "Central Seminar Hall (Block A) & Lab 3",
      speakerName: "Er. Rahul Deshmukh (Cloud Solutions Architect, Microsoft MVP)",
      expectedAttendees: "150",
      targetAudience: "Second and Third Year Engineering Students",
      objective: "To equip students with practical skills in Azure Cloud computing, microservices deployment, and GitHub Actions CI/CD pipelines.",
      organizerName: "President, MSC PRPCEM",
      facultyAdvisor: "Prof. S. R. Sharma (Faculty Advisor, MSC PRPCEM)",
      hodName: "Dr. A. B. Kulkarni (Head of Department, CSE/IT)"
    },
    generateContent: (data) => `To,
The Principal,
${data.collegeName || "P. R. Pote (Patil) College of Engineering & Management, Amravati"}.

Through: Head of Department & Faculty Advisor, MSC PRPCEM.

Subject: Requisition for permission to conduct "${data.eventTitle}" on ${data.eventDate}.

Respected Sir/Madam,

We, the executive committee of Microsoft Student Club (MSC PRPCEM), respectfully request your kind permission to organize a technical workshop titled "${data.eventTitle}".

The details of the proposed event are as follows:
• Title of the Event: ${data.eventTitle}
• Date & Timing: ${data.eventDate} | ${data.eventTime}
• Proposed Venue: ${data.venue}
• Target Participants: ${data.targetAudience} (Approx. ${data.expectedAttendees} students)
• Resource Person / Keynote Speaker: ${data.speakerName}

Objective & Learning Outcomes:
${data.objective}
This workshop aims to give students practical industry-level exposure aligned with current IT trends, boosting student employability and technical competence.

We kindly request you to grant us approval to conduct this event on campus and instruct the administration to facilitate the requisite venue and infrastructure.

Thanking you.

Yours faithfully,

${data.organizerName}
President, Microsoft Student Club (MSC PRPCEM)

Recommended & Forwarded by:

___________________________             ___________________________
${data.facultyAdvisor}                  ${data.hodName}
Faculty Coordinator, MSC                Head of Department (CSE/IT)`
  },
  {
    id: "lab-booking",
    name: "Computer Lab & Internet Booking Requisition",
    category: "Infrastructure",
    recipientRole: "Head, Central Computing Center / Lab In-Charge",
    collegeName: "P. R. Pote (Patil) College of Engineering & Management, Amravati",
    subjectPrefix: "Requisition for Computer Center Lab allocation and high-speed Internet connectivity",
    description: "Submitted to Lab In-charge or System Administrator to reserve workstations and ensure required software is available.",
    defaultFields: {
      eventTitle: "Hands-on Full-Stack Web Development Hackathon",
      eventDate: "28th October 2026",
      eventTime: "09:30 AM to 05:00 PM",
      labName: "Central Computer Center Lab 01 & 02",
      numSystems: "80 Systems",
      softwareRequired: "Node.js (v20+), Visual Studio Code, Git, Google Chrome with internet access",
      organizerName: "Technical Lead, MSC PRPCEM",
      facultyAdvisor: "Prof. S. R. Sharma"
    },
    generateContent: (data) => `To,
The Lab In-Charge / System Administrator,
Central Computing Center,
${data.collegeName}.

Subject: Booking of ${data.labName} for "${data.eventTitle}".

Respected Sir/Madam,

As part of the upcoming hands-on session organized by the Microsoft Student Club (MSC PRPCEM), we require practical workstation access for participating students.

We kindly request you to reserve the laboratory with the following specifications:
• Event Name: ${data.eventTitle}
• Date & Time: ${data.eventDate} (${data.eventTime})
• Required Lab: ${data.labName}
• Number of Systems: ${data.numSystems}
• Software Requirements: ${data.softwareRequired}

We request you to kindly instruct the lab technical assistants to ensure internet connectivity and power backup are functional during this duration. Our technical team volunteers will assist in pre-verifying the setups 24 hours prior to the event.

Thanking you.

Yours sincerely,

${data.organizerName}
Technical Lead, MSC PRPCEM

Approved by:
${data.facultyAdvisor}
Faculty Advisor, MSC PRPCEM`
  },
  {
    id: "duty-leave-od",
    name: "Duty Leave (OD Attendance) Recommendation",
    category: "Academic",
    recipientRole: "The Respective Heads of Departments (CSE, IT, AI&DS, EXTC)",
    collegeName: "P. R. Pote (Patil) College of Engineering & Management, Amravati",
    subjectPrefix: "Granting of On-Duty (OD) Attendance for student organizers and participants",
    description: "Recommends attendance regularization / OD for students actively organizing or attending the approved technical event.",
    defaultFields: {
      eventTitle: "National Level 24-Hour Hackathon - InnovateX",
      eventDate: "14th & 15th November 2026",
      departments: "CSE, IT, AI&DS, EXTC",
      studentsCount: "45 Core Volunteers & Organizers",
      organizerName: "President, MSC PRPCEM",
      facultyAdvisor: "Prof. S. R. Sharma"
    },
    generateContent: (data) => `To,
The Head of Department (${data.departments}),
${data.collegeName}.

Subject: Request for grant of On-Duty (OD) Leave / Attendance for students on ${data.eventDate}.

Respected Sir/Madam,

The Microsoft Student Club (MSC PRPCEM) is organizing "${data.eventTitle}" on ${data.eventDate} under official institutional approval (Letter Ref: MSC/2026/EV-04).

To ensure smooth event management and technical operations, the enrolled core team members and student volunteers from your esteemed department are rendering active duty throughout the event days.

The list of nominated students with Roll Numbers and Classes is attached herewith (Annexure A).

We kindly request you to consider their attendance for the lectures/practicals conducted on the specified dates and grant them On-Duty (OD) leave so that their academic attendance is not adversely impacted.

Thanking you for your kind encouragement and cooperation.

Yours sincerely,

${data.organizerName}
President, Microsoft Student Club (MSC PRPCEM)

Recommended by:
${data.facultyAdvisor}
Faculty Coordinator, MSC PRPCEM`
  },
  {
    id: "speaker-invitation",
    name: "Official Guest Speaker Formal Invitation",
    category: "Outreach",
    recipientRole: "Respected Keynote Speaker / Industry Expert",
    collegeName: "P. R. Pote (Patil) College of Engineering & Management, Amravati",
    subjectPrefix: "Invitation as Keynote Speaker / Resource Person for Technical Session",
    description: "Formal letter sent to external software engineers, Microsoft MVPs, or alumni invited to address students.",
    defaultFields: {
      speakerName: "Mr. Aniket Verma",
      speakerDesignation: "Staff Software Engineer, Microsoft Cloud & AI",
      eventTitle: "Mastering Generative AI & Azure OpenAI Services",
      eventDate: "05th November 2026",
      eventTime: "11:00 AM to 01:00 PM IST",
      venueMode: "Hybrid (Auditorium & Live Microsoft Teams Broadcast)",
      organizerName: "President & VP, MSC PRPCEM",
      facultyAdvisor: "Prof. S. R. Sharma"
    },
    generateContent: (data) => `Dear ${data.speakerName},
${data.speakerDesignation},

Greetings from Microsoft Student Club (MSC), P. R. Pote (Patil) College of Engineering & Management, Amravati!

On behalf of the Management, Principal, Faculty, and Student Fraternity of PRPCEM, it gives us immense pleasure to invite you as our distinguished Resource Person / Keynote Speaker for our upcoming technical session:

• Session Title: "${data.eventTitle}"
• Date: ${data.eventDate}
• Time: ${data.eventTime}
• Mode & Venue: ${data.venueMode}
• Audience Profile: 200+ passionate undergraduate engineering students & student developers.

Your deep experience and contributions in the tech industry will greatly motivate our students, providing them with clear real-world perspectives on emerging industry standards and career roadmaps.

We would be deeply honored if you could accept our invitation. Kindly let us know your availability so that we can coordinate technical logistics and hospitality arrangements.

Looking forward to your esteemed presence and mentorship!

Warm regards,

${data.organizerName}
Executive Leadership, MSC PRPCEM
Email: president@mscprpcem.tech | contact@mscprpcem.tech
Website: docs.mscprpcem.tech / mscprpcem.tech`
  }
];
