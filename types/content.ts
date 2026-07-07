export type ContentResult<T> = {
  items: T[];
  error?: string;
  source: "mock" | "supabase";
};
