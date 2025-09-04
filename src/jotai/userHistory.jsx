import { atom } from "jotai";

// Define an atom to store the current state
export const userStakeHistoryaAtom = atom({
    page: 0,
    limit: 10,
    fetchedData: {}, // {1: [], 2: []}
    hasMore: true
});

export const userUnStakeHistoryaAtom = atom({
    page: 0,
    limit: 10,
    fetchedData: {}, // {1: [], 2: []}
    hasMore: true
});

