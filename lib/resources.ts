export type Course = {
  title: string;
  url: string;
  duration: string;
  description: string;
};

export type IndustryResource = {
  name: string;
  url: string;
  description: string;
};

export type IndustrySection = {
  industry: string;
  resources: IndustryResource[];
};

export type Article = {
  title: string;
  source: string;
  description: string;
  url: string;
  category: string;
};

export const linkedinCourses: Course[] = [
  {
    title: "Job Search Strategies",
    url: "https://www.linkedin.com/learning/job-search-strategies",
    duration: "37 min",
    description:
      "Start here — structured overview of the full process.",
  },
  {
    title: "Rock Your LinkedIn Profile",
    url: "https://www.linkedin.com/learning/rock-your-linkedin-profile",
    duration: "~1h",
    description:
      "From a LinkedIn insider; covers every profile section.",
  },
  {
    title: "Professional Networking",
    url: "https://www.linkedin.com/learning/professional-networking",
    duration: "27 min",
    description:
      "Dorie Clark — authentic networking, great for introverts.",
  },
  {
    title: "How to Rock an Interview",
    url: "https://www.linkedin.com/learning/how-to-rock-an-interview",
    duration: "28 min",
    description:
      'Candidate-facing; STAR framework, storytelling, "tell me about yourself."',
  },
  {
    title: "Writing a Cover Letter",
    url: "https://www.linkedin.com/learning/writing-a-cover-letter",
    duration: "19 min",
    description:
      "Jenny Foss — how to get it in front of a real decision-maker.",
  },
  {
    title: "Negotiating Your Job Offer",
    url: "https://www.linkedin.com/learning/negotiating-your-job-offer",
    duration: "1h 14m",
    description:
      "Benchmark, negotiate, counteroffer — save for offer stage.",
  },
];

export const industrySections: IndustrySection[] = [
  {
    industry: "Consulting",
    resources: [
      {
        name: "Vault Guide to Consulting",
        url: "https://www.vault.com",
        description:
          "Firm rankings, interview insights, industry overview.",
      },
      {
        name: "Management Consulted",
        url: "https://www.managementconsulted.com",
        description: "Case prep, firm profiles, salary data.",
      },
      {
        name: "McKinsey Insights",
        url: "https://www.mckinsey.com/insights",
        description:
          "Read and understand how consultants think and write.",
      },
    ],
  },
  {
    industry: "Finance / Banking",
    resources: [
      {
        name: "Vault Guide to Investment Banking",
        url: "https://www.vault.com",
        description: "Industry overview, firm rankings, career paths.",
      },
      {
        name: "Investopedia",
        url: "https://www.investopedia.com",
        description: "Terminology, role definitions, how firms work.",
      },
      {
        name: "Wall Street Oasis",
        url: "https://www.wallstreetoasis.com",
        description:
          "Community-driven, very frank about what entry-level finance actually looks like.",
      },
    ],
  },
  {
    industry: "Tech / Software",
    resources: [
      {
        name: "Levels.fyi",
        url: "https://www.levels.fyi",
        description:
          "Compensation benchmarks, role structures at tech companies.",
      },
      {
        name: "Blind",
        url: "https://www.teamblind.com",
        description:
          "Frank community discussion about hiring at specific tech companies.",
      },
      {
        name: "Glassdoor",
        url: "https://www.glassdoor.com",
        description: "Company reviews, interview question databases.",
      },
    ],
  },
  {
    industry: "Healthcare",
    resources: [
      {
        name: "Health eCareers",
        url: "https://www.healthecareers.com",
        description: "Role types, industry structure.",
      },
      {
        name: "NEJM Career Center",
        url: "https://www.nejmcareercenter.org",
        description:
          "For students interested in health research or clinical-adjacent roles.",
      },
      {
        name: "Health Affairs Blog",
        url: "https://www.healthaffairs.org/blog",
        description:
          "For students interested in health policy.",
      },
    ],
  },
  {
    industry: "Nonprofit / Government / Education",
    resources: [
      {
        name: "Idealist",
        url: "https://www.idealist.org",
        description: "Nonprofit job board and career resources.",
      },
      {
        name: "USAJOBS",
        url: "https://www.usajobs.gov",
        description:
          "Federal government roles, internship programs (Presidential Management Fellows, Pathways).",
      },
      {
        name: "The Chronicle of Philanthropy",
        url: "https://www.philanthropy.com",
        description:
          "For students interested in nonprofit leadership tracks.",
      },
    ],
  },
  {
    industry: "Marketing / Communications",
    resources: [
      {
        name: "American Marketing Association",
        url: "https://www.ama.org",
        description: "Student resources, job board.",
      },
      {
        name: "AdAge & PRWeek",
        url: "https://www.adage.com",
        description:
          "Read and understand the industry's current conversations.",
      },
    ],
  },
  {
    industry: "Environmental / Sustainability",
    resources: [
      {
        name: "Environmental Career Opportunities",
        url: "https://www.ecojobs.com",
        description: "Environmental job listings and career resources.",
      },
      {
        name: "GreenBiz",
        url: "https://www.greenbiz.com",
        description: "Sustainability in business context.",
      },
      {
        name: "ClimateBase",
        url: "https://www.climatebase.co",
        description: "Climate-focused roles, companies, and career paths.",
      },
    ],
  },
];

export const articles: Article[] = [
  {
    title: "Your First Job Predicts More Than You Think",
    source: "The Atlantic, Feb 2026",
    description:
      "Why the first job out of school has outsized effects on the career trajectory that follows.",
    url: "https://www.theatlantic.com/ideas/2026/02/first-jobs-graduates-predict-future/685892/",
    category: "On the job market for new grads",
  },
  {
    title: "Something Alarming Is Happening to the Job Market",
    source: "The Atlantic, April 2025",
    description:
      "A new sign that AI is competing with college grads — useful context for why the search feels harder than it should.",
    url: "https://www.theatlantic.com/economy/archive/2025/04/job-market-youth/682641/",
    category: "On the job market for new grads",
  },
  {
    title:
      "How to Ask for an Informational Interview (and Get a 'Yes')",
    source: "The Muse",
    description:
      "A practical formula for cold outreach — who to target, how to write the message, how to follow up.",
    url: "https://www.themuse.com/advice/how-to-ask-for-an-informational-interview-and-get-a-yes",
    category: "On networking",
  },
  {
    title: "5 Questions to Ask During an Informational Interview",
    source: "HBR, Oct 2021",
    description:
      "How to structure a career conversation so it's useful for both parties and actually moves the search forward.",
    url: "https://hbr.org/2021/10/5-questions-to-ask-during-an-informational-interview",
    category: "On networking",
  },
  {
    title:
      "How to Get Your Resume Noticed (And Out of the Trash Bin)",
    source: "HBR, Sept 2020",
    description:
      "Recruiters spend about 7 seconds on a resume. Five practical ways to make yours pass that scan.",
    url: "https://hbr.org/2020/09/how-to-get-your-resume-noticed-and-out-of-the-trash-bin",
    category: "On resumes",
  },
  {
    title: "Use the STAR Interview Method to Land Your Next Job",
    source: "HBR, Feb 2025",
    description:
      "How to structure behavioral interview answers — clear, credible, and memorable. Includes example responses.",
    url: "https://hbr.org/2025/02/use-the-star-interview-method-to-land-your-next-job",
    category: "On the interview",
  },
  {
    title: "38 Smart Questions to Ask in a Job Interview",
    source: "HBR, May 2022",
    description:
      "The underrated part of interview prep — questions that signal genuine curiosity and help assess fit.",
    url: "https://hbr.org/2022/05/38-smart-questions-to-ask-in-a-job-interview",
    category: "On the interview",
  },
  {
    title: "How to Ace a Job Interview With an AI",
    source: "WSJ, Feb 2026",
    description:
      "AI video interviews are becoming standard early in the hiring process. Practical tips from recruiters and platform CEOs on how to prepare, what the systems actually score, and what to avoid.",
    url: "https://www.wsj.com/tech/ai/job-interview-tips-ai-a3be8593",
    category: "On the interview",
  },
  {
    title: "Setting the Record Straight on Negotiating Your Salary",
    source: "HBR, March 2015",
    description:
      "Cuts through conflicting advice — what to do, what not to do, and how to think about a first offer.",
    url: "https://hbr.org/2015/03/setting-the-record-straight-on-negotiating-your-salary",
    category: "On offers and negotiation",
  },
];
