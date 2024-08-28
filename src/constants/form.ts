import { EGameCategory } from "@/store/api/gameInfo/types";

export const GAME_CATEGORY_DEFAULT = {
    value: EGameCategory.confides,
    label: 'Доверие',
};

export const GAME_CATEGORY_OPTIONS = [
    {
        value: EGameCategory.acquaintances,
        label: 'Знакомство',
    },
    {
        value: EGameCategory.confides,
        label: 'Доверие',
    },
    {
        value: EGameCategory.vulgars,
        label: 'Откровение',
    },
];
