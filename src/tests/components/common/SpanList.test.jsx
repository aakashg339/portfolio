import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import '@testing-library/jest-dom/vitest';
import SpanList from "../../../components/common/SpanList";

describe("SpanList", () => {
    test("render spans", () => {
        render(
            <SpanList 
                texts={["text1", "text2"]}
            />
        );

        expect(screen.getByText("text1")).toBeInTheDocument();
        expect(screen.getByText("text2")).toBeInTheDocument();
    });
});