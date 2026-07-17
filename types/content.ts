export type ContentResult<T> = {
  items: T[];
  error?: string;
  source: "fallback" | "mock" | "supabase";
};
