import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaTelegram,
} from "react-icons/fa";

const Icons = [
  { icon: <FaGithub />, path: "https://github.com/Ahmadkaissoon" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/ahmad-kaissoon-a6294822b/",
  },
  { icon: <FaTelegram />, path: "https://t.me/Ahmad_Kaissoon" },
  { icon: <FaTwitter />, path: "https://x.com/AKaissoon" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/ahmad._.kais/" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {Icons.map((icon, index) => {
        return (
          <Link key={index} href={icon.path} className={iconStyles}>
            {icon.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
