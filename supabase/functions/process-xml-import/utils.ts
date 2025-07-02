export function createSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[ąćęłńóśźż]/g, (char) => {
      const polishMap: { [key: string]: string } = {
        'ą': 'a', 'ć': 'c', 'ę': 'e', 'ł': 'l', 'ń': 'n', 
        'ó': 'o', 'ś': 's', 'ź': 'z', 'ż': 'z'
      };
      return polishMap[char] || char;
    })
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

export function categorizePost(title: string, content: string, publishedDate: string): 'szkatulka' | 'glosy' | 'szczypta' {
  // Głosy - wszystkie wpisy ze słowem "petycja" w tytule lub treści
  if (title.toLowerCase().includes('petycja') || content.toLowerCase().includes('petycja')) {
    return 'glosy';
  }
  
  // Szkatułka - wpisy powstałe po 1 maja 2025r
  const postDate = new Date(publishedDate);
  const cutoffDate = new Date('2025-05-01');
  if (postDate > cutoffDate) {
    return 'szkatulka';
  }
  
  // Szczypta - pozostałe wpisy
  return 'szczypta';
}