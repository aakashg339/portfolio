import { CONTACT_META } from "../../constants/contact";

function ContactItem({ type, link }) {
    const { label, icon: Icon } = CONTACT_META[type];

    return (
        <>
            <a
                href={link}
                className="flex items-center gap-2 px-6 py-3 border-2 border-slate-900 dark:border-slate-300 text-slate-900 dark:text-slate-300 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
            >
                <Icon className="w-5 h-5" />
                {label}
            </a>
        </>
    );
}

export default ContactItem;