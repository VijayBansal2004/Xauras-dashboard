import { atom } from "jotai";

// Define an atom to store the current game state
export const userDataAtom = atom({
    totalPackages: 0,
    totalStakedAmount: 0,
    totalEarned: 0,
    totalWithdrawn: 0,
    roiIncome: 0,
    directBonus: 0,
    stakingBonus: 0,
    matchingBonus: 0,
    generationReward: 0,
    referralPercentAchieved: false,
    nextMatchingBonus: { business: 0, reward: 0 },
    nextGenerationReward: { business: 0, reward: 0 },
    matchingBonusMaxChildVolume: 0,
    matchingBonusBusiness: 0,
    generationRewardMaxChildVolume: 0,
    generationRewardBusiness: 0,
    isValidReferrer: false,
    isFetched: false
});

export const userBackendDataAtom = atom({
    userData: {},
    isFetched: false,
});

export const userLevelsDataAtom = atom({
    levelsData: {},
    totalDownline: 0,
    isFetched: false,
});

export const userRewardsDataAtom = atom({
    totalClaimed: 0,
    claimeAble: 0,
    alreadyUsedStake: 0,
    isFetched: false
});