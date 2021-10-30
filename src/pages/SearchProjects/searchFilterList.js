const searchFilterList = [
  {
    category: 'language',
    name: 'javascript',
    label: 'JavaScript',
    selected: false,
  },
  { category: 'language', name: 'python', label: 'Python', selected: false },
  { category: 'language', name: 'java', label: 'Java', selected: false },
  {
    category: 'language',
    name: 'typescript',
    label: 'TypeScript',
    selected: false,
  },
  { category: 'language', name: 'c#', label: 'C#', selected: false },
  { category: 'language', name: 'php', label: 'PHP', selected: false },
  { category: 'language', name: 'c++', label: 'C++', selected: false },
  { category: 'language', name: 'c', label: 'C', selected: false },
  { category: 'language', name: 'shell', label: 'Shell', selected: false },
  { category: 'language', name: 'ruby', label: 'Ruby', selected: false },
  { category: 'topic', name: '', label: 'Unaffiliated', selected: false },
  {
    category: 'topic',
    name: 'code-for-all',
    label: 'Code for All',
    selected: false,
  },
  {
    category: 'topic',
    name: 'code-for-america',
    label: 'Code for America',
    selected: false,
  },
  {
    category: 'topic',
    name: 'hack-for-la',
    label: 'Hack for LA',
    selected: false,
  },
  {
    category: 'topic',
    name: 'open-oakland',
    label: 'Open Oakland',
    selected: false,
  },
  {
    category: 'topic',
    name: 'code-for-canada',
    label: 'Code for Canada',
    selected: false,
  },
  {
    category: 'topic',
    name: 'code-for-japan',
    label: 'Code for Japan',
    selected: false,
  },
  {
    category: 'topic',
    name: 'open-democracy-labs',
    label: 'Open Democracy Labs',
    selected: false,
  },
  {
    category: 'topic',
    name: 'yale-openlab',
    label: 'Yale OpenLab',
    selected: false,
  },
  {
    category: 'pushed',
    name: '>=24h',
    label: 'Within the last 24 hours',
    selected: false,
  },
  {
    category: 'pushed',
    name: '>=7d',
    label: 'Within the last week',
    selected: false,
  },
  {
    category: 'pushed',
    name: '>=30d',
    label: 'Within the last 30 days',
    selected: false,
  },
  { category: 'pushed', name: '1-6m', label: '1 - 6 months', selected: false },
  {
    category: 'pushed',
    name: '6-12m',
    label: '6 - 12 months',
    selected: false,
  },
  {
    category: 'pushed',
    name: '<1y',
    label: 'More than a year ago',
    selected: false,
  },
];
export default searchFilterList;