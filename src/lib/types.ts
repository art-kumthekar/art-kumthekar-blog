export interface PostFrontmatter {
  title: string;
  date: string;
  description: string;
  category: string;
  author: string;
  featured?: boolean;
}

export interface Post {
  slug: string;
  frontmatter: PostFrontmatter;
  readingTime: string;
}

export interface TimelineEntry {
  id: string;
  title: string;
  organization: string;
  location: string;
  dateRange: string;
  description: string[];
  type: 'work' | 'education';
}

export interface NavLink {
  label: string;
  href: string;
}
