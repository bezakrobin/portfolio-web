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

/**
 * Provider component for the DividerDirectionContext.
 * It maintains an array history of assigned directions using useRef
 * and provides a function (`getNextDirection`) for Dividers to call
 * to get their animation direction ('left' or 'right').
 */
export const DividerDirectionProvider: React.FC<DividerDirectionProviderProps> = ({ children }) => {
    const historyRef = useRef<AnimationDirection[]>([]);

    /**
     * Returns the next animation direction ('left' or 'right') based on the
     * last direction added to the history array. Adds the newly assigned
     * direction to the history.
     * Wrapped in useCallback to ensure function identity stability.
     */
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

/**
 * Custom hook for easily consuming the DividerDirectionContext.
 * Provides type safety and hides the useContext implementation detail.
 * NOTE: We need to import 'useContext' from React for this hook.
 */
export const useDividerDirection = (): DividerDirectionContextProps => {
    const context = useContext(DividerDirectionContext);
    if (context === undefined) {
        throw new Error('useDividerDirection must be used within a DividerDirectionProvider');
    }
    return context;
};
