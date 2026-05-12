import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import '@testing-library/jest-dom/vitest';
import ExperienceItem from "../../../components/experience/ExperienceItem";

describe("ExperienceItem", () => {
    test("render experience details", () => {
        render(
            <ExperienceItem 
                designation="Some designation"
                companyName="ABC Private Limited"
                yearFrom="2022"
                yearTo="present"
                description="Worked on somethig"
            />
        );

        expect(screen.getByRole("heading", {
            name: /some designation/i
        })).toBeInTheDocument();

        expect(screen.getByText(/abc private limited/i)).toBeInTheDocument();

        expect(screen.getByText(/2022-present/i)).toBeInTheDocument();

        expect(screen.getByText(/worked on somethig/i)).toBeInTheDocument();
    });
});