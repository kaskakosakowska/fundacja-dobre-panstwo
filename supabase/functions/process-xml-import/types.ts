export interface ParsedPost {
  title: string;
  content: string;
  excerpt: string;
  publishedDate: string;
  author: string;
  featuredImage?: string;
  attachments: string[];
  section: 'szkatulka' | 'glosy' | 'szczypta';
}

export interface ProcessingResult {
  message: string;
  totalPosts: number;
  processed: number;
  errors: number;
  categorization: {
    szkatulka: number;
    glosy: number;
    szczypta: number;
  };
}

export interface ProcessingStats {
  processed: number;
  errors: number;
}