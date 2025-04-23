import { useState } from "react";
import { Preloader } from "@components/index";
import { LandingPage } from "@pages/LandingPage";
import './App.css';

export default function App()  {
    const [loading, setLoading] = useState<boolean>(true);

    return loading ? (
        <Preloader onComplete={() => { setLoading(false); }} />
    ) : (
        <LandingPage />
    );
};