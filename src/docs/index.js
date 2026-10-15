import { gettingStartedDocs } from './gettingStarted';
import { clubDocs } from './clubDocs';
import { teamDocs } from './teamDocs';
import { technicalDocs } from './technicalDocs';
import { projectDocs } from './projectDocs';
import { eventDocs } from './eventDocs';
import { sopsDocs } from './sops';
import { policiesDocs } from './policies';
import { templatesDocs } from './templates';
import { referenceDocs } from './reference';
import { archiveDocs } from './archive';

export const allDocuments = [
  ...gettingStartedDocs,
  ...clubDocs,
  ...teamDocs,
  ...technicalDocs,
  ...projectDocs,
  ...eventDocs,
  ...sopsDocs,
  ...policiesDocs,
  ...templatesDocs,
  ...referenceDocs,
  ...archiveDocs
];

export const docCategories = [
  {
    id: "01-getting-started",
    name: "1. Getting Started",
    docs: gettingStartedDocs
  },
  {
    id: "02-club-documentation",
    name: "2. Club Documentation",
    docs: clubDocs
  },
  {
    id: "03-team-documentation",
    name: "3. Team Documentation",
    docs: teamDocs
  },
  {
    id: "04-technical-documentation",
    name: "4. Technical Documentation",
    docs: technicalDocs
  },
  {
    id: "05-project-documentation",
    name: "5. Project Documentation",
    docs: projectDocs
  },
  {
    id: "06-event-documentation",
    name: "6. Event Documentation",
    docs: eventDocs
  },
  {
    id: "07-sops",
    name: "7. Standard Operating Procedures",
    docs: sopsDocs
  },
  {
    id: "08-policies-guidelines",
    name: "8. Policies and Guidelines",
    docs: policiesDocs
  },
  {
    id: "09-templates-standards",
    name: "9. Templates and Standards",
    docs: templatesDocs
  },
  {
    id: "10-reference",
    name: "10. Reference Documentation",
    docs: referenceDocs
  },
  {
    id: "11-archive-history",
    name: "11. Archive & Revision History",
    docs: archiveDocs
  }
];

export const getDocumentById = (id) => {
  return allDocuments.find(d => d.id === id || d.sopId === id || d.policyId === id || d.templateId === id);
};
