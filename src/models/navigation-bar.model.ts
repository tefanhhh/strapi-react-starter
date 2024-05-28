interface Attributes {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  path: string;
}

export interface NavigationBar {
  id: number;
  attributes?: Attributes;
}