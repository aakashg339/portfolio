import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import '@testing-library/jest-dom/vitest';
import Experience from "../../../components/experience/Experience";

describe("Experience", () => {
    test("render experience content", () => {
        render(<Experience />);

        expect(screen.getByRole("heading", {
            name: /experience/i
        })).toBeInTheDocument();
    });

    test("render experience items", () => {
        render(<Experience />);

        expect(screen.getAllByRole("heading", { level: 3 }).length).toBeGreaterThan(0);
    });
});