import React, {useState, useCallback, useMemo } from "react";

export const useIterator = (
    items = [],
    initialValue = 0
) => {
    const [i, setIndex] = useState(initialValue);
    const prev = useCallback(() => {
        if (i === 0) return setIndex(items.length - 1);
        setIndex(i - 1);
    }, [i]);
    const next = useCallback(() => {
        if (i === items.length - 1) return setIndex(0);
        setIndex(i + 1);
    }, [i]);
    const item = useMemo(() => items[i], [i]);
    return [item || items[0], prev, next];
};

export default function App() {
    const [letter, previous, next] = useIterator([
        "a",
        "b",
        "c"
    ]);
    console.log(letter);
    console.log(previous);
    console.log(next);
    return (
        <>
            <h1>Welcome to app</h1>
        </>
    );
}
