// import { Icons } from "@/components/icons";
// import { NavItem } from "@/types/DataTypes";
export interface Book {
  ratings_average: number;
  author_name: string;
  title: string;
  first_publish_year: number;
  subject: string;
  author_birth_date: string;
  author_top_work: string;
}
export const books :Book[] =
  [
    {
      "ratings_average": 4.5,
      "author_name": "John Smith",
      "title": "The Adventure Begins",
      "first_publish_year": 2005,
      "subject": "Adventure",
      "author_birth_date": "1978-03-15",
      "author_top_work": "The Journey Home"
    },
    {
      "ratings_average": 3.8,
      "author_name": "Emily Johnson",
      "title": "Mystery of the Missing Key",
      "first_publish_year": 2012,
      "subject": "Mystery",
      "author_birth_date": "1985-07-22",
      "author_top_work": "Secrets Unraveled"
    },
    {
      "ratings_average": 4.2,
      "author_name": "David Lee",
      "title": "Into the Unknown",
      "first_publish_year": 2018,
      "subject": "Exploration",
      "author_birth_date": "1990-11-10",
      "author_top_work": "Discovering New Horizons"
    }
  ]
  
