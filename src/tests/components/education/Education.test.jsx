import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import '@testing-library/jest-dom/vitest';
import Education from "../../../components/education/Education";

describe("Education", () => {
    test("render education content", () => {
        render(<Education />);

        expect(screen.getByRole("heading", {
            name: /education/i
        })).toBeInTheDocument();
    });

    test("render education items", () => {
        render(<Education />);

        expect(screen.getAllByRole("heading", { level: 3 }).length).toBeGreaterThan(0);
    });
});