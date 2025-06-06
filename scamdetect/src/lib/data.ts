export interface ScamType {
  id: string;
  name: string;
  description: string;
}

export const scamTypes: ScamType[] = [
  {
    id: "phishing",
    name: "Phishing",
    description: "Attempts to obtain sensitive information through deceptive emails or websites."
  },
  {
    id: "tech_support",
    name: "Tech Support Scam",
    description: "Fraudsters posing as tech support to gain access to devices or payment."
  },
  {
    id: "romance",
    name: "Romance Scam",
    description: "Building false relationships to extract money from victims."
  },
  {
    id: "investment",
    name: "Investment Fraud",
    description: "Promising high returns on fraudulent investment opportunities."
  },
  {
    id: "government",
    name: "Government Impersonation",
    description: "Scammers pretending to be from government agencies like IRS, SSA, etc."
  },
  {
    id: "lottery",
    name: "Lottery/Prize Scam",
    description: "Fake notifications of winning a lottery or prize requiring payment to claim."
  },
  {
    id: "shopping",
    name: "Online Shopping Fraud",
    description: "Fake online stores or listings for products that don't exist."
  },
  {
    id: "employment",
    name: "Employment Scam",
    description: "False job offers requiring payment or personal information."
  },
  {
    id: "extortion",
    name: "Extortion/Blackmail",
    description: "Threats to expose information unless payment is made."
  },
  {
    id: "other",
    name: "Other Scam Type",
    description: "Other types of scams not listed above."
  }
];

export interface Alert {
  id: string;
  title: string;
  description: string;
  severity: "low" | "medium" | "high";
  timestamp: string;
  location?: string;
  category: string;
}

export const recentAlerts: Alert[] = [
  {
    id: "alert-1",
    title: "New Phishing Campaign",
    description: "Fake bank emails requesting login credentials",
    severity: "high",
    timestamp: "2025-05-18T14:32:00Z",
    location: "Nationwide",
    category: "phishing"
  },
  {
    id: "alert-2",
    title: "Tech Support Scam",
    description: "Calls claiming to be from Microsoft support",
    severity: "medium",
    timestamp: "2025-05-18T10:15:00Z",
    location: "Northeast Region",
    category: "tech_support"
  },
  {
    id: "alert-3",
    title: "Gift Card Scam",
    description: "Requests for gift card payments from government imposters",
    severity: "medium",
    timestamp: "2025-05-17T22:45:00Z",
    location: "Western States",
    category: "government"
  },
  {
    id: "alert-4",
    title: "New Ransomware Strain",
    description: "Ransomware targeting healthcare providers",
    severity: "high",
    timestamp: "2025-05-17T15:20:00Z",
    location: "Multiple States",
    category: "malware"
  },
  {
    id: "alert-5",
    title: "Investment App Scam",
    description: "Fake cryptocurrency investment applications",
    severity: "medium",
    timestamp: "2025-05-16T09:10:00Z",
    location: "Nationwide",
    category: "investment"
  }
];

export const recentActivity = [
  {
    id: "1",
    user: "John Doe",
    type: "scam",
    datetime: "2025-05-18T10:00:00Z",
    date: "May 18, 2025",
    description: "Reported a phishing email claiming to be from a bank",
    hasFiles: true,
    severity: "high"
  },
  {
    id: "2",
    user: "Jane Smith",
    type: "malware",
    datetime: "2025-05-17T14:30:00Z",
    date: "May 17, 2025",
    description: "Uploaded suspicious file that attempted to encrypt files",
    hasFiles: true,
    severity: "high"
  },
  {
    id: "3",
    user: "Robert Johnson",
    type: "scam",
    datetime: "2025-05-17T09:15:00Z",
    date: "May 17, 2025",
    description: "Reported fake tech support call asking for remote access",
    hasFiles: false,
    severity: "medium"
  },
  {
    id: "4",
    user: "Emily Williams",
    type: "malware",
    datetime: "2025-05-16T16:45:00Z",
    date: "May 16, 2025",
    description: "Identified browser extension that was stealing credentials",
    hasFiles: true,
    severity: "medium"
  },
  {
    id: "5",
    user: "Michael Brown",
    type: "scam",
    datetime: "2025-05-15T11:20:00Z",
    date: "May 15, 2025",
    description: "Reported SMS scam offering fake prize winnings",
    hasFiles: true,
    severity: "low"
  }
];

export const alertFeedData = [
  {
    id: "1",
    title: "New Phishing Campaign",
    description: "Multiple users reporting emails claiming to be from Microsoft requiring password resets",
    date: "30 min ago",
    severity: "high"
  },
  {
    id: "2",
    title: "Ransomware Variant Detected",
    description: "New variant of CryptoLocker targeting healthcare organizations",
    date: "2 hours ago",
    severity: "high"
  },
  {
    id: "3",
    title: "Fake Banking App",
    description: "Malicious app impersonating major bank detected in unofficial app stores",
    date: "5 hours ago",
    severity: "medium"
  },
  {
    id: "4",
    title: "Phone Scam Alert",
    description: "Scammers claiming to be from IRS demanding gift card payments",
    date: "1 day ago",
    severity: "medium"
  }
];

// Add other data objects as needed for your application