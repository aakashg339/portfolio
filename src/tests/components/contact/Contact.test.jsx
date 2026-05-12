import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import '@testing-library/jest-dom/vitest';
import Contact from "../../../components/contact/Contact";

describe("Contact", () => {
    test("render contact content", () => {
        render(<Contact />);

        expect(screen.getByRole("heading", {
            name: /let us connect/i
        })).toBeInTheDocument();
    });

    test("render contact items", () => {
        render(<Contact />);

        expect(screen.getAllByRole("link").length).toBeGreaterThan(0);
    });
});