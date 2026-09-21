import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLinkedinIn,
  faGithub,
  faWhatsapp,
  faTelegram,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const SOCIALS = [
  {
    name: "LinkedIn",
    icon: faLinkedinIn,
    href: "https://www.linkedin.com/",
    hover: "hover:bg-[#0077B5] hover:shadow-[0_0_20px_#0077B5]",
  },
  {
    name: "GitHub",
    icon: faGithub,
    href: "https://github.com/",
    hover: "hover:bg-[#333333] hover:shadow-[0_0_20px_#333333]",
  },
  {
    name: "WhatsApp",
    icon: faWhatsapp,
    href: "https://wa.me/",
    hover: "hover:bg-[#25D366] hover:shadow-[0_0_20px_#25D366]",
  },
  {
    name: "Telegram",
    icon: faTelegram,
    href: "https://t.me/",
    hover: "hover:bg-[#229ED9] hover:shadow-[0_0_20px_#229ED9]",
  },
  {
    name: "Instagram",
    icon: faInstagram,
    href: "https://www.instagram.com/",
    hover: "hover:bg-[#E4405F] hover:shadow-[0_0_20px_#E4405F]",
  },
  {
    name: "Email",
    icon: faEnvelope,
    href: "mailto:your@email.com",
    hover: "hover:bg-[#EA4335] hover:shadow-[0_0_20px_#EA4335]",
  },
];

export default function Social({ animated = false }) {
  return (
    <div className="flex gap-4">
      {SOCIALS.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.href}
          target={social.name === "Email" ? undefined : "_blank"}
          rel={social.name === "Email" ? undefined : "noopener noreferrer"}
          aria-label={social.name}
          title={social.name}
          className={`
  w-12 h-12
  flex items-center justify-center
  rounded-full
  bg-[#08001f]
  text-cyan-400
  text-xl
  transition-all duration-300
  hover:scale-110
  hover:text-white
  ${social.hover}
`}
          initial={animated ? { opacity: 0, y: 20 } : false}
          animate={animated ? { opacity: 1, y: 0 } : false}
          transition={{
            duration: 0.4,
            delay: animated ? index * 0.08 : 0,
          }}
        >
          <FontAwesomeIcon icon={social.icon} />
        </motion.a>
      ))}
    </div>
  );
}
