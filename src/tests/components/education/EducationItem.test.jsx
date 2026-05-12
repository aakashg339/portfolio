import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import '@testing-library/jest-dom/vitest';
import EducationItem from "../../../components/education/EducationItem";

describe("EducationItem", () => {
    test("render education details", () => {
        render(
            <EducationItem 
                idx={1}
                degree="Some Degree"
                institute="Some Institute"
                yearFrom="2021"
                yearTo="2023"
                description="Some Description"
            />
        );

        expect(screen.getByRole("heading", {
            name: /some degree/i
        })).toBeInTheDocument();

        expect(screen.getByText(/some degree/i)).toBeInTheDocument();

        expect(screen.getByText(/some institute/i)).toBeInTheDocument();

        expect(screen.getByText(/2021-2023/i)).toBeInTheDocument();

        expect(screen.getByText(/some description/i)).toBeInTheDocument();
    });
});