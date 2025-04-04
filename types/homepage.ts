export interface Image {
    url: string;
    title?: string;
    description?: string;
}

export interface Card {
    title: string;
    description: string;
    counter?: number;
    symbol?: string;
    image?: Image;
    bulletPoints?: string[];
}

interface ImageCollection {
    items: Image[];
}

export interface CardCollection {
    items: Card[];
}

export interface Section {
    tag: string;
    title: string;
    description?: string;
    buttonText?: string;
    imagesCollection?: ImageCollection;
    cardsCollection?: CardCollection;
}

export interface OurNumbers extends Section {
    ourNumbersTitleList: string[];
}

export interface HomePage {
    heroTitle: string;
    heroSubtitle: string;
    heroSubtitle2: string;
    heroButtonText: string;
    ourNumbersTitleList: string[];
    heroImage: Image;
    ourNumbers: OurNumbers;
    whyRe: Section;
    whyConsultation: Section;
    whyInfiniaSolar: Section;
    testimonials: Section;
    customerSection: Section;
}

export interface HomePageData {
    data: {
        homePage: HomePage;
    };
}
