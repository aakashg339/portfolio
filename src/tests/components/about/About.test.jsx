import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import '@testing-library/jest-dom/vitest';
import About from "../../../components/about/About";

describe("About", () => {
    test("render about content", () => {
        render(<About />);

        expect(screen.getByRole("heading", {
            name: /about me/i
        })).toBeInTheDocument();
    });
});