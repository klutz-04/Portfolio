export const skillCategories = [
  {
    category: "Business Analysis & Tools",
    skills: [
      "Requirements Gathering",
      "BRD Documentation",
      "Use Case Modeling",
      "Gap Analysis",
      "Agile/Scrum",
      "JIRA",
      "MS Project"
    ]
  },
  {
    category: "Technical Skills",
    skills: [
      "SQL",
      "Python (Pandas, NumPy, Seaborn)",
      "Tableau",
      "Excel (Advanced)",
      "Relativity",
      "Sightline",
      "Power BI"
    ]
  },
  {
    category: "Data & Systems",
    skills: [
      "Data Mapping",
      "ETL",
      "Data Quality Checks",
      "OCR & Indexing",
      "Search Term Reporting",
      "SharePoint",
      "Database Management"
    ]
  },
  {
    category: "Domain Knowledge",
    skills: [
      "eDiscovery",
      "Basel Capital Frameworks",
      "Project Management",
      "Business Process Improvement",
      "System Implementation",
      "Data Analysis",
      "Quality Assurance"
    ]
  }
];

// Flat array of all skills for simpler use cases
export const allSkills = skillCategories.reduce((acc, category) => {
  return [...acc, ...category.skills];
}, []); 