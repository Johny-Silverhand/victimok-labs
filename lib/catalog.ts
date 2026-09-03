export type CatalogItemRow = { name: string; price: string };
export type CatalogGroup = { groupName: string; items: CatalogItemRow[] };
export type CatalogSection = {
  id: string;
  nav: string;
  category: string;
  badge: string;
  color: string;
  description: string;
  groups: CatalogGroup[];
};
