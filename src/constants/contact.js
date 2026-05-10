import { MdOutlineEmail } from "react-icons/md";
import { FiLinkedin } from "react-icons/fi";
import { LuGithub } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";

const ContactType = Object.freeze({
    EMAIL: "EMAIL",
    LINKEDIN: "LINKEDIN",
    GITHUB: "GITHUB",
    TWITTER: "TWITTER",
    INSTAGRAM: "INSTAGRAM"
});

const CONTACT_META = {
    [ContactType.EMAIL]: {
        label: "Email Me",
        icon: MdOutlineEmail
    },
    [ContactType.LINKEDIN]: {
        label: "LinkedIn",
        icon: FiLinkedin
    },
    [ContactType.GITHUB]: {
        label: "GitHub",
        icon: LuGithub
    },
    [ContactType.TWITTER]: {
        label: "Twitter",
        icon: FaXTwitter
    },
    [ContactType.INSTAGRAM]: {
        label: "Instagram",
        icon: LuInstagram
    }
}

export { ContactType, CONTACT_META };