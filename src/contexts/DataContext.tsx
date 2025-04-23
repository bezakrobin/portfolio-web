import React, { createContext, useContext, ReactNode } from 'react';
import { SocialLink, Certificate, Project, Language } from '../types';
import {
    featuredProjects,
    otherProjects,
    certificates,
    socials,
    isAvailableForHire,
    languages
} from '../data/data';

interface DataContextType {
    featuredProjects: Project[];
    otherProjects: Project[];
    certificates: Certificate[];
    socials: SocialLink[];
    isAvailableForHire: boolean;
    languages: Language[];
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const useData = () => {
    const context = useContext(DataContext);
    if (context === undefined) {
        throw new Error('useData must be used within a DataProvider');
    }
    return context;
};

interface DataProviderProps {
    children: ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
    const value = {
        featuredProjects,
        otherProjects,
        certificates,
        socials,
        isAvailableForHire,
        languages
    };

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    );
}; 