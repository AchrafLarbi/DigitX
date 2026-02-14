export interface TeamMember {
  id: string;
  name: string;
  nameAr: string;
  role: string;
  roleAr: string;
  image: string;
  bio: string;
  bioAr: string;
  linkedin: string;
  github: string;
  email: string;

}

export interface Project {
  id: number;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  image: string;
  category: string;
  technologies: string[];
  github: string | null;
  date: string;
}

export interface Service {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  icon: string;
  features: string[];
  featuresAr: string[];
  color: string;
}
