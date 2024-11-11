import {LucideIcon} from "lucide-react";

export type SphereType = {
  name: string;
  color: string;
  href: string;
  icon: LucideIcon;
  description: string;
};

export type MentorType = {
  name: string;
  position: string;
  photo: string;
  description: string;
  achievements: string[];
  experience: string;
};