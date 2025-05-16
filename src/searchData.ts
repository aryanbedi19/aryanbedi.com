export type SearchItem = {
  title: string;
  description: string;
  link: string;
  type: 'project' | 'article' | 'work' | 'about' | 'other';
};

const searchData: SearchItem[] = [
  // Projects
  {
    title: 'Blanc AI',
    description: 'Quoting/Bidding Automation for Construction Enterprises.',
    link: 'https://blancai.ca',
    type: 'project',
  },
  {
    title: 'Entrepreneur Profile',
    description: 'Article on what drives me to be an entrepreneur.',
    link: 'https://entrepreneurship.uwo.ca/news/2025/04/Accelerator-Profile-Aryan-Bedi-of-Blanc-AI/',
    type: 'article',
  },
  // Work Experience
  {
    title: 'Blanc AI Quoting Tool',
    description: 'Built a SaaS solution for contractors that automatically sources materials and generates quotes. Used by contractors for 5000+ quotes.',
    link: '/work',
    type: 'work',
  },
  {
    title: 'Founder in Residence',
    description: 'Select Group at UWO funded $12,000 to build a startup in 4 months',
    link: '/work',
    type: 'work',
  },
  {
    title: 'Marketing at BitSwap',
    description: 'Led a digital marketing campaign that grew the site from 0 to 10,000 monthly users.',
    link: '/work',
    type: 'work',
  },
  // Education
  {
    title: 'Computer Science at University of Western Ontario',
    description: 'HBSc in Computer Science with a minor in Mathematics (2023–2027)',
    link: '/work',
    type: 'work',
  },
  // Fellowships
  {
    title: 'RIppleX Fellowship',
    description: 'Participated in the RIppleXFellowship, collaborating with peers and mentors to develop leadership and entrepreneurial skills.',
    link: '/work',
    type: 'work',
  },
  {
    title: 'Western Accelerator',
    description: 'Selected as a founder at the Western Accelerator, working on startup development and networking with industry professionals.',
    link: '/work',
    type: 'work',
  },
  // Awards & Achievements
  {
    title: '1st Place – ES1050 Design Showcase',
    description: 'Built a gear reminder app for athletes with disabilities; awarded top design and retained by client.',
    link: '/work',
    type: 'work',
  },
  {
    title: '2nd Place – Western Accelerator Pitch Competition',
    description: 'Placed 2nd among top startups from the Western Accelerator; pitched to investors and industry judges.',
    link: '/work',
    type: 'work',
  },
  // About Section
  // Add more items as needed
];

export default searchData; 