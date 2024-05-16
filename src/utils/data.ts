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
  authorData:{
    name:string;
    birth_date:string;
  };
}
