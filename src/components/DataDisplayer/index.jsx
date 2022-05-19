import { useEffect, useState } from "react";

function DataDisplayer() {
    const [advice, setAdvice] = useState("");

    useEffect(() => {
        const url = `http://127.0.0.1:3000/json/logements.json`;

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const advice = await response.json();
                setAdvice(advice);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

    return {advice}
};

export default DataDisplayer;

