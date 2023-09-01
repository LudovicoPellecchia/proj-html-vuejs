import { reactive } from "vue";

export const store = reactive({
    teamList: [
        {
            id: 1,
            name: "Istanbul Sports",
            wins: 18,
            draws: 2,
            losses: 0,
            totalPoints: 42,
            logo:"src/assets/img/club-1.png"

        },
        {
            id: 2,
            name: "United Fs Club",
            wins: 14,
            draws: 2,
            losses: 1,
            totalPoints: 35,
            logo:"src/assets/img/club-2.png"

        },
        {
            id: 3,
            name: "Schalke Club",
            wins: 13,
            draws: 3,
            losses: 0,
            totalPoints: 32,
            logo:"src/assets/img/club-3.png"
        },
        {
            id: 4,
            name: "Inter Club",
            wins: 13,
            draws: 2,
            losses: 1,
            totalPoints: 31,
            logo:"src/assets/img/league-club-5.png"

        },
        {
            id: 5,
            name: "Madrid Club",
            wins: 12,
            draws: 1,
            losses: 2,
            totalPoints: 30,
            logo:"src/assets/img/club-4.png"
        },
        {
            id: 6,
            name: "Schalke Club",
            wins: 11,
            draws: 0,
            losses: 3,
            totalPoints: 28,
            logo:"src/assets/img/club-6.png"
        },
        {
            id: 7,
            name: "Arsenal Club",
            wins: 10,
            draws: 5,
            losses: 0,
            totalPoints: 26,
            logo:"src/assets/img/club-7.png"
        },
        {
            id: 8,
            name: "Bayern Club",
            wins: 10,
            draws: 2,
            losses: 2,
            totalPoints: 24,
            logo:"src/assets/img/club-8.png"
        },
        {
            id: 9,
            name: "Atletico Club",
            wins: 9,
            draws: 0,
            losses: 4,
            totalPoints: 20,
            logo:"src/assets/img/club-9.png"
        },
        {
            id: 10,
            name: "Borrasi Club",
            wins: 10,
            draws: 1,
            losses: 2,
            totalPoints: 24,
            logo:"src/assets/img/club-11.png"
        },
        {
            id: 11,
            name: "Juventa Club",
            wins: 9,
            draws: 2,
            losses: 2,
            totalPoints: 21,
            logo:"src/assets/img/league-club-6.png"
        },
        {
            id: 12,
            name: "Chelsea Club",
            wins: 9,
            draws: 2,
            losses: 2,
            totalPoints: 20,
            logo:"src/assets/img/league-club-8.png"
        },
    ]
})