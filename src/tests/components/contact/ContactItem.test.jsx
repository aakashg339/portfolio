import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import '@testing-library/jest-dom/vitest';
import ContactItem from "../../../components/contact/ContactItem";
import { CONTACT_META, ContactType } from "../../../constants/contact";

describe("ContactItem", () => {
    test("render email contact item", () => {
        render(
            <ContactItem 
                type={ContactType.EMAIL}
                link="abc@example.com"
            />
        );

        const emailLinkName = CONTACT_META[ContactType.EMAIL].label;
        const emailLink = screen.getByRole("link", {
            name: emailLinkName
        });

        expect(emailLink).toHaveAttribute(
            "href",
            expect.stringContaining("mailto:")
        );
    });

    test("render other contact item", () => {
        render(
            <ContactItem 
                type={ContactType.GITHUB}
                link="https://www.example.com"
            />
        );

        const contactLinkName = CONTACT_META[ContactType.GITHUB].label;
        const contactLink = screen.getByRole("link", {
            name: contactLinkName
        });

        expect(contactLink).toBeInTheDocument();

        expect(contactLink).toHaveAttribute(
            "target",
            "_blank"
        );

        expect(contactLink).toHaveAttribute(
            "rel",
            "noopener noreferrer"
        );
    });
});