import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import '@testing-library/jest-dom/vitest';
import ProjectItem from "../../../components/projects/ProjectItem";

describe("ProjectItem", () => {
    test("render project details", () => {
        render(
            <ProjectItem 
                idx={1}
                name="Some Project"
                description="Some Description"
                tools={["Tool1", "Tool2"]}
                externalLink="https://www.example.com"
            />
        );

        expect(screen.getByRole("heading", {
            name: /some project/i,
            level:3
        })).toBeInTheDocument();

        expect(screen.getByText(/some description/i)).toBeInTheDocument();

        expect(screen.getByText(/tool1/i)).toBeInTheDocument();
        expect(screen.getByText(/tool2/i)).toBeInTheDocument();

        const projectLink = screen.getByRole("link", {
            name: /view project/i
        });

        expect(projectLink).toBeInTheDocument();

        expect(projectLink).toHaveAttribute(
            "target",
            "_blank"
        );

        expect(projectLink).toHaveAttribute(
            "rel",
            "noopener noreferrer"
        );
    });
});