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
            logo: "src/assets/img/club-1.png"

        },
        {
            id: 2,
            name: "United Fs Club",
            wins: 14,
            draws: 2,
            losses: 1,
            totalPoints: 35,
            logo: "src/assets/img/club-2.png"

        },
        {
            id: 3,
            name: "Schalke Club",
            wins: 13,
            draws: 3,
            losses: 0,
            totalPoints: 32,
            logo: "src/assets/img/club-3.png"
        },
        {
            id: 4,
            name: "Inter Club",
            wins: 13,
            draws: 2,
            losses: 1,
            totalPoints: 31,
            logo: "src/assets/img/league-club-5.png"

        },
        {
            id: 5,
            name: "Madrid Club",
            wins: 12,
            draws: 1,
            losses: 2,
            totalPoints: 30,
            logo: "src/assets/img/club-4.png"
        },
        {
            id: 6,
            name: "Schalke Club",
            wins: 11,
            draws: 0,
            losses: 3,
            totalPoints: 28,
            logo: "src/assets/img/club-6.png"
        },
        {
            id: 7,
            name: "Arsenal Club",
            wins: 10,
            draws: 5,
            losses: 0,
            totalPoints: 26,
            logo: "src/assets/img/club-7.png"
        },
        {
            id: 8,
            name: "Bayern Club",
            wins: 10,
            draws: 2,
            losses: 2,
            totalPoints: 24,
            logo: "src/assets/img/club-8.png"
        },
        {
            id: 9,
            name: "Atletico Club",
            wins: 9,
            draws: 0,
            losses: 4,
            totalPoints: 20,
            logo: "src/assets/img/club-9.png"
        },
        {
            id: 10,
            name: "Borrasi Club",
            wins: 10,
            draws: 1,
            losses: 2,
            totalPoints: 24,
            logo: "src/assets/img/club-11.png"
        },
        {
            id: 11,
            name: "Juventa Club",
            wins: 9,
            draws: 2,
            losses: 2,
            totalPoints: 21,
            logo: "src/assets/img/league-club-6.png"
        },
        {
            id: 12,
            name: "Chelsea Club",
            wins: 9,
            draws: 2,
            losses: 2,
            totalPoints: 20,
            logo: "src/assets/img/league-club-8.png"
        },
    ],

    upcomingMatchs: [
        {
            teams: {
                homeTeam: {
                    name: "Schalke Club",
                    logo: "src/assets/img/club-6.png"
                },
                awayTeam: {
                    name: "Inter Club",
                    logo: "src/assets/img/league-club-5.png"
                },
            },
            date: "October 20, 2022 17:00 pm",
            stadium: "Expert Stadium"
        },
        {
            teams: {
                homeTeam: {
                    name: "Atletico Club",
                    logo: "src/assets/img/club-9.png"
                },
                awayTeam: {
                    name: "Schalke Club",
                    logo: "src/assets/img/club-6.png",
                },
            },
            date: "September 18, 2022 21:00 pm",
            stadium: "Expert Stadium"
        },
        {
            teams: {
                homeTeam: {
                    name: "United Fs Club",
                    logo: "src/assets/img/club-2.png"
                },
                awayTeam: {
                    name: "Bayern Club",
                    logo: "src/assets/img/club-8.png"
                },
            },
            date: "August 3, 2022 19:00 pm",
            stadium: "Expert Stadium"

        },
        {
            teams: {
                homeTeam: {
                    name: "Arsenal Club",
                    logo: "src/assets/img/club-7.png"
                },
                awayTeam: {
                    name: "Atletico Club",
                    logo: "src/assets/img/club-9.png"
                },
            },
            date: "July 8, 2022 12:00 pm",
            stadium: "Expert Stadium"

        },
        {
            teams: {
                homeTeam: {
                    name: "Instanbul Sports",
                    logo: "src/assets/img/club-1.png"
                },
                awayTeam: {
                    name: "United Fs Club",
                    logo: "src/assets/img/club-2.png"
                },
            },
            date: "Jun 12, 2022 09:00 pm",
            stadium: "Expert Stadium"
        },
        {
            teams: {
                homeTeam: {
                    name: "United Fs Club",
                    logo: "src/assets/img/club-2.png"
                },
                awayTeam: {
                    name: "Schalke Club",
                    logo: "src/assets/img/club-6.png"
                },
            },
            date: "October 20, 2022 17:00 pm",
            stadium: "Expert Stadium"
        },
        {
            teams: {
                homeTeam: {
                    name: "Inter Club",
                    logo: "src/assets/img/league-club-5.png"
                },
                awayTeam: {
                    name: "Madrid Club",
                    logo: "src/assets/img/club-4.png"
                },
            },
            date: "September 18, 2022 21:00 pm",
            stadium: "Expert Stadium"
        },
        {
            teams: {
                homeTeam: {
                    name: "Schalke Club",
                    logo: "src/assets/img/club-6.png"
                },
                awayTeam: {
                    name: "Arsenal Club",
                    logo: "src/assets/img/club-7.png"
                },
            },
            date: "August 3, 2022 19:00 pm",
            stadium: "Expert Stadium"
        },
        {
            teams: {
                homeTeam: {
                    name: "Bayern Club",
                    logo: "src/assets/img/club-8.png"
                },
                awayTeam: {
                    name: "Atletico Club",
                    logo: "src/assets/img/club-9.png"
                },
            },
            date: "July 8, 2022 12:00 pm",
            stadium: "Expert Stadium"
        },
    ],

    players: [
        {
            name: "Michael Lee",
            shirtNumber: 11,
            image: "src/assets/img/player1.jpg",
            position: "Forwarder",
        },
        {
            name: "Ethan Smith",
            shirtNumber: 15,
            image: "src/assets/img/player2.jpg",
            position: "Midfielder"
        },
        {
            name: "James Johnson",
            shirtNumber: 21,
            image: "src/assets/img/player3.jpg",
            position: "Defender"
        },
        {
            name: "Charlie Roy",
            shirtNumber: 2,
            image: "src/assets/img/player4.jpg",
            position: "Goalkeeper"
        },
        {
            name: "Adam Brown",
            shirtNumber: 7,
            image: "src/assets/img/player5.jpg",
            position: "Forwarder"
        },
        {
            name: "Michael Kayn",
            shirtNumber: 9,
            image: "src/assets/img/player6.jpg",
            position: "Forwarder"
        },
    ],


    bannerList: [
        {
            id: 1,
            src: "src/assets/img/client2.png"
        },
        {
            id: 2,
            src: "src/assets/img/client3.png"
        },
        {
            id: 3,
            src: "src/assets/img/client4.png"
        },
        {
            id: 4,
            src: "src/assets/img/client7.png"
        },
        {
            id: 5,
            src: "src/assets/img/client9.png"
        },
        {
            id: 6,
            src: "src/assets/img/client10.png"
        },
    ],


    articlesList:[
        {
            img: "src/assets/img/news3-1-150x150.png",
            date: "29.05.2022",
            title: "Football Rules",
            paragraph:
                "GOLDEN GOAL: In a football match, the goal scored by one of the teams in...",
        },
        {
            img:"src/assets/img/news2-1-150x150.png",
            date: "29.05.2022",
            title: "Football Features",
            paragraph:
                "Football; It is an aerobic-based anaerobic sport in which jumps, kicks, turns, running with changing...",
        },
        {
            img:"src/assets/img/news4-1-150x150.png",
            date: "29.05.2022",
            title: "Football Terms",
            paragraph:
                "GOLDEN GOAL: In a football match, the goal scored by one of the teams in...",
        },
        {
            img:"src/assets/img/news6-1-150x150.png",
            date: "29.05.2022",
            title: "How many football players are there in the world?",
            paragraph:
                "According to this report, there are more than 301 thousand football clubs, over 1.752 million...",
        },
        {
            img:"src/assets/img/news6-1-150x150.png",
            date: "29.05.2022",
            title: "What is Football?",
            paragraph:
                "Football is a sport that is known as a ball game and is loved by...",
        },
    ]

})