import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/vitest';
import { describe, expect, test } from "vitest";
import Navbar from "../../../components/navbar/Navbar";
import userEvent from "@testing-library/user-event";

describe("Navbar", () => {
    test("render navigation items", () => {
        render(<Navbar />);

        expect(screen.getByText(/about/i)).toBeInTheDocument();
        expect(screen.getByText(/experience/i)).toBeInTheDocument();
        expect(screen.getByText(/education/i)).toBeInTheDocument();
        expect(screen.getByText(/skills/i)).toBeInTheDocument();
        expect(screen.getByText(/projects/i)).toBeInTheDocument();
        expect(screen.getByText(/contact/i)).toBeInTheDocument();
    });

    test("toggle mobile menu", async () => {
        const user = userEvent.setup();

        render(<Navbar />);

        expect(screen.queryAllByText(/about/i)).toHaveLength(1);

        const mobileMenuToggleButton = screen.getAllByRole("button")[7];
        await user.click(mobileMenuToggleButton);

        expect(screen.queryAllByText(/about/i)).toHaveLength(2);
    });

    test("close mobile menu after clicking nav item", async () => {
        const user = userEvent.setup();

        render(<Navbar />);

        const mobileMenuToggleButton = screen.getAllByRole("button")[7];
        await user.click(mobileMenuToggleButton);

        expect(screen.queryAllByText(/about/i)).toHaveLength(2);

        const mobileMenuAboutButton = screen.queryAllByText(/about/i)[1];
        await user.click(mobileMenuToggleButton);

        expect(screen.queryAllByText(/about/i)).toHaveLength(1);
    });
});