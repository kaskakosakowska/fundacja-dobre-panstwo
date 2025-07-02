export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      articles: {
        Row: {
          author: string | null
          content: string | null
          created_at: string
          created_by: string | null
          excerpt: string | null
          featured_image_url: string | null
          id: string
          is_published: boolean | null
          meta_description: string | null
          original_url: string | null
          published_date: string | null
          section: Database["public"]["Enums"]["article_section"]
          slug: string
          summary: string | null
          tags: string[] | null
          title: string
          updated_at: string
          updated_by: string | null
          view_count: number | null
        }
        Insert: {
          author?: string | null
          content?: string | null
          created_at?: string
          created_by?: string | null
          excerpt?: string | null
          featured_image_url?: string | null
          id?: string
          is_published?: boolean | null
          meta_description?: string | null
          original_url?: string | null
          published_date?: string | null
          section: Database["public"]["Enums"]["article_section"]
          slug: string
          summary?: string | null
          tags?: string[] | null
          title: string
          updated_at?: string
          updated_by?: string | null
          view_count?: number | null
        }
        Update: {
          author?: string | null
          content?: string | null
          created_at?: string
          created_by?: string | null
          excerpt?: string | null
          featured_image_url?: string | null
          id?: string
          is_published?: boolean | null
          meta_description?: string | null
          original_url?: string | null
          published_date?: string | null
          section?: Database["public"]["Enums"]["article_section"]
          slug?: string
          summary?: string | null
          tags?: string[] | null
          title?: string
          updated_at?: string
          updated_by?: string | null
          view_count?: number | null
        }
        Relationships: []
      }
      media: {
        Row: {
          alt_text: string | null
          article_id: string | null
          caption: string | null
          created_at: string
          file_path: string
          file_size: number | null
          filename: string
          id: string
          mime_type: string | null
          original_filename: string
          uploaded_by: string | null
        }
        Insert: {
          alt_text?: string | null
          article_id?: string | null
          caption?: string | null
          created_at?: string
          file_path: string
          file_size?: number | null
          filename: string
          id?: string
          mime_type?: string | null
          original_filename: string
          uploaded_by?: string | null
        }
        Update: {
          alt_text?: string | null
          article_id?: string | null
          caption?: string | null
          created_at?: string
          file_path?: string
          file_size?: number | null
          filename?: string
          id?: string
          mime_type?: string | null
          original_filename?: string
          uploaded_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "media_article_id_fkey"
            columns: ["article_id"]
            isOneToOne: false
            referencedRelation: "articles"
            referencedColumns: ["id"]
          },
        ]
      }
      migration_log: {
        Row: {
          article_id: string | null
          created_at: string
          error_message: string | null
          id: string
          status: string
          url: string
        }
        Insert: {
          article_id?: string | null
          created_at?: string
          error_message?: string | null
          id?: string
          status: string
          url: string
        }
        Update: {
          article_id?: string | null
          created_at?: string
          error_message?: string | null
          id?: string
          status?: string
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "migration_log_article_id_fkey"
            columns: ["article_id"]
            isOneToOne: false
            referencedRelation: "articles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          display_name: string | null
          email: string | null
          id: string
          role: Database["public"]["Enums"]["user_role"]
          updated_at: string
          user_id: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          display_name?: string | null
          email?: string | null
          id?: string
          role?: Database["public"]["Enums"]["user_role"]
          updated_at?: string
          user_id: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          display_name?: string | null
          email?: string | null
          id?: string
          role?: Database["public"]["Enums"]["user_role"]
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      can_edit: {
        Args: { _user_id: string }
        Returns: boolean
      }
      has_role: {
        Args: {
          _user_id: string
          _role: Database["public"]["Enums"]["user_role"]
        }
        Returns: boolean
      }
    }
    Enums: {
      article_section: "szkatulka" | "szczypta" | "glosy"
      user_role: "super_admin" | "editor" | "viewer"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      article_section: ["szkatulka", "szczypta", "glosy"],
      user_role: ["super_admin", "editor", "viewer"],
    },
  },
} as const
