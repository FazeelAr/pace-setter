export const studyLevels = [
  { value: "undergraduate", label: "Undergraduate / Bachelor's" },
  { value: "postgraduate", label: "Postgraduate / Master's" },
  { value: "phd", label: "PhD / Doctorate" },
] as const;

export const degreePrograms = [
  { value: "arts-humanities", label: "Art & Humanities" },
  { value: "business", label: "Business & Management" },
  { value: "computing", label: "Computing & Technology" },
  { value: "engineering", label: "Engineering" },
  { value: "healthcare", label: "Healthcare & Life Sciences" },
  { value: "social-sciences", label: "Social Sciences" },
] as const;

export type StudyLevel = (typeof studyLevels)[number]["value"];
export type DegreeProgram = (typeof degreePrograms)[number]["value"];

export const destinations = [
  {
    value: "united-kingdom",
    name: "United Kingdom",
    flag: "🇬🇧",
    description: "World-leading universities, focused degrees, and strong graduate career routes.",
    institutes: ["University of Oxford", "University of Cambridge", "Imperial College London", "University College London", "University of Manchester"],
  },
  {
    value: "australia",
    name: "Australia",
    flag: "🇦🇺",
    description: "Globally respected education with practical learning and a welcoming student life.",
    institutes: ["University of Melbourne", "University of Sydney", "Monash University", "University of Queensland", "UNSW Sydney"],
  },
  {
    value: "canada",
    name: "Canada",
    flag: "🇨🇦",
    description: "Career-focused programs, welcoming communities, and excellent post-study options.",
    institutes: ["University of Toronto", "University of British Columbia", "McGill University", "University of Waterloo", "University of Alberta"],
  },
  {
    value: "new-zealand",
    name: "New Zealand",
    flag: "🇳🇿",
    description: "High-quality, hands-on education in a safe country with an outstanding quality of life.",
    institutes: ["University of Auckland", "University of Otago", "Victoria University of Wellington", "University of Canterbury", "Massey University"],
  },
  {
    value: "europe",
    name: "Europe",
    flag: "🇪🇺",
    description: "A diverse range of affordable, English-taught degrees across leading European institutions.",
    institutes: ["TU Delft", "University of Amsterdam", "KU Leuven", "Technical University of Munich", "Sorbonne University"],
  },
  {
    value: "turkey",
    name: "Turkey",
    flag: "🇹🇷",
    description: "Affordable, high-quality education at the crossroads of Europe and Asia.",
    institutes: ["Koç University", "Bilkent University", "Sabancı University", "Istanbul University", "Middle East Technical University"],
  },
] as const;

const programDetails = [
  { category: "arts-humanities", title: "Art, Design & Creative Practice", duration: "3-4 years" },
  { category: "arts-humanities", title: "English Literature & Cultural Studies", duration: "1-4 years" },
  { category: "business", title: "Business Administration & Management", duration: "1-4 years" },
  { category: "business", title: "Finance, Accounting & Economics", duration: "1-4 years" },
  { category: "computing", title: "Computer Science & Software Engineering", duration: "1-4 years" },
  { category: "computing", title: "Data Science & Artificial Intelligence", duration: "1-4 years" },
  { category: "engineering", title: "Engineering & Renewable Energy", duration: "1-4 years" },
  { category: "healthcare", title: "Public Health & Healthcare Management", duration: "1-4 years" },
  { category: "healthcare", title: "Biomedical & Life Sciences", duration: "1-4 years" },
  { category: "social-sciences", title: "International Relations & Development", duration: "1-4 years" },
  { category: "social-sciences", title: "Psychology & Social Sciences", duration: "1-4 years" },
] as const;

export function getLevelLabel(level: string) {
  return studyLevels.find((item) => item.value === level)?.label ?? "All study levels";
}

export function getProgramLabel(program: string) {
  return degreePrograms.find((item) => item.value === program)?.label ?? "All degree programs";
}

export function getDestination(value: string) {
  return destinations.find((destination) => destination.value === value);
}

export function getPrograms(program: string, level: string) {
  return programDetails
    .filter((item) => !program || item.category === program)
    .map((item) => ({
      ...item,
      level: getLevelLabel(level),
    }));
}
