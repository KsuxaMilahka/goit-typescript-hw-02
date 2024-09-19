export interface Image {
  id: string;
  alt_description: string | null;
  urls: {
    regular: string;
    small: string;
    thumb: string;
  };
  user: {
    name: string;
  };
  likes: number;
}

export interface ResponseData {
  results: Image[];
  total: number;
  total_pages: number;
}
