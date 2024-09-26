import React from "react";
import { FooterDiscordIcon } from "./icons/footer-discord";
import { FooterGithubIcon } from "./icons/footer-github";
import { FooterLinkedinIcon } from "./icons/footer-linkedin";
import { FooterFacebookIcon } from "./icons/footer-facebook";
import { FooterWordpressIcon } from "./icons/footer-wordpress";
import { FooterTwitterIcon } from "./icons/footer-twitter";
import { NewBadgeIcon } from "./icons/popover";

export const menuItems = [
  {
    label: "Resources",
    items: [
      {
        label: "Getting Started",
        href: "/docs/getting-started/quickstart",
      },
      {
        label: "Tutorials",
        href: "/tutorial/essentials/intro",
      },
      {
        label: "Blog",
        href: "/blog",
      },
      {
        label: "React Admin Panel",
        href: "https://reactadminpanel.com",
      },
    ],
  },
  {
    label: "Product",
    items: [
      {
        label: "Enterprise",
        icon: <NewBadgeIcon />,
        href: "/enterprise",
      },
      {
        label: "Templates",
        href: "/templates",
      },
      {
        label: "Integrations",
        href: "/integrations",
      },
      // {
      //     label: "Become an Expert",
      //     href: "/become-an-expert",
      // },
      // {
      //     label: "Cloud",
      //     href: "/cloud",
      // },
    ],
  },
  {
    label: "Company",
    items: [
      {
        label: "About",
        href: "/about",
      },
      {
        label: "Store",
        href: "https://store.refine.dev",
      },
      {
        label: "Contact Us",
        href: "https://form.typeform.com/to/H54hLD9r",
      },
    ],
  },
];

export const secondaryMenuItems = [
  // {
  //     label: "Terms & Conditions",
  //     href: "#",
  // },
  {
    label: "ჰოსტინგი",
    href: "https://hostnodes.ge",
  },
  {
    label: "დახმარება",
    href: "https://hostnodes.ge/support",
  },
];

export const footerDescription =
  "Refine is a React-based framework for the rapid development of web applications. It eliminates the repetitive tasks demanded by CRUD operations and provides industry standard solutions.";

export const socialLinks = [
  {
    icon: FooterFacebookIcon,
    href: "https://www.facebook.com/hostnodesltd",
  },
  {
    icon: FooterLinkedinIcon,
    href: "https://www.linkedin.com/hostnodes/",
  },
  {
    icon: FooterWordpressIcon,
    href: "https://www.facebook.com/groups/537791756387318",
  },
];
