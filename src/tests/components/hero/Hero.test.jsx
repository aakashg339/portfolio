import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/vitest';
import { describe, expect, test } from "vitest";
import Hero from "../../../components/hero/Hero";

describe("Hero", () => {
    test("render hero content", () => {
        render(<Hero />);

        expect(screen.getByRole("heading")).toBeInTheDocument();

        expect(screen.getByRole("link", {
            name: /get in touch/i
        })).toBeInTheDocument();

        expect(screen.getByRole("link", {
            name: /resume/i
        })).toBeInTheDocument();
    });

    test("render correct email link", () => {
        render(<Hero />);

        const getInTouchLink = screen.getByRole("link", {
            name: /get in touch/i
        });

        expect(getInTouchLink).toHaveAttribute(
            "href",
            expect.stringContaining("mailto:")
        );
    });

    test("open resume in new tab", () => {
        render(<Hero />);

        const resumeLink = screen.getByRole("link", {
            name: /resume/i
        });

        expect(resumeLink).toHaveAttribute(
            "target",
            "_blank"
        );

        expect(resumeLink).toHaveAttribute(
            "rel",
            "noopener noreferrer"
        );
    });
});