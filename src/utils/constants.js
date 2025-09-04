const MATCHING_BONUS = {
    5000: 500,
    15000: 1000,
    35000: 5000,
    85000: 10000,
    185000: 25000,
    435000: 50000,
    935000: 100000,
    1935000: 200000,
    4435000: 500000,
    9435000: 1000000,
    19435000: 2500000
}

const GENERATION_REWARD = {
    20000: 400,
    70000: 800,
    170000: 1500,
    420000: 2800,
    920000: 6600,
    1920000: 11000,
    3920000: 22000,
    8920000: 50000,
    18920000: 125000,
    33920000: 250000,
    58920000: 600000,
    108920000: 750000,
    208920000: 1500000
}

export const getNextMatchingBonus = (current) => {
    const thresholds = Object.keys(MATCHING_BONUS).map(Number)
    for (let i = 0; i < thresholds.length; i++) {
        if (parseFloat(current) < thresholds[i]) {
            return { business: thresholds[i], reward: MATCHING_BONUS[thresholds[i]] };
        }
    }
    return { business: thresholds[thresholds.length - 1], reward: MATCHING_BONUS[thresholds[thresholds.length - 1]] };
}

export const getNextGenerationRewardBonus = (current) => {
    const thresholds = Object.keys(GENERATION_REWARD).map(Number)
    for (let i = 0; i < thresholds.length; i++) {
        if (parseFloat(current) < thresholds[i]) {
            return { business: thresholds[i], reward: GENERATION_REWARD[thresholds[i]] };
        }
    }
    return { business: thresholds[thresholds.length - 1], reward: GENERATION_REWARD[thresholds[thresholds.length - 1]] };
}