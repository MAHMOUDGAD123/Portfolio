export interface LinksType {
  href: string;
  name: string;
  iconClass: string;
}

export const NAV_LINKS: LinksType[] = [
  {
    href: "/",
    name: "Home",
    iconClass: "fa-solid fa-house",
  },
  {
    href: "/about",
    name: "About",
    iconClass: "fa-solid fa-address-card",
  },
  {
    href: "/work",
    name: "Work",
    iconClass: "fa-solid fa-briefcase",
  },
];
