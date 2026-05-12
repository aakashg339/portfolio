import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import '@testing-library/jest-dom/vitest';
import SectionHeading from "../../../components/common/SectionHeading";

describe("SectionHeading", () => {
    test("render section heading", () => {
        render(
            <SectionHeading 
                headingText="Heading"
            />
        );

        expect(screen.getByRole("heading", { 
            level:2,
            name: /heading/i
        })).toBeInTheDocument();
    });
});