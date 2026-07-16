import { site } from "../../../config/site";

import type { ContactMethod } from "./types";

export const contactMethods: ContactMethod[] = [
  {
    id: 1,
    title: "WhatsApp",
    value: site.phone,
    href: site.whatsappMessage(),
  },
  {
    id: 2,
    title: "Phone",
    value: site.phone,
    href: site.tel(),
  },
  {
    id: 3,
    title: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    id: 4,
    title: "Service Area",
    value: site.serviceArea,
    href: "#contact",
  },
];