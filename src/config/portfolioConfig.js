import { ContactType } from "../constants/contact"

const portfolioConfig = {
    navbar: {
        name: "Name"
    },
    hero: {
        name: "Name",
        designation: "Designation",
        description: "A short bio"
    },
    about: {
        paragraphs: [
            "More details about myself",
            "More details about myself",
            "More details about myself"
        ]
    },
    experience: {
        items: [
            {
                id: 1,
                designation: "Some Designaion", 
                companyName: "Some company", 
                yearFrom: "2023", 
                yearTo: "2024", 
                description: "Did something for the company"
            },
            {
                id: 2,
                designation: "Some Designaion 2", 
                companyName: "Some company 2", 
                yearFrom: "2023", 
                yearTo: "2024", 
                description: "Did something for the company 2"
            }
        ]
    },
    education: {
        items: [
            {
                id: 1, 
                degree: "Some Degree", 
                institute: "Some institute", 
                yearFrom: "2023", 
                yearTo: "2025", 
                description: "Some description"
            },
            {
                id: 2, 
                degree: "Some Degree 2", 
                institute: "Some institute 2", 
                yearFrom: "2023", 
                yearTo: "2025", 
                description: "Some description 2"
            },
            {
                id: 3, 
                degree: "Some Degree 3", 
                institute: "Some institute 3", 
                yearFrom: "2023", 
                yearTo: "2025", 
                description: "Some description 3"
            }
        ]
    },
    skills: {
        items: ["skill1", "skill2", "skill3", "skill4", "skill5", "skill6", "skill7", "skill8"]
    },
    projects: {
        items: [
            {
                id: 1,
                name: "Some Name 1",
                description: "Some description 1", 
                tools: ["tech1", "tech2"], 
                externalLink: "#"
            },
            {
                id: 2,
                name: "Some Name 2",
                description: "Some description 2", 
                tools: ["tech1", "tech2"], 
                externalLink: "#"
            },
            {
                id: 3,
                name: "Some Name 3",
                description: "Some description 3", 
                tools: ["tech1", "tech2", "tech3", "tech4", "tech5", "tech6", "tech7"], 
                externalLink: "#"
            }
        ]
    },
    contact: {
        items: [
            {
                id: 1,
                type: ContactType.EMAIL,
                link: "#"
            },
            {
                id: 2,
                type: ContactType.LINKEDIN,
                link: "#"
            },
            {
                id: 3,
                type: ContactType.GITHUB,
                link: "#"
            }
        ]
    },
    footer: {
        name: "Name",
        year: 2022
    }
}

export default portfolioConfig