import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import '@testing-library/jest-dom/vitest';
import Skills from "../../../components/skills/Skills";

describe("Skills", () => {
    test("render skills content", () => {
        render(<Skills />);

        expect(screen.getByRole("heading", {
            name: /skills/i
        })).toBeInTheDocument();
    });
});