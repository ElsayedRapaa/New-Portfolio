export interface HomeContactItem {
  id: number;
  title: string;
  contactID: string;
  href?: string;
}

export const homeContact: HomeContactItem[] = [
  {
    id: 1,
    title: "Professional Email",
    contactID: "Elsayedrapaa7@gmail.com",
    href: "mailto:Elsayedrapaa7@gmail.com"
  },
  {
    id: 2,
    title: "WhatsApp",
    contactID: "+201271356094",
    href: "https://wa.me/201271356094"
  },
  {
    id: 3,
    title: "Telegram",
    contactID: "@ElsayedRapaa",
    href: "https://t.me/ElsayedRapaa"
  },
  {
    id: 4,
    title: "Discord",
    contactID: "elsayedrapaa7"
  },
  {
    id: 5,
    title: "Skype",
    contactID: "live:.cid.f36dede2ba01c54b",
    href: "skype:live:.cid.f36dede2ba01c54b?chat"
  }
];