import Link from "@docusaurus/Link";
import clsx from "clsx";
import React from "react";

import { socialLinks } from "../footer-data";

type SocialMediaLinkProps = {
  isPermanentDark?: boolean;
  variant?: "landing" | "blog";
};

export const SocialMediaLink: React.FC<SocialMediaLinkProps> = ({
  isPermanentDark,
  variant = "landing",
}) => {
  return (
    <div
      className={clsx(
        "flex",
        "items-center",
        "gap-8",
        "landing-lg:gap-4",
        "justify-start",
      )}
    >
      {socialLinks.map(({ href, icon: Icon }) => (
        <a
          href={href}
          key={href}
          target="_blank"
          rel="noreferrer"
          className={clsx(
            isPermanentDark && "!text-white",
            variant === "landing" && "text-gray-600 dark:text-gray-400",
            variant === "blog" &&
              "text-refine-react-5 dark:text-refine-react-4",
            "hover:text-gray-800 dark:hover:text-gray-300",
            "hover:no-underline",
          )}
        >
          <Icon className={clsx("w-8 h-8", "landing-lg:w-6 landing-lg:h-6")} />
        </a>
      ))}
    </div>
  );
};
