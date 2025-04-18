import { useState } from "react";
import { Preloader } from "./components/Preloader.tsx";
import { LandingPage } from "./components/LandingPage.tsx";
import './App.css';

export default function App()  {
    const [loading, setLoading] = useState<boolean>(true);

    return loading ? (
        <Preloader onComplete={() => { setLoading(false); }} />
    ) : (
        <LandingPage />
    );
};