export type Database = {
  public: {
    Tables: {
      eventos: {
        Row: {
          id: string;
          created_at: string | null;
          titulo: string;
          descripcion: string | null;
          fecha_evento: string | null;
          lugar: string | null;
          categoria: string | null;
          estado: string | null;
          destacado: boolean | null;
          link: string | null;
          imagen_url: string | null;
        };
        Insert: {
          id?: string;
          created_at?: string | null;
          titulo: string;
          descripcion?: string | null;
          fecha_evento?: string | null;
          lugar?: string | null;
          categoria?: string | null;
          estado?: string | null;
          destacado?: boolean | null;
          link?: string | null;
          imagen_url?: string | null;
        };
        Update: Partial<Database["public"]["Tables"]["eventos"]["Insert"]>;
      };
      oportunidades: {
        Row: {
          id: string;
          created_at: string | null;
          titulo: string;
          descripcion: string | null;
          categoria: string | null;
          fuente: string | null;
          fecha_publicacion: string | null;
          fecha_limite: string | null;
          destacado: boolean | null;
          link: string | null;
          imagen_url: string | null;
        };
        Insert: {
          id?: string;
          created_at?: string | null;
          titulo: string;
          descripcion?: string | null;
          categoria?: string | null;
          fuente?: string | null;
          fecha_publicacion?: string | null;
          fecha_limite?: string | null;
          destacado?: boolean | null;
          link?: string | null;
          imagen_url?: string | null;
        };
        Update: Partial<Database["public"]["Tables"]["oportunidades"]["Insert"]>;
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
  };
};
