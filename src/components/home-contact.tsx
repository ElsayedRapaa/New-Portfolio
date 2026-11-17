import React, { useState } from "react";
import { GoCopy } from "react-icons/go";
import { LuExternalLink } from "react-icons/lu";

interface HomeContactProps {
  title: string;
  contactID: string;
  href?: string;
}

const HomeContact: React.FC<HomeContactProps> = ({
  title,
  contactID,
  href,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contactID);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="flex items-center justify-between gap-4 px-4 py-3 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 duration-200 shadow-md group relative">
      <div className="min-w-0">
        <p className="text-gray-300/70 text-xs sm:text-sm uppercase tracking-wide">
          {title}
        </p>
        {href ? (
          <a
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="text-gray-100 font-medium break-all hover:text-blue-300 transition-colors"
          >
            {contactID}
          </a>
        ) : (
          <p className="text-gray-100 font-medium break-all">{contactID}</p>
        )}
      </div>

      <div className="flex items-center gap-3 shrink-0">
        {href && (
          <a
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-label={`Open ${title}`}
            className="text-gray-400 hover:text-blue-400 transition-colors"
          >
            <LuExternalLink size={21} />
          </a>
        )}
        <button
          type="button"
          onClick={handleCopy}
          aria-label={`Copy ${title}`}
          title={copied ? "Copied!" : "Copy"}
          className="text-gray-400 hover:text-blue-400 transition-colors"
        >
          <GoCopy size={21} />
        </button>
      </div>

      {copied && (
        <span className="absolute -top-6 right-3 bg-green-600 text-white text-xs rounded-md px-2 py-1">
          Copied!
        </span>
      )}
    </div>
  );
};

export default HomeContact;