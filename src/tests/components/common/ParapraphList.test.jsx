import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import '@testing-library/jest-dom/vitest';
import ParapraphList from "../../../components/common/ParapraphList";

describe("ParapraphList", () => {
    test("render paragraphs", () => {
        render(
            <ParapraphList 
                parapraphs={["paragraph1", "paragraph2"]}
            />
        );

        expect(screen.getByText("paragraph1")).toBeInTheDocument();
        expect(screen.getByText("paragraph2")).toBeInTheDocument();
    });
});