export type OpportunityItem = {
  id: string;
  title: string;
  description: string;
  category: string;
  source: string;
  href?: string;
  detailsHref?: string;
  isExternal?: boolean;
  publishedAt?: string;
  deadline?: string;
  deadlineIso?: string;
  highlighted?: boolean;
};
