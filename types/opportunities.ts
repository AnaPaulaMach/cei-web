export type OpportunityItem = {
  id: string;
  title: string;
  description: string;
  category: string;
  source: string;
  href?: string;
  isExternal?: boolean;
  publishedAt?: string;
  deadline?: string;
  highlighted?: boolean;
};
