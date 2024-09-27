import { links } from '../lib/client/data';

export type SectionName = (typeof links)[number]['hash'];

export type Link = {
  nameEng: string;
  hash: string;
};
