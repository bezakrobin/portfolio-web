import React, { createContext, useRef, useCallback, ReactNode, useContext } from 'react';

type AnimationDirection = 'left' | 'right';

interface DividerDirectionContextProps {
    getNextDirection: () => AnimationDirection;
}

const DividerDirectionContext = createContext<DividerDirectionContextProps>({
    getNextDirection: () => 'left',
});

interface DividerDirectionProviderProps {
    children: ReactNode;
}

export const DividerDirectionProvider: React.FC<DividerDirectionProviderProps> = ({ children }) => {
    const historyRef = useRef<AnimationDirection[]>([]);

    const getNextDirection = useCallback((): AnimationDirection => {
        const history = historyRef.current;
        const lastDirection: AnimationDirection = history.length > 0 ? history[history.length - 1] : 'right';
        const newDirection: AnimationDirection = lastDirection === 'left' ? 'right' : 'left';

        history.push(newDirection);

        return newDirection;
    }, []);

    const contextValue = {
        getNextDirection,
    };

    return (
        <DividerDirectionContext.Provider value={contextValue}>
            {children}
        </DividerDirectionContext.Provider>
    );
};

export const useDividerDirection = (): DividerDirectionContextProps => {
    const context = useContext(DividerDirectionContext);
    if (context === undefined) {
        throw new Error('useDividerDirection must be used within a DividerDirectionProvider');
    }
    return context;
};
