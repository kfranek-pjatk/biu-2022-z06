import React, {useState} from "react";

export const useIterator = (
    items = [],
    initialIndex = 0
) => {
    const [i, setIndex] = useState(initialIndex);
    const prev = () => {
        if (i === 0) return setIndex(items.length - 1);
        setIndex(i - 1);
    };
    const next = () => {
        if (i === items.length - 1) return setIndex(0);
        setIndex(i + 1);
    };
    return [items[i], prev, next];
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
