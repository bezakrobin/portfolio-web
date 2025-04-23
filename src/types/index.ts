export interface Language {
    id: string;
    name: string;
    icon: string;
}

export interface SocialLink {
    id: string;
    name: string;
    url: string;
}

export interface Certificate {
    id: string;
    title: string;
    url: string;
}

export interface Project {
    id: number;
    projectTitle: string;
    projectCategory: {
        line1: string;
        line2: string;
    };
    url: string;
}

export interface Interest {
    name: string;
    description: string;
}

export interface Icebreaker {
    question: string;
    answer: string;
} 