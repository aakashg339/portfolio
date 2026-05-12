import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import '@testing-library/jest-dom/vitest';
import Projects from "../../../components/projects/Projects";

describe("Projects", () => {
    test("render projects content", () => {
        render(<Projects />);

        expect(screen.getByRole("heading", {
            name: /projects/i
        })).toBeInTheDocument();
    });

    test("render project items", () => {
        render(<Projects />);

        expect(screen.getAllByRole("heading", { level: 3 }).length).toBeGreaterThan(0);
    });
});