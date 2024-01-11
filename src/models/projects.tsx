export interface project {
  id: number;
  title: string;
  description: string;
  workers: number;
  company: string;
  link: string;
  category: string;
  image: string;
  projects: { title: string; img: string }[];
}
