import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test } from "vitest";
import '@testing-library/jest-dom/vitest';
import ThemeToggleButton from "../../components/ThemeToggleButton";
import userEvent from "@testing-library/user-event";

describe("ThemeToggleButton", () => {
    afterEach(() => {
        document.documentElement.classList.remove("dark");
    });
    
    test("render toggle theme button", () => {
        render(<ThemeToggleButton />);

        expect(screen.getByRole("button")).toBeInTheDocument();
    });

    test("toggle dark mode on click", async () => {
        const user = userEvent.setup();
        
        render(<ThemeToggleButton />);

        expect(document.documentElement).not.toHaveClass("dark");

        const toggleButton = screen.getByRole("button");

        await user.click(toggleButton);

        expect(document.documentElement).toHaveClass("dark");

        await user.click(toggleButton);

        expect(document.documentElement).not.toHaveClass("dark");
    });
});