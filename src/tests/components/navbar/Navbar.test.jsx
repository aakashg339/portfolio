import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/vitest';
import { describe, expect, test } from "vitest";
import Navbar from "../../../components/navbar/Navbar";

describe("navbar", () => {
    test("render navigation items", () => {
        render(<Navbar />);

        expect(screen.getByText("About")).toBeInTheDocument();
    })
})