import { site } from "../../../config/site";

import type { ContactMethod } from "./types";

export const contactMethods: ContactMethod[] = [
  {
    id: 1,
    title: "WhatsApp",
    value: "Fastest way to get your free quote",
    href: site.whatsappMessage(),
  },
  {
    id: 2,
    title: "Call Us",
    value: site.business.phone,
    href: site.tel(),
  },
  {
    id: 3,
    title: "Email",
    value: site.business.email,
    href: site.mailto(),
  },
  {
    id: 4,
    title: "Service Area",
    value: `${site.location.city} & surrounding areas`,
    href: "#contact",
  },
];