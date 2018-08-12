/**
 * DUMMY DATA
 * @type {any}
 */
const data: IDataRow[] = JSON.parse(JSON.stringify(
    [
        {
            "id": 1,
            "user": "Health",
            "type": "jcb",
            "start": "2018-08-06",
            "duration": 4,
            "label": "Just Married",
            "dayoff": 1,
            "dayoffdate": "2018-08-12"
        },
        {
            "id": 2,
            "user": "Health",
            "type": "china-unionpay",
            "start": "2018-07-13",
            "duration": 1,
            "label": "Mother Dao, the Turtlelike (Moeder Dao, de schildpadgelijkende)",
            "dayoff": 0,
            "dayoffdate": "2018-08-17"
        },
        {
            "id": 3,
            "user": "Outdoors",
            "type": "diners-club-enroute",
            "start": "2018-08-24",
            "duration": 2,
            "label": "Come to the Stable",
            "dayoff": 0,
            "dayoffdate": "2018-07-27"
        },
        {
            "id": 4,
            "user": "Industrial",
            "type": "jcb",
            "start": "2018-08-15",
            "duration": 2,
            "label": "Django, Kill... If You Live, Shoot! (Se sei vivo spara)",
            "dayoff": 0,
            "dayoffdate": "2018-08-05"
        },
        {
            "id": 5,
            "user": "Toys",
            "type": "china-unionpay",
            "start": "2018-07-19",
            "duration": 5,
            "label": "Crimson Gold (Talaye sorgh)",
            "dayoff": 0,
            "dayoffdate": "2018-07-11"
        },
        {
            "id": 6,
            "user": "Shoes",
            "type": "jcb",
            "start": "2018-08-17",
            "duration": 6,
            "label": "Destroyer",
            "dayoff": 0,
            "dayoffdate": "2018-07-15"
        },
        {
            "id": 7,
            "user": "Games",
            "type": "jcb",
            "start": "2018-07-23",
            "duration": 4,
            "label": "Anything Goes",
            "dayoff": 1,
            "dayoffdate": "2018-08-15"
        },
        {
            "id": 8,
            "user": "Clothing",
            "type": "jcb",
            "start": "2018-08-13",
            "duration": 6,
            "label": "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
            "dayoff": 0,
            "dayoffdate": "2018-07-03"
        },
        {
            "id": 9,
            "user": "Shoes",
            "type": "mastercard",
            "start": "2018-08-17",
            "duration": 1,
            "label": "Soloalbum",
            "dayoff": 1,
            "dayoffdate": "2018-07-25"
        },
        {
            "id": 10,
            "user": "Shoes",
            "type": "visa-electron",
            "start": "2018-08-01",
            "duration": 4,
            "label": "Rikyu",
            "dayoff": 0,
            "dayoffdate": "2018-08-30"
        },
        {
            "id": 11,
            "user": "Toys",
            "type": "bankcard",
            "start": "2018-08-02",
            "duration": 5,
            "label": "Long Way Down, A",
            "dayoff": 1,
            "dayoffdate": "2018-08-26"
        },
        {
            "id": 12,
            "user": "Industrial",
            "type": "visa-electron",
            "start": "2018-07-05",
            "duration": 1,
            "label": "Being Julia",
            "dayoff": 1,
            "dayoffdate": "2018-07-16"
        },
        {
            "id": 13,
            "user": "Automotive",
            "type": "mastercard",
            "start": "2018-07-05",
            "duration": 2,
            "label": "Law of Enclosures, The",
            "dayoff": 1,
            "dayoffdate": "2018-08-02"
        },
        {
            "id": 14,
            "user": "Health",
            "type": "jcb",
            "start": "2018-08-29",
            "duration": 2,
            "label": "Logan's Run",
            "dayoffdate": "2018-08-10"
        },
        {
            "id": 15,
            "user": "Kids",
            "type": "switch",
            "start": "2018-08-20",
            "duration": 1,
            "label": "Tropical Malady (Sud pralad)",
            "dayoff": 0,
            "dayoffdate": "2018-07-30"
        },
        {
            "id": 16,
            "user": "Automotive",
            "type": "china-unionpay",
            "start": "2018-07-26",
            "duration": 1,
            "label": "Teheran 43: Spy Ring (a.k.a. Assassination Attempt) (Tegeran-43)",
            "dayoff": 0,
            "dayoffdate": "2018-08-25"
        },
        {
            "id": 17,
            "user": "Health",
            "type": "maestro",
            "start": "2018-07-15",
            "duration": 3,
            "label": "Road, The",
            "dayoff": 0,
            "dayoffdate": "2018-07-07"
        },
        {
            "id": 18,
            "user": "Grocery",
            "type": "maestro",
            "start": "2018-08-16",
            "duration": 2,
            "label": "Headless Woman, The (Mujer sin cabeza, La)",
            "dayoff": 1,
            "dayoffdate": "2018-08-07"
        },
        {
            "id": 19,
            "user": "Jewelery",
            "type": "mastercard",
            "start": "2018-07-02",
            "duration": 4,
            "label": "I Walked with a Zombie",
            "dayoff": 1,
            "dayoffdate": "2018-07-26"
        },
        {
            "id": 20,
            "user": "Baby",
            "type": "diners-club-carte-blanche",
            "start": "2018-07-08",
            "duration": 2,
            "label": "Tuskegee Airmen, The",
            "dayoff": 1,
            "dayoffdate": "2018-08-03"
        },
        {
            "id": 21,
            "user": "Health",
            "type": "diners-club-enroute",
            "start": "2018-08-21",
            "duration": 4,
            "label": "Pandemonium",
            "dayoff": 1,
            "dayoffdate": "2018-08-29"
        },
        {
            "id": 22,
            "user": "Electronics",
            "type": "jcb",
            "start": "2018-07-12",
            "duration": 5,
            "label": "She Creature (Mermaid Chronicles Part 1: She Creature)",
            "dayoff": 0,
            "dayoffdate": "2018-07-13"
        },
        {
            "id": 23,
            "user": "Jewelery",
            "type": "jcb",
            "start": "2018-08-15",
            "duration": 5,
            "label": "9 Souls (Nain souruzu)",
            "dayoff": 1,
            "dayoffdate": "2018-07-20"
        },
        {
            "id": 24,
            "user": "Clothing",
            "type": "jcb",
            "start": "2018-07-09",
            "duration": 4,
            "label": "Lord Jim",
            "dayoffdate": "2018-08-07"
        },
        {
            "id": 25,
            "user": "Tools",
            "type": "mastercard",
            "start": "2018-07-01",
            "duration": 5,
            "label": "Innocents, The",
            "dayoff": 1,
            "dayoffdate": "2018-08-30"
        },
        {
            "id": 26,
            "user": "Sports",
            "type": "maestro",
            "start": "2018-08-24",
            "duration": 5,
            "label": "Little Buddha",
            "dayoff": 1,
            "dayoffdate": "2018-08-08"
        },
        {
            "id": 27,
            "user": "Industrial",
            "type": "diners-club-carte-blanche",
            "start": "2018-08-11",
            "duration": 3,
            "label": "Of Mice and Men",
            "dayoff": 1,
            "dayoffdate": "2018-08-26"
        },
        {
            "id": 28,
            "user": "Music",
            "type": "maestro",
            "start": "2018-07-29",
            "duration": 6,
            "label": "Five Graves to Cairo",
            "dayoff": 0,
            "dayoffdate": "2018-07-13"
        },
        {
            "id": 29,
            "user": "Movies",
            "type": "jcb",
            "start": "2018-07-21",
            "duration": 4,
            "label": "Cold Steel",
            "dayoff": 0
        },
        {
            "id": 30,
            "user": "Computers",
            "type": "jcb",
            "start": "2018-08-07",
            "duration": 4,
            "label": "Life, Above All",
            "dayoff": 1,
            "dayoffdate": "2018-07-11"
        },
        {
            "id": 31,
            "user": "Computers",
            "type": "americanexpress",
            "start": "2018-07-15",
            "duration": 2,
            "label": "Every Other Weekend (Un week-end sur deux)",
            "dayoff": 1,
            "dayoffdate": "2018-08-23"
        },
        {
            "id": 32,
            "user": "Games",
            "type": "jcb",
            "start": "2018-07-26",
            "duration": 5,
            "label": "Too Shy to Try (Je suis timide... mais je me soigne)",
            "dayoff": 1
        },
        {
            "id": 33,
            "user": "Automotive",
            "type": "solo",
            "start": "2018-07-28",
            "duration": 4,
            "label": "Wind Across the Everglades",
            "dayoff": 0,
            "dayoffdate": "2018-08-20"
        },
        {
            "id": 34,
            "user": "Shoes",
            "type": "maestro",
            "start": "2018-07-29",
            "duration": 2,
            "label": "Casey Jones",
            "dayoff": 1
        },
        {
            "id": 35,
            "user": "Movies",
            "type": "maestro",
            "start": "2018-07-17",
            "duration": 2,
            "label": "Cherry 2000",
            "dayoff": 0,
            "dayoffdate": "2018-07-02"
        },
        {
            "id": 36,
            "user": "Garden",
            "type": "visa",
            "start": "2018-08-23",
            "duration": 3,
            "label": "Bag Man, The",
            "dayoff": 0,
            "dayoffdate": "2018-07-28"
        },
        {
            "id": 37,
            "user": "Jewelery",
            "type": "mastercard",
            "start": "2018-08-05",
            "duration": 3,
            "label": "Skin, Skin (Käpy selän alla)",
            "dayoff": 0,
            "dayoffdate": "2018-07-04"
        },
        {
            "id": 38,
            "user": "Grocery",
            "type": "bankcard",
            "start": "2018-08-26",
            "duration": 4,
            "label": "Reckless",
            "dayoff": 1,
            "dayoffdate": "2018-08-01"
        },
        {
            "id": 39,
            "user": "Health",
            "type": "visa",
            "start": "2018-07-12",
            "duration": 6,
            "label": "Princess Diaries 2: Royal Engagement, The",
            "dayoff": 1,
            "dayoffdate": "2018-07-27"
        },
        {
            "id": 40,
            "user": "Movies",
            "type": "china-unionpay",
            "start": "2018-08-10",
            "duration": 1,
            "label": "Light Gradient",
            "dayoff": 0,
            "dayoffdate": "2018-08-01"
        },
        {
            "id": 41,
            "user": "Grocery",
            "type": "jcb",
            "start": "2018-07-07",
            "duration": 2,
            "label": "Last House on the Left, The",
            "dayoff": 0,
            "dayoffdate": "2018-07-02"
        },
        {
            "id": 42,
            "user": "Clothing",
            "type": "visa",
            "start": "2018-08-07",
            "duration": 4,
            "label": "Love and Other Drugs",
            "dayoff": 1,
            "dayoffdate": "2018-07-22"
        },
        {
            "id": 43,
            "user": "Jewelery",
            "type": "maestro",
            "start": "2018-08-25",
            "duration": 5,
            "label": "Cry of the City",
            "dayoff": 1,
            "dayoffdate": "2018-08-14"
        },
        {
            "id": 44,
            "user": "Health",
            "type": "jcb",
            "start": "2018-08-09",
            "duration": 4,
            "label": "Extra Man, The",
            "dayoff": 0,
            "dayoffdate": "2018-08-08"
        },
        {
            "id": 45,
            "user": "Music",
            "type": "jcb",
            "start": "2018-08-20",
            "duration": 3,
            "label": "A Grain of Truth",
            "dayoff": 1,
            "dayoffdate": "2018-07-22"
        },
        {
            "id": 46,
            "user": "Computers",
            "type": "china-unionpay",
            "start": "2018-08-24",
            "duration": 6,
            "label": "Karate Kid, The",
            "dayoffdate": "2018-07-01"
        },
        {
            "id": 47,
            "user": "Home",
            "type": "diners-club-enroute",
            "start": "2018-07-13",
            "duration": 2,
            "label": "Neptune's Daughter",
            "dayoff": 0,
            "dayoffdate": "2018-07-29"
        },
        {
            "id": 48,
            "user": "Industrial",
            "type": "jcb",
            "start": "2018-08-05",
            "duration": 6,
            "label": "San Pietro",
            "dayoff": 0,
            "dayoffdate": "2018-08-27"
        },
        {
            "id": 49,
            "user": "Computers",
            "type": "diners-club-carte-blanche",
            "start": "2018-07-10",
            "duration": 6,
            "label": "Red Ensign",
            "dayoff": 1,
            "dayoffdate": "2018-08-05"
        },
        {
            "id": 50,
            "user": "Movies",
            "type": "jcb",
            "start": "2018-07-08",
            "duration": 1,
            "label": "Only the Strong Survive - A Celebration of Soul",
            "dayoff": 1,
            "dayoffdate": "2018-07-07"
        },
        {
            "id": 51,
            "user": "Games",
            "type": "visa",
            "start": "2018-08-23",
            "duration": 6,
            "label": "Prowler, The (a.k.a. Rosemary's Killer) (a.k.a. The Graduation)",
            "dayoff": 0,
            "dayoffdate": "2018-07-12"
        },
        {
            "id": 52,
            "user": "Computers",
            "type": "jcb",
            "start": "2018-08-25",
            "duration": 1,
            "label": "SpongeBob SquarePants Movie, The",
            "dayoff": 1,
            "dayoffdate": "2018-08-21"
        },
        {
            "id": 53,
            "user": "Industrial",
            "type": "jcb",
            "start": "2018-08-21",
            "duration": 1,
            "label": "Journeys with George",
            "dayoff": 0,
            "dayoffdate": "2018-07-30"
        },
        {
            "id": 54,
            "user": "Industrial",
            "type": "americanexpress",
            "start": "2018-08-04",
            "duration": 3,
            "label": "Before Flying Back to Earth (Pries parskrendant i zeme)",
            "dayoff": 0,
            "dayoffdate": "2018-07-06"
        },
        {
            "id": 55,
            "user": "Games",
            "type": "laser",
            "start": "2018-08-01",
            "duration": 6,
            "label": "Pretty Maids All in a Row",
            "dayoff": 1,
            "dayoffdate": "2018-07-29"
        },
        {
            "id": 56,
            "user": "Electronics",
            "type": "mastercard",
            "start": "2018-07-09",
            "duration": 2,
            "label": "Color of Pomegranates, The (Sayat Nova)",
            "dayoff": 1,
            "dayoffdate": "2018-08-11"
        },
        {
            "id": 57,
            "user": "Clothing",
            "type": "jcb",
            "start": "2018-08-07",
            "duration": 3,
            "label": "Lessons of Darkness (Lektionen in Finsternis)",
            "dayoff": 1,
            "dayoffdate": "2018-07-27"
        },
        {
            "id": 58,
            "user": "Grocery",
            "type": "jcb",
            "start": "2018-07-15",
            "duration": 5,
            "label": "Saw II",
            "dayoff": 1,
            "dayoffdate": "2018-07-06"
        },
        {
            "id": 59,
            "user": "Books",
            "type": "china-unionpay",
            "start": "2018-08-04",
            "duration": 4,
            "label": "Day of the Dead 2: Contagium",
            "dayoff": 1,
            "dayoffdate": "2018-07-01"
        },
        {
            "id": 60,
            "user": "Music",
            "type": "jcb",
            "start": "2018-08-06",
            "duration": 1,
            "label": "Great War, The (Grande guerra, La)",
            "dayoff": 0,
            "dayoffdate": "2018-08-04"
        },
        {
            "id": 61,
            "user": "Music",
            "type": "maestro",
            "start": "2018-07-18",
            "duration": 1,
            "label": "Men Don't Leave",
            "dayoff": 1,
            "dayoffdate": "2018-08-01"
        },
        {
            "id": 62,
            "user": "Movies",
            "type": "china-unionpay",
            "start": "2018-08-07",
            "duration": 4,
            "label": "Bright Leaves",
            "dayoffdate": "2018-07-25"
        },
        {
            "id": 63,
            "user": "Shoes",
            "type": "mastercard",
            "start": "2018-08-24",
            "duration": 6,
            "label": "My Best Friend's Wife",
            "dayoff": 0,
            "dayoffdate": "2018-08-26"
        },
        {
            "id": 64,
            "user": "Electronics",
            "type": "jcb",
            "start": "2018-07-13",
            "duration": 2,
            "label": "Surfwise",
            "dayoff": 0,
            "dayoffdate": "2018-07-06"
        },
        {
            "id": 65,
            "user": "Sports",
            "type": "solo",
            "start": "2018-07-16",
            "duration": 3,
            "label": "Jiro Dreams of Sushi",
            "dayoff": 1,
            "dayoffdate": "2018-07-07"
        },
        {
            "id": 66,
            "user": "Home",
            "type": "jcb",
            "start": "2018-07-10",
            "duration": 6,
            "label": "633 Squadron",
            "dayoff": 1,
            "dayoffdate": "2018-07-19"
        },
        {
            "id": 67,
            "user": "Sports",
            "type": "jcb",
            "start": "2018-07-30",
            "duration": 4,
            "label": "Anotherworld",
            "dayoff": 1,
            "dayoffdate": "2018-08-12"
        },
        {
            "id": 68,
            "user": "Shoes",
            "type": "switch",
            "start": "2018-08-06",
            "duration": 2,
            "label": "Big Stan",
            "dayoff": 0
        },
        {
            "id": 69,
            "user": "Garden",
            "type": "jcb",
            "start": "2018-08-22",
            "duration": 4,
            "label": "Scotland, Pa.",
            "dayoff": 1,
            "dayoffdate": "2018-08-17"
        },
        {
            "id": 70,
            "user": "Computers",
            "type": "mastercard",
            "start": "2018-08-26",
            "duration": 5,
            "label": "I Live in Fear (Ikimono no kiroku)",
            "dayoff": 0,
            "dayoffdate": "2018-08-23"
        },
        {
            "id": 71,
            "user": "Movies",
            "type": "bankcard",
            "start": "2018-07-14",
            "duration": 3,
            "label": "Rent-a-Kid",
            "dayoff": 0,
            "dayoffdate": "2018-08-28"
        },
        {
            "id": 72,
            "user": "Baby",
            "type": "jcb",
            "start": "2018-07-29",
            "duration": 6,
            "label": "Solaris (Solyaris)",
            "dayoff": 0,
            "dayoffdate": "2018-08-19"
        },
        {
            "id": 73,
            "user": "Sports",
            "type": "china-unionpay",
            "start": "2018-08-18",
            "duration": 5,
            "label": "Nightfall",
            "dayoff": 0,
            "dayoffdate": "2018-07-22"
        },
        {
            "id": 74,
            "user": "Automotive",
            "type": "jcb",
            "start": "2018-08-07",
            "duration": 1,
            "label": "Naked City, The",
            "dayoff": 0,
            "dayoffdate": "2018-07-20"
        },
        {
            "id": 75,
            "user": "Movies",
            "type": "bankcard",
            "start": "2018-07-30",
            "duration": 6,
            "label": "Panic in Year Zero!",
            "dayoff": 0,
            "dayoffdate": "2018-07-17"
        },
        {
            "id": 76,
            "user": "Games",
            "type": "mastercard",
            "start": "2018-08-22",
            "duration": 6,
            "label": "This Happy Breed",
            "dayoff": 0,
            "dayoffdate": "2018-08-04"
        },
        {
            "id": 77,
            "user": "Sports",
            "type": "switch",
            "start": "2018-07-28",
            "duration": 5,
            "label": "Shaun of the Dead",
            "dayoff": 1,
            "dayoffdate": "2018-07-01"
        },
        {
            "id": 78,
            "user": "Beauty",
            "type": "americanexpress",
            "start": "2018-07-07",
            "duration": 5,
            "label": "Hadewijch",
            "dayoff": 0,
            "dayoffdate": "2018-07-15"
        },
        {
            "id": 79,
            "user": "Home",
            "type": "jcb",
            "start": "2018-08-03",
            "duration": 2,
            "label": "Family Man, The",
            "dayoff": 1,
            "dayoffdate": "2018-08-16"
        },
        {
            "id": 80,
            "user": "Home",
            "type": "switch",
            "start": "2018-07-22",
            "duration": 4,
            "label": "Little Women",
            "dayoff": 0,
            "dayoffdate": "2018-07-11"
        },
        {
            "id": 81,
            "user": "Shoes",
            "type": "jcb",
            "start": "2018-08-11",
            "duration": 5,
            "label": "Hangover Part II, The",
            "dayoff": 1
        },
        {
            "id": 82,
            "user": "Health",
            "type": "bankcard",
            "start": "2018-08-04",
            "duration": 6,
            "label": "Baton Rouge (Bâton rouge)",
            "dayoff": 1,
            "dayoffdate": "2018-07-18"
        },
        {
            "id": 83,
            "user": "Jewelery",
            "type": "visa-electron",
            "start": "2018-08-01",
            "duration": 2,
            "label": "Escape Plan",
            "dayoff": 0,
            "dayoffdate": "2018-07-19"
        },
        {
            "id": 84,
            "user": "Games",
            "type": "mastercard",
            "start": "2018-07-31",
            "duration": 2,
            "label": "Quarantine 2: Terminal",
            "dayoff": 1,
            "dayoffdate": "2018-07-20"
        },
        {
            "id": 85,
            "user": "Home",
            "type": "jcb",
            "start": "2018-08-18",
            "duration": 2,
            "label": "Ghosts of the Abyss",
            "dayoff": 1,
            "dayoffdate": "2018-07-13"
        },
        {
            "id": 86,
            "user": "Health",
            "type": "jcb",
            "start": "2018-08-17",
            "duration": 2,
            "label": "Sons of Katie Elder",
            "dayoff": 0,
            "dayoffdate": "2018-07-27"
        },
        {
            "id": 87,
            "user": "Jewelery",
            "type": "maestro",
            "start": "2018-08-23",
            "duration": 4,
            "label": "Man Made Monster",
            "dayoff": 1
        },
        {
            "id": 88,
            "user": "Music",
            "type": "jcb",
            "start": "2018-08-25",
            "duration": 5,
            "label": "7 Boxes (7 cajas)",
            "dayoff": 1,
            "dayoffdate": "2018-08-13"
        },
        {
            "id": 89,
            "user": "Kids",
            "type": "jcb",
            "start": "2018-08-21",
            "duration": 1,
            "label": "Rubber",
            "dayoff": 0,
            "dayoffdate": "2018-08-22"
        },
        {
            "id": 90,
            "user": "Clothing",
            "type": "mastercard",
            "start": "2018-08-02",
            "duration": 2,
            "label": "No habrá paz para los malvados",
            "dayoff": 1,
            "dayoffdate": "2018-07-01"
        },
        {
            "id": 91,
            "user": "Automotive",
            "type": "switch",
            "start": "2018-08-27",
            "duration": 2,
            "label": "NeverEnding Story III, The",
            "dayoff": 1,
            "dayoffdate": "2018-08-27"
        },
        {
            "id": 92,
            "user": "Automotive",
            "type": "americanexpress",
            "start": "2018-07-04",
            "duration": 4,
            "label": "Emerald Forest, The",
            "dayoff": 0,
            "dayoffdate": "2018-07-09"
        },
        {
            "id": 93,
            "user": "Kids",
            "type": "visa",
            "start": "2018-07-13",
            "duration": 1,
            "label": "Crazy Stone (Fengkuang de shitou)",
            "dayoff": 0,
            "dayoffdate": "2018-07-21"
        },
        {
            "id": 94,
            "user": "Games",
            "type": "switch",
            "start": "2018-08-09",
            "duration": 4,
            "label": "Synth Britannia",
            "dayoff": 1,
            "dayoffdate": "2018-07-26"
        },
        {
            "id": 95,
            "user": "Outdoors",
            "type": "jcb",
            "start": "2018-08-22",
            "duration": 3,
            "label": "Little Rascals, The",
            "dayoff": 1,
            "dayoffdate": "2018-07-05"
        },
        {
            "id": 96,
            "user": "Clothing",
            "type": "visa",
            "start": "2018-08-14",
            "duration": 5,
            "label": "Last Circus, The (Balada triste de trompeta) (Sad Trumpet Ballad, A)",
            "dayoff": 0,
            "dayoffdate": "2018-07-02"
        },
        {
            "id": 97,
            "user": "Jewelery",
            "type": "china-unionpay",
            "start": "2018-08-21",
            "duration": 4,
            "label": "Bad Ronald",
            "dayoff": 1,
            "dayoffdate": "2018-07-15"
        },
        {
            "id": 98,
            "user": "Toys",
            "type": "switch",
            "start": "2018-08-05",
            "duration": 3,
            "label": "Hercules and the Circle of Fire",
            "dayoff": 0,
            "dayoffdate": "2018-08-25"
        },
        {
            "id": 99,
            "user": "Shoes",
            "type": "jcb",
            "start": "2018-07-08",
            "duration": 6,
            "label": "Black Cloud",
            "dayoff": 0,
            "dayoffdate": "2018-07-31"
        },
        {
            "id": 100,
            "user": "Clothing",
            "type": "jcb",
            "start": "2018-07-29",
            "duration": 1,
            "label": "Wedding Daze",
            "dayoff": 1,
            "dayoffdate": "2018-08-25"
        },
        {
            "id": 101,
            "user": "Sports",
            "type": "diners-club-enroute",
            "start": "2018-07-23",
            "duration": 6,
            "label": "Dead Like Me: Life After Death",
            "dayoff": 0,
            "dayoffdate": "2018-07-16"
        },
        {
            "id": 102,
            "user": "Health",
            "type": "jcb",
            "start": "2018-08-22",
            "duration": 5,
            "label": "Tall Blond Man with One Black Shoe, The (Le grand blond avec une chaussure noire)",
            "dayoff": 1
        },
        {
            "id": 103,
            "user": "Beauty",
            "type": "maestro",
            "start": "2018-08-19",
            "duration": 1,
            "label": "Net, The",
            "dayoff": 0,
            "dayoffdate": "2018-07-23"
        },
        {
            "id": 104,
            "user": "Electronics",
            "type": "jcb",
            "start": "2018-08-12",
            "duration": 1,
            "label": "Rainmaker, The",
            "dayoff": 1,
            "dayoffdate": "2018-07-04"
        },
        {
            "id": 105,
            "user": "Outdoors",
            "type": "bankcard",
            "start": "2018-08-09",
            "duration": 5,
            "label": "The Punisher: Dirty Laundry",
            "dayoff": 0,
            "dayoffdate": "2018-07-03"
        },
        {
            "id": 106,
            "user": "Games",
            "type": "jcb",
            "start": "2018-08-05",
            "duration": 2,
            "label": "Tribute",
            "dayoff": 1,
            "dayoffdate": "2018-08-30"
        },
        {
            "id": 107,
            "user": "Health",
            "type": "jcb",
            "start": "2018-08-23",
            "duration": 2,
            "label": "Submarine X-1",
            "dayoff": 0,
            "dayoffdate": "2018-07-27"
        },
        {
            "id": 108,
            "user": "Shoes",
            "type": "diners-club-enroute",
            "start": "2018-08-06",
            "duration": 1,
            "label": "Pallbearer, The",
            "dayoff": 0,
            "dayoffdate": "2018-08-16"
        },
        {
            "id": 109,
            "user": "Automotive",
            "type": "maestro",
            "start": "2018-07-25",
            "duration": 5,
            "label": "Killer's Kiss",
            "dayoff": 0,
            "dayoffdate": "2018-08-15"
        },
        {
            "id": 110,
            "user": "Tools",
            "type": "diners-club-enroute",
            "start": "2018-07-06",
            "duration": 6,
            "label": "Fahrenheit 9/11",
            "dayoff": 1,
            "dayoffdate": "2018-08-08"
        },
        {
            "id": 111,
            "user": "Movies",
            "type": "jcb",
            "start": "2018-08-11",
            "duration": 3,
            "label": "Emma's Bliss (Emmas Glück)",
            "dayoff": 0,
            "dayoffdate": "2018-08-25"
        },
        {
            "id": 112,
            "user": "Jewelery",
            "type": "china-unionpay",
            "start": "2018-07-22",
            "duration": 5,
            "label": "I Can't Think Straight",
            "dayoff": 0,
            "dayoffdate": "2018-08-26"
        },
        {
            "id": 113,
            "user": "Toys",
            "type": "jcb",
            "start": "2018-07-04",
            "duration": 1,
            "label": "Roaring Twenties, The",
            "dayoff": 1,
            "dayoffdate": "2018-07-24"
        },
        {
            "id": 114,
            "user": "Outdoors",
            "type": "switch",
            "start": "2018-08-16",
            "duration": 3,
            "label": "Mission: Impossible II",
            "dayoff": 0,
            "dayoffdate": "2018-08-08"
        },
        {
            "id": 115,
            "user": "Books",
            "type": "diners-club-carte-blanche",
            "start": "2018-07-31",
            "duration": 5,
            "label": "Pandorum",
            "dayoff": 0,
            "dayoffdate": "2018-08-24"
        },
        {
            "id": 116,
            "user": "Garden",
            "type": "switch",
            "start": "2018-08-05",
            "duration": 2,
            "label": "Extra Man, The",
            "dayoff": 1,
            "dayoffdate": "2018-07-12"
        },
        {
            "id": 117,
            "user": "Movies",
            "type": "mastercard",
            "start": "2018-08-30",
            "duration": 2,
            "label": "Il Mare (Siworae)",
            "dayoff": 0
        },
        {
            "id": 118,
            "user": "Books",
            "type": "instapayment",
            "start": "2018-07-20",
            "duration": 3,
            "label": "Ten Little Indians (Ein Unbekannter rechnet ab) (And Then There Were None)",
            "dayoff": 0,
            "dayoffdate": "2018-07-19"
        },
        {
            "id": 119,
            "user": "Clothing",
            "type": "jcb",
            "start": "2018-07-23",
            "duration": 3,
            "label": "Gold Rush, The",
            "dayoff": 1,
            "dayoffdate": "2018-07-07"
        },
        {
            "id": 120,
            "user": "Home",
            "type": "jcb",
            "start": "2018-08-16",
            "duration": 1,
            "label": "House Arrest",
            "dayoff": 1,
            "dayoffdate": "2018-08-29"
        },
        {
            "id": 121,
            "user": "Books",
            "type": "jcb",
            "start": "2018-08-17",
            "duration": 5,
            "label": "Nadine",
            "dayoff": 0,
            "dayoffdate": "2018-08-24"
        },
        {
            "id": 122,
            "user": "Health",
            "type": "jcb",
            "start": "2018-08-26",
            "duration": 2,
            "label": "Casanova '70",
            "dayoff": 0,
            "dayoffdate": "2018-08-20"
        },
        {
            "id": 123,
            "user": "Sports",
            "type": "americanexpress",
            "start": "2018-08-07",
            "duration": 5,
            "label": "The Third Half",
            "dayoff": 1,
            "dayoffdate": "2018-07-08"
        },
        {
            "id": 124,
            "user": "Music",
            "type": "jcb",
            "start": "2018-08-08",
            "duration": 6,
            "label": "Trotsky, The",
            "dayoff": 1,
            "dayoffdate": "2018-07-30"
        },
        {
            "id": 125,
            "user": "Games",
            "type": "jcb",
            "start": "2018-07-18",
            "duration": 4,
            "label": "Harrison's Flowers",
            "dayoff": 0,
            "dayoffdate": "2018-08-14"
        },
        {
            "id": 126,
            "user": "Beauty",
            "type": "jcb",
            "start": "2018-07-12",
            "duration": 3,
            "label": "Gorko!",
            "dayoff": 1,
            "dayoffdate": "2018-08-29"
        },
        {
            "id": 127,
            "user": "Tools",
            "type": "switch",
            "start": "2018-08-18",
            "duration": 6,
            "label": "Love Potion #9",
            "dayoff": 1,
            "dayoffdate": "2018-07-28"
        },
        {
            "id": 128,
            "user": "Baby",
            "type": "jcb",
            "start": "2018-07-06",
            "duration": 3,
            "label": "Mirrors",
            "dayoff": 1
        },
        {
            "id": 129,
            "user": "Health",
            "type": "diners-club-enroute",
            "start": "2018-07-22",
            "duration": 2,
            "label": "Grief",
            "dayoff": 0,
            "dayoffdate": "2018-08-26"
        },
        {
            "id": 130,
            "user": "Home",
            "type": "jcb",
            "start": "2018-08-01",
            "duration": 2,
            "label": "Affliction",
            "dayoff": 1,
            "dayoffdate": "2018-07-27"
        },
        {
            "id": 131,
            "user": "Games",
            "type": "mastercard",
            "start": "2018-08-21",
            "duration": 1,
            "label": "Brute Force",
            "dayoff": 0,
            "dayoffdate": "2018-08-01"
        },
        {
            "id": 132,
            "user": "Games",
            "type": "maestro",
            "start": "2018-08-04",
            "duration": 1,
            "label": "In Gold We Trust (600 kilos d'or pur)",
            "dayoff": 0,
            "dayoffdate": "2018-08-04"
        },
        {
            "id": 133,
            "user": "Garden",
            "type": "maestro",
            "start": "2018-08-23",
            "duration": 1,
            "label": "All the Way Home",
            "dayoff": 0,
            "dayoffdate": "2018-08-06"
        },
        {
            "id": 134,
            "user": "Grocery",
            "type": "jcb",
            "start": "2018-07-11",
            "duration": 4,
            "label": "28 Days",
            "dayoff": 0,
            "dayoffdate": "2018-08-24"
        },
        {
            "id": 135,
            "user": "Jewelery",
            "type": "jcb",
            "start": "2018-08-08",
            "duration": 2,
            "label": "Kissing Jessica Stein",
            "dayoff": 0,
            "dayoffdate": "2018-08-11"
        },
        {
            "id": 136,
            "user": "Outdoors",
            "type": "visa-electron",
            "start": "2018-08-12",
            "duration": 3,
            "label": "The Flower",
            "dayoff": 1,
            "dayoffdate": "2018-07-16"
        },
        {
            "id": 137,
            "user": "Outdoors",
            "type": "mastercard",
            "start": "2018-07-10",
            "duration": 5,
            "label": "Face in the Crowd, A",
            "dayoff": 0,
            "dayoffdate": "2018-07-10"
        },
        {
            "id": 138,
            "user": "Sports",
            "type": "china-unionpay",
            "start": "2018-07-02",
            "duration": 6,
            "label": "Waiter (Ober)",
            "dayoff": 1,
            "dayoffdate": "2018-07-08"
        },
        {
            "id": 139,
            "user": "Games",
            "type": "jcb",
            "start": "2018-08-22",
            "duration": 6,
            "label": "Ready to Wear (Pret-A-Porter)",
            "dayoff": 1,
            "dayoffdate": "2018-07-20"
        },
        {
            "id": 140,
            "user": "Tools",
            "type": "jcb",
            "start": "2018-07-18",
            "duration": 5,
            "label": "The Last Gladiators",
            "dayoff": 1
        },
        {
            "id": 141,
            "user": "Music",
            "type": "switch",
            "start": "2018-07-15",
            "duration": 3,
            "label": "Zig Zag",
            "dayoffdate": "2018-08-21"
        },
        {
            "id": 142,
            "user": "Kids",
            "type": "mastercard",
            "start": "2018-08-13",
            "duration": 6,
            "label": "Sammy and Rosie Get Laid",
            "dayoff": 1,
            "dayoffdate": "2018-07-06"
        },
        {
            "id": 143,
            "user": "Games",
            "type": "jcb",
            "start": "2018-08-01",
            "duration": 5,
            "label": "Special Forces (Forces spéciales)",
            "dayoff": 1,
            "dayoffdate": "2018-08-30"
        },
        {
            "id": 144,
            "user": "Health",
            "type": "visa-electron",
            "start": "2018-08-25",
            "duration": 4,
            "label": "Top Gun",
            "dayoff": 0,
            "dayoffdate": "2018-08-28"
        },
        {
            "id": 145,
            "user": "Movies",
            "type": "laser",
            "start": "2018-07-03",
            "duration": 5,
            "label": "Sublime",
            "dayoff": 1,
            "dayoffdate": "2018-08-07"
        },
        {
            "id": 146,
            "user": "Electronics",
            "type": "solo",
            "start": "2018-08-25",
            "duration": 2,
            "label": "Fighter, The",
            "dayoff": 1,
            "dayoffdate": "2018-07-15"
        },
        {
            "id": 147,
            "user": "Sports",
            "type": "jcb",
            "start": "2018-07-04",
            "duration": 1,
            "label": "Kick-Ass",
            "dayoff": 1,
            "dayoffdate": "2018-07-14"
        },
        {
            "id": 148,
            "user": "Baby",
            "type": "bankcard",
            "start": "2018-08-10",
            "duration": 6,
            "label": "Moment After 2, The: The Awakening",
            "dayoff": 0,
            "dayoffdate": "2018-08-24"
        },
        {
            "id": 149,
            "user": "Sports",
            "type": "jcb",
            "start": "2018-07-11",
            "duration": 4,
            "label": "No and Me (No et moi)",
            "dayoff": 0,
            "dayoffdate": "2018-07-22"
        },
        {
            "id": 150,
            "user": "Industrial",
            "type": "maestro",
            "start": "2018-07-21",
            "duration": 4,
            "label": "Squid and the Whale, The",
            "dayoff": 0,
            "dayoffdate": "2018-07-22"
        },
        {
            "id": 151,
            "user": "Toys",
            "type": "jcb",
            "start": "2018-07-18",
            "duration": 4,
            "label": "Interrogation (Przesluchanie)",
            "dayoff": 0,
            "dayoffdate": "2018-08-06"
        },
        {
            "id": 152,
            "user": "Automotive",
            "type": "jcb",
            "start": "2018-07-24",
            "duration": 4,
            "label": "Pocket Money",
            "dayoff": 1,
            "dayoffdate": "2018-07-28"
        },
        {
            "id": 153,
            "user": "Outdoors",
            "type": "switch",
            "start": "2018-07-20",
            "duration": 6,
            "label": "For a Few Dollars More (Per qualche dollaro in più)",
            "dayoffdate": "2018-08-04"
        },
        {
            "id": 154,
            "user": "Books",
            "type": "mastercard",
            "start": "2018-08-15",
            "duration": 2,
            "label": "Satanas",
            "dayoff": 0,
            "dayoffdate": "2018-08-15"
        },
        {
            "id": 155,
            "user": "Books",
            "type": "laser",
            "start": "2018-07-31",
            "duration": 5,
            "label": "Summer of Sam",
            "dayoff": 0,
            "dayoffdate": "2018-07-23"
        },
        {
            "id": 156,
            "user": "Toys",
            "type": "jcb",
            "start": "2018-07-20",
            "duration": 5,
            "label": "Backfire",
            "dayoff": 1,
            "dayoffdate": "2018-08-14"
        },
        {
            "id": 157,
            "user": "Music",
            "type": "diners-club-international",
            "start": "2018-08-14",
            "duration": 2,
            "label": "Generation War",
            "dayoff": 0,
            "dayoffdate": "2018-07-12"
        },
        {
            "id": 158,
            "user": "Tools",
            "type": "laser",
            "start": "2018-08-28",
            "duration": 1,
            "label": "Sebastian",
            "dayoff": 1,
            "dayoffdate": "2018-07-07"
        },
        {
            "id": 159,
            "user": "Games",
            "type": "jcb",
            "start": "2018-07-04",
            "duration": 4,
            "label": "Summer's Tale, A (Conte d'été)",
            "dayoff": 0,
            "dayoffdate": "2018-07-07"
        },
        {
            "id": 160,
            "user": "Tools",
            "type": "china-unionpay",
            "start": "2018-08-27",
            "duration": 6,
            "label": "Gable: The King Remembered",
            "dayoff": 1,
            "dayoffdate": "2018-07-14"
        },
        {
            "id": 161,
            "user": "Home",
            "type": "mastercard",
            "start": "2018-07-06",
            "duration": 4,
            "label": "Sabah",
            "dayoff": 1,
            "dayoffdate": "2018-07-30"
        },
        {
            "id": 162,
            "user": "Grocery",
            "type": "jcb",
            "start": "2018-07-18",
            "duration": 5,
            "label": "Lap Dance",
            "dayoff": 0,
            "dayoffdate": "2018-08-03"
        },
        {
            "id": 163,
            "user": "Clothing",
            "type": "jcb",
            "start": "2018-07-07",
            "duration": 3,
            "label": "Pumpkinhead II: Blood Wings",
            "dayoff": 1,
            "dayoffdate": "2018-07-07"
        },
        {
            "id": 164,
            "user": "Kids",
            "type": "solo",
            "start": "2018-07-11",
            "duration": 3,
            "label": "Verdict, The",
            "dayoff": 0,
            "dayoffdate": "2018-07-15"
        },
        {
            "id": 165,
            "user": "Tools",
            "type": "diners-club-enroute",
            "start": "2018-07-02",
            "duration": 1,
            "label": "Ballistic: Ecks vs. Sever",
            "dayoff": 1,
            "dayoffdate": "2018-08-03"
        },
        {
            "id": 166,
            "user": "Industrial",
            "type": "diners-club-carte-blanche",
            "start": "2018-08-10",
            "duration": 5,
            "label": "When Evening Falls on Bucharest or Metabolism",
            "dayoff": 0,
            "dayoffdate": "2018-08-02"
        },
        {
            "id": 167,
            "user": "Jewelery",
            "type": "maestro",
            "start": "2018-08-23",
            "duration": 1,
            "label": "Evil Aliens",
            "dayoff": 1,
            "dayoffdate": "2018-07-04"
        },
        {
            "id": 168,
            "user": "Music",
            "type": "jcb",
            "start": "2018-07-28",
            "duration": 2,
            "label": "Mothman Prophecies, The",
            "dayoff": 0,
            "dayoffdate": "2018-08-11"
        },
        {
            "id": 169,
            "user": "Garden",
            "type": "laser",
            "start": "2018-08-26",
            "duration": 6,
            "label": "Lady Snowblood (Shurayukihime)",
            "dayoff": 0,
            "dayoffdate": "2018-08-16"
        },
        {
            "id": 170,
            "user": "Jewelery",
            "type": "visa-electron",
            "start": "2018-08-19",
            "duration": 4,
            "label": "One Kill",
            "dayoff": 1,
            "dayoffdate": "2018-08-26"
        },
        {
            "id": 171,
            "user": "Automotive",
            "type": "bankcard",
            "start": "2018-08-30",
            "duration": 4,
            "label": "Leatherface: Texas Chainsaw Massacre III",
            "dayoff": 0,
            "dayoffdate": "2018-07-29"
        },
        {
            "id": 172,
            "user": "Movies",
            "type": "diners-club-enroute",
            "start": "2018-08-30",
            "duration": 5,
            "label": "Cider House Rules, The",
            "dayoff": 0,
            "dayoffdate": "2018-08-17"
        },
        {
            "id": 173,
            "user": "Toys",
            "type": "jcb",
            "start": "2018-07-03",
            "duration": 5,
            "label": "Foxcatcher",
            "dayoff": 0,
            "dayoffdate": "2018-07-08"
        },
        {
            "id": 174,
            "user": "Clothing",
            "type": "jcb",
            "start": "2018-08-06",
            "duration": 2,
            "label": "Invaders from Mars",
            "dayoff": 0,
            "dayoffdate": "2018-08-02"
        },
        {
            "id": 175,
            "user": "Home",
            "type": "solo",
            "start": "2018-07-01",
            "duration": 4,
            "label": "Everybody's Fine",
            "dayoff": 0,
            "dayoffdate": "2018-08-07"
        },
        {
            "id": 176,
            "user": "Beauty",
            "type": "maestro",
            "start": "2018-08-18",
            "duration": 3,
            "label": "Old Lady Who Walked in the Sea, The (Vieille qui marchait dans la mer, La)",
            "dayoff": 0,
            "dayoffdate": "2018-08-01"
        },
        {
            "id": 177,
            "user": "Shoes",
            "type": "jcb",
            "start": "2018-07-24",
            "duration": 5,
            "label": "Boss of It All, The (Direktøren for det hele)",
            "dayoff": 1,
            "dayoffdate": "2018-08-20"
        },
        {
            "id": 178,
            "user": "Toys",
            "type": "jcb",
            "start": "2018-08-02",
            "duration": 3,
            "label": "Screwed in Tallinn (Torsk på Tallinn - En liten film om ensamhet)",
            "dayoff": 1,
            "dayoffdate": "2018-08-03"
        },
        {
            "id": 179,
            "user": "Books",
            "type": "americanexpress",
            "start": "2018-08-30",
            "duration": 3,
            "label": "Zaat",
            "dayoff": 0,
            "dayoffdate": "2018-07-31"
        },
        {
            "id": 180,
            "user": "Outdoors",
            "type": "americanexpress",
            "start": "2018-07-13",
            "duration": 5,
            "label": "Christmas Carol: The Movie",
            "dayoff": 0,
            "dayoffdate": "2018-07-11"
        },
        {
            "id": 181,
            "user": "Music",
            "type": "switch",
            "start": "2018-07-27",
            "duration": 5,
            "label": "Notes on a Scandal",
            "dayoff": 0
        },
        {
            "id": 182,
            "user": "Shoes",
            "type": "jcb",
            "start": "2018-08-27",
            "duration": 4,
            "label": "Going Straight",
            "dayoff": 1,
            "dayoffdate": "2018-07-26"
        },
        {
            "id": 183,
            "user": "Tools",
            "type": "maestro",
            "start": "2018-08-03",
            "duration": 2,
            "label": "You Will Meet a Tall Dark Stranger",
            "dayoff": 0,
            "dayoffdate": "2018-08-18"
        },
        {
            "id": 184,
            "user": "Computers",
            "type": "jcb",
            "start": "2018-07-01",
            "duration": 3,
            "label": "Speed Racer",
            "dayoff": 0,
            "dayoffdate": "2018-08-07"
        },
        {
            "id": 185,
            "user": "Sports",
            "type": "maestro",
            "start": "2018-07-06",
            "duration": 6,
            "label": "Gambit",
            "dayoff": 1,
            "dayoffdate": "2018-07-23"
        },
        {
            "id": 186,
            "user": "Electronics",
            "type": "diners-club-enroute",
            "start": "2018-08-25",
            "duration": 5,
            "label": "Cold Turkey",
            "dayoff": 0
        },
        {
            "id": 187,
            "user": "Home",
            "type": "maestro",
            "start": "2018-08-02",
            "duration": 4,
            "label": "Marathon Man",
            "dayoff": 0,
            "dayoffdate": "2018-07-24"
        },
        {
            "id": 188,
            "user": "Computers",
            "type": "mastercard",
            "start": "2018-07-15",
            "duration": 6,
            "label": "Bad Blood (Mauvais sang)",
            "dayoff": 0
        },
        {
            "id": 189,
            "user": "Games",
            "type": "maestro",
            "start": "2018-07-13",
            "duration": 3,
            "label": "Amy",
            "dayoff": 1,
            "dayoffdate": "2018-08-10"
        },
        {
            "id": 190,
            "user": "Sports",
            "type": "jcb",
            "start": "2018-08-13",
            "duration": 3,
            "label": "Longest Yard, The",
            "dayoff": 1,
            "dayoffdate": "2018-08-21"
        },
        {
            "id": 191,
            "user": "Books",
            "type": "mastercard",
            "start": "2018-07-29",
            "duration": 1,
            "label": "Age of Dinosaurs",
            "dayoff": 1,
            "dayoffdate": "2018-08-23"
        },
        {
            "id": 192,
            "user": "Kids",
            "type": "americanexpress",
            "start": "2018-08-05",
            "duration": 1,
            "label": "Battle of the Year",
            "dayoff": 1,
            "dayoffdate": "2018-07-09"
        },
        {
            "id": 193,
            "user": "Books",
            "type": "jcb",
            "start": "2018-08-25",
            "duration": 2,
            "label": "Antibodies (Antikörper)",
            "dayoff": 1,
            "dayoffdate": "2018-07-21"
        },
        {
            "id": 194,
            "user": "Electronics",
            "type": "laser",
            "start": "2018-08-26",
            "duration": 5,
            "label": "Story Written with Water, A (Mizu de kakareta monogatari)",
            "dayoff": 0
        },
        {
            "id": 195,
            "user": "Computers",
            "type": "maestro",
            "start": "2018-08-27",
            "duration": 4,
            "label": "Those Magnificent Men in Their Flying Machines",
            "dayoff": 0,
            "dayoffdate": "2018-07-02"
        },
        {
            "id": 196,
            "user": "Clothing",
            "type": "jcb",
            "start": "2018-07-26",
            "duration": 6,
            "label": "Vacation from Marriage",
            "dayoff": 0,
            "dayoffdate": "2018-07-03"
        },
        {
            "id": 197,
            "user": "Toys",
            "type": "diners-club-us-ca",
            "start": "2018-08-24",
            "duration": 6,
            "label": "That Was Then... This Is Now",
            "dayoff": 0,
            "dayoffdate": "2018-08-01"
        },
        {
            "id": 198,
            "user": "Toys",
            "type": "maestro",
            "start": "2018-08-08",
            "duration": 6,
            "label": "Fahrenheit 451",
            "dayoff": 1,
            "dayoffdate": "2018-07-24"
        },
        {
            "id": 199,
            "user": "Clothing",
            "type": "jcb",
            "start": "2018-08-24",
            "duration": 3,
            "label": "Church, The (Chiesa, La)",
            "dayoff": 0,
            "dayoffdate": "2018-08-06"
        },
        {
            "id": 200,
            "user": "Outdoors",
            "type": "jcb",
            "start": "2018-08-12",
            "duration": 2,
            "label": "Meantime",
            "dayoff": 0,
            "dayoffdate": "2018-07-27"
        },
        {
            "id": 201,
            "user": "Computers",
            "type": "jcb",
            "start": "2018-07-31",
            "duration": 1,
            "label": "S.O.S. Eisberg",
            "dayoff": 0,
            "dayoffdate": "2018-08-03"
        },
        {
            "id": 202,
            "user": "Outdoors",
            "type": "jcb",
            "start": "2018-08-25",
            "duration": 4,
            "label": "Little Colonel, The",
            "dayoff": 1,
            "dayoffdate": "2018-08-06"
        },
        {
            "id": 203,
            "user": "Automotive",
            "type": "switch",
            "start": "2018-08-22",
            "duration": 3,
            "label": "Lunopolis",
            "dayoff": 1,
            "dayoffdate": "2018-07-08"
        },
        {
            "id": 204,
            "user": "Health",
            "type": "switch",
            "start": "2018-08-22",
            "duration": 6,
            "label": "Daffy Duck's Movie: Fantastic Island",
            "dayoff": 1
        },
        {
            "id": 205,
            "user": "Outdoors",
            "type": "jcb",
            "start": "2018-07-29",
            "duration": 1,
            "label": "Sharkwater",
            "dayoff": 1,
            "dayoffdate": "2018-08-26"
        },
        {
            "id": 206,
            "user": "Movies",
            "type": "jcb",
            "start": "2018-08-25",
            "duration": 4,
            "label": "Singer, The (Quand j'étais chanteur)",
            "dayoff": 0,
            "dayoffdate": "2018-07-10"
        },
        {
            "id": 207,
            "user": "Industrial",
            "type": "jcb",
            "start": "2018-07-05",
            "duration": 6,
            "label": "Stay Alive",
            "dayoff": 1,
            "dayoffdate": "2018-08-18"
        },
        {
            "id": 208,
            "user": "Home",
            "type": "diners-club-enroute",
            "start": "2018-08-29",
            "duration": 5,
            "label": "Legend of Lobo, The",
            "dayoff": 1,
            "dayoffdate": "2018-07-14"
        },
        {
            "id": 209,
            "user": "Grocery",
            "type": "jcb",
            "start": "2018-08-20",
            "duration": 4,
            "label": "Little Big Man",
            "dayoff": 0
        },
        {
            "id": 210,
            "user": "Kids",
            "type": "jcb",
            "start": "2018-07-15",
            "duration": 6,
            "label": "Welcome to the Space Show (Uchû shô e yôkoso)",
            "dayoff": 0,
            "dayoffdate": "2018-08-05"
        },
        {
            "id": 211,
            "user": "Computers",
            "type": "americanexpress",
            "start": "2018-07-10",
            "duration": 4,
            "label": "Friday the 13th Part IV: The Final Chapter",
            "dayoff": 0,
            "dayoffdate": "2018-08-25"
        },
        {
            "id": 212,
            "user": "Baby",
            "type": "jcb",
            "start": "2018-07-04",
            "duration": 3,
            "label": "C.O.G.",
            "dayoff": 1,
            "dayoffdate": "2018-07-29"
        },
        {
            "id": 213,
            "user": "Shoes",
            "type": "bankcard",
            "start": "2018-08-13",
            "duration": 2,
            "label": "Lusty Men, The",
            "dayoff": 0,
            "dayoffdate": "2018-08-09"
        },
        {
            "id": 214,
            "user": "Books",
            "type": "maestro",
            "start": "2018-07-02",
            "duration": 1,
            "label": "When in Rome",
            "dayoff": 1,
            "dayoffdate": "2018-07-03"
        },
        {
            "id": 215,
            "user": "Games",
            "type": "jcb",
            "start": "2018-07-07",
            "duration": 5,
            "label": "Pearl Jam: Immagine in Cornice - Live in Italy 2006",
            "dayoff": 0,
            "dayoffdate": "2018-07-07"
        },
        {
            "id": 216,
            "user": "Electronics",
            "type": "jcb",
            "start": "2018-07-19",
            "duration": 6,
            "label": "La petite reine",
            "dayoff": 1,
            "dayoffdate": "2018-08-12"
        },
        {
            "id": 217,
            "user": "Clothing",
            "type": "maestro",
            "start": "2018-08-16",
            "duration": 5,
            "label": "Gambit",
            "dayoff": 0,
            "dayoffdate": "2018-08-06"
        },
        {
            "id": 218,
            "user": "Toys",
            "type": "china-unionpay",
            "start": "2018-08-08",
            "duration": 6,
            "label": "Ear, The (Ucho)",
            "dayoff": 0,
            "dayoffdate": "2018-07-10"
        },
        {
            "id": 219,
            "user": "Jewelery",
            "type": "laser",
            "start": "2018-07-31",
            "duration": 1,
            "label": "Takva: A Man's Fear of God",
            "dayoff": 0,
            "dayoffdate": "2018-08-12"
        },
        {
            "id": 220,
            "user": "Tools",
            "type": "jcb",
            "start": "2018-08-10",
            "duration": 3,
            "label": "Woman in White, The",
            "dayoff": 0,
            "dayoffdate": "2018-08-20"
        },
        {
            "id": 221,
            "user": "Books",
            "type": "jcb",
            "start": "2018-07-05",
            "duration": 1,
            "label": "Treasure Island",
            "dayoff": 1,
            "dayoffdate": "2018-08-23"
        },
        {
            "id": 222,
            "user": "Games",
            "type": "jcb",
            "start": "2018-08-22",
            "duration": 1,
            "label": "Galaxina",
            "dayoff": 1,
            "dayoffdate": "2018-08-21"
        },
        {
            "id": 223,
            "user": "Electronics",
            "type": "visa-electron",
            "start": "2018-08-20",
            "duration": 6,
            "label": "Fight, Zatoichi, Fight (Zatôichi kesshô-tabi) (Zatôichi 8)",
            "dayoff": 1,
            "dayoffdate": "2018-07-29"
        },
        {
            "id": 224,
            "user": "Tools",
            "type": "diners-club-carte-blanche",
            "start": "2018-07-04",
            "duration": 6,
            "label": "Local Hero",
            "dayoff": 1,
            "dayoffdate": "2018-07-31"
        },
        {
            "id": 225,
            "user": "Toys",
            "type": "jcb",
            "start": "2018-07-13",
            "duration": 4,
            "label": "Strip Search",
            "dayoff": 1,
            "dayoffdate": "2018-07-22"
        },
        {
            "id": 226,
            "user": "Sports",
            "type": "jcb",
            "start": "2018-07-29",
            "duration": 3,
            "label": "And Now... Ladies and Gentlemen...",
            "dayoff": 1,
            "dayoffdate": "2018-08-11"
        },
        {
            "id": 227,
            "user": "Toys",
            "type": "jcb",
            "start": "2018-08-03",
            "duration": 3,
            "label": "Woman Who Wasn't There, The",
            "dayoff": 1,
            "dayoffdate": "2018-08-27"
        },
        {
            "id": 228,
            "user": "Garden",
            "type": "diners-club-carte-blanche",
            "start": "2018-08-08",
            "duration": 2,
            "label": "At the Death House Door",
            "dayoff": 0,
            "dayoffdate": "2018-07-01"
        },
        {
            "id": 229,
            "user": "Jewelery",
            "type": "jcb",
            "start": "2018-08-18",
            "duration": 1,
            "label": "Ainoat Oikeat",
            "dayoff": 0,
            "dayoffdate": "2018-08-25"
        },
        {
            "id": 230,
            "user": "Computers",
            "type": "jcb",
            "start": "2018-08-01",
            "duration": 3,
            "label": "New Year's Eve",
            "dayoff": 0,
            "dayoffdate": "2018-08-14"
        },
        {
            "id": 231,
            "user": "Movies",
            "type": "maestro",
            "start": "2018-07-20",
            "duration": 4,
            "label": "Sealed Cargo",
            "dayoff": 0,
            "dayoffdate": "2018-08-28"
        },
        {
            "id": 232,
            "user": "Electronics",
            "type": "china-unionpay",
            "start": "2018-07-18",
            "duration": 4,
            "label": "Hail Mary ('Je vous salue, Marie')",
            "dayoff": 0,
            "dayoffdate": "2018-07-09"
        },
        {
            "id": 233,
            "user": "Industrial",
            "type": "maestro",
            "start": "2018-07-15",
            "duration": 2,
            "label": "Moonrise Kingdom",
            "dayoff": 0,
            "dayoffdate": "2018-08-06"
        },
        {
            "id": 234,
            "user": "Music",
            "type": "diners-club-carte-blanche",
            "start": "2018-08-17",
            "duration": 6,
            "label": "Defenders of Riga",
            "dayoff": 0,
            "dayoffdate": "2018-08-18"
        },
        {
            "id": 235,
            "user": "Baby",
            "type": "jcb",
            "start": "2018-07-30",
            "duration": 3,
            "label": "Return of the Living Dead: Rave to the Grave",
            "dayoff": 1,
            "dayoffdate": "2018-07-30"
        },
        {
            "id": 236,
            "user": "Clothing",
            "type": "jcb",
            "start": "2018-08-27",
            "duration": 2,
            "label": "Tough Guise: Violence, Media & the Crisis in Masculinity",
            "dayoff": 0,
            "dayoffdate": "2018-08-27"
        },
        {
            "id": 237,
            "user": "Shoes",
            "type": "laser",
            "start": "2018-07-12",
            "duration": 1,
            "label": "City of No Limits, The (la ciudad sin límites, En)",
            "dayoff": 1,
            "dayoffdate": "2018-08-04"
        },
        {
            "id": 238,
            "user": "Baby",
            "type": "mastercard",
            "start": "2018-07-15",
            "duration": 4,
            "label": "South of the Border",
            "dayoff": 1,
            "dayoffdate": "2018-07-23"
        },
        {
            "id": 239,
            "user": "Home",
            "type": "switch",
            "start": "2018-08-13",
            "duration": 6,
            "label": "A Cry in the Wild",
            "dayoff": 0,
            "dayoffdate": "2018-07-16"
        },
        {
            "id": 240,
            "user": "Baby",
            "type": "switch",
            "start": "2018-08-01",
            "duration": 1,
            "label": "À propos de Nice",
            "dayoff": 1,
            "dayoffdate": "2018-07-09"
        },
        {
            "id": 241,
            "user": "Jewelery",
            "type": "maestro",
            "start": "2018-07-02",
            "duration": 6,
            "label": "People of the Wind",
            "dayoff": 1,
            "dayoffdate": "2018-07-12"
        },
        {
            "id": 242,
            "user": "Music",
            "type": "laser",
            "start": "2018-07-01",
            "duration": 6,
            "label": "Sanctum",
            "dayoff": 0,
            "dayoffdate": "2018-08-16"
        },
        {
            "id": 243,
            "user": "Health",
            "type": "china-unionpay",
            "start": "2018-07-26",
            "duration": 3,
            "label": "Pink Saris",
            "dayoff": 1,
            "dayoffdate": "2018-08-22"
        },
        {
            "id": 244,
            "user": "Electronics",
            "type": "jcb",
            "start": "2018-07-07",
            "duration": 3,
            "label": "Eye 2, The (Gin gwai 2)",
            "dayoff": 0,
            "dayoffdate": "2018-07-11"
        },
        {
            "id": 245,
            "user": "Jewelery",
            "type": "jcb",
            "start": "2018-08-24",
            "duration": 6,
            "label": "When Father Was Away on Business (Otac na sluzbenom putu)",
            "dayoff": 0,
            "dayoffdate": "2018-08-24"
        },
        {
            "id": 246,
            "user": "Games",
            "type": "jcb",
            "start": "2018-07-04",
            "duration": 6,
            "label": "Wish Upon a Star",
            "dayoff": 1,
            "dayoffdate": "2018-08-17"
        },
        {
            "id": 247,
            "user": "Grocery",
            "type": "jcb",
            "start": "2018-07-12",
            "duration": 6,
            "label": "Real McCoy, The",
            "dayoff": 0,
            "dayoffdate": "2018-07-29"
        },
        {
            "id": 248,
            "user": "Beauty",
            "type": "instapayment",
            "start": "2018-07-03",
            "duration": 6,
            "label": "Intimate Lighting (Intimni osvetleni)",
            "dayoff": 1,
            "dayoffdate": "2018-07-19"
        },
        {
            "id": 249,
            "user": "Music",
            "type": "jcb",
            "start": "2018-07-23",
            "duration": 4,
            "label": "Crimes of the Future",
            "dayoff": 0,
            "dayoffdate": "2018-08-29"
        },
        {
            "id": 250,
            "user": "Automotive",
            "type": "visa-electron",
            "start": "2018-08-02",
            "duration": 3,
            "label": "Creature from the Haunted Sea",
            "dayoff": 1,
            "dayoffdate": "2018-08-18"
        },
        {
            "id": 251,
            "user": "Kids",
            "type": "americanexpress",
            "start": "2018-08-07",
            "duration": 6,
            "label": "Glass Menagerie, The",
            "dayoff": 0,
            "dayoffdate": "2018-07-09"
        },
        {
            "id": 252,
            "user": "Automotive",
            "type": "jcb",
            "start": "2018-07-15",
            "duration": 6,
            "label": "Soap and Water",
            "dayoff": 0,
            "dayoffdate": "2018-07-11"
        },
        {
            "id": 253,
            "user": "Automotive",
            "type": "china-unionpay",
            "start": "2018-08-20",
            "duration": 2,
            "label": "Already Dead",
            "dayoff": 0,
            "dayoffdate": "2018-07-03"
        },
        {
            "id": 254,
            "user": "Shoes",
            "type": "diners-club-enroute",
            "start": "2018-07-01",
            "duration": 5,
            "label": "South, The (Lomalla)",
            "dayoff": 1,
            "dayoffdate": "2018-07-13"
        },
        {
            "id": 255,
            "user": "Sports",
            "type": "diners-club-carte-blanche",
            "start": "2018-07-27",
            "duration": 5,
            "label": "Sharpe's Battle",
            "dayoff": 0,
            "dayoffdate": "2018-07-10"
        },
        {
            "id": 256,
            "user": "Outdoors",
            "type": "mastercard",
            "start": "2018-07-15",
            "duration": 5,
            "label": "Leonard Part 6",
            "dayoff": 0,
            "dayoffdate": "2018-08-15"
        },
        {
            "id": 257,
            "user": "Grocery",
            "type": "mastercard",
            "start": "2018-08-11",
            "duration": 1,
            "label": "Bonnie Scotland (Heroes of the Regiment)",
            "dayoff": 1,
            "dayoffdate": "2018-08-13"
        },
        {
            "id": 258,
            "user": "Shoes",
            "type": "jcb",
            "start": "2018-08-12",
            "duration": 2,
            "label": "Mr. Toad's Wild Ride (a.k.a. The Wind in the Willows)",
            "dayoff": 0,
            "dayoffdate": "2018-07-21"
        },
        {
            "id": 259,
            "user": "Garden",
            "type": "visa-electron",
            "start": "2018-07-05",
            "duration": 4,
            "label": "Bloodbath at the House of Death",
            "dayoff": 0,
            "dayoffdate": "2018-08-10"
        },
        {
            "id": 260,
            "user": "Games",
            "type": "maestro",
            "start": "2018-07-23",
            "duration": 3,
            "label": "Niagara",
            "dayoff": 1,
            "dayoffdate": "2018-07-13"
        },
        {
            "id": 261,
            "user": "Music",
            "type": "diners-club-international",
            "start": "2018-07-22",
            "duration": 5,
            "label": "Björk at the Royal Opera House",
            "dayoffdate": "2018-08-10"
        },
        {
            "id": 262,
            "user": "Books",
            "type": "americanexpress",
            "start": "2018-07-20",
            "duration": 1,
            "label": "Shara (Sharasojyu)",
            "dayoff": 1,
            "dayoffdate": "2018-08-28"
        },
        {
            "id": 263,
            "user": "Books",
            "type": "mastercard",
            "start": "2018-07-20",
            "duration": 1,
            "label": "Gettysburg",
            "dayoff": 1,
            "dayoffdate": "2018-07-12"
        },
        {
            "id": 264,
            "user": "Shoes",
            "type": "jcb",
            "start": "2018-08-21",
            "duration": 4,
            "label": "Highlander II: The Quickening",
            "dayoff": 1
        },
        {
            "id": 265,
            "user": "Tools",
            "type": "jcb",
            "start": "2018-08-17",
            "duration": 3,
            "label": "Good Will Hunting",
            "dayoff": 1,
            "dayoffdate": "2018-08-19"
        },
        {
            "id": 266,
            "user": "Home",
            "type": "switch",
            "start": "2018-08-28",
            "duration": 2,
            "label": "Melody",
            "dayoffdate": "2018-07-12"
        },
        {
            "id": 267,
            "user": "Industrial",
            "type": "mastercard",
            "start": "2018-08-27",
            "duration": 4,
            "label": "Big Night",
            "dayoff": 1,
            "dayoffdate": "2018-08-13"
        },
        {
            "id": 268,
            "user": "Tools",
            "type": "jcb",
            "start": "2018-07-20",
            "duration": 5,
            "label": "Liebelei",
            "dayoffdate": "2018-08-12"
        },
        {
            "id": 269,
            "user": "Health",
            "type": "mastercard",
            "start": "2018-08-29",
            "duration": 2,
            "label": "Porky's",
            "dayoff": 1
        },
        {
            "id": 270,
            "user": "Tools",
            "type": "bankcard",
            "start": "2018-07-06",
            "duration": 3,
            "label": "Belle époque",
            "dayoff": 0,
            "dayoffdate": "2018-08-18"
        },
        {
            "id": 271,
            "user": "Books",
            "type": "visa",
            "start": "2018-07-09",
            "duration": 1,
            "label": "Gervaise",
            "dayoff": 1,
            "dayoffdate": "2018-08-07"
        },
        {
            "id": 272,
            "user": "Movies",
            "type": "switch",
            "start": "2018-07-02",
            "duration": 5,
            "label": "Outlander",
            "dayoff": 1,
            "dayoffdate": "2018-08-04"
        },
        {
            "id": 273,
            "user": "Grocery",
            "type": "diners-club-enroute",
            "start": "2018-07-26",
            "duration": 6,
            "label": "Boys Diving, Honolulu",
            "dayoff": 1,
            "dayoffdate": "2018-07-06"
        },
        {
            "id": 274,
            "user": "Sports",
            "type": "jcb",
            "start": "2018-08-21",
            "duration": 2,
            "label": "Matilda",
            "dayoff": 1,
            "dayoffdate": "2018-07-09"
        },
        {
            "id": 275,
            "user": "Health",
            "type": "jcb",
            "start": "2018-08-11",
            "duration": 1,
            "label": "What Is It?",
            "dayoff": 1,
            "dayoffdate": "2018-08-27"
        },
        {
            "id": 276,
            "user": "Baby",
            "type": "jcb",
            "start": "2018-07-02",
            "duration": 1,
            "label": "Judex",
            "dayoff": 1,
            "dayoffdate": "2018-07-24"
        },
        {
            "id": 277,
            "user": "Baby",
            "type": "jcb",
            "start": "2018-07-09",
            "duration": 4,
            "label": "Hart of London, The",
            "dayoff": 0,
            "dayoffdate": "2018-07-24"
        },
        {
            "id": 278,
            "user": "Industrial",
            "type": "jcb",
            "start": "2018-07-05",
            "duration": 4,
            "label": "Tony",
            "dayoff": 1,
            "dayoffdate": "2018-08-21"
        },
        {
            "id": 279,
            "user": "Movies",
            "type": "mastercard",
            "start": "2018-08-26",
            "duration": 4,
            "label": "Wagons East",
            "dayoff": 0,
            "dayoffdate": "2018-08-01"
        },
        {
            "id": 280,
            "user": "Sports",
            "type": "jcb",
            "start": "2018-07-11",
            "duration": 2,
            "label": "Men Who Stare at Goats, The",
            "dayoff": 0,
            "dayoffdate": "2018-07-04"
        },
        {
            "id": 281,
            "user": "Books",
            "type": "china-unionpay",
            "start": "2018-08-30",
            "duration": 2,
            "label": "Devil's Doorway",
            "dayoff": 1,
            "dayoffdate": "2018-07-27"
        },
        {
            "id": 282,
            "user": "Outdoors",
            "type": "china-unionpay",
            "start": "2018-07-03",
            "duration": 3,
            "label": "Citizen Gangster ",
            "dayoff": 1,
            "dayoffdate": "2018-08-26"
        },
        {
            "id": 283,
            "user": "Clothing",
            "type": "visa",
            "start": "2018-07-03",
            "duration": 6,
            "label": "Felon",
            "dayoff": 0,
            "dayoffdate": "2018-08-02"
        },
        {
            "id": 284,
            "user": "Tools",
            "type": "jcb",
            "start": "2018-08-17",
            "duration": 1,
            "label": "Angel on My Shoulder",
            "dayoff": 0,
            "dayoffdate": "2018-08-05"
        },
        {
            "id": 285,
            "user": "Automotive",
            "type": "jcb",
            "start": "2018-08-27",
            "duration": 5,
            "label": "Mad Love",
            "dayoff": 0,
            "dayoffdate": "2018-07-16"
        },
        {
            "id": 286,
            "user": "Clothing",
            "type": "jcb",
            "start": "2018-07-19",
            "duration": 1,
            "label": "Generation Kill",
            "dayoff": 0,
            "dayoffdate": "2018-07-26"
        },
        {
            "id": 287,
            "user": "Grocery",
            "type": "jcb",
            "start": "2018-07-05",
            "duration": 1,
            "label": "Transsiberian",
            "dayoff": 0,
            "dayoffdate": "2018-08-05"
        },
        {
            "id": 288,
            "user": "Beauty",
            "type": "jcb",
            "start": "2018-08-12",
            "duration": 4,
            "label": "Vodka Lemon",
            "dayoff": 0,
            "dayoffdate": "2018-07-13"
        },
        {
            "id": 289,
            "user": "Sports",
            "type": "jcb",
            "start": "2018-07-27",
            "duration": 2,
            "label": "Freaky Friday",
            "dayoff": 0,
            "dayoffdate": "2018-08-11"
        },
        {
            "id": 290,
            "user": "Clothing",
            "type": "jcb",
            "start": "2018-07-27",
            "duration": 4,
            "label": "Making Plans for Lena (Non ma fille, tu n'iras pas danser)",
            "dayoff": 0,
            "dayoffdate": "2018-07-21"
        },
        {
            "id": 291,
            "user": "Music",
            "type": "visa-electron",
            "start": "2018-08-14",
            "duration": 3,
            "label": "Bicentennial Man",
            "dayoff": 0,
            "dayoffdate": "2018-07-29"
        },
        {
            "id": 292,
            "user": "Jewelery",
            "type": "jcb",
            "start": "2018-08-08",
            "duration": 3,
            "label": "Flower of My Secret, The (La flor de mi secreto)",
            "dayoff": 0,
            "dayoffdate": "2018-07-20"
        },
        {
            "id": 293,
            "user": "Industrial",
            "type": "jcb",
            "start": "2018-08-07",
            "duration": 6,
            "label": "Free Willy 2: The Adventure Home",
            "dayoff": 1,
            "dayoffdate": "2018-07-29"
        },
        {
            "id": 294,
            "user": "Books",
            "type": "jcb",
            "start": "2018-07-21",
            "duration": 2,
            "label": "Aerial, The (La antena)",
            "dayoff": 1,
            "dayoffdate": "2018-08-26"
        },
        {
            "id": 295,
            "user": "Garden",
            "type": "visa-electron",
            "start": "2018-07-04",
            "duration": 1,
            "label": "Wicked",
            "dayoff": 1,
            "dayoffdate": "2018-08-26"
        },
        {
            "id": 296,
            "user": "Health",
            "type": "jcb",
            "start": "2018-07-16",
            "duration": 4,
            "label": "Cheerful Weather for the Wedding",
            "dayoff": 0,
            "dayoffdate": "2018-07-06"
        },
        {
            "id": 297,
            "user": "Automotive",
            "type": "mastercard",
            "start": "2018-08-12",
            "duration": 1,
            "label": "Nightmare Factory",
            "dayoff": 1,
            "dayoffdate": "2018-07-14"
        },
        {
            "id": 298,
            "user": "Baby",
            "type": "jcb",
            "start": "2018-07-22",
            "duration": 4,
            "label": "Luther",
            "dayoff": 0,
            "dayoffdate": "2018-08-09"
        },
        {
            "id": 299,
            "user": "Jewelery",
            "type": "jcb",
            "start": "2018-07-06",
            "duration": 2,
            "label": "Naked Gun 2 1/2: The Smell of Fear, The",
            "dayoff": 0,
            "dayoffdate": "2018-07-29"
        },
        {
            "id": 300,
            "user": "Automotive",
            "type": "mastercard",
            "start": "2018-07-22",
            "duration": 2,
            "label": "Mission: Impossible II",
            "dayoff": 0,
            "dayoffdate": "2018-07-25"
        },
        {
            "id": 301,
            "user": "Kids",
            "type": "jcb",
            "start": "2018-07-16",
            "duration": 1,
            "label": "Black Butterflies",
            "dayoff": 1,
            "dayoffdate": "2018-08-08"
        },
        {
            "id": 302,
            "user": "Beauty",
            "type": "china-unionpay",
            "start": "2018-08-03",
            "duration": 4,
            "label": "Child's Christmas in Wales, A",
            "dayoff": 1,
            "dayoffdate": "2018-08-12"
        },
        {
            "id": 303,
            "user": "Toys",
            "type": "jcb",
            "start": "2018-07-12",
            "duration": 5,
            "label": "Kagemusha",
            "dayoff": 1,
            "dayoffdate": "2018-07-05"
        },
        {
            "id": 304,
            "user": "Clothing",
            "type": "jcb",
            "start": "2018-08-30",
            "duration": 2,
            "label": "Pajeczarki",
            "dayoff": 1,
            "dayoffdate": "2018-07-04"
        },
        {
            "id": 305,
            "user": "Outdoors",
            "type": "jcb",
            "start": "2018-08-26",
            "duration": 2,
            "label": "Alibi, The (Lies and Alibis)",
            "dayoff": 1,
            "dayoffdate": "2018-08-29"
        },
        {
            "id": 306,
            "user": "Electronics",
            "type": "jcb",
            "start": "2018-08-02",
            "duration": 3,
            "label": "Motivation, The",
            "dayoff": 1,
            "dayoffdate": "2018-07-18"
        },
        {
            "id": 307,
            "user": "Games",
            "type": "visa",
            "start": "2018-08-14",
            "duration": 1,
            "label": "Fortress 2",
            "dayoff": 1,
            "dayoffdate": "2018-08-27"
        },
        {
            "id": 308,
            "user": "Toys",
            "type": "jcb",
            "start": "2018-08-02",
            "duration": 1,
            "label": "Apartment 4E ",
            "dayoff": 0,
            "dayoffdate": "2018-08-29"
        },
        {
            "id": 309,
            "user": "Clothing",
            "type": "diners-club-enroute",
            "start": "2018-07-29",
            "duration": 4,
            "label": "Fetishes",
            "dayoff": 0,
            "dayoffdate": "2018-08-05"
        },
        {
            "id": 310,
            "user": "Shoes",
            "type": "laser",
            "start": "2018-07-04",
            "duration": 2,
            "label": "Nutcracker, The",
            "dayoff": 1,
            "dayoffdate": "2018-08-24"
        },
        {
            "id": 311,
            "user": "Toys",
            "type": "jcb",
            "start": "2018-07-22",
            "duration": 5,
            "label": "Johnny Belinda",
            "dayoff": 0,
            "dayoffdate": "2018-08-08"
        },
        {
            "id": 312,
            "user": "Music",
            "type": "jcb",
            "start": "2018-08-05",
            "duration": 5,
            "label": "Night of the Shooting Stars (Notte di San Lorenzo, La)",
            "dayoff": 1,
            "dayoffdate": "2018-08-12"
        },
        {
            "id": 313,
            "user": "Electronics",
            "type": "jcb",
            "start": "2018-07-16",
            "duration": 5,
            "label": "Running Scared",
            "dayoff": 0,
            "dayoffdate": "2018-07-06"
        },
        {
            "id": 314,
            "user": "Health",
            "type": "diners-club-carte-blanche",
            "start": "2018-08-30",
            "duration": 4,
            "label": "Mother Carey's Chickens",
            "dayoff": 1,
            "dayoffdate": "2018-08-17"
        },
        {
            "id": 315,
            "user": "Tools",
            "type": "diners-club-enroute",
            "start": "2018-08-04",
            "duration": 5,
            "label": "Earrings of Madame de..., The (Madame de...)",
            "dayoff": 1,
            "dayoffdate": "2018-07-02"
        },
        {
            "id": 316,
            "user": "Outdoors",
            "type": "switch",
            "start": "2018-08-30",
            "duration": 6,
            "label": "Women of the Night (Yoru no onnatachi)",
            "dayoff": 1
        },
        {
            "id": 317,
            "user": "Movies",
            "type": "mastercard",
            "start": "2018-08-29",
            "duration": 2,
            "label": "After Midnight",
            "dayoff": 0,
            "dayoffdate": "2018-08-12"
        },
        {
            "id": 318,
            "user": "Games",
            "type": "jcb",
            "start": "2018-08-06",
            "duration": 1,
            "label": "Piggy",
            "dayoff": 0,
            "dayoffdate": "2018-08-24"
        },
        {
            "id": 319,
            "user": "Garden",
            "type": "americanexpress",
            "start": "2018-08-29",
            "duration": 2,
            "label": "Rage",
            "dayoff": 1,
            "dayoffdate": "2018-07-19"
        },
        {
            "id": 320,
            "user": "Books",
            "type": "jcb",
            "start": "2018-07-07",
            "duration": 1,
            "label": "Apparition, The",
            "dayoff": 0,
            "dayoffdate": "2018-07-26"
        },
        {
            "id": 321,
            "user": "Shoes",
            "type": "jcb",
            "start": "2018-07-22",
            "duration": 3,
            "label": "Beast with Five Fingers, The",
            "dayoff": 0
        },
        {
            "id": 322,
            "user": "Electronics",
            "type": "jcb",
            "start": "2018-07-12",
            "duration": 6,
            "label": "Legend of the Boneknapper Dragon",
            "dayoff": 1,
            "dayoffdate": "2018-08-20"
        },
        {
            "id": 323,
            "user": "Electronics",
            "type": "bankcard",
            "start": "2018-08-18",
            "duration": 5,
            "label": "Avenger ",
            "dayoffdate": "2018-07-26"
        },
        {
            "id": 324,
            "user": "Beauty",
            "type": "jcb",
            "start": "2018-07-16",
            "duration": 3,
            "label": "Happy Endings",
            "dayoff": 0,
            "dayoffdate": "2018-08-11"
        },
        {
            "id": 325,
            "user": "Music",
            "type": "diners-club-international",
            "start": "2018-07-12",
            "duration": 5,
            "label": "Birds of America",
            "dayoff": 1,
            "dayoffdate": "2018-07-15"
        },
        {
            "id": 326,
            "user": "Shoes",
            "type": "maestro",
            "start": "2018-07-17",
            "duration": 1,
            "label": "Incendiary",
            "dayoff": 0,
            "dayoffdate": "2018-07-08"
        },
        {
            "id": 327,
            "user": "Electronics",
            "type": "china-unionpay",
            "start": "2018-08-19",
            "duration": 4,
            "label": "Dead Fury",
            "dayoff": 0,
            "dayoffdate": "2018-08-15"
        },
        {
            "id": 328,
            "user": "Books",
            "type": "switch",
            "start": "2018-08-27",
            "duration": 3,
            "label": "Straight Time",
            "dayoff": 0,
            "dayoffdate": "2018-07-06"
        },
        {
            "id": 329,
            "user": "Grocery",
            "type": "jcb",
            "start": "2018-08-09",
            "duration": 4,
            "label": "Undercover Blues",
            "dayoff": 1,
            "dayoffdate": "2018-07-03"
        },
        {
            "id": 330,
            "user": "Toys",
            "type": "switch",
            "start": "2018-07-18",
            "duration": 3,
            "label": "Me and My Sister",
            "dayoffdate": "2018-07-24"
        },
        {
            "id": 331,
            "user": "Jewelery",
            "type": "jcb",
            "start": "2018-07-27",
            "duration": 1,
            "label": "Hawaii",
            "dayoff": 0,
            "dayoffdate": "2018-07-12"
        },
        {
            "id": 332,
            "user": "Movies",
            "type": "americanexpress",
            "start": "2018-08-24",
            "duration": 2,
            "label": "Batman Unmasked: The Psychology of the Dark Knight",
            "dayoff": 1,
            "dayoffdate": "2018-07-27"
        },
        {
            "id": 333,
            "user": "Health",
            "type": "jcb",
            "start": "2018-07-22",
            "duration": 2,
            "label": "Pearls of the Crown, The (Les perles de la couronne)",
            "dayoff": 1,
            "dayoffdate": "2018-08-15"
        },
        {
            "id": 334,
            "user": "Electronics",
            "type": "visa-electron",
            "start": "2018-07-02",
            "duration": 5,
            "label": "It's the Easter Beagle, Charlie Brown!",
            "dayoff": 0,
            "dayoffdate": "2018-08-06"
        },
        {
            "id": 335,
            "user": "Movies",
            "type": "maestro",
            "start": "2018-07-19",
            "duration": 4,
            "label": "Hood of the Living Dead",
            "dayoff": 1
        },
        {
            "id": 336,
            "user": "Sports",
            "type": "jcb",
            "start": "2018-08-30",
            "duration": 2,
            "label": "Unmade Beds",
            "dayoff": 0,
            "dayoffdate": "2018-07-25"
        },
        {
            "id": 337,
            "user": "Garden",
            "type": "jcb",
            "start": "2018-07-23",
            "duration": 5,
            "label": "S.P.L.: Kill Zone (Saat po long)",
            "dayoff": 0,
            "dayoffdate": "2018-08-15"
        },
        {
            "id": 338,
            "user": "Industrial",
            "type": "jcb",
            "start": "2018-07-06",
            "duration": 5,
            "label": "Millie",
            "dayoff": 0,
            "dayoffdate": "2018-08-30"
        },
        {
            "id": 339,
            "user": "Toys",
            "type": "maestro",
            "start": "2018-08-02",
            "duration": 3,
            "label": "Summer School",
            "dayoff": 0,
            "dayoffdate": "2018-08-04"
        },
        {
            "id": 340,
            "user": "Jewelery",
            "type": "diners-club-enroute",
            "start": "2018-07-20",
            "duration": 5,
            "label": "City Heat",
            "dayoff": 0,
            "dayoffdate": "2018-08-02"
        },
        {
            "id": 341,
            "user": "Movies",
            "type": "jcb",
            "start": "2018-07-03",
            "duration": 3,
            "label": "Misérables, Les",
            "dayoff": 0,
            "dayoffdate": "2018-07-19"
        },
        {
            "id": 342,
            "user": "Outdoors",
            "type": "jcb",
            "start": "2018-07-27",
            "duration": 6,
            "label": "Fistful of Dollars, A (Per un pugno di dollari)",
            "dayoff": 0,
            "dayoffdate": "2018-07-30"
        },
        {
            "id": 343,
            "user": "Automotive",
            "type": "jcb",
            "start": "2018-08-30",
            "duration": 4,
            "label": "Stolen",
            "dayoff": 0,
            "dayoffdate": "2018-08-17"
        },
        {
            "id": 344,
            "user": "Movies",
            "type": "visa-electron",
            "start": "2018-07-03",
            "duration": 4,
            "label": "Much Ado About Nothing",
            "dayoff": 1,
            "dayoffdate": "2018-07-04"
        },
        {
            "id": 345,
            "user": "Health",
            "type": "jcb",
            "start": "2018-08-28",
            "duration": 6,
            "label": "Remonstrance",
            "dayoff": 1,
            "dayoffdate": "2018-08-14"
        },
        {
            "id": 346,
            "user": "Games",
            "type": "jcb",
            "start": "2018-08-06",
            "duration": 6,
            "label": "Monster Squad, The",
            "dayoff": 1,
            "dayoffdate": "2018-08-09"
        },
        {
            "id": 347,
            "user": "Jewelery",
            "type": "americanexpress",
            "start": "2018-07-24",
            "duration": 4,
            "label": "Meatballs III",
            "dayoff": 0,
            "dayoffdate": "2018-07-25"
        },
        {
            "id": 348,
            "user": "Toys",
            "type": "solo",
            "start": "2018-08-14",
            "duration": 6,
            "label": "Open Grave",
            "dayoff": 1,
            "dayoffdate": "2018-07-23"
        },
        {
            "id": 349,
            "user": "Health",
            "type": "china-unionpay",
            "start": "2018-08-11",
            "duration": 5,
            "label": "Zombies of Mora Tau",
            "dayoff": 0,
            "dayoffdate": "2018-07-31"
        },
        {
            "id": 350,
            "user": "Books",
            "type": "diners-club-carte-blanche",
            "start": "2018-08-24",
            "duration": 5,
            "label": "Bill & Ted's Bogus Journey",
            "dayoff": 0,
            "dayoffdate": "2018-08-07"
        },
        {
            "id": 351,
            "user": "Kids",
            "type": "jcb",
            "start": "2018-07-12",
            "duration": 3,
            "label": "Juarez",
            "dayoff": 0,
            "dayoffdate": "2018-07-05"
        },
        {
            "id": 352,
            "user": "Automotive",
            "type": "laser",
            "start": "2018-07-08",
            "duration": 5,
            "label": "Wheelmen",
            "dayoff": 0,
            "dayoffdate": "2018-07-30"
        },
        {
            "id": 353,
            "user": "Movies",
            "type": "laser",
            "start": "2018-08-06",
            "duration": 4,
            "label": "Petals on the Wind",
            "dayoff": 0,
            "dayoffdate": "2018-07-24"
        },
        {
            "id": 354,
            "user": "Clothing",
            "type": "visa-electron",
            "start": "2018-08-05",
            "duration": 5,
            "label": "Chronicle of My Mother (Waga haha no ki)",
            "dayoff": 0,
            "dayoffdate": "2018-08-15"
        },
        {
            "id": 355,
            "user": "Garden",
            "type": "bankcard",
            "start": "2018-08-28",
            "duration": 6,
            "label": "13 Assassins (Jûsan-nin no shikaku)",
            "dayoff": 1,
            "dayoffdate": "2018-08-09"
        },
        {
            "id": 356,
            "user": "Clothing",
            "type": "visa-electron",
            "start": "2018-07-06",
            "duration": 6,
            "label": "Vinci",
            "dayoff": 0,
            "dayoffdate": "2018-07-21"
        },
        {
            "id": 357,
            "user": "Beauty",
            "type": "maestro",
            "start": "2018-08-21",
            "duration": 5,
            "label": "Renaissance Man",
            "dayoff": 1,
            "dayoffdate": "2018-07-29"
        },
        {
            "id": 358,
            "user": "Jewelery",
            "type": "switch",
            "start": "2018-07-14",
            "duration": 4,
            "label": "Wild Love",
            "dayoffdate": "2018-07-31"
        },
        {
            "id": 359,
            "user": "Computers",
            "type": "diners-club-enroute",
            "start": "2018-07-22",
            "duration": 3,
            "label": "Eye of the Dolphin",
            "dayoff": 1,
            "dayoffdate": "2018-08-30"
        },
        {
            "id": 360,
            "user": "Home",
            "type": "americanexpress",
            "start": "2018-07-14",
            "duration": 1,
            "label": "Tabu",
            "dayoff": 1,
            "dayoffdate": "2018-08-16"
        },
        {
            "id": 361,
            "user": "Tools",
            "type": "jcb",
            "start": "2018-07-27",
            "duration": 6,
            "label": "Dot the I",
            "dayoff": 1,
            "dayoffdate": "2018-07-21"
        },
        {
            "id": 362,
            "user": "Outdoors",
            "type": "jcb",
            "start": "2018-08-11",
            "duration": 5,
            "label": "Punk Singer, The",
            "dayoff": 0,
            "dayoffdate": "2018-07-25"
        },
        {
            "id": 363,
            "user": "Baby",
            "type": "visa-electron",
            "start": "2018-07-04",
            "duration": 5,
            "label": "Gray Matters",
            "dayoff": 1,
            "dayoffdate": "2018-07-15"
        },
        {
            "id": 364,
            "user": "Baby",
            "type": "maestro",
            "start": "2018-08-08",
            "duration": 4,
            "label": "Son of Rambow",
            "dayoff": 0
        },
        {
            "id": 365,
            "user": "Outdoors",
            "type": "jcb",
            "start": "2018-07-03",
            "duration": 4,
            "label": "One Night Stand",
            "dayoff": 0,
            "dayoffdate": "2018-08-30"
        },
        {
            "id": 366,
            "user": "Kids",
            "type": "jcb",
            "start": "2018-08-23",
            "duration": 5,
            "label": "'burbs, The",
            "dayoff": 0,
            "dayoffdate": "2018-07-01"
        },
        {
            "id": 367,
            "user": "Games",
            "type": "diners-club-enroute",
            "start": "2018-08-03",
            "duration": 4,
            "label": "Stunt Squad",
            "dayoff": 0,
            "dayoffdate": "2018-07-20"
        },
        {
            "id": 368,
            "user": "Movies",
            "type": "jcb",
            "start": "2018-07-22",
            "duration": 5,
            "label": "Trail Beyond, The",
            "dayoff": 1,
            "dayoffdate": "2018-07-17"
        },
        {
            "id": 369,
            "user": "Baby",
            "type": "jcb",
            "start": "2018-08-03",
            "duration": 5,
            "label": "Moon Zero Two",
            "dayoff": 0,
            "dayoffdate": "2018-07-09"
        },
        {
            "id": 370,
            "user": "Industrial",
            "type": "americanexpress",
            "start": "2018-07-30",
            "duration": 6,
            "label": "Angel Levine, The",
            "dayoff": 0,
            "dayoffdate": "2018-08-22"
        },
        {
            "id": 371,
            "user": "Industrial",
            "type": "mastercard",
            "start": "2018-08-30",
            "duration": 3,
            "label": "Otra Familia, La",
            "dayoff": 1,
            "dayoffdate": "2018-07-13"
        },
        {
            "id": 372,
            "user": "Industrial",
            "type": "jcb",
            "start": "2018-07-13",
            "duration": 4,
            "label": "Tied",
            "dayoff": 1,
            "dayoffdate": "2018-08-06"
        },
        {
            "id": 373,
            "user": "Clothing",
            "type": "jcb",
            "start": "2018-08-29",
            "duration": 6,
            "label": "Hangover Part III, The",
            "dayoff": 0,
            "dayoffdate": "2018-08-21"
        },
        {
            "id": 374,
            "user": "Home",
            "type": "visa",
            "start": "2018-08-11",
            "duration": 3,
            "label": "Commander Hamilton (Hamilton)",
            "dayoff": 1,
            "dayoffdate": "2018-08-28"
        },
        {
            "id": 375,
            "user": "Automotive",
            "type": "jcb",
            "start": "2018-08-26",
            "duration": 3,
            "label": "Made",
            "dayoff": 0,
            "dayoffdate": "2018-08-28"
        },
        {
            "id": 376,
            "user": "Games",
            "type": "switch",
            "start": "2018-08-21",
            "duration": 5,
            "label": "Lolita",
            "dayoff": 1,
            "dayoffdate": "2018-08-28"
        },
        {
            "id": 377,
            "user": "Games",
            "type": "bankcard",
            "start": "2018-08-07",
            "duration": 1,
            "label": "Goat, The (a.k.a. Knock On Wood) (Chèvre, La)",
            "dayoff": 1,
            "dayoffdate": "2018-07-02"
        },
        {
            "id": 378,
            "user": "Books",
            "type": "laser",
            "start": "2018-08-22",
            "duration": 6,
            "label": "Dead of Night",
            "dayoff": 1,
            "dayoffdate": "2018-08-09"
        },
        {
            "id": 379,
            "user": "Automotive",
            "type": "diners-club-carte-blanche",
            "start": "2018-08-11",
            "duration": 3,
            "label": "Dorian Gray",
            "dayoff": 1,
            "dayoffdate": "2018-08-30"
        },
        {
            "id": 380,
            "user": "Home",
            "type": "jcb",
            "start": "2018-07-11",
            "duration": 6,
            "label": "Tom Horn",
            "dayoff": 0,
            "dayoffdate": "2018-07-01"
        },
        {
            "id": 381,
            "user": "Movies",
            "type": "jcb",
            "start": "2018-08-18",
            "duration": 4,
            "label": "Mr. Pip",
            "dayoff": 1,
            "dayoffdate": "2018-07-29"
        },
        {
            "id": 382,
            "user": "Movies",
            "type": "laser",
            "start": "2018-08-04",
            "duration": 4,
            "label": "Exploding Girl, The",
            "dayoff": 0,
            "dayoffdate": "2018-07-30"
        },
        {
            "id": 383,
            "user": "Kids",
            "type": "jcb",
            "start": "2018-07-30",
            "duration": 4,
            "label": "Maryam",
            "dayoff": 1,
            "dayoffdate": "2018-08-11"
        },
        {
            "id": 384,
            "user": "Books",
            "type": "diners-club-carte-blanche",
            "start": "2018-07-27",
            "duration": 3,
            "label": "Three O'Clock High",
            "dayoff": 0,
            "dayoffdate": "2018-07-09"
        },
        {
            "id": 385,
            "user": "Electronics",
            "type": "maestro",
            "start": "2018-07-28",
            "duration": 2,
            "label": "Imago mortis",
            "dayoff": 1,
            "dayoffdate": "2018-08-19"
        },
        {
            "id": 386,
            "user": "Beauty",
            "type": "jcb",
            "start": "2018-07-30",
            "duration": 1,
            "label": "Zakochani",
            "dayoff": 0,
            "dayoffdate": "2018-08-09"
        },
        {
            "id": 387,
            "user": "Computers",
            "type": "diners-club-international",
            "start": "2018-07-24",
            "duration": 1,
            "label": "Happy Accidents",
            "dayoff": 1,
            "dayoffdate": "2018-07-04"
        },
        {
            "id": 388,
            "user": "Outdoors",
            "type": "jcb",
            "start": "2018-08-12",
            "duration": 4,
            "label": "Young & Wild (Joven y alocada)",
            "dayoff": 0,
            "dayoffdate": "2018-08-20"
        },
        {
            "id": 389,
            "user": "Toys",
            "type": "china-unionpay",
            "start": "2018-07-26",
            "duration": 5,
            "label": "Smashing Pumpkins: If All Goes Wrong",
            "dayoff": 0,
            "dayoffdate": "2018-08-07"
        },
        {
            "id": 390,
            "user": "Tools",
            "type": "jcb",
            "start": "2018-07-23",
            "duration": 3,
            "label": "Pornography (Pornografia)",
            "dayoff": 0,
            "dayoffdate": "2018-08-04"
        },
        {
            "id": 391,
            "user": "Automotive",
            "type": "diners-club-enroute",
            "start": "2018-07-20",
            "duration": 6,
            "label": "Veteran, The",
            "dayoff": 0,
            "dayoffdate": "2018-07-04"
        },
        {
            "id": 392,
            "user": "Health",
            "type": "jcb",
            "start": "2018-08-03",
            "duration": 4,
            "label": "Biutiful",
            "dayoff": 0,
            "dayoffdate": "2018-07-02"
        },
        {
            "id": 393,
            "user": "Home",
            "type": "jcb",
            "start": "2018-08-01",
            "duration": 1,
            "label": "Pirate, The",
            "dayoff": 0,
            "dayoffdate": "2018-08-30"
        },
        {
            "id": 394,
            "user": "Tools",
            "type": "visa-electron",
            "start": "2018-08-14",
            "duration": 4,
            "label": "Pokémon 3: The Movie",
            "dayoff": 1
        },
        {
            "id": 395,
            "user": "Tools",
            "type": "diners-club-carte-blanche",
            "start": "2018-07-31",
            "duration": 2,
            "label": "Nordkraft",
            "dayoffdate": "2018-08-19"
        },
        {
            "id": 396,
            "user": "Electronics",
            "type": "jcb",
            "start": "2018-07-01",
            "duration": 1,
            "label": "Go West",
            "dayoff": 0,
            "dayoffdate": "2018-07-19"
        },
        {
            "id": 397,
            "user": "Music",
            "type": "visa",
            "start": "2018-08-22",
            "duration": 3,
            "label": "Ranma ½: Nihao My Concubine (Ranma ½: Kessen Tôgenkyô! Hanayome o torimodose!!)",
            "dayoff": 1,
            "dayoffdate": "2018-07-10"
        },
        {
            "id": 398,
            "user": "Health",
            "type": "jcb",
            "start": "2018-08-07",
            "duration": 4,
            "label": "Patton Oswalt: Finest Hour",
            "dayoff": 0,
            "dayoffdate": "2018-07-31"
        },
        {
            "id": 399,
            "user": "Games",
            "type": "jcb",
            "start": "2018-08-12",
            "duration": 2,
            "label": "Comfort and Joy",
            "dayoff": 1,
            "dayoffdate": "2018-08-11"
        },
        {
            "id": 400,
            "user": "Industrial",
            "type": "jcb",
            "start": "2018-08-20",
            "duration": 6,
            "label": "Left Luggage",
            "dayoff": 0,
            "dayoffdate": "2018-08-16"
        },
        {
            "id": 401,
            "user": "Industrial",
            "type": "switch",
            "start": "2018-08-17",
            "duration": 6,
            "label": "Moebius Redux: A Life in Pictures",
            "dayoff": 0
        },
        {
            "id": 402,
            "user": "Games",
            "type": "jcb",
            "start": "2018-08-10",
            "duration": 3,
            "label": "Dinotopia",
            "dayoff": 0,
            "dayoffdate": "2018-08-21"
        },
        {
            "id": 403,
            "user": "Movies",
            "type": "mastercard",
            "start": "2018-08-01",
            "duration": 5,
            "label": "Story of My Life, The (Mensonges et trahisons et plus si affinités...)",
            "dayoff": 1,
            "dayoffdate": "2018-08-21"
        },
        {
            "id": 404,
            "user": "Kids",
            "type": "jcb",
            "start": "2018-07-21",
            "duration": 1,
            "label": "Devil Wears Prada, The",
            "dayoff": 0,
            "dayoffdate": "2018-07-15"
        },
        {
            "id": 405,
            "user": "Shoes",
            "type": "mastercard",
            "start": "2018-07-06",
            "duration": 2,
            "label": "Three Crowns of the Sailor (Les trois couronnes du matelot)",
            "dayoff": 1,
            "dayoffdate": "2018-07-31"
        },
        {
            "id": 406,
            "user": "Jewelery",
            "type": "jcb",
            "start": "2018-08-19",
            "duration": 6,
            "label": "Kink",
            "dayoff": 0,
            "dayoffdate": "2018-07-17"
        },
        {
            "id": 407,
            "user": "Clothing",
            "type": "bankcard",
            "start": "2018-07-06",
            "duration": 6,
            "label": "Alone for Christmas",
            "dayoff": 1,
            "dayoffdate": "2018-07-13"
        },
        {
            "id": 408,
            "user": "Electronics",
            "type": "china-unionpay",
            "start": "2018-08-09",
            "duration": 3,
            "label": "The Love Letter",
            "dayoff": 1,
            "dayoffdate": "2018-07-03"
        },
        {
            "id": 409,
            "user": "Home",
            "type": "diners-club-enroute",
            "start": "2018-08-03",
            "duration": 3,
            "label": "Beaver Trilogy Part IV",
            "dayoff": 1
        },
        {
            "id": 410,
            "user": "Kids",
            "type": "visa-electron",
            "start": "2018-08-02",
            "duration": 6,
            "label": "Encounters at the End of the World",
            "dayoff": 1,
            "dayoffdate": "2018-08-01"
        },
        {
            "id": 411,
            "user": "Clothing",
            "type": "maestro",
            "start": "2018-07-06",
            "duration": 2,
            "label": "Chinaman (Kinamand)",
            "dayoff": 0,
            "dayoffdate": "2018-07-07"
        },
        {
            "id": 412,
            "user": "Books",
            "type": "bankcard",
            "start": "2018-08-11",
            "duration": 5,
            "label": "Masterminds",
            "dayoff": 0,
            "dayoffdate": "2018-08-18"
        },
        {
            "id": 413,
            "user": "Industrial",
            "type": "china-unionpay",
            "start": "2018-08-15",
            "duration": 4,
            "label": "American Addict",
            "dayoff": 1,
            "dayoffdate": "2018-07-28"
        },
        {
            "id": 414,
            "user": "Grocery",
            "type": "visa-electron",
            "start": "2018-08-30",
            "duration": 3,
            "label": "Kickboxer 2: The Road Back",
            "dayoffdate": "2018-07-14"
        },
        {
            "id": 415,
            "user": "Toys",
            "type": "jcb",
            "start": "2018-07-02",
            "duration": 3,
            "label": "Paranormal Activity",
            "dayoff": 1,
            "dayoffdate": "2018-07-24"
        },
        {
            "id": 416,
            "user": "Music",
            "type": "jcb",
            "start": "2018-07-23",
            "duration": 5,
            "label": "Kicking & Screaming",
            "dayoffdate": "2018-07-13"
        },
        {
            "id": 417,
            "user": "Games",
            "type": "china-unionpay",
            "start": "2018-07-22",
            "duration": 4,
            "label": "Heat",
            "dayoff": 1,
            "dayoffdate": "2018-08-06"
        },
        {
            "id": 418,
            "user": "Tools",
            "type": "americanexpress",
            "start": "2018-08-16",
            "duration": 3,
            "label": "Peaceful Warrior",
            "dayoffdate": "2018-07-25"
        },
        {
            "id": 419,
            "user": "Garden",
            "type": "jcb",
            "start": "2018-07-21",
            "duration": 6,
            "label": "Walker",
            "dayoff": 0,
            "dayoffdate": "2018-08-16"
        },
        {
            "id": 420,
            "user": "Movies",
            "type": "jcb",
            "start": "2018-08-20",
            "duration": 4,
            "label": "Red Dwarf, The (Nain rouge, Le)",
            "dayoff": 1,
            "dayoffdate": "2018-07-06"
        },
        {
            "id": 421,
            "user": "Automotive",
            "type": "jcb",
            "start": "2018-08-28",
            "duration": 3,
            "label": "Role/Play",
            "dayoff": 0,
            "dayoffdate": "2018-07-03"
        },
        {
            "id": 422,
            "user": "Kids",
            "type": "diners-club-carte-blanche",
            "start": "2018-08-14",
            "duration": 4,
            "label": "Puppet Masters, The",
            "dayoff": 0,
            "dayoffdate": "2018-08-06"
        },
        {
            "id": 423,
            "user": "Baby",
            "type": "jcb",
            "start": "2018-08-03",
            "duration": 6,
            "label": "Bad Girl",
            "dayoff": 0,
            "dayoffdate": "2018-07-10"
        },
        {
            "id": 424,
            "user": "Kids",
            "type": "jcb",
            "start": "2018-07-24",
            "duration": 4,
            "label": "Brotherhood of Justice, The",
            "dayoff": 1,
            "dayoffdate": "2018-07-13"
        },
        {
            "id": 425,
            "user": "Garden",
            "type": "jcb",
            "start": "2018-07-08",
            "duration": 5,
            "label": "Going the Distance",
            "dayoff": 1,
            "dayoffdate": "2018-08-24"
        },
        {
            "id": 426,
            "user": "Tools",
            "type": "china-unionpay",
            "start": "2018-08-08",
            "duration": 3,
            "label": "Weary River",
            "dayoffdate": "2018-08-27"
        },
        {
            "id": 427,
            "user": "Industrial",
            "type": "jcb",
            "start": "2018-07-05",
            "duration": 1,
            "label": "Norwegian Wood (Noruwei no mori)",
            "dayoff": 1,
            "dayoffdate": "2018-07-28"
        },
        {
            "id": 428,
            "user": "Tools",
            "type": "jcb",
            "start": "2018-08-21",
            "duration": 6,
            "label": "Toxic Avenger Part III: The Last Temptation of Toxie, The",
            "dayoff": 1,
            "dayoffdate": "2018-08-27"
        },
        {
            "id": 429,
            "user": "Garden",
            "type": "laser",
            "start": "2018-08-29",
            "duration": 5,
            "label": "Imago mortis",
            "dayoff": 1,
            "dayoffdate": "2018-08-25"
        },
        {
            "id": 430,
            "user": "Shoes",
            "type": "jcb",
            "start": "2018-08-18",
            "duration": 5,
            "label": "Flypaper",
            "dayoff": 1,
            "dayoffdate": "2018-08-15"
        },
        {
            "id": 431,
            "user": "Health",
            "type": "jcb",
            "start": "2018-07-14",
            "duration": 1,
            "label": "Eye of the Needle",
            "dayoff": 1,
            "dayoffdate": "2018-08-01"
        },
        {
            "id": 432,
            "user": "Garden",
            "type": "solo",
            "start": "2018-07-23",
            "duration": 6,
            "label": "All About My Mother (Todo sobre mi madre)",
            "dayoff": 0,
            "dayoffdate": "2018-08-07"
        },
        {
            "id": 433,
            "user": "Outdoors",
            "type": "mastercard",
            "start": "2018-08-27",
            "duration": 5,
            "label": "Dreams of  a Life",
            "dayoff": 0,
            "dayoffdate": "2018-07-24"
        },
        {
            "id": 434,
            "user": "Industrial",
            "type": "diners-club-us-ca",
            "start": "2018-08-19",
            "duration": 5,
            "label": "Snoopy Come Home",
            "dayoffdate": "2018-08-26"
        },
        {
            "id": 435,
            "user": "Shoes",
            "type": "switch",
            "start": "2018-08-15",
            "duration": 3,
            "label": "Sinivalkoinen valhe",
            "dayoff": 1,
            "dayoffdate": "2018-08-03"
        },
        {
            "id": 436,
            "user": "Garden",
            "type": "jcb",
            "start": "2018-07-29",
            "duration": 5,
            "label": "Night of the Running Man",
            "dayoff": 0,
            "dayoffdate": "2018-08-26"
        },
        {
            "id": 437,
            "user": "Kids",
            "type": "jcb",
            "start": "2018-08-23",
            "duration": 3,
            "label": "Bus Stop",
            "dayoff": 0,
            "dayoffdate": "2018-07-09"
        },
        {
            "id": 438,
            "user": "Grocery",
            "type": "jcb",
            "start": "2018-07-02",
            "duration": 1,
            "label": "Miraculum",
            "dayoff": 0,
            "dayoffdate": "2018-08-14"
        },
        {
            "id": 439,
            "user": "Grocery",
            "type": "jcb",
            "start": "2018-07-19",
            "duration": 5,
            "label": "Bandits",
            "dayoff": 1,
            "dayoffdate": "2018-08-01"
        },
        {
            "id": 440,
            "user": "Grocery",
            "type": "jcb",
            "start": "2018-08-25",
            "duration": 2,
            "label": "Watermelon Man",
            "dayoff": 0,
            "dayoffdate": "2018-08-12"
        },
        {
            "id": 441,
            "user": "Sports",
            "type": "jcb",
            "start": "2018-07-01",
            "duration": 5,
            "label": "Brother",
            "dayoff": 1,
            "dayoffdate": "2018-07-30"
        },
        {
            "id": 442,
            "user": "Games",
            "type": "jcb",
            "start": "2018-07-21",
            "duration": 4,
            "label": "Slacker 2011",
            "dayoff": 1
        },
        {
            "id": 443,
            "user": "Games",
            "type": "jcb",
            "start": "2018-08-12",
            "duration": 5,
            "label": "Only Lovers Left Alive",
            "dayoff": 1,
            "dayoffdate": "2018-08-07"
        },
        {
            "id": 444,
            "user": "Movies",
            "type": "jcb",
            "start": "2018-07-08",
            "duration": 4,
            "label": "Small Circle of Friends, A",
            "dayoff": 0,
            "dayoffdate": "2018-07-29"
        },
        {
            "id": 445,
            "user": "Industrial",
            "type": "jcb",
            "start": "2018-07-01",
            "duration": 3,
            "label": "Without Lying Down: Frances Marion and the Power of Women in Hollywood",
            "dayoff": 1,
            "dayoffdate": "2018-07-06"
        },
        {
            "id": 446,
            "user": "Automotive",
            "type": "jcb",
            "start": "2018-07-13",
            "duration": 2,
            "label": "Sleepaway Camp",
            "dayoff": 0,
            "dayoffdate": "2018-08-11"
        },
        {
            "id": 447,
            "user": "Automotive",
            "type": "visa",
            "start": "2018-08-25",
            "duration": 3,
            "label": "Thrill Ride: The Science of Fun",
            "dayoff": 1,
            "dayoffdate": "2018-07-07"
        },
        {
            "id": 448,
            "user": "Industrial",
            "type": "solo",
            "start": "2018-08-29",
            "duration": 4,
            "label": "I Am Taraneh, I Am Fifteen Years Old (Man, taraneh, panzdah sal daram)",
            "dayoff": 0,
            "dayoffdate": "2018-08-08"
        },
        {
            "id": 449,
            "user": "Health",
            "type": "diners-club-carte-blanche",
            "start": "2018-08-13",
            "duration": 3,
            "label": "Workingman's Death",
            "dayoff": 0,
            "dayoffdate": "2018-08-25"
        },
        {
            "id": 450,
            "user": "Computers",
            "type": "bankcard",
            "start": "2018-07-10",
            "duration": 5,
            "label": "Satanas",
            "dayoff": 0,
            "dayoffdate": "2018-07-17"
        },
        {
            "id": 451,
            "user": "Kids",
            "type": "jcb",
            "start": "2018-08-05",
            "duration": 5,
            "label": "Phantom",
            "dayoff": 1,
            "dayoffdate": "2018-08-10"
        },
        {
            "id": 452,
            "user": "Electronics",
            "type": "diners-club-enroute",
            "start": "2018-08-11",
            "duration": 3,
            "label": "Diary of a Chambermaid (Journal d'une femme de chambre, Le)",
            "dayoff": 1
        },
        {
            "id": 453,
            "user": "Health",
            "type": "visa-electron",
            "start": "2018-08-23",
            "duration": 6,
            "label": "To Live (Huozhe)",
            "dayoff": 0,
            "dayoffdate": "2018-07-07"
        },
        {
            "id": 454,
            "user": "Toys",
            "type": "mastercard",
            "start": "2018-08-20",
            "duration": 6,
            "label": "Rabbit Without Ears (Keinohrhasen)",
            "dayoff": 1,
            "dayoffdate": "2018-07-08"
        },
        {
            "id": 455,
            "user": "Movies",
            "type": "diners-club-carte-blanche",
            "start": "2018-08-06",
            "duration": 5,
            "label": "Let's Make Money",
            "dayoff": 1,
            "dayoffdate": "2018-08-16"
        },
        {
            "id": 456,
            "user": "Sports",
            "type": "jcb",
            "start": "2018-08-25",
            "duration": 2,
            "label": "No Deposit, No Return",
            "dayoff": 0,
            "dayoffdate": "2018-08-19"
        },
        {
            "id": 457,
            "user": "Automotive",
            "type": "jcb",
            "start": "2018-08-27",
            "duration": 3,
            "label": "Sweeney, The",
            "dayoff": 1,
            "dayoffdate": "2018-07-15"
        },
        {
            "id": 458,
            "user": "Computers",
            "type": "maestro",
            "start": "2018-07-23",
            "duration": 5,
            "label": "Lady from Shanghai, The",
            "dayoff": 0,
            "dayoffdate": "2018-08-11"
        },
        {
            "id": 459,
            "user": "Sports",
            "type": "mastercard",
            "start": "2018-07-06",
            "duration": 2,
            "label": "See No Evil, Hear No Evil",
            "dayoff": 0,
            "dayoffdate": "2018-08-14"
        },
        {
            "id": 460,
            "user": "Books",
            "type": "maestro",
            "start": "2018-08-05",
            "duration": 4,
            "label": "Man of My Life, The (L'homme de sa vie)",
            "dayoff": 0
        },
        {
            "id": 461,
            "user": "Clothing",
            "type": "jcb",
            "start": "2018-08-30",
            "duration": 4,
            "label": "Persepolis",
            "dayoff": 1,
            "dayoffdate": "2018-07-23"
        },
        {
            "id": 462,
            "user": "Kids",
            "type": "diners-club-carte-blanche",
            "start": "2018-07-17",
            "duration": 1,
            "label": "Treasure of the Four Crowns",
            "dayoff": 0,
            "dayoffdate": "2018-08-28"
        },
        {
            "id": 463,
            "user": "Games",
            "type": "jcb",
            "start": "2018-08-01",
            "duration": 6,
            "label": "Beverly Hills Cop II",
            "dayoffdate": "2018-07-29"
        },
        {
            "id": 464,
            "user": "Music",
            "type": "jcb",
            "start": "2018-08-22",
            "duration": 6,
            "label": "The Empty Hours",
            "dayoff": 1,
            "dayoffdate": "2018-07-21"
        },
        {
            "id": 465,
            "user": "Computers",
            "type": "mastercard",
            "start": "2018-08-19",
            "duration": 3,
            "label": "The Second Best Exotic Marigold Hotel",
            "dayoff": 0,
            "dayoffdate": "2018-07-30"
        },
        {
            "id": 466,
            "user": "Home",
            "type": "jcb",
            "start": "2018-08-23",
            "duration": 3,
            "label": "Smart Set, The",
            "dayoff": 0,
            "dayoffdate": "2018-07-24"
        },
        {
            "id": 467,
            "user": "Jewelery",
            "type": "mastercard",
            "start": "2018-07-10",
            "duration": 4,
            "label": "Sagebrush Trail",
            "dayoff": 1,
            "dayoffdate": "2018-08-17"
        },
        {
            "id": 468,
            "user": "Computers",
            "type": "jcb",
            "start": "2018-08-28",
            "duration": 5,
            "label": "Slim Susie (Smala Sussie)",
            "dayoff": 1,
            "dayoffdate": "2018-07-11"
        },
        {
            "id": 469,
            "user": "Automotive",
            "type": "jcb",
            "start": "2018-08-30",
            "duration": 2,
            "label": "Bad Company",
            "dayoff": 0,
            "dayoffdate": "2018-07-22"
        },
        {
            "id": 470,
            "user": "Industrial",
            "type": "jcb",
            "start": "2018-08-02",
            "duration": 3,
            "label": "Dolemite",
            "dayoff": 1
        },
        {
            "id": 471,
            "user": "Jewelery",
            "type": "jcb",
            "start": "2018-07-19",
            "duration": 3,
            "label": "Letter Never Sent (Neotpravlennoye pismo)",
            "dayoff": 0,
            "dayoffdate": "2018-08-18"
        },
        {
            "id": 472,
            "user": "Shoes",
            "type": "laser",
            "start": "2018-07-26",
            "duration": 2,
            "label": "Nils Karlsson Pyssling",
            "dayoff": 0,
            "dayoffdate": "2018-07-19"
        },
        {
            "id": 473,
            "user": "Toys",
            "type": "visa-electron",
            "start": "2018-07-13",
            "duration": 4,
            "label": "Crimson Tide",
            "dayoff": 0,
            "dayoffdate": "2018-08-25"
        },
        {
            "id": 474,
            "user": "Automotive",
            "type": "solo",
            "start": "2018-07-16",
            "duration": 1,
            "label": "Ungentlemanly Act, An",
            "dayoff": 1,
            "dayoffdate": "2018-08-11"
        },
        {
            "id": 475,
            "user": "Computers",
            "type": "jcb",
            "start": "2018-08-16",
            "duration": 4,
            "label": "Maurice",
            "dayoff": 1,
            "dayoffdate": "2018-07-26"
        },
        {
            "id": 476,
            "user": "Books",
            "type": "jcb",
            "start": "2018-08-03",
            "duration": 2,
            "label": "Walking with Monsters",
            "dayoff": 0,
            "dayoffdate": "2018-07-25"
        },
        {
            "id": 477,
            "user": "Electronics",
            "type": "jcb",
            "start": "2018-08-07",
            "duration": 4,
            "label": "Infernal Affairs III (Mou gaan dou III: Jung gik mou gaan)",
            "dayoff": 1,
            "dayoffdate": "2018-08-20"
        },
        {
            "id": 478,
            "user": "Baby",
            "type": "china-unionpay",
            "start": "2018-08-18",
            "duration": 2,
            "label": "Heads",
            "dayoff": 1,
            "dayoffdate": "2018-08-30"
        },
        {
            "id": 479,
            "user": "Electronics",
            "type": "jcb",
            "start": "2018-08-08",
            "duration": 3,
            "label": "Resurrection, A",
            "dayoff": 0,
            "dayoffdate": "2018-07-18"
        },
        {
            "id": 480,
            "user": "Automotive",
            "type": "jcb",
            "start": "2018-07-31",
            "duration": 2,
            "label": "Rough Riders",
            "dayoff": 0,
            "dayoffdate": "2018-08-02"
        },
        {
            "id": 481,
            "user": "Beauty",
            "type": "visa",
            "start": "2018-07-03",
            "duration": 4,
            "label": "2019: After the Fall of New York",
            "dayoff": 1,
            "dayoffdate": "2018-07-30"
        },
        {
            "id": 482,
            "user": "Toys",
            "type": "china-unionpay",
            "start": "2018-07-10",
            "duration": 6,
            "label": "Mystery of the Wax Museum",
            "dayoff": 0,
            "dayoffdate": "2018-07-28"
        },
        {
            "id": 483,
            "user": "Books",
            "type": "diners-club-carte-blanche",
            "start": "2018-07-30",
            "duration": 6,
            "label": "Thelma & Louise",
            "dayoff": 0
        },
        {
            "id": 484,
            "user": "Home",
            "type": "jcb",
            "start": "2018-08-22",
            "duration": 1,
            "label": "Dodgeball: A True Underdog Story",
            "dayoff": 1,
            "dayoffdate": "2018-07-24"
        },
        {
            "id": 485,
            "user": "Beauty",
            "type": "mastercard",
            "start": "2018-07-30",
            "duration": 2,
            "label": "Funeral, The",
            "dayoff": 1,
            "dayoffdate": "2018-08-21"
        },
        {
            "id": 486,
            "user": "Health",
            "type": "jcb",
            "start": "2018-08-22",
            "duration": 1,
            "label": "Knowing",
            "dayoff": 0,
            "dayoffdate": "2018-07-20"
        },
        {
            "id": 487,
            "user": "Home",
            "type": "switch",
            "start": "2018-08-17",
            "duration": 5,
            "label": "On His Own (a.k.a. My Apprenticeship) (V lyudyakh)",
            "dayoff": 1,
            "dayoffdate": "2018-07-11"
        },
        {
            "id": 488,
            "user": "Garden",
            "type": "switch",
            "start": "2018-07-05",
            "duration": 1,
            "label": "7th Dawn, The",
            "dayoff": 1,
            "dayoffdate": "2018-07-04"
        },
        {
            "id": 489,
            "user": "Books",
            "type": "switch",
            "start": "2018-08-04",
            "duration": 6,
            "label": "Legendary Weapons of China",
            "dayoff": 1
        },
        {
            "id": 490,
            "user": "Industrial",
            "type": "china-unionpay",
            "start": "2018-07-22",
            "duration": 5,
            "label": "Kick-Ass",
            "dayoff": 0,
            "dayoffdate": "2018-07-01"
        },
        {
            "id": 491,
            "user": "Movies",
            "type": "china-unionpay",
            "start": "2018-08-13",
            "duration": 3,
            "label": "Mr. Blandings Builds His Dream House",
            "dayoff": 0,
            "dayoffdate": "2018-08-03"
        },
        {
            "id": 492,
            "user": "Music",
            "type": "jcb",
            "start": "2018-07-31",
            "duration": 5,
            "label": "Karate Kid, Part II, The",
            "dayoff": 1,
            "dayoffdate": "2018-08-26"
        },
        {
            "id": 493,
            "user": "Automotive",
            "type": "visa-electron",
            "start": "2018-07-09",
            "duration": 3,
            "label": "All That Jazz",
            "dayoff": 1,
            "dayoffdate": "2018-07-21"
        },
        {
            "id": 494,
            "user": "Outdoors",
            "type": "jcb",
            "start": "2018-07-17",
            "duration": 2,
            "label": "By the Law",
            "dayoff": 1,
            "dayoffdate": "2018-08-10"
        },
        {
            "id": 495,
            "user": "Jewelery",
            "type": "solo",
            "start": "2018-07-15",
            "duration": 4,
            "label": "Digging for Fire",
            "dayoff": 1,
            "dayoffdate": "2018-08-01"
        },
        {
            "id": 496,
            "user": "Beauty",
            "type": "mastercard",
            "start": "2018-08-26",
            "duration": 6,
            "label": "Skin Game, The",
            "dayoff": 1,
            "dayoffdate": "2018-07-22"
        },
        {
            "id": 497,
            "user": "Industrial",
            "type": "jcb",
            "start": "2018-07-09",
            "duration": 3,
            "label": "1981",
            "dayoff": 0,
            "dayoffdate": "2018-08-07"
        },
        {
            "id": 498,
            "user": "Toys",
            "type": "jcb",
            "start": "2018-07-25",
            "duration": 5,
            "label": "Chasing Christmas",
            "dayoff": 0,
            "dayoffdate": "2018-07-21"
        },
        {
            "id": 499,
            "user": "Tools",
            "type": "bankcard",
            "start": "2018-07-25",
            "duration": 6,
            "label": "Mission Bloody Mary",
            "dayoff": 1,
            "dayoffdate": "2018-07-18"
        },
        {
            "id": 500,
            "user": "Clothing",
            "type": "jcb",
            "start": "2018-07-08",
            "duration": 6,
            "label": "Deadline",
            "dayoffdate": "2018-08-06"
        },
        {
            "id": 501,
            "user": "Health",
            "type": "mastercard",
            "start": "2018-08-25",
            "duration": 3,
            "label": "Tom Segura: Completely Normal",
            "dayoff": 0,
            "dayoffdate": "2018-07-25"
        },
        {
            "id": 502,
            "user": "Outdoors",
            "type": "diners-club-enroute",
            "start": "2018-07-22",
            "duration": 3,
            "label": "Facts of Life, The",
            "dayoff": 1,
            "dayoffdate": "2018-08-06"
        },
        {
            "id": 503,
            "user": "Shoes",
            "type": "visa",
            "start": "2018-08-15",
            "duration": 5,
            "label": "Miss Minoes",
            "dayoff": 1,
            "dayoffdate": "2018-08-23"
        },
        {
            "id": 504,
            "user": "Kids",
            "type": "bankcard",
            "start": "2018-07-20",
            "duration": 5,
            "label": "Host, The",
            "dayoff": 1,
            "dayoffdate": "2018-07-13"
        },
        {
            "id": 505,
            "user": "Industrial",
            "type": "jcb",
            "start": "2018-08-12",
            "duration": 6,
            "label": "Rock of Ages",
            "dayoff": 1,
            "dayoffdate": "2018-08-07"
        },
        {
            "id": 506,
            "user": "Sports",
            "type": "diners-club-carte-blanche",
            "start": "2018-07-02",
            "duration": 3,
            "label": "Cocoon: The Return",
            "dayoff": 0,
            "dayoffdate": "2018-08-17"
        },
        {
            "id": 507,
            "user": "Home",
            "type": "jcb",
            "start": "2018-08-14",
            "duration": 1,
            "label": "Born into Brothels",
            "dayoff": 1,
            "dayoffdate": "2018-07-31"
        },
        {
            "id": 508,
            "user": "Tools",
            "type": "jcb",
            "start": "2018-07-02",
            "duration": 3,
            "label": "Eastern Plays",
            "dayoff": 0,
            "dayoffdate": "2018-07-12"
        },
        {
            "id": 509,
            "user": "Electronics",
            "type": "jcb",
            "start": "2018-07-19",
            "duration": 1,
            "label": "Fraternity Vacation",
            "dayoff": 1,
            "dayoffdate": "2018-08-30"
        },
        {
            "id": 510,
            "user": "Health",
            "type": "mastercard",
            "start": "2018-08-15",
            "duration": 3,
            "label": "Last Wave, The",
            "dayoff": 1,
            "dayoffdate": "2018-08-01"
        },
        {
            "id": 511,
            "user": "Outdoors",
            "type": "jcb",
            "start": "2018-08-28",
            "duration": 5,
            "label": "There Will Be Blood",
            "dayoff": 1,
            "dayoffdate": "2018-07-14"
        },
        {
            "id": 512,
            "user": "Kids",
            "type": "maestro",
            "start": "2018-07-30",
            "duration": 6,
            "label": "Truth About Emanuel, The",
            "dayoff": 0,
            "dayoffdate": "2018-08-27"
        },
        {
            "id": 513,
            "user": "Automotive",
            "type": "visa",
            "start": "2018-08-25",
            "duration": 5,
            "label": "Linsanity",
            "dayoff": 1,
            "dayoffdate": "2018-08-23"
        },
        {
            "id": 514,
            "user": "Home",
            "type": "mastercard",
            "start": "2018-08-07",
            "duration": 1,
            "label": "Blue Kite, The (Lan feng zheng)",
            "dayoff": 0,
            "dayoffdate": "2018-07-18"
        },
        {
            "id": 515,
            "user": "Tools",
            "type": "jcb",
            "start": "2018-07-05",
            "duration": 5,
            "label": "Fifth Commandment, The",
            "dayoff": 0,
            "dayoffdate": "2018-07-01"
        },
        {
            "id": 516,
            "user": "Sports",
            "type": "switch",
            "start": "2018-07-15",
            "duration": 2,
            "label": "O Amor das Três Romãs",
            "dayoff": 0,
            "dayoffdate": "2018-07-23"
        },
        {
            "id": 517,
            "user": "Electronics",
            "type": "switch",
            "start": "2018-08-03",
            "duration": 3,
            "label": "Young Goethe in Love",
            "dayoff": 0,
            "dayoffdate": "2018-08-02"
        },
        {
            "id": 518,
            "user": "Home",
            "type": "visa-electron",
            "start": "2018-08-20",
            "duration": 1,
            "label": "Bird of Paradise",
            "dayoff": 0,
            "dayoffdate": "2018-08-14"
        },
        {
            "id": 519,
            "user": "Baby",
            "type": "maestro",
            "start": "2018-07-24",
            "duration": 5,
            "label": "Fourth World War, The",
            "dayoff": 1,
            "dayoffdate": "2018-08-02"
        },
        {
            "id": 520,
            "user": "Jewelery",
            "type": "jcb",
            "start": "2018-07-08",
            "duration": 1,
            "label": "Final Countdown, The",
            "dayoff": 0,
            "dayoffdate": "2018-07-25"
        },
        {
            "id": 521,
            "user": "Toys",
            "type": "jcb",
            "start": "2018-08-22",
            "duration": 5,
            "label": "God's Sandbox (Tahara)",
            "dayoff": 1,
            "dayoffdate": "2018-08-12"
        },
        {
            "id": 522,
            "user": "Tools",
            "type": "visa-electron",
            "start": "2018-07-03",
            "duration": 1,
            "label": "Delusions of Grandeur (La folie des grandeurs)",
            "dayoff": 0,
            "dayoffdate": "2018-08-03"
        },
        {
            "id": 523,
            "user": "Music",
            "type": "americanexpress",
            "start": "2018-07-19",
            "duration": 5,
            "label": "Fire-Eater (Tulennielijä)",
            "dayoff": 0,
            "dayoffdate": "2018-08-02"
        },
        {
            "id": 524,
            "user": "Computers",
            "type": "laser",
            "start": "2018-08-07",
            "duration": 2,
            "label": "Crystal Ball, The",
            "dayoff": 0
        },
        {
            "id": 525,
            "user": "Grocery",
            "type": "americanexpress",
            "start": "2018-08-22",
            "duration": 6,
            "label": "Summer of '42",
            "dayoff": 1,
            "dayoffdate": "2018-08-27"
        },
        {
            "id": 526,
            "user": "Grocery",
            "type": "visa-electron",
            "start": "2018-07-19",
            "duration": 2,
            "label": "Constant Gardener, The",
            "dayoff": 1,
            "dayoffdate": "2018-07-23"
        },
        {
            "id": 527,
            "user": "Electronics",
            "type": "china-unionpay",
            "start": "2018-08-14",
            "duration": 4,
            "label": "King Kong vs. Godzilla (Kingukongu tai Gojira)",
            "dayoff": 0,
            "dayoffdate": "2018-08-16"
        },
        {
            "id": 528,
            "user": "Outdoors",
            "type": "jcb",
            "start": "2018-08-04",
            "duration": 5,
            "label": "And God Created Woman",
            "dayoff": 0,
            "dayoffdate": "2018-08-21"
        },
        {
            "id": 529,
            "user": "Grocery",
            "type": "jcb",
            "start": "2018-08-07",
            "duration": 5,
            "label": "The Loft",
            "dayoff": 1,
            "dayoffdate": "2018-08-23"
        },
        {
            "id": 530,
            "user": "Toys",
            "type": "instapayment",
            "start": "2018-07-01",
            "duration": 2,
            "label": "Black Hole, The",
            "dayoff": 1,
            "dayoffdate": "2018-07-19"
        },
        {
            "id": 531,
            "user": "Jewelery",
            "type": "jcb",
            "start": "2018-07-09",
            "duration": 1,
            "label": "Trinity and Beyond",
            "dayoff": 0,
            "dayoffdate": "2018-07-09"
        },
        {
            "id": 532,
            "user": "Movies",
            "type": "jcb",
            "start": "2018-07-19",
            "duration": 3,
            "label": "Triad Underworld (Gong wu) (Jiang Hu)",
            "dayoff": 1,
            "dayoffdate": "2018-08-13"
        },
        {
            "id": 533,
            "user": "Baby",
            "type": "diners-club-carte-blanche",
            "start": "2018-08-08",
            "duration": 6,
            "label": "Cookie",
            "dayoff": 0,
            "dayoffdate": "2018-08-03"
        },
        {
            "id": 534,
            "user": "Outdoors",
            "type": "bankcard",
            "start": "2018-08-18",
            "duration": 1,
            "label": "Green Chair (Noksaek uija)",
            "dayoff": 1,
            "dayoffdate": "2018-08-09"
        },
        {
            "id": 535,
            "user": "Garden",
            "type": "jcb",
            "start": "2018-07-06",
            "duration": 3,
            "label": "Tully",
            "dayoff": 0,
            "dayoffdate": "2018-07-19"
        },
        {
            "id": 536,
            "user": "Music",
            "type": "jcb",
            "start": "2018-08-01",
            "duration": 3,
            "label": "Outer Space",
            "dayoff": 0,
            "dayoffdate": "2018-07-27"
        },
        {
            "id": 537,
            "user": "Books",
            "type": "jcb",
            "start": "2018-07-27",
            "duration": 1,
            "label": "Mask of Fu Manchu, The",
            "dayoff": 0,
            "dayoffdate": "2018-07-30"
        },
        {
            "id": 538,
            "user": "Movies",
            "type": "visa-electron",
            "start": "2018-07-23",
            "duration": 2,
            "label": "Tomcats",
            "dayoffdate": "2018-07-25"
        },
        {
            "id": 539,
            "user": "Games",
            "type": "visa-electron",
            "start": "2018-07-16",
            "duration": 3,
            "label": "Powwow Highway",
            "dayoff": 0,
            "dayoffdate": "2018-08-24"
        },
        {
            "id": 540,
            "user": "Automotive",
            "type": "china-unionpay",
            "start": "2018-08-21",
            "duration": 3,
            "label": "Future Weather",
            "dayoff": 1,
            "dayoffdate": "2018-07-17"
        },
        {
            "id": 541,
            "user": "Music",
            "type": "visa-electron",
            "start": "2018-07-06",
            "duration": 4,
            "label": "Merry Widow, The",
            "dayoff": 1,
            "dayoffdate": "2018-08-30"
        },
        {
            "id": 542,
            "user": "Sports",
            "type": "jcb",
            "start": "2018-08-06",
            "duration": 3,
            "label": "Grant Morrison: Talking with Gods",
            "dayoffdate": "2018-07-04"
        },
        {
            "id": 543,
            "user": "Electronics",
            "type": "jcb",
            "start": "2018-08-16",
            "duration": 2,
            "label": "How to Be a Serial Killer",
            "dayoff": 1,
            "dayoffdate": "2018-08-17"
        },
        {
            "id": 544,
            "user": "Tools",
            "type": "switch",
            "start": "2018-07-05",
            "duration": 4,
            "label": "Fair Game",
            "dayoff": 1,
            "dayoffdate": "2018-08-24"
        },
        {
            "id": 545,
            "user": "Grocery",
            "type": "jcb",
            "start": "2018-08-04",
            "duration": 6,
            "label": "Advise and Consent",
            "dayoff": 1,
            "dayoffdate": "2018-08-23"
        },
        {
            "id": 546,
            "user": "Clothing",
            "type": "jcb",
            "start": "2018-07-13",
            "duration": 2,
            "label": "Transylmania",
            "dayoff": 0,
            "dayoffdate": "2018-08-25"
        },
        {
            "id": 547,
            "user": "Sports",
            "type": "jcb",
            "start": "2018-08-25",
            "duration": 6,
            "label": "Picnic",
            "dayoff": 1,
            "dayoffdate": "2018-08-28"
        },
        {
            "id": 548,
            "user": "Toys",
            "type": "jcb",
            "start": "2018-07-20",
            "duration": 4,
            "label": "Dream Home (Wai dor lei ah yut ho)",
            "dayoff": 0,
            "dayoffdate": "2018-07-30"
        },
        {
            "id": 549,
            "user": "Electronics",
            "type": "maestro",
            "start": "2018-07-22",
            "duration": 1,
            "label": "One on One",
            "dayoff": 1,
            "dayoffdate": "2018-08-10"
        },
        {
            "id": 550,
            "user": "Home",
            "type": "maestro",
            "start": "2018-07-20",
            "duration": 6,
            "label": "Haunt",
            "dayoff": 1,
            "dayoffdate": "2018-07-10"
        },
        {
            "id": 551,
            "user": "Baby",
            "type": "jcb",
            "start": "2018-08-14",
            "duration": 4,
            "label": "Rampage",
            "dayoff": 1,
            "dayoffdate": "2018-07-29"
        },
        {
            "id": 552,
            "user": "Beauty",
            "type": "jcb",
            "start": "2018-07-05",
            "duration": 2,
            "label": "Let the Bullets Fly",
            "dayoff": 1,
            "dayoffdate": "2018-07-16"
        },
        {
            "id": 553,
            "user": "Toys",
            "type": "jcb",
            "start": "2018-07-22",
            "duration": 5,
            "label": "Madigan",
            "dayoff": 1,
            "dayoffdate": "2018-08-27"
        },
        {
            "id": 554,
            "user": "Computers",
            "type": "diners-club-enroute",
            "start": "2018-08-07",
            "duration": 1,
            "label": "Rivers and Tides",
            "dayoff": 0,
            "dayoffdate": "2018-08-27"
        },
        {
            "id": 555,
            "user": "Industrial",
            "type": "jcb",
            "start": "2018-07-03",
            "duration": 5,
            "label": "Stealing Home",
            "dayoff": 0,
            "dayoffdate": "2018-07-10"
        },
        {
            "id": 556,
            "user": "Toys",
            "type": "jcb",
            "start": "2018-07-17",
            "duration": 6,
            "label": "My Way to Olympia (Mein Weg nach Olympia)",
            "dayoff": 0,
            "dayoffdate": "2018-07-23"
        },
        {
            "id": 557,
            "user": "Movies",
            "type": "visa",
            "start": "2018-07-02",
            "duration": 4,
            "label": "Milky Way, The (Voie lactée, La)",
            "dayoff": 0,
            "dayoffdate": "2018-07-30"
        },
        {
            "id": 558,
            "user": "Tools",
            "type": "jcb",
            "start": "2018-08-12",
            "duration": 6,
            "label": "Silent Night, Deadly Night",
            "dayoff": 1,
            "dayoffdate": "2018-07-04"
        },
        {
            "id": 559,
            "user": "Computers",
            "type": "switch",
            "start": "2018-08-21",
            "duration": 3,
            "label": "Dragon (Wu Xia)",
            "dayoff": 1,
            "dayoffdate": "2018-07-14"
        },
        {
            "id": 560,
            "user": "Clothing",
            "type": "diners-club-enroute",
            "start": "2018-08-21",
            "duration": 4,
            "label": "Monty Python's Life of Brian",
            "dayoff": 0
        },
        {
            "id": 561,
            "user": "Home",
            "type": "jcb",
            "start": "2018-08-07",
            "duration": 5,
            "label": "Toy Story Toons: Small Fry",
            "dayoff": 1,
            "dayoffdate": "2018-07-18"
        },
        {
            "id": 562,
            "user": "Games",
            "type": "mastercard",
            "start": "2018-08-14",
            "duration": 5,
            "label": "Jab We Met",
            "dayoff": 1,
            "dayoffdate": "2018-08-25"
        },
        {
            "id": 563,
            "user": "Books",
            "type": "solo",
            "start": "2018-07-21",
            "duration": 3,
            "label": "Guns of Navarone, The",
            "dayoff": 0,
            "dayoffdate": "2018-08-12"
        },
        {
            "id": 564,
            "user": "Beauty",
            "type": "jcb",
            "start": "2018-07-27",
            "duration": 5,
            "label": "Carmen Jones",
            "dayoff": 0,
            "dayoffdate": "2018-07-23"
        },
        {
            "id": 565,
            "user": "Outdoors",
            "type": "jcb",
            "start": "2018-08-07",
            "duration": 5,
            "label": "Cow, The (Gaav)",
            "dayoff": 0,
            "dayoffdate": "2018-08-25"
        },
        {
            "id": 566,
            "user": "Clothing",
            "type": "jcb",
            "start": "2018-07-07",
            "duration": 5,
            "label": "Boys Next Door, The",
            "dayoff": 0,
            "dayoffdate": "2018-08-02"
        },
        {
            "id": 567,
            "user": "Clothing",
            "type": "solo",
            "start": "2018-08-23",
            "duration": 2,
            "label": "Burn, Witch, Burn (Night of the Eagle)",
            "dayoff": 1,
            "dayoffdate": "2018-07-08"
        },
        {
            "id": 568,
            "user": "Kids",
            "type": "jcb",
            "start": "2018-07-13",
            "duration": 1,
            "label": "Brute, The (Bruto, El)",
            "dayoff": 1,
            "dayoffdate": "2018-08-14"
        },
        {
            "id": 569,
            "user": "Grocery",
            "type": "visa",
            "start": "2018-07-29",
            "duration": 3,
            "label": "Battle of Britain, The (Why We Fight, 4)",
            "dayoff": 0,
            "dayoffdate": "2018-08-10"
        },
        {
            "id": 570,
            "user": "Outdoors",
            "type": "americanexpress",
            "start": "2018-08-03",
            "duration": 5,
            "label": "Bye Bye Birdie",
            "dayoff": 1,
            "dayoffdate": "2018-07-03"
        },
        {
            "id": 571,
            "user": "Automotive",
            "type": "china-unionpay",
            "start": "2018-07-09",
            "duration": 3,
            "label": "Michael Jackson's This Is It",
            "dayoff": 0,
            "dayoffdate": "2018-07-29"
        },
        {
            "id": 572,
            "user": "Games",
            "type": "diners-club-carte-blanche",
            "start": "2018-08-29",
            "duration": 3,
            "label": "All Fall Down",
            "dayoff": 1,
            "dayoffdate": "2018-08-06"
        },
        {
            "id": 573,
            "user": "Books",
            "type": "diners-club-enroute",
            "start": "2018-08-11",
            "duration": 2,
            "label": "Night of the Demons",
            "dayoff": 1,
            "dayoffdate": "2018-08-11"
        },
        {
            "id": 574,
            "user": "Music",
            "type": "jcb",
            "start": "2018-08-26",
            "duration": 2,
            "label": "Miracle",
            "dayoff": 1,
            "dayoffdate": "2018-08-16"
        },
        {
            "id": 575,
            "user": "Music",
            "type": "switch",
            "start": "2018-08-15",
            "duration": 3,
            "label": "Six Degrees of Separation",
            "dayoff": 0,
            "dayoffdate": "2018-08-03"
        },
        {
            "id": 576,
            "user": "Clothing",
            "type": "diners-club-international",
            "start": "2018-07-30",
            "duration": 3,
            "label": "Naked Ambition: An R Rated Look at an X Rated Industry ",
            "dayoff": 0,
            "dayoffdate": "2018-07-14"
        },
        {
            "id": 577,
            "user": "Shoes",
            "type": "jcb",
            "start": "2018-08-04",
            "duration": 1,
            "label": "Who Killed Bambi? (Qui a tué Bambi?)",
            "dayoff": 1,
            "dayoffdate": "2018-07-26"
        },
        {
            "id": 578,
            "user": "Kids",
            "type": "visa",
            "start": "2018-08-17",
            "duration": 3,
            "label": "Happiness Is in the Field (Bonheur est dans le pré, Le)",
            "dayoff": 0,
            "dayoffdate": "2018-08-13"
        },
        {
            "id": 579,
            "user": "Beauty",
            "type": "jcb",
            "start": "2018-07-01",
            "duration": 2,
            "label": "Despair",
            "dayoff": 1,
            "dayoffdate": "2018-08-02"
        },
        {
            "id": 580,
            "user": "Electronics",
            "type": "maestro",
            "start": "2018-08-17",
            "duration": 1,
            "label": "That Sugar Film",
            "dayoff": 1,
            "dayoffdate": "2018-08-20"
        },
        {
            "id": 581,
            "user": "Garden",
            "type": "jcb",
            "start": "2018-08-08",
            "duration": 1,
            "label": "Keoma",
            "dayoff": 0,
            "dayoffdate": "2018-08-29"
        },
        {
            "id": 582,
            "user": "Shoes",
            "type": "mastercard",
            "start": "2018-07-21",
            "duration": 5,
            "label": "Victory Through Air Power",
            "dayoff": 1,
            "dayoffdate": "2018-08-06"
        },
        {
            "id": 583,
            "user": "Shoes",
            "type": "diners-club-us-ca",
            "start": "2018-07-09",
            "duration": 4,
            "label": "Alone in the Dark II",
            "dayoff": 1,
            "dayoffdate": "2018-07-02"
        },
        {
            "id": 584,
            "user": "Automotive",
            "type": "jcb",
            "start": "2018-07-12",
            "duration": 1,
            "label": "Mr. Thank You (Arigatô-san)",
            "dayoff": 1,
            "dayoffdate": "2018-08-05"
        },
        {
            "id": 585,
            "user": "Shoes",
            "type": "mastercard",
            "start": "2018-07-31",
            "duration": 4,
            "label": "Criminal Life of Archibaldo de la Cruz, The (Ensayo de un crimen)",
            "dayoff": 0,
            "dayoffdate": "2018-07-17"
        },
        {
            "id": 586,
            "user": "Sports",
            "type": "maestro",
            "start": "2018-07-21",
            "duration": 3,
            "label": "Lilting",
            "dayoff": 0,
            "dayoffdate": "2018-07-08"
        },
        {
            "id": 587,
            "user": "Jewelery",
            "type": "jcb",
            "start": "2018-07-05",
            "duration": 6,
            "label": "Rudolph the Red-Nosed Reindeer: The Movie",
            "dayoff": 0,
            "dayoffdate": "2018-07-24"
        },
        {
            "id": 588,
            "user": "Garden",
            "type": "instapayment",
            "start": "2018-08-25",
            "duration": 3,
            "label": "Mighty, The",
            "dayoff": 0,
            "dayoffdate": "2018-08-20"
        },
        {
            "id": 589,
            "user": "Movies",
            "type": "instapayment",
            "start": "2018-08-21",
            "duration": 6,
            "label": "Little Women",
            "dayoff": 0,
            "dayoffdate": "2018-07-01"
        },
        {
            "id": 590,
            "user": "Automotive",
            "type": "jcb",
            "start": "2018-08-19",
            "duration": 1,
            "label": "Forbidden Zone",
            "dayoff": 0,
            "dayoffdate": "2018-08-06"
        },
        {
            "id": 591,
            "user": "Books",
            "type": "jcb",
            "start": "2018-07-09",
            "duration": 2,
            "label": "Dragon Ball Z: The Return of Cooler (Doragon bôru Z 6: Gekitotsu! Hyakuoku pawâ no senshi)",
            "dayoff": 1
        },
        {
            "id": 592,
            "user": "Garden",
            "type": "jcb",
            "start": "2018-07-01",
            "duration": 6,
            "label": "Mary Shelley's Frankenstein (Frankenstein)",
            "dayoff": 0,
            "dayoffdate": "2018-07-26"
        },
        {
            "id": 593,
            "user": "Beauty",
            "type": "diners-club-carte-blanche",
            "start": "2018-07-26",
            "duration": 6,
            "label": "Game of Death II (a.k.a. Tower of Death) (Si wang ta)",
            "dayoff": 1,
            "dayoffdate": "2018-07-25"
        },
        {
            "id": 594,
            "user": "Beauty",
            "type": "visa-electron",
            "start": "2018-08-24",
            "duration": 5,
            "label": "Ju Dou",
            "dayoff": 1,
            "dayoffdate": "2018-08-01"
        },
        {
            "id": 595,
            "user": "Baby",
            "type": "diners-club-carte-blanche",
            "start": "2018-07-09",
            "duration": 3,
            "label": "Man of the Year, The (O Homem do Ano)",
            "dayoff": 0,
            "dayoffdate": "2018-07-24"
        },
        {
            "id": 596,
            "user": "Health",
            "type": "maestro",
            "start": "2018-08-20",
            "duration": 5,
            "label": "Outrageous Fortune",
            "dayoff": 0,
            "dayoffdate": "2018-08-12"
        },
        {
            "id": 597,
            "user": "Outdoors",
            "type": "jcb",
            "start": "2018-07-06",
            "duration": 1,
            "label": "Naked Souls",
            "dayoff": 0,
            "dayoffdate": "2018-07-09"
        },
        {
            "id": 598,
            "user": "Music",
            "type": "jcb",
            "start": "2018-08-22",
            "duration": 6,
            "label": "Resident Evil: Extinction",
            "dayoff": 1,
            "dayoffdate": "2018-07-11"
        },
        {
            "id": 599,
            "user": "Music",
            "type": "visa-electron",
            "start": "2018-08-30",
            "duration": 5,
            "label": "Extracted",
            "dayoff": 0,
            "dayoffdate": "2018-08-01"
        },
        {
            "id": 600,
            "user": "Health",
            "type": "diners-club-carte-blanche",
            "start": "2018-07-21",
            "duration": 6,
            "label": "City of Ghosts",
            "dayoff": 1,
            "dayoffdate": "2018-07-07"
        },
        {
            "id": 601,
            "user": "Clothing",
            "type": "jcb",
            "start": "2018-08-26",
            "duration": 5,
            "label": "Triage",
            "dayoffdate": "2018-08-19"
        },
        {
            "id": 602,
            "user": "Baby",
            "type": "laser",
            "start": "2018-07-11",
            "duration": 3,
            "label": "Loners (Samotári)",
            "dayoff": 0,
            "dayoffdate": "2018-08-11"
        },
        {
            "id": 603,
            "user": "Games",
            "type": "switch",
            "start": "2018-07-26",
            "duration": 6,
            "label": "Confession, The (L'aveu)",
            "dayoff": 0,
            "dayoffdate": "2018-08-17"
        },
        {
            "id": 604,
            "user": "Shoes",
            "type": "visa",
            "start": "2018-08-08",
            "duration": 2,
            "label": "Cremaster 5",
            "dayoff": 1,
            "dayoffdate": "2018-07-07"
        },
        {
            "id": 605,
            "user": "Computers",
            "type": "jcb",
            "start": "2018-08-06",
            "duration": 1,
            "label": "Cutting Edge: Going for the Gold, The",
            "dayoff": 1,
            "dayoffdate": "2018-07-01"
        },
        {
            "id": 606,
            "user": "Clothing",
            "type": "mastercard",
            "start": "2018-08-24",
            "duration": 4,
            "label": "Robot Monster",
            "dayoff": 0,
            "dayoffdate": "2018-08-26"
        },
        {
            "id": 607,
            "user": "Home",
            "type": "jcb",
            "start": "2018-07-21",
            "duration": 4,
            "label": "Small Cuts (Petites coupures)",
            "dayoff": 0,
            "dayoffdate": "2018-08-18"
        },
        {
            "id": 608,
            "user": "Automotive",
            "type": "maestro",
            "start": "2018-08-10",
            "duration": 5,
            "label": "Club Sandwich",
            "dayoff": 1,
            "dayoffdate": "2018-07-12"
        },
        {
            "id": 609,
            "user": "Beauty",
            "type": "mastercard",
            "start": "2018-08-02",
            "duration": 2,
            "label": "Possession of Joel Delaney, The"
        },
        {
            "id": 610,
            "user": "Games",
            "type": "switch",
            "start": "2018-07-05",
            "duration": 2,
            "label": "Heaven Help Us",
            "dayoff": 0,
            "dayoffdate": "2018-07-11"
        },
        {
            "id": 611,
            "user": "Books",
            "type": "jcb",
            "start": "2018-08-30",
            "duration": 4,
            "label": "Operation Crossbow",
            "dayoff": 1,
            "dayoffdate": "2018-07-12"
        },
        {
            "id": 612,
            "user": "Jewelery",
            "type": "jcb",
            "start": "2018-08-10",
            "duration": 2,
            "label": "Claymation Christmas Celebration, A",
            "dayoff": 0,
            "dayoffdate": "2018-07-23"
        },
        {
            "id": 613,
            "user": "Movies",
            "type": "jcb",
            "start": "2018-07-01",
            "duration": 5,
            "label": "Norte, El",
            "dayoff": 0,
            "dayoffdate": "2018-08-17"
        },
        {
            "id": 614,
            "user": "Movies",
            "type": "jcb",
            "start": "2018-07-26",
            "duration": 4,
            "label": "My First Mister",
            "dayoff": 1,
            "dayoffdate": "2018-08-30"
        },
        {
            "id": 615,
            "user": "Outdoors",
            "type": "jcb",
            "start": "2018-07-04",
            "duration": 5,
            "label": "Castle Freak",
            "dayoff": 0,
            "dayoffdate": "2018-08-23"
        },
        {
            "id": 616,
            "user": "Industrial",
            "type": "jcb",
            "start": "2018-07-31",
            "duration": 1,
            "label": "In the Name of the Father",
            "dayoff": 0
        },
        {
            "id": 617,
            "user": "Toys",
            "type": "jcb",
            "start": "2018-08-02",
            "duration": 2,
            "label": "Rosetta",
            "dayoff": 1,
            "dayoffdate": "2018-07-20"
        },
        {
            "id": 618,
            "user": "Industrial",
            "type": "jcb",
            "start": "2018-07-06",
            "duration": 3,
            "label": "Black Sunday (La maschera del demonio)",
            "dayoff": 1,
            "dayoffdate": "2018-07-07"
        },
        {
            "id": 619,
            "user": "Clothing",
            "type": "bankcard",
            "start": "2018-08-13",
            "duration": 3,
            "label": "Black Cat, The",
            "dayoff": 0,
            "dayoffdate": "2018-08-21"
        },
        {
            "id": 620,
            "user": "Grocery",
            "type": "china-unionpay",
            "start": "2018-08-16",
            "duration": 1,
            "label": "Teenage Caveman",
            "dayoffdate": "2018-07-23"
        },
        {
            "id": 621,
            "user": "Music",
            "type": "jcb",
            "start": "2018-08-27",
            "duration": 1,
            "label": "Questo piccolo grande amore",
            "dayoff": 1,
            "dayoffdate": "2018-08-16"
        },
        {
            "id": 622,
            "user": "Kids",
            "type": "china-unionpay",
            "start": "2018-08-12",
            "duration": 6,
            "label": "Miss Firecracker",
            "dayoffdate": "2018-08-28"
        },
        {
            "id": 623,
            "user": "Clothing",
            "type": "mastercard",
            "start": "2018-07-09",
            "duration": 6,
            "label": "My Little Eye",
            "dayoff": 1,
            "dayoffdate": "2018-08-19"
        },
        {
            "id": 624,
            "user": "Beauty",
            "type": "jcb",
            "start": "2018-07-18",
            "duration": 1,
            "label": "Search for the Beast",
            "dayoff": 1,
            "dayoffdate": "2018-08-02"
        },
        {
            "id": 625,
            "user": "Movies",
            "type": "switch",
            "start": "2018-07-05",
            "duration": 6,
            "label": "Adventures of Huckleberry Finn, The",
            "dayoff": 0,
            "dayoffdate": "2018-08-25"
        },
        {
            "id": 626,
            "user": "Beauty",
            "type": "jcb",
            "start": "2018-08-09",
            "duration": 6,
            "label": "Not Reconciled (Nicht versöhnt oder Es hilft nur Gewalt wo Gewalt herrscht)",
            "dayoff": 1,
            "dayoffdate": "2018-07-18"
        },
        {
            "id": 627,
            "user": "Outdoors",
            "type": "maestro",
            "start": "2018-08-11",
            "duration": 3,
            "label": "The Hatchet Man",
            "dayoff": 0,
            "dayoffdate": "2018-07-12"
        },
        {
            "id": 628,
            "user": "Sports",
            "type": "visa-electron",
            "start": "2018-08-12",
            "duration": 5,
            "label": "Triage",
            "dayoff": 1,
            "dayoffdate": "2018-07-20"
        },
        {
            "id": 629,
            "user": "Games",
            "type": "maestro",
            "start": "2018-08-13",
            "duration": 3,
            "label": "Henry IV, Part II (Second Part of King Henry the Fourth, including his death and the coronation of King Henry the Fifth, The)",
            "dayoff": 0,
            "dayoffdate": "2018-07-08"
        },
        {
            "id": 630,
            "user": "Books",
            "type": "mastercard",
            "start": "2018-08-12",
            "duration": 1,
            "label": "Running on Empty",
            "dayoff": 1,
            "dayoffdate": "2018-07-11"
        },
        {
            "id": 631,
            "user": "Beauty",
            "type": "mastercard",
            "start": "2018-08-12",
            "duration": 2,
            "label": "Eva",
            "dayoff": 0,
            "dayoffdate": "2018-07-12"
        },
        {
            "id": 632,
            "user": "Baby",
            "type": "americanexpress",
            "start": "2018-07-24",
            "duration": 1,
            "label": "Act of Valor",
            "dayoffdate": "2018-08-30"
        },
        {
            "id": 633,
            "user": "Outdoors",
            "type": "jcb",
            "start": "2018-08-03",
            "duration": 4,
            "label": "When Time Ran Out... (Day the World Ended, The)",
            "dayoff": 1,
            "dayoffdate": "2018-07-28"
        },
        {
            "id": 634,
            "user": "Shoes",
            "type": "jcb",
            "start": "2018-07-18",
            "duration": 4,
            "label": "Eight Days a Week",
            "dayoff": 1,
            "dayoffdate": "2018-08-30"
        },
        {
            "id": 635,
            "user": "Clothing",
            "type": "visa-electron",
            "start": "2018-07-13",
            "duration": 3,
            "label": "One Potato, Two Potato",
            "dayoff": 0,
            "dayoffdate": "2018-08-21"
        },
        {
            "id": 636,
            "user": "Books",
            "type": "jcb",
            "start": "2018-07-16",
            "duration": 4,
            "label": "Dead or Alive: Hanzaisha",
            "dayoff": 1,
            "dayoffdate": "2018-08-18"
        },
        {
            "id": 637,
            "user": "Computers",
            "type": "jcb",
            "start": "2018-08-24",
            "duration": 2,
            "label": "Here Comes the Devil (Ahí va el diablo)",
            "dayoffdate": "2018-07-05"
        },
        {
            "id": 638,
            "user": "Computers",
            "type": "jcb",
            "start": "2018-07-13",
            "duration": 1,
            "label": "Unvanquished, The (Aparajito)",
            "dayoff": 1,
            "dayoffdate": "2018-08-01"
        },
        {
            "id": 639,
            "user": "Health",
            "type": "diners-club-carte-blanche",
            "start": "2018-08-07",
            "duration": 1,
            "label": "Brasher Doubloon, The",
            "dayoff": 0,
            "dayoffdate": "2018-07-01"
        },
        {
            "id": 640,
            "user": "Automotive",
            "type": "diners-club-enroute",
            "start": "2018-07-17",
            "duration": 5,
            "label": "Fermat's Room (La habitación de Fermat)",
            "dayoff": 0,
            "dayoffdate": "2018-08-21"
        },
        {
            "id": 641,
            "user": "Electronics",
            "type": "americanexpress",
            "start": "2018-08-07",
            "duration": 6,
            "label": "Unholy Rollers, The",
            "dayoffdate": "2018-07-18"
        },
        {
            "id": 642,
            "user": "Electronics",
            "type": "switch",
            "start": "2018-07-13",
            "duration": 4,
            "label": "Life of Emile Zola, The",
            "dayoff": 0,
            "dayoffdate": "2018-07-21"
        },
        {
            "id": 643,
            "user": "Tools",
            "type": "americanexpress",
            "start": "2018-07-20",
            "duration": 5,
            "label": "Ice Station Zebra",
            "dayoff": 0,
            "dayoffdate": "2018-08-07"
        },
        {
            "id": 644,
            "user": "Jewelery",
            "type": "jcb",
            "start": "2018-08-12",
            "duration": 6,
            "label": "Uranus",
            "dayoff": 1,
            "dayoffdate": "2018-08-02"
        },
        {
            "id": 645,
            "user": "Beauty",
            "type": "jcb",
            "start": "2018-08-18",
            "duration": 3,
            "label": "Tooth & Nail",
            "dayoff": 0,
            "dayoffdate": "2018-07-05"
        },
        {
            "id": 646,
            "user": "Baby",
            "type": "jcb",
            "start": "2018-07-08",
            "duration": 6,
            "label": "Bright Star",
            "dayoff": 1,
            "dayoffdate": "2018-08-02"
        },
        {
            "id": 647,
            "user": "Clothing",
            "type": "jcb",
            "start": "2018-08-05",
            "duration": 3,
            "label": "American Tail: Fievel Goes West, An",
            "dayoff": 0,
            "dayoffdate": "2018-08-20"
        },
        {
            "id": 648,
            "user": "Grocery",
            "type": "bankcard",
            "start": "2018-08-24",
            "duration": 1,
            "label": "Ploy",
            "dayoff": 0,
            "dayoffdate": "2018-07-18"
        },
        {
            "id": 649,
            "user": "Tools",
            "type": "jcb",
            "start": "2018-07-29",
            "duration": 4,
            "label": "Son in Law",
            "dayoffdate": "2018-07-30"
        },
        {
            "id": 650,
            "user": "Kids",
            "type": "jcb",
            "start": "2018-08-03",
            "duration": 5,
            "label": "John Carter",
            "dayoff": 0
        },
        {
            "id": 651,
            "user": "Shoes",
            "type": "jcb",
            "start": "2018-07-25",
            "duration": 3,
            "label": "Retro Puppet Master (Puppet Master 7)",
            "dayoff": 1,
            "dayoffdate": "2018-08-29"
        },
        {
            "id": 652,
            "user": "Clothing",
            "type": "visa-electron",
            "start": "2018-08-28",
            "duration": 6,
            "label": "White Banners",
            "dayoff": 1,
            "dayoffdate": "2018-08-12"
        },
        {
            "id": 653,
            "user": "Electronics",
            "type": "maestro",
            "start": "2018-08-24",
            "duration": 2,
            "label": "Light Is Calling",
            "dayoff": 1,
            "dayoffdate": "2018-07-18"
        },
        {
            "id": 654,
            "user": "Grocery",
            "type": "jcb",
            "start": "2018-08-20",
            "duration": 3,
            "label": "Congress, The",
            "dayoff": 0,
            "dayoffdate": "2018-08-04"
        },
        {
            "id": 655,
            "user": "Games",
            "type": "jcb",
            "start": "2018-07-07",
            "duration": 4,
            "label": "No One Writes to the Colonel (El coronel no tiene quien le escriba)",
            "dayoff": 0,
            "dayoffdate": "2018-08-29"
        },
        {
            "id": 656,
            "user": "Books",
            "type": "visa",
            "start": "2018-07-28",
            "duration": 6,
            "label": "Summer Palace (Yihe yuan)",
            "dayoff": 0,
            "dayoffdate": "2018-07-27"
        },
        {
            "id": 657,
            "user": "Garden",
            "type": "jcb",
            "start": "2018-07-14",
            "duration": 1,
            "label": "Bataan",
            "dayoff": 1,
            "dayoffdate": "2018-07-05"
        },
        {
            "id": 658,
            "user": "Shoes",
            "type": "americanexpress",
            "start": "2018-08-03",
            "duration": 4,
            "label": "Angel's Leap",
            "dayoff": 1,
            "dayoffdate": "2018-07-26"
        },
        {
            "id": 659,
            "user": "Home",
            "type": "diners-club-international",
            "start": "2018-07-03",
            "duration": 1,
            "label": "Scarface",
            "dayoff": 1,
            "dayoffdate": "2018-07-15"
        },
        {
            "id": 660,
            "user": "Music",
            "type": "jcb",
            "start": "2018-08-20",
            "duration": 1,
            "label": "In the Time of the Butterflies",
            "dayoff": 0,
            "dayoffdate": "2018-07-25"
        },
        {
            "id": 661,
            "user": "Tools",
            "type": "mastercard",
            "start": "2018-08-24",
            "duration": 4,
            "label": "Soccer Days",
            "dayoff": 1,
            "dayoffdate": "2018-08-08"
        },
        {
            "id": 662,
            "user": "Shoes",
            "type": "laser",
            "start": "2018-08-26",
            "duration": 6,
            "label": "Taps",
            "dayoff": 1,
            "dayoffdate": "2018-08-13"
        },
        {
            "id": 663,
            "user": "Garden",
            "type": "diners-club-us-ca",
            "start": "2018-08-13",
            "duration": 2,
            "label": "Happy Campers",
            "dayoff": 1
        },
        {
            "id": 664,
            "user": "Toys",
            "type": "jcb",
            "start": "2018-08-30",
            "duration": 3,
            "label": "Song to Remember, A",
            "dayoff": 1,
            "dayoffdate": "2018-08-22"
        },
        {
            "id": 665,
            "user": "Sports",
            "type": "americanexpress",
            "start": "2018-07-20",
            "duration": 3,
            "label": "Boys: The Sherman Brothers' Story, The",
            "dayoff": 0,
            "dayoffdate": "2018-08-17"
        },
        {
            "id": 666,
            "user": "Jewelery",
            "type": "maestro",
            "start": "2018-07-08",
            "duration": 5,
            "label": "4th Man, The (Fourth Man, The) (Vierde man, De)",
            "dayoff": 0,
            "dayoffdate": "2018-07-27"
        },
        {
            "id": 667,
            "user": "Movies",
            "type": "jcb",
            "start": "2018-07-30",
            "duration": 6,
            "label": "Big Hand for the Little Lady, A",
            "dayoff": 1,
            "dayoffdate": "2018-08-16"
        },
        {
            "id": 668,
            "user": "Clothing",
            "type": "jcb",
            "start": "2018-07-08",
            "duration": 5,
            "label": "Last Broadcast, The",
            "dayoff": 1,
            "dayoffdate": "2018-07-15"
        },
        {
            "id": 669,
            "user": "Beauty",
            "type": "switch",
            "start": "2018-08-01",
            "duration": 6,
            "label": "Sabah",
            "dayoff": 0,
            "dayoffdate": "2018-08-24"
        },
        {
            "id": 670,
            "user": "Baby",
            "type": "maestro",
            "start": "2018-08-08",
            "duration": 5,
            "label": "Shadowlands",
            "dayoff": 1,
            "dayoffdate": "2018-08-18"
        },
        {
            "id": 671,
            "user": "Outdoors",
            "type": "maestro",
            "start": "2018-08-13",
            "duration": 5,
            "label": "Beachhead",
            "dayoff": 0,
            "dayoffdate": "2018-08-29"
        },
        {
            "id": 672,
            "user": "Jewelery",
            "type": "bankcard",
            "start": "2018-07-26",
            "duration": 3,
            "label": "Flesh Merchant, The (Wild and Wicked, The)",
            "dayoff": 1,
            "dayoffdate": "2018-07-27"
        },
        {
            "id": 673,
            "user": "Garden",
            "type": "laser",
            "start": "2018-07-19",
            "duration": 2,
            "label": "Mademoiselle",
            "dayoff": 0,
            "dayoffdate": "2018-08-27"
        },
        {
            "id": 674,
            "user": "Automotive",
            "type": "jcb",
            "start": "2018-07-14",
            "duration": 5,
            "label": "La Soufrière - Warten auf eine unausweichliche Katastrophe",
            "dayoff": 1,
            "dayoffdate": "2018-07-25"
        },
        {
            "id": 675,
            "user": "Movies",
            "type": "bankcard",
            "start": "2018-07-26",
            "duration": 5,
            "label": "Girl Said No, The",
            "dayoff": 1,
            "dayoffdate": "2018-07-30"
        },
        {
            "id": 676,
            "user": "Movies",
            "type": "diners-club-enroute",
            "start": "2018-07-15",
            "duration": 3,
            "label": "Uptown Girls",
            "dayoff": 1,
            "dayoffdate": "2018-08-18"
        },
        {
            "id": 677,
            "user": "Electronics",
            "type": "americanexpress",
            "start": "2018-08-18",
            "duration": 4,
            "label": "Exorcismus",
            "dayoff": 1,
            "dayoffdate": "2018-07-17"
        },
        {
            "id": 678,
            "user": "Movies",
            "type": "jcb",
            "start": "2018-08-12",
            "duration": 5,
            "label": "Time for Killing, A",
            "dayoff": 0,
            "dayoffdate": "2018-08-07"
        },
        {
            "id": 679,
            "user": "Jewelery",
            "type": "jcb",
            "start": "2018-08-05",
            "duration": 1,
            "label": "Living on One Dollar",
            "dayoff": 0,
            "dayoffdate": "2018-08-06"
        },
        {
            "id": 680,
            "user": "Beauty",
            "type": "laser",
            "start": "2018-08-13",
            "duration": 5,
            "label": "Lust for Love",
            "dayoff": 1,
            "dayoffdate": "2018-07-05"
        },
        {
            "id": 681,
            "user": "Tools",
            "type": "mastercard",
            "start": "2018-08-28",
            "duration": 6,
            "label": "Substitute, The",
            "dayoff": 1,
            "dayoffdate": "2018-07-14"
        },
        {
            "id": 682,
            "user": "Electronics",
            "type": "instapayment",
            "start": "2018-08-24",
            "duration": 2,
            "label": "V.I.P.s, The",
            "dayoff": 1,
            "dayoffdate": "2018-08-07"
        },
        {
            "id": 683,
            "user": "Outdoors",
            "type": "diners-club-carte-blanche",
            "start": "2018-08-10",
            "duration": 3,
            "label": "Secret, A (Un secret)",
            "dayoff": 1,
            "dayoffdate": "2018-08-07"
        },
        {
            "id": 684,
            "user": "Jewelery",
            "type": "jcb",
            "start": "2018-07-02",
            "duration": 1,
            "label": "Legend",
            "dayoff": 1,
            "dayoffdate": "2018-08-01"
        },
        {
            "id": 685,
            "user": "Health",
            "type": "diners-club-carte-blanche",
            "start": "2018-07-10",
            "duration": 2,
            "label": "African Queen, The",
            "dayoff": 0,
            "dayoffdate": "2018-07-22"
        },
        {
            "id": 686,
            "user": "Sports",
            "type": "china-unionpay",
            "start": "2018-07-28",
            "duration": 5,
            "label": "She Gods of Shark Reef",
            "dayoff": 0,
            "dayoffdate": "2018-08-18"
        },
        {
            "id": 687,
            "user": "Kids",
            "type": "mastercard",
            "start": "2018-08-16",
            "duration": 2,
            "label": "Claustrofobia",
            "dayoff": 1,
            "dayoffdate": "2018-08-02"
        },
        {
            "id": 688,
            "user": "Beauty",
            "type": "jcb",
            "start": "2018-07-07",
            "duration": 6,
            "label": "Mais qui a tué Pamela Rose?",
            "dayoffdate": "2018-07-06"
        },
        {
            "id": 689,
            "user": "Sports",
            "type": "americanexpress",
            "start": "2018-07-26",
            "duration": 5,
            "label": "009 Re: Cyborg",
            "dayoff": 1,
            "dayoffdate": "2018-08-14"
        },
        {
            "id": 690,
            "user": "Garden",
            "type": "jcb",
            "start": "2018-08-10",
            "duration": 1,
            "label": "Room for Romeo Brass, A",
            "dayoff": 1,
            "dayoffdate": "2018-07-02"
        },
        {
            "id": 691,
            "user": "Kids",
            "type": "visa-electron",
            "start": "2018-07-09",
            "duration": 4,
            "label": "Beyond the Mat",
            "dayoff": 0,
            "dayoffdate": "2018-07-15"
        },
        {
            "id": 692,
            "user": "Industrial",
            "type": "diners-club-international",
            "start": "2018-08-04",
            "duration": 1,
            "label": "Belle of the Nineties",
            "dayoff": 1,
            "dayoffdate": "2018-07-06"
        },
        {
            "id": 693,
            "user": "Garden",
            "type": "americanexpress",
            "start": "2018-07-23",
            "duration": 1,
            "label": "Rahtree: Flower of the Night (Buppha Rahtree)",
            "dayoff": 0,
            "dayoffdate": "2018-07-21"
        },
        {
            "id": 694,
            "user": "Beauty",
            "type": "jcb",
            "start": "2018-07-29",
            "duration": 6,
            "label": "Detective, The",
            "dayoff": 1,
            "dayoffdate": "2018-08-13"
        },
        {
            "id": 695,
            "user": "Sports",
            "type": "switch",
            "start": "2018-08-13",
            "duration": 4,
            "label": "Rum Diary, The",
            "dayoff": 0,
            "dayoffdate": "2018-07-11"
        },
        {
            "id": 696,
            "user": "Automotive",
            "type": "bankcard",
            "start": "2018-07-08",
            "duration": 4,
            "label": "Connections",
            "dayoff": 0,
            "dayoffdate": "2018-08-09"
        },
        {
            "id": 697,
            "user": "Music",
            "type": "jcb",
            "start": "2018-08-11",
            "duration": 4,
            "label": "Consuming Spirits",
            "dayoff": 0,
            "dayoffdate": "2018-08-19"
        },
        {
            "id": 698,
            "user": "Jewelery",
            "type": "jcb",
            "start": "2018-07-01",
            "duration": 4,
            "label": "Why Stop Now",
            "dayoff": 1,
            "dayoffdate": "2018-07-06"
        },
        {
            "id": 699,
            "user": "Toys",
            "type": "laser",
            "start": "2018-07-01",
            "duration": 6,
            "label": "Kumaré",
            "dayoff": 1,
            "dayoffdate": "2018-07-16"
        },
        {
            "id": 700,
            "user": "Health",
            "type": "instapayment",
            "start": "2018-08-26",
            "duration": 2,
            "label": "Furies, The",
            "dayoff": 1,
            "dayoffdate": "2018-08-22"
        },
        {
            "id": 701,
            "user": "Shoes",
            "type": "jcb",
            "start": "2018-08-11",
            "duration": 3,
            "label": "Sisters of the Gion (Gion no shimai)",
            "dayoff": 0,
            "dayoffdate": "2018-07-13"
        },
        {
            "id": 702,
            "user": "Sports",
            "type": "jcb",
            "start": "2018-07-31",
            "duration": 1,
            "label": "Lookout, The",
            "dayoff": 1,
            "dayoffdate": "2018-07-04"
        },
        {
            "id": 703,
            "user": "Computers",
            "type": "americanexpress",
            "start": "2018-08-18",
            "duration": 4,
            "label": "Delta Force 2 (Delta Force 2: The Colombian Connection)",
            "dayoff": 1,
            "dayoffdate": "2018-07-27"
        },
        {
            "id": 704,
            "user": "Beauty",
            "type": "diners-club-carte-blanche",
            "start": "2018-07-23",
            "duration": 1,
            "label": "Funny Games",
            "dayoffdate": "2018-07-16"
        },
        {
            "id": 705,
            "user": "Garden",
            "type": "solo",
            "start": "2018-08-27",
            "duration": 1,
            "label": "Printed Rainbow",
            "dayoff": 1,
            "dayoffdate": "2018-07-29"
        },
        {
            "id": 706,
            "user": "Electronics",
            "type": "visa-electron",
            "start": "2018-08-17",
            "duration": 3,
            "label": "Dating Games People Play",
            "dayoff": 1,
            "dayoffdate": "2018-07-30"
        },
        {
            "id": 707,
            "user": "Sports",
            "type": "bankcard",
            "start": "2018-07-08",
            "duration": 6,
            "label": "Of Human Hearts",
            "dayoffdate": "2018-08-30"
        },
        {
            "id": 708,
            "user": "Clothing",
            "type": "jcb",
            "start": "2018-07-27",
            "duration": 1,
            "label": "Werner - Beinhart!",
            "dayoff": 0,
            "dayoffdate": "2018-07-22"
        },
        {
            "id": 709,
            "user": "Electronics",
            "type": "switch",
            "start": "2018-08-03",
            "duration": 3,
            "label": "Dadetown",
            "dayoff": 0,
            "dayoffdate": "2018-07-21"
        },
        {
            "id": 710,
            "user": "Home",
            "type": "jcb",
            "start": "2018-08-03",
            "duration": 6,
            "label": "Fern flowers (Fleur de fougère)",
            "dayoff": 1,
            "dayoffdate": "2018-08-19"
        },
        {
            "id": 711,
            "user": "Kids",
            "type": "jcb",
            "start": "2018-07-22",
            "duration": 1,
            "label": "Ghost Town",
            "dayoff": 0,
            "dayoffdate": "2018-08-19"
        },
        {
            "id": 712,
            "user": "Industrial",
            "type": "jcb",
            "start": "2018-08-22",
            "duration": 6,
            "label": "Desk Set",
            "dayoff": 0,
            "dayoffdate": "2018-07-15"
        },
        {
            "id": 713,
            "user": "Games",
            "type": "laser",
            "start": "2018-08-20",
            "duration": 5,
            "label": "R.I.P.D.",
            "dayoff": 1,
            "dayoffdate": "2018-07-13"
        },
        {
            "id": 714,
            "user": "Home",
            "type": "mastercard",
            "start": "2018-08-09",
            "duration": 4,
            "label": "Room, The",
            "dayoff": 0,
            "dayoffdate": "2018-07-07"
        },
        {
            "id": 715,
            "user": "Shoes",
            "type": "jcb",
            "start": "2018-08-06",
            "duration": 5,
            "label": "Manolito Four Eyes",
            "dayoff": 1,
            "dayoffdate": "2018-08-06"
        },
        {
            "id": 716,
            "user": "Books",
            "type": "jcb",
            "start": "2018-07-27",
            "duration": 5,
            "label": "Witchboard",
            "dayoff": 1,
            "dayoffdate": "2018-07-23"
        },
        {
            "id": 717,
            "user": "Home",
            "type": "visa-electron",
            "start": "2018-07-29",
            "duration": 2,
            "label": "The Key",
            "dayoff": 1,
            "dayoffdate": "2018-08-04"
        },
        {
            "id": 718,
            "user": "Automotive",
            "type": "diners-club-carte-blanche",
            "start": "2018-07-12",
            "duration": 4,
            "label": "Days of Being Wild (A Fei jingjyuhn)",
            "dayoff": 1,
            "dayoffdate": "2018-07-06"
        },
        {
            "id": 719,
            "user": "Grocery",
            "type": "jcb",
            "start": "2018-08-09",
            "duration": 2,
            "label": "Not on Your Life (Verdugo, El) (Executioner, The)",
            "dayoff": 0,
            "dayoffdate": "2018-07-09"
        },
        {
            "id": 720,
            "user": "Music",
            "type": "jcb",
            "start": "2018-08-19",
            "duration": 6,
            "label": "Bossa Nova",
            "dayoff": 1,
            "dayoffdate": "2018-07-11"
        },
        {
            "id": 721,
            "user": "Industrial",
            "type": "jcb",
            "start": "2018-08-28",
            "duration": 2,
            "label": "Brass Target",
            "dayoff": 1,
            "dayoffdate": "2018-08-16"
        },
        {
            "id": 722,
            "user": "Grocery",
            "type": "visa",
            "start": "2018-07-04",
            "duration": 1,
            "label": "Hippie Revolution, The",
            "dayoff": 0,
            "dayoffdate": "2018-07-09"
        },
        {
            "id": 723,
            "user": "Computers",
            "type": "diners-club-carte-blanche",
            "start": "2018-07-16",
            "duration": 5,
            "label": "Devil's Knot",
            "dayoff": 1,
            "dayoffdate": "2018-08-18"
        },
        {
            "id": 724,
            "user": "Toys",
            "type": "diners-club-us-ca",
            "start": "2018-07-24",
            "duration": 6,
            "label": "Getaway",
            "dayoff": 0,
            "dayoffdate": "2018-07-25"
        },
        {
            "id": 725,
            "user": "Clothing",
            "type": "diners-club-carte-blanche",
            "start": "2018-07-30",
            "duration": 5,
            "label": "Free Zone",
            "dayoff": 1,
            "dayoffdate": "2018-07-05"
        },
        {
            "id": 726,
            "user": "Jewelery",
            "type": "switch",
            "start": "2018-07-26",
            "duration": 5,
            "label": "Fall of the Republic: The Presidency of Barack H. Obama",
            "dayoff": 0,
            "dayoffdate": "2018-08-23"
        },
        {
            "id": 727,
            "user": "Shoes",
            "type": "visa-electron",
            "start": "2018-08-23",
            "duration": 1,
            "label": "Gorko!",
            "dayoff": 0,
            "dayoffdate": "2018-07-18"
        },
        {
            "id": 728,
            "user": "Movies",
            "type": "jcb",
            "start": "2018-07-21",
            "duration": 5,
            "label": "Mike Birbiglia: My Girlfriend's Boyfriend",
            "dayoffdate": "2018-07-30"
        },
        {
            "id": 729,
            "user": "Home",
            "type": "diners-club-enroute",
            "start": "2018-08-30",
            "duration": 6,
            "label": "Beast Must Die, The",
            "dayoff": 1,
            "dayoffdate": "2018-07-12"
        },
        {
            "id": 730,
            "user": "Outdoors",
            "type": "bankcard",
            "start": "2018-07-23",
            "duration": 3,
            "label": "Losing Isaiah",
            "dayoff": 0,
            "dayoffdate": "2018-07-21"
        },
        {
            "id": 731,
            "user": "Sports",
            "type": "maestro",
            "start": "2018-08-17",
            "duration": 2,
            "label": "Mary Reilly",
            "dayoff": 0,
            "dayoffdate": "2018-07-14"
        },
        {
            "id": 732,
            "user": "Tools",
            "type": "diners-club-enroute",
            "start": "2018-07-01",
            "duration": 1,
            "label": "Five Dedicated to Ozu",
            "dayoff": 0,
            "dayoffdate": "2018-08-06"
        },
        {
            "id": 733,
            "user": "Electronics",
            "type": "jcb",
            "start": "2018-07-01",
            "duration": 6,
            "label": "Decasia: The State of Decay",
            "dayoff": 1,
            "dayoffdate": "2018-07-07"
        },
        {
            "id": 734,
            "user": "Computers",
            "type": "jcb",
            "start": "2018-07-29",
            "duration": 2,
            "label": "Punishment Park",
            "dayoff": 1,
            "dayoffdate": "2018-07-03"
        },
        {
            "id": 735,
            "user": "Tools",
            "type": "jcb",
            "start": "2018-07-26",
            "duration": 3,
            "label": "Hitman",
            "dayoff": 0,
            "dayoffdate": "2018-07-25"
        },
        {
            "id": 736,
            "user": "Beauty",
            "type": "jcb",
            "start": "2018-08-09",
            "duration": 3,
            "label": "Next of Kin",
            "dayoff": 1,
            "dayoffdate": "2018-07-14"
        },
        {
            "id": 737,
            "user": "Clothing",
            "type": "visa-electron",
            "start": "2018-07-16",
            "duration": 3,
            "label": "50 Worst Movies Ever Made, The",
            "dayoffdate": "2018-08-22"
        },
        {
            "id": 738,
            "user": "Beauty",
            "type": "jcb",
            "start": "2018-08-17",
            "duration": 3,
            "label": "Prom Night",
            "dayoff": 0,
            "dayoffdate": "2018-08-15"
        },
        {
            "id": 739,
            "user": "Clothing",
            "type": "jcb",
            "start": "2018-08-30",
            "duration": 5,
            "label": "Magic Christmas Tree, The",
            "dayoff": 0,
            "dayoffdate": "2018-07-31"
        },
        {
            "id": 740,
            "user": "Beauty",
            "type": "instapayment",
            "start": "2018-07-15",
            "duration": 5,
            "label": "Transit",
            "dayoff": 1,
            "dayoffdate": "2018-08-30"
        },
        {
            "id": 741,
            "user": "Games",
            "type": "diners-club-carte-blanche",
            "start": "2018-07-07",
            "duration": 2,
            "label": "Cadence",
            "dayoff": 0,
            "dayoffdate": "2018-08-17"
        },
        {
            "id": 742,
            "user": "Tools",
            "type": "jcb",
            "start": "2018-08-29",
            "duration": 6,
            "label": "The Old Maid",
            "dayoff": 0,
            "dayoffdate": "2018-07-14"
        },
        {
            "id": 743,
            "user": "Movies",
            "type": "jcb",
            "start": "2018-07-20",
            "duration": 2,
            "label": "Of Unknown Origin",
            "dayoff": 0,
            "dayoffdate": "2018-08-11"
        },
        {
            "id": 744,
            "user": "Kids",
            "type": "visa",
            "start": "2018-07-14",
            "duration": 3,
            "label": "Simone (S1m0ne)",
            "dayoff": 0,
            "dayoffdate": "2018-07-30"
        },
        {
            "id": 745,
            "user": "Home",
            "type": "visa-electron",
            "start": "2018-08-22",
            "duration": 5,
            "label": "Mouth to Mouth (Boca a boca)",
            "dayoff": 0,
            "dayoffdate": "2018-07-25"
        },
        {
            "id": 746,
            "user": "Beauty",
            "type": "maestro",
            "start": "2018-07-21",
            "duration": 3,
            "label": "Trash",
            "dayoff": 1,
            "dayoffdate": "2018-07-23"
        },
        {
            "id": 747,
            "user": "Home",
            "type": "switch",
            "start": "2018-08-02",
            "duration": 2,
            "label": "The Golden Eye",
            "dayoff": 0,
            "dayoffdate": "2018-08-16"
        },
        {
            "id": 748,
            "user": "Garden",
            "type": "instapayment",
            "start": "2018-07-24",
            "duration": 1,
            "label": "Marilena de la P7",
            "dayoffdate": "2018-08-23"
        },
        {
            "id": 749,
            "user": "Sports",
            "type": "jcb",
            "start": "2018-07-02",
            "duration": 5,
            "label": "Aurora",
            "dayoff": 0,
            "dayoffdate": "2018-07-23"
        },
        {
            "id": 750,
            "user": "Tools",
            "type": "jcb",
            "start": "2018-08-11",
            "duration": 1,
            "label": "Ambush (Rukajärven tie)",
            "dayoff": 0,
            "dayoffdate": "2018-07-03"
        },
        {
            "id": 751,
            "user": "Sports",
            "type": "jcb",
            "start": "2018-08-19",
            "duration": 5,
            "label": "Marooned",
            "dayoff": 0,
            "dayoffdate": "2018-07-06"
        },
        {
            "id": 752,
            "user": "Movies",
            "type": "jcb",
            "start": "2018-07-18",
            "duration": 3,
            "label": "Irina Palm",
            "dayoff": 1,
            "dayoffdate": "2018-07-01"
        },
        {
            "id": 753,
            "user": "Toys",
            "type": "jcb",
            "start": "2018-07-21",
            "duration": 4,
            "label": "Ten Little Indians",
            "dayoff": 1,
            "dayoffdate": "2018-08-10"
        },
        {
            "id": 754,
            "user": "Toys",
            "type": "jcb",
            "start": "2018-08-04",
            "duration": 3,
            "label": "Megacities",
            "dayoff": 1,
            "dayoffdate": "2018-08-16"
        },
        {
            "id": 755,
            "user": "Sports",
            "type": "jcb",
            "start": "2018-08-24",
            "duration": 2,
            "label": "Arsène Lupin",
            "dayoffdate": "2018-08-01"
        },
        {
            "id": 756,
            "user": "Clothing",
            "type": "laser",
            "start": "2018-08-18",
            "duration": 2,
            "label": "Living in Emergency: Stories of Doctors Without Borders",
            "dayoffdate": "2018-08-21"
        },
        {
            "id": 757,
            "user": "Tools",
            "type": "jcb",
            "start": "2018-08-17",
            "duration": 6,
            "label": "Basic Instinct 2",
            "dayoff": 0,
            "dayoffdate": "2018-08-02"
        },
        {
            "id": 758,
            "user": "Electronics",
            "type": "maestro",
            "start": "2018-07-07",
            "duration": 5,
            "label": "Friday the 13th Part VII: The New Blood",
            "dayoff": 1,
            "dayoffdate": "2018-08-08"
        },
        {
            "id": 759,
            "user": "Garden",
            "type": "jcb",
            "start": "2018-07-24",
            "duration": 4,
            "label": "Southern District (Zona Sur)",
            "dayoff": 1,
            "dayoffdate": "2018-07-24"
        },
        {
            "id": 760,
            "user": "Garden",
            "type": "jcb",
            "start": "2018-08-24",
            "duration": 1,
            "label": "Spite Marriage",
            "dayoff": 0,
            "dayoffdate": "2018-08-14"
        },
        {
            "id": 761,
            "user": "Automotive",
            "type": "jcb",
            "start": "2018-08-28",
            "duration": 3,
            "label": "She Monkeys",
            "dayoff": 1,
            "dayoffdate": "2018-07-20"
        },
        {
            "id": 762,
            "user": "Garden",
            "type": "bankcard",
            "start": "2018-07-15",
            "duration": 3,
            "label": "Mystery Road",
            "dayoff": 0,
            "dayoffdate": "2018-08-08"
        },
        {
            "id": 763,
            "user": "Books",
            "type": "jcb",
            "start": "2018-08-17",
            "duration": 4,
            "label": "Capricious Summer (Rozmarné léto)",
            "dayoff": 0
        },
        {
            "id": 764,
            "user": "Toys",
            "type": "americanexpress",
            "start": "2018-08-02",
            "duration": 2,
            "label": "Stage Fright",
            "dayoff": 0,
            "dayoffdate": "2018-08-13"
        },
        {
            "id": 765,
            "user": "Garden",
            "type": "jcb",
            "start": "2018-07-31",
            "duration": 6,
            "label": "Tim's Vermeer",
            "dayoff": 0,
            "dayoffdate": "2018-08-06"
        },
        {
            "id": 766,
            "user": "Kids",
            "type": "jcb",
            "start": "2018-08-16",
            "duration": 4,
            "label": "Victory",
            "dayoff": 0,
            "dayoffdate": "2018-08-01"
        },
        {
            "id": 767,
            "user": "Games",
            "type": "jcb",
            "start": "2018-08-05",
            "duration": 2,
            "label": "Keep, The",
            "dayoffdate": "2018-08-22"
        },
        {
            "id": 768,
            "user": "Outdoors",
            "type": "mastercard",
            "start": "2018-08-04",
            "duration": 1,
            "label": "Naughty Room, The",
            "dayoff": 1,
            "dayoffdate": "2018-08-06"
        },
        {
            "id": 769,
            "user": "Sports",
            "type": "mastercard",
            "start": "2018-07-12",
            "duration": 6,
            "label": "L'homme qui rit",
            "dayoff": 0
        },
        {
            "id": 770,
            "user": "Tools",
            "type": "solo",
            "start": "2018-07-09",
            "duration": 2,
            "label": "House Party",
            "dayoff": 1,
            "dayoffdate": "2018-08-10"
        },
        {
            "id": 771,
            "user": "Music",
            "type": "jcb",
            "start": "2018-07-08",
            "duration": 3,
            "label": "Jackass Presents: Bad Grandpa",
            "dayoff": 0,
            "dayoffdate": "2018-08-03"
        },
        {
            "id": 772,
            "user": "Clothing",
            "type": "switch",
            "start": "2018-08-19",
            "duration": 3,
            "label": "The Mystery of the Leaping Fish",
            "dayoff": 0,
            "dayoffdate": "2018-07-04"
        },
        {
            "id": 773,
            "user": "Toys",
            "type": "maestro",
            "start": "2018-08-14",
            "duration": 4,
            "label": "Monster Walks, The",
            "dayoff": 0,
            "dayoffdate": "2018-07-09"
        },
        {
            "id": 774,
            "user": "Baby",
            "type": "mastercard",
            "start": "2018-07-26",
            "duration": 3,
            "label": "Fiddle-de-dee",
            "dayoff": 1,
            "dayoffdate": "2018-07-26"
        },
        {
            "id": 775,
            "user": "Jewelery",
            "type": "switch",
            "start": "2018-08-07",
            "duration": 6,
            "label": "Let's Make Money",
            "dayoff": 0,
            "dayoffdate": "2018-08-23"
        },
        {
            "id": 776,
            "user": "Computers",
            "type": "bankcard",
            "start": "2018-08-22",
            "duration": 1,
            "label": "On the Road",
            "dayoff": 1,
            "dayoffdate": "2018-07-13"
        },
        {
            "id": 777,
            "user": "Clothing",
            "type": "visa-electron",
            "start": "2018-07-16",
            "duration": 4,
            "label": "Sasori",
            "dayoff": 1,
            "dayoffdate": "2018-08-23"
        },
        {
            "id": 778,
            "user": "Health",
            "type": "mastercard",
            "start": "2018-07-10",
            "duration": 6,
            "label": "Iron Man 2",
            "dayoff": 1,
            "dayoffdate": "2018-07-30"
        },
        {
            "id": 779,
            "user": "Sports",
            "type": "jcb",
            "start": "2018-08-21",
            "duration": 2,
            "label": "Caesar (Julius Caesar)",
            "dayoff": 1,
            "dayoffdate": "2018-07-01"
        },
        {
            "id": 780,
            "user": "Industrial",
            "type": "diners-club-enroute",
            "start": "2018-08-08",
            "duration": 3,
            "label": "Kiki",
            "dayoff": 1,
            "dayoffdate": "2018-07-10"
        },
        {
            "id": 781,
            "user": "Beauty",
            "type": "switch",
            "start": "2018-08-26",
            "duration": 3,
            "label": "Don't Eat the Pictures: Sesame Street at the Metropolitan Museum of Art",
            "dayoff": 0,
            "dayoffdate": "2018-07-26"
        },
        {
            "id": 782,
            "user": "Games",
            "type": "jcb",
            "start": "2018-08-20",
            "duration": 4,
            "label": "25th Hour",
            "dayoff": 1,
            "dayoffdate": "2018-07-01"
        },
        {
            "id": 783,
            "user": "Health",
            "type": "diners-club-enroute",
            "start": "2018-08-25",
            "duration": 6,
            "label": "Saw VII 3D - The Final Chapter",
            "dayoff": 1,
            "dayoffdate": "2018-08-17"
        },
        {
            "id": 784,
            "user": "Baby",
            "type": "diners-club-international",
            "start": "2018-07-18",
            "duration": 5,
            "label": "Frankenstein 90",
            "dayoffdate": "2018-07-14"
        },
        {
            "id": 785,
            "user": "Automotive",
            "type": "jcb",
            "start": "2018-07-28",
            "duration": 6,
            "label": "Green Berets, The",
            "dayoff": 1,
            "dayoffdate": "2018-08-21"
        },
        {
            "id": 786,
            "user": "Movies",
            "type": "maestro",
            "start": "2018-07-21",
            "duration": 1,
            "label": "Zatoichi's Vengeance (Zatôichi no uta ga kikoeru) (Zatôichi 13)",
            "dayoff": 1,
            "dayoffdate": "2018-07-10"
        },
        {
            "id": 787,
            "user": "Kids",
            "type": "jcb",
            "start": "2018-07-12",
            "duration": 6,
            "label": "Dilwale Dulhania Le Jayenge",
            "dayoff": 1,
            "dayoffdate": "2018-08-25"
        },
        {
            "id": 788,
            "user": "Clothing",
            "type": "laser",
            "start": "2018-07-22",
            "duration": 2,
            "label": "Mine Games",
            "dayoff": 1,
            "dayoffdate": "2018-08-22"
        },
        {
            "id": 789,
            "user": "Music",
            "type": "jcb",
            "start": "2018-08-18",
            "duration": 1,
            "label": "Rat",
            "dayoff": 0,
            "dayoffdate": "2018-08-16"
        },
        {
            "id": 790,
            "user": "Garden",
            "type": "visa-electron",
            "start": "2018-07-06",
            "duration": 6,
            "label": "Bottle Rocket",
            "dayoff": 0,
            "dayoffdate": "2018-07-23"
        },
        {
            "id": 791,
            "user": "Jewelery",
            "type": "bankcard",
            "start": "2018-07-23",
            "duration": 1,
            "label": "Thin Red Line, The",
            "dayoff": 1,
            "dayoffdate": "2018-08-23"
        },
        {
            "id": 792,
            "user": "Outdoors",
            "type": "americanexpress",
            "start": "2018-07-10",
            "duration": 2,
            "label": "Ultramarathon Man: 50 Marathons, 50 States, 50 Days",
            "dayoff": 0,
            "dayoffdate": "2018-08-26"
        },
        {
            "id": 793,
            "user": "Tools",
            "type": "jcb",
            "start": "2018-08-29",
            "duration": 5,
            "label": "10",
            "dayoff": 0,
            "dayoffdate": "2018-07-25"
        },
        {
            "id": 794,
            "user": "Grocery",
            "type": "switch",
            "start": "2018-08-11",
            "duration": 6,
            "label": "Dunwich Horror, The",
            "dayoff": 1,
            "dayoffdate": "2018-07-08"
        },
        {
            "id": 795,
            "user": "Sports",
            "type": "jcb",
            "start": "2018-08-23",
            "duration": 5,
            "label": "Jennifer's Body",
            "dayoff": 1,
            "dayoffdate": "2018-07-07"
        },
        {
            "id": 796,
            "user": "Shoes",
            "type": "visa-electron",
            "start": "2018-07-27",
            "duration": 6,
            "label": "I Was an Adventuress",
            "dayoff": 0,
            "dayoffdate": "2018-07-01"
        },
        {
            "id": 797,
            "user": "Sports",
            "type": "laser",
            "start": "2018-08-04",
            "duration": 4,
            "label": "Tuskegee Airmen, The",
            "dayoff": 1,
            "dayoffdate": "2018-07-31"
        },
        {
            "id": 798,
            "user": "Music",
            "type": "bankcard",
            "start": "2018-08-16",
            "duration": 4,
            "label": "Tyler Perry's Temptation: Confessions of a Marriage Counselor",
            "dayoff": 0,
            "dayoffdate": "2018-08-19"
        },
        {
            "id": 799,
            "user": "Industrial",
            "type": "mastercard",
            "start": "2018-08-13",
            "duration": 3,
            "label": "Cursed",
            "dayoff": 0,
            "dayoffdate": "2018-07-26"
        },
        {
            "id": 800,
            "user": "Tools",
            "type": "jcb",
            "start": "2018-07-05",
            "duration": 2,
            "label": "Wasteland",
            "dayoff": 1,
            "dayoffdate": "2018-07-15"
        },
        {
            "id": 801,
            "user": "Industrial",
            "type": "jcb",
            "start": "2018-08-25",
            "duration": 6,
            "label": "Major League: Back to the Minors",
            "dayoffdate": "2018-08-18"
        },
        {
            "id": 802,
            "user": "Movies",
            "type": "visa-electron",
            "start": "2018-08-26",
            "duration": 2,
            "label": "Stake Land",
            "dayoff": 1,
            "dayoffdate": "2018-08-18"
        },
        {
            "id": 803,
            "user": "Electronics",
            "type": "switch",
            "start": "2018-08-15",
            "duration": 6,
            "label": "Chinese Puzzle (Casse-tête chinois)",
            "dayoff": 0
        },
        {
            "id": 804,
            "user": "Music",
            "type": "jcb",
            "start": "2018-08-02",
            "duration": 6,
            "label": "Introduction to Physics, An",
            "dayoff": 1,
            "dayoffdate": "2018-07-18"
        },
        {
            "id": 805,
            "user": "Shoes",
            "type": "jcb",
            "start": "2018-07-03",
            "duration": 2,
            "label": "Mutants",
            "dayoff": 0,
            "dayoffdate": "2018-08-02"
        },
        {
            "id": 806,
            "user": "Automotive",
            "type": "diners-club-enroute",
            "start": "2018-08-29",
            "duration": 3,
            "label": "Minus Man, The",
            "dayoff": 1,
            "dayoffdate": "2018-08-30"
        },
        {
            "id": 807,
            "user": "Beauty",
            "type": "jcb",
            "start": "2018-08-20",
            "duration": 3,
            "label": "Can't Buy Me Love",
            "dayoff": 1,
            "dayoffdate": "2018-08-21"
        },
        {
            "id": 808,
            "user": "Music",
            "type": "jcb",
            "start": "2018-07-28",
            "duration": 1,
            "label": "Rulers of the City",
            "dayoff": 0,
            "dayoffdate": "2018-07-15"
        },
        {
            "id": 809,
            "user": "Toys",
            "type": "diners-club-enroute",
            "start": "2018-08-21",
            "duration": 6,
            "label": "Matinee",
            "dayoff": 0,
            "dayoffdate": "2018-07-22"
        },
        {
            "id": 810,
            "user": "Music",
            "type": "visa-electron",
            "start": "2018-07-25",
            "duration": 3,
            "label": "Ocean's Eleven",
            "dayoff": 1,
            "dayoffdate": "2018-07-25"
        },
        {
            "id": 811,
            "user": "Movies",
            "type": "jcb",
            "start": "2018-08-03",
            "duration": 1,
            "label": "Opera Jawa",
            "dayoff": 1,
            "dayoffdate": "2018-07-07"
        },
        {
            "id": 812,
            "user": "Health",
            "type": "mastercard",
            "start": "2018-08-19",
            "duration": 2,
            "label": "Drillbit Taylor",
            "dayoffdate": "2018-08-18"
        },
        {
            "id": 813,
            "user": "Electronics",
            "type": "jcb",
            "start": "2018-08-24",
            "duration": 5,
            "label": "Nanook of the North",
            "dayoff": 1,
            "dayoffdate": "2018-07-18"
        },
        {
            "id": 814,
            "user": "Grocery",
            "type": "instapayment",
            "start": "2018-07-13",
            "duration": 5,
            "label": "Sweet Karma",
            "dayoff": 1,
            "dayoffdate": "2018-07-12"
        },
        {
            "id": 815,
            "user": "Outdoors",
            "type": "bankcard",
            "start": "2018-08-10",
            "duration": 2,
            "label": "Paper Man",
            "dayoff": 0,
            "dayoffdate": "2018-07-04"
        },
        {
            "id": 816,
            "user": "Games",
            "type": "china-unionpay",
            "start": "2018-08-13",
            "duration": 4,
            "label": "Big Bad Love",
            "dayoff": 0,
            "dayoffdate": "2018-08-06"
        },
        {
            "id": 817,
            "user": "Electronics",
            "type": "visa-electron",
            "start": "2018-08-09",
            "duration": 2,
            "label": "Everyone's Hero",
            "dayoff": 0,
            "dayoffdate": "2018-07-03"
        },
        {
            "id": 818,
            "user": "Tools",
            "type": "maestro",
            "start": "2018-07-17",
            "duration": 4,
            "label": "At Long Last Love",
            "dayoff": 1,
            "dayoffdate": "2018-08-16"
        },
        {
            "id": 819,
            "user": "Toys",
            "type": "jcb",
            "start": "2018-08-11",
            "duration": 6,
            "label": "Best Intentions, The (Den goda viljan)",
            "dayoff": 0,
            "dayoffdate": "2018-08-09"
        },
        {
            "id": 820,
            "user": "Kids",
            "type": "solo",
            "start": "2018-08-01",
            "duration": 1,
            "label": "Same Old Song (On connaît la chanson)",
            "dayoffdate": "2018-08-11"
        },
        {
            "id": 821,
            "user": "Home",
            "type": "jcb",
            "start": "2018-08-06",
            "duration": 1,
            "label": "Unconscious (Inconscientes)",
            "dayoff": 0,
            "dayoffdate": "2018-07-11"
        },
        {
            "id": 822,
            "user": "Garden",
            "type": "diners-club-carte-blanche",
            "start": "2018-07-30",
            "duration": 1,
            "label": "\"Great Performances\" Cats",
            "dayoff": 0,
            "dayoffdate": "2018-07-19"
        },
        {
            "id": 823,
            "user": "Shoes",
            "type": "mastercard",
            "start": "2018-08-10",
            "duration": 6,
            "label": "Taira Clan Saga, The (Shin heike monogatari)",
            "dayoff": 0,
            "dayoffdate": "2018-07-06"
        },
        {
            "id": 824,
            "user": "Automotive",
            "type": "mastercard",
            "start": "2018-08-16",
            "duration": 2,
            "label": "Devil's Trap, The (Dáblova past)",
            "dayoff": 0,
            "dayoffdate": "2018-07-03"
        },
        {
            "id": 825,
            "user": "Movies",
            "type": "jcb",
            "start": "2018-08-29",
            "duration": 4,
            "label": "Wild and Wonderful Whites of West Virginia, The",
            "dayoff": 1,
            "dayoffdate": "2018-07-04"
        },
        {
            "id": 826,
            "user": "Games",
            "type": "jcb",
            "start": "2018-07-08",
            "duration": 6,
            "label": "Surviving Desire",
            "dayoff": 1,
            "dayoffdate": "2018-07-12"
        },
        {
            "id": 827,
            "user": "Toys",
            "type": "switch",
            "start": "2018-08-21",
            "duration": 6,
            "label": "Killing Us Softly 3",
            "dayoff": 0,
            "dayoffdate": "2018-08-17"
        },
        {
            "id": 828,
            "user": "Automotive",
            "type": "solo",
            "start": "2018-08-06",
            "duration": 4,
            "label": "Smashing Pumpkins: Vieuphoria",
            "dayoff": 1,
            "dayoffdate": "2018-08-02"
        },
        {
            "id": 829,
            "user": "Music",
            "type": "switch",
            "start": "2018-08-12",
            "duration": 3,
            "label": "Human Trafficking",
            "dayoff": 0,
            "dayoffdate": "2018-07-22"
        },
        {
            "id": 830,
            "user": "Shoes",
            "type": "jcb",
            "start": "2018-07-17",
            "duration": 1,
            "label": "Copying Beethoven",
            "dayoff": 1,
            "dayoffdate": "2018-07-17"
        },
        {
            "id": 831,
            "user": "Toys",
            "type": "laser",
            "start": "2018-08-22",
            "duration": 5,
            "label": "Sleepover",
            "dayoff": 0,
            "dayoffdate": "2018-07-05"
        },
        {
            "id": 832,
            "user": "Industrial",
            "type": "visa-electron",
            "start": "2018-08-27",
            "duration": 6,
            "label": "C.H.U.D.",
            "dayoff": 0,
            "dayoffdate": "2018-07-31"
        },
        {
            "id": 833,
            "user": "Industrial",
            "type": "switch",
            "start": "2018-07-31",
            "duration": 4,
            "label": "Confessor Caressor",
            "dayoff": 1,
            "dayoffdate": "2018-08-24"
        },
        {
            "id": 834,
            "user": "Industrial",
            "type": "maestro",
            "start": "2018-08-27",
            "duration": 6,
            "label": "Monster, The",
            "dayoff": 0,
            "dayoffdate": "2018-07-21"
        },
        {
            "id": 835,
            "user": "Computers",
            "type": "americanexpress",
            "start": "2018-07-10",
            "duration": 4,
            "label": "PTU",
            "dayoff": 0,
            "dayoffdate": "2018-08-01"
        },
        {
            "id": 836,
            "user": "Outdoors",
            "type": "jcb",
            "start": "2018-07-23",
            "duration": 4,
            "label": "Accidental Husband, The",
            "dayoff": 0,
            "dayoffdate": "2018-07-04"
        },
        {
            "id": 837,
            "user": "Computers",
            "type": "maestro",
            "start": "2018-07-30",
            "duration": 6,
            "label": "Rage",
            "dayoff": 1,
            "dayoffdate": "2018-07-05"
        },
        {
            "id": 838,
            "user": "Music",
            "type": "visa-electron",
            "start": "2018-07-07",
            "duration": 5,
            "label": "Karlsson on the Roof",
            "dayoffdate": "2018-07-20"
        },
        {
            "id": 839,
            "user": "Computers",
            "type": "jcb",
            "start": "2018-08-05",
            "duration": 1,
            "label": "Laggies",
            "dayoff": 0,
            "dayoffdate": "2018-08-15"
        },
        {
            "id": 840,
            "user": "Electronics",
            "type": "jcb",
            "start": "2018-07-31",
            "duration": 5,
            "label": "The Great Northfield Minnesota Raid",
            "dayoff": 1,
            "dayoffdate": "2018-08-14"
        },
        {
            "id": 841,
            "user": "Kids",
            "type": "diners-club-enroute",
            "start": "2018-08-18",
            "duration": 6,
            "label": "Eat Sleep Die (Äta sova dö)",
            "dayoff": 1,
            "dayoffdate": "2018-08-13"
        },
        {
            "id": 842,
            "user": "Garden",
            "type": "china-unionpay",
            "start": "2018-08-05",
            "duration": 5,
            "label": "Medea",
            "dayoff": 0,
            "dayoffdate": "2018-08-22"
        },
        {
            "id": 843,
            "user": "Grocery",
            "type": "jcb",
            "start": "2018-08-18",
            "duration": 6,
            "label": "Best Offer, The (Migliore offerta, La)",
            "dayoff": 1
        },
        {
            "id": 844,
            "user": "Sports",
            "type": "americanexpress",
            "start": "2018-08-20",
            "duration": 6,
            "label": "Helvetica",
            "dayoff": 1,
            "dayoffdate": "2018-08-10"
        },
        {
            "id": 845,
            "user": "Sports",
            "type": "jcb",
            "start": "2018-08-05",
            "duration": 3,
            "label": "Zombie Island Massacre",
            "dayoff": 0,
            "dayoffdate": "2018-08-11"
        },
        {
            "id": 846,
            "user": "Garden",
            "type": "jcb",
            "start": "2018-07-30",
            "duration": 3,
            "label": "This Sporting Life",
            "dayoff": 0,
            "dayoffdate": "2018-08-20"
        },
        {
            "id": 847,
            "user": "Books",
            "type": "diners-club-carte-blanche",
            "start": "2018-08-29",
            "duration": 6,
            "label": "Love Parade, The",
            "dayoff": 1,
            "dayoffdate": "2018-07-16"
        },
        {
            "id": 848,
            "user": "Books",
            "type": "jcb",
            "start": "2018-08-17",
            "duration": 6,
            "label": "Italianamerican",
            "dayoff": 0,
            "dayoffdate": "2018-08-04"
        },
        {
            "id": 849,
            "user": "Home",
            "type": "china-unionpay",
            "start": "2018-07-11",
            "duration": 1,
            "label": "Lucía, Lucía (Hija del caníbal, La)",
            "dayoff": 1,
            "dayoffdate": "2018-08-19"
        },
        {
            "id": 850,
            "user": "Toys",
            "type": "laser",
            "start": "2018-07-15",
            "duration": 5,
            "label": "Il piccolo diavolo",
            "dayoff": 1,
            "dayoffdate": "2018-07-06"
        },
        {
            "id": 851,
            "user": "Beauty",
            "type": "diners-club-us-ca",
            "start": "2018-08-05",
            "duration": 1,
            "label": "Eye of the Tiger",
            "dayoff": 0,
            "dayoffdate": "2018-08-06"
        },
        {
            "id": 852,
            "user": "Outdoors",
            "type": "jcb",
            "start": "2018-07-26",
            "duration": 3,
            "label": "Juno and the Paycock",
            "dayoff": 0,
            "dayoffdate": "2018-08-26"
        },
        {
            "id": 853,
            "user": "Automotive",
            "type": "jcb",
            "start": "2018-08-21",
            "duration": 3,
            "label": "My Neighbors the Yamadas (Hôhokekyo tonari no Yamada-kun)",
            "dayoff": 1,
            "dayoffdate": "2018-07-14"
        },
        {
            "id": 854,
            "user": "Books",
            "type": "maestro",
            "start": "2018-07-01",
            "duration": 1,
            "label": "Whistling in Brooklyn",
            "dayoff": 1,
            "dayoffdate": "2018-08-19"
        },
        {
            "id": 855,
            "user": "Sports",
            "type": "diners-club-enroute",
            "start": "2018-08-18",
            "duration": 2,
            "label": "Teenage Mutant Ninja Turtles III",
            "dayoff": 0,
            "dayoffdate": "2018-08-02"
        },
        {
            "id": 856,
            "user": "Baby",
            "type": "jcb",
            "start": "2018-07-31",
            "duration": 2,
            "label": "Hitler's Children",
            "dayoff": 0,
            "dayoffdate": "2018-08-07"
        },
        {
            "id": 857,
            "user": "Toys",
            "type": "americanexpress",
            "start": "2018-08-29",
            "duration": 5,
            "label": "The End of the Tour",
            "dayoff": 1,
            "dayoffdate": "2018-07-02"
        },
        {
            "id": 858,
            "user": "Movies",
            "type": "jcb",
            "start": "2018-08-06",
            "duration": 3,
            "label": "All Superheros Must Die",
            "dayoff": 0,
            "dayoffdate": "2018-08-30"
        },
        {
            "id": 859,
            "user": "Music",
            "type": "maestro",
            "start": "2018-07-17",
            "duration": 2,
            "label": "My Boy Jack",
            "dayoff": 1,
            "dayoffdate": "2018-07-24"
        },
        {
            "id": 860,
            "user": "Shoes",
            "type": "jcb",
            "start": "2018-07-17",
            "duration": 4,
            "label": "Breathless",
            "dayoff": 1
        },
        {
            "id": 861,
            "user": "Baby",
            "type": "china-unionpay",
            "start": "2018-07-23",
            "duration": 2,
            "label": "Thampu",
            "dayoff": 1,
            "dayoffdate": "2018-08-22"
        },
        {
            "id": 862,
            "user": "Automotive",
            "type": "mastercard",
            "start": "2018-07-02",
            "duration": 2,
            "label": "Mrs. Miniver",
            "dayoff": 1,
            "dayoffdate": "2018-08-23"
        },
        {
            "id": 863,
            "user": "Electronics",
            "type": "china-unionpay",
            "start": "2018-07-10",
            "duration": 2,
            "label": "Yes Men, The",
            "dayoff": 0,
            "dayoffdate": "2018-08-03"
        },
        {
            "id": 864,
            "user": "Toys",
            "type": "mastercard",
            "start": "2018-08-16",
            "duration": 3,
            "label": "I Got Next",
            "dayoff": 1,
            "dayoffdate": "2018-08-18"
        },
        {
            "id": 865,
            "user": "Outdoors",
            "type": "switch",
            "start": "2018-08-18",
            "duration": 4,
            "label": "Space Truckers",
            "dayoff": 0,
            "dayoffdate": "2018-08-18"
        },
        {
            "id": 866,
            "user": "Music",
            "type": "china-unionpay",
            "start": "2018-08-17",
            "duration": 5,
            "label": "15",
            "dayoff": 0,
            "dayoffdate": "2018-07-25"
        },
        {
            "id": 867,
            "user": "Automotive",
            "type": "jcb",
            "start": "2018-08-15",
            "duration": 1,
            "label": "Wolfsburg",
            "dayoff": 1,
            "dayoffdate": "2018-08-08"
        },
        {
            "id": 868,
            "user": "Games",
            "type": "laser",
            "start": "2018-08-27",
            "duration": 6,
            "label": "Murders in the Rue Morgue",
            "dayoff": 0,
            "dayoffdate": "2018-08-26"
        },
        {
            "id": 869,
            "user": "Baby",
            "type": "mastercard",
            "start": "2018-07-22",
            "duration": 4,
            "label": "7th Dawn, The",
            "dayoff": 1,
            "dayoffdate": "2018-07-08"
        },
        {
            "id": 870,
            "user": "Baby",
            "type": "mastercard",
            "start": "2018-08-05",
            "duration": 3,
            "label": "Kansas City",
            "dayoff": 0,
            "dayoffdate": "2018-07-17"
        },
        {
            "id": 871,
            "user": "Automotive",
            "type": "laser",
            "start": "2018-07-07",
            "duration": 2,
            "label": "Miami Blues",
            "dayoff": 1,
            "dayoffdate": "2018-08-26"
        },
        {
            "id": 872,
            "user": "Music",
            "type": "jcb",
            "start": "2018-07-15",
            "duration": 5,
            "label": "Real Women Have Curves",
            "dayoff": 1,
            "dayoffdate": "2018-08-07"
        },
        {
            "id": 873,
            "user": "Toys",
            "type": "mastercard",
            "start": "2018-07-10",
            "duration": 6,
            "label": "And Then There Were None",
            "dayoff": 1,
            "dayoffdate": "2018-07-02"
        },
        {
            "id": 874,
            "user": "Sports",
            "type": "jcb",
            "start": "2018-08-15",
            "duration": 6,
            "label": "Boy Eats Girl",
            "dayoff": 1,
            "dayoffdate": "2018-07-04"
        },
        {
            "id": 875,
            "user": "Beauty",
            "type": "americanexpress",
            "start": "2018-07-22",
            "duration": 1,
            "label": "Big Snit, The",
            "dayoff": 0,
            "dayoffdate": "2018-07-12"
        },
        {
            "id": 876,
            "user": "Health",
            "type": "diners-club-enroute",
            "start": "2018-07-11",
            "duration": 4,
            "label": "Elizabeth I",
            "dayoff": 1,
            "dayoffdate": "2018-07-22"
        },
        {
            "id": 877,
            "user": "Clothing",
            "type": "bankcard",
            "start": "2018-08-25",
            "duration": 3,
            "label": "Texas Chainsaw 3D",
            "dayoff": 1,
            "dayoffdate": "2018-07-14"
        },
        {
            "id": 878,
            "user": "Games",
            "type": "americanexpress",
            "start": "2018-07-02",
            "duration": 3,
            "label": "Ape, The",
            "dayoff": 1,
            "dayoffdate": "2018-07-22"
        },
        {
            "id": 879,
            "user": "Shoes",
            "type": "switch",
            "start": "2018-07-08",
            "duration": 3,
            "label": "Babylon 5: A Call to Arms",
            "dayoff": 1,
            "dayoffdate": "2018-08-12"
        },
        {
            "id": 880,
            "user": "Outdoors",
            "type": "instapayment",
            "start": "2018-08-03",
            "duration": 3,
            "label": "Duo (Pas de deux)",
            "dayoff": 0,
            "dayoffdate": "2018-07-01"
        },
        {
            "id": 881,
            "user": "Shoes",
            "type": "jcb",
            "start": "2018-07-28",
            "duration": 1,
            "label": "Hadewijch",
            "dayoffdate": "2018-07-26"
        },
        {
            "id": 882,
            "user": "Electronics",
            "type": "jcb",
            "start": "2018-07-18",
            "duration": 2,
            "label": "James Dean Story, The",
            "dayoffdate": "2018-08-28"
        },
        {
            "id": 883,
            "user": "Health",
            "type": "diners-club-carte-blanche",
            "start": "2018-07-09",
            "duration": 1,
            "label": "Playing for Keeps",
            "dayoff": 1,
            "dayoffdate": "2018-07-04"
        },
        {
            "id": 884,
            "user": "Games",
            "type": "jcb",
            "start": "2018-07-01",
            "duration": 5,
            "label": "Big Star: Nothing Can Hurt Me",
            "dayoff": 0,
            "dayoffdate": "2018-08-30"
        },
        {
            "id": 885,
            "user": "Sports",
            "type": "maestro",
            "start": "2018-07-24",
            "duration": 3,
            "label": "Dog Park",
            "dayoff": 0,
            "dayoffdate": "2018-07-25"
        },
        {
            "id": 886,
            "user": "Baby",
            "type": "switch",
            "start": "2018-08-29",
            "duration": 1,
            "label": "I Confess",
            "dayoff": 0,
            "dayoffdate": "2018-08-12"
        },
        {
            "id": 887,
            "user": "Games",
            "type": "maestro",
            "start": "2018-07-04",
            "duration": 5,
            "label": "Insignificance",
            "dayoff": 0,
            "dayoffdate": "2018-07-07"
        },
        {
            "id": 888,
            "user": "Electronics",
            "type": "diners-club-us-ca",
            "start": "2018-07-03",
            "duration": 5,
            "label": "(Absolutions) Pipilotti's Mistakes ((Entlastungen) Pipilottis Fehler)",
            "dayoff": 1,
            "dayoffdate": "2018-07-07"
        },
        {
            "id": 889,
            "user": "Books",
            "type": "mastercard",
            "start": "2018-08-06",
            "duration": 1,
            "label": "Hijacking, A (Kapringen)",
            "dayoff": 0,
            "dayoffdate": "2018-07-13"
        },
        {
            "id": 890,
            "user": "Movies",
            "type": "mastercard",
            "start": "2018-07-31",
            "duration": 4,
            "label": "Ghost Writer, The",
            "dayoff": 0,
            "dayoffdate": "2018-07-19"
        },
        {
            "id": 891,
            "user": "Toys",
            "type": "diners-club-carte-blanche",
            "start": "2018-07-18",
            "duration": 2,
            "label": "Journey to the Center of the Earth",
            "dayoff": 1,
            "dayoffdate": "2018-07-15"
        },
        {
            "id": 892,
            "user": "Beauty",
            "type": "visa-electron",
            "start": "2018-07-28",
            "duration": 2,
            "label": "Vivien Leigh: Scarlett and Beyond",
            "dayoff": 0,
            "dayoffdate": "2018-08-19"
        },
        {
            "id": 893,
            "user": "Electronics",
            "type": "china-unionpay",
            "start": "2018-07-20",
            "duration": 1,
            "label": "Young Poisoner's Handbook, The",
            "dayoff": 0,
            "dayoffdate": "2018-07-06"
        },
        {
            "id": 894,
            "user": "Outdoors",
            "type": "bankcard",
            "start": "2018-08-23",
            "duration": 1,
            "label": "Education, An",
            "dayoff": 1,
            "dayoffdate": "2018-07-21"
        },
        {
            "id": 895,
            "user": "Beauty",
            "type": "visa",
            "start": "2018-07-21",
            "duration": 6,
            "label": "Kaksi kotia (Dagmamman)",
            "dayoff": 1,
            "dayoffdate": "2018-08-28"
        },
        {
            "id": 896,
            "user": "Books",
            "type": "maestro",
            "start": "2018-08-25",
            "duration": 1,
            "label": "Snow Flower and the Secret Fan",
            "dayoffdate": "2018-07-16"
        },
        {
            "id": 897,
            "user": "Home",
            "type": "diners-club-carte-blanche",
            "start": "2018-08-09",
            "duration": 6,
            "label": "Trekkies 2",
            "dayoff": 1,
            "dayoffdate": "2018-07-24"
        },
        {
            "id": 898,
            "user": "Toys",
            "type": "visa-electron",
            "start": "2018-07-01",
            "duration": 3,
            "label": "Serving Sara",
            "dayoff": 1,
            "dayoffdate": "2018-07-11"
        },
        {
            "id": 899,
            "user": "Shoes",
            "type": "americanexpress",
            "start": "2018-07-23",
            "duration": 3,
            "label": "Elia Kazan: A Director's Journey",
            "dayoff": 0,
            "dayoffdate": "2018-08-04"
        },
        {
            "id": 900,
            "user": "Grocery",
            "type": "jcb",
            "start": "2018-08-25",
            "duration": 3,
            "label": "Simon Killer ",
            "dayoff": 1,
            "dayoffdate": "2018-08-11"
        },
        {
            "id": 901,
            "user": "Outdoors",
            "type": "mastercard",
            "start": "2018-08-23",
            "duration": 1,
            "label": "My Left Foot",
            "dayoffdate": "2018-08-12"
        },
        {
            "id": 902,
            "user": "Music",
            "type": "americanexpress",
            "start": "2018-08-05",
            "duration": 3,
            "label": "Lucky Luke: The Ballad of the Daltons",
            "dayoff": 1,
            "dayoffdate": "2018-08-19"
        },
        {
            "id": 903,
            "user": "Industrial",
            "type": "jcb",
            "start": "2018-07-01",
            "duration": 4,
            "label": "Comedian",
            "dayoff": 1,
            "dayoffdate": "2018-08-01"
        },
        {
            "id": 904,
            "user": "Outdoors",
            "type": "jcb",
            "start": "2018-08-24",
            "duration": 2,
            "label": "Aks",
            "dayoff": 0,
            "dayoffdate": "2018-08-30"
        },
        {
            "id": 905,
            "user": "Home",
            "type": "laser",
            "start": "2018-07-21",
            "duration": 4,
            "label": "Last Hurrah, The",
            "dayoff": 1,
            "dayoffdate": "2018-08-23"
        },
        {
            "id": 906,
            "user": "Electronics",
            "type": "china-unionpay",
            "start": "2018-07-17",
            "duration": 6,
            "label": "Necessary Roughness",
            "dayoff": 0,
            "dayoffdate": "2018-08-24"
        },
        {
            "id": 907,
            "user": "Industrial",
            "type": "jcb",
            "start": "2018-08-07",
            "duration": 6,
            "label": "From the Orient with Fury",
            "dayoff": 0,
            "dayoffdate": "2018-08-27"
        },
        {
            "id": 908,
            "user": "Shoes",
            "type": "jcb",
            "start": "2018-07-24",
            "duration": 3,
            "label": "Gruffalo, The",
            "dayoff": 0,
            "dayoffdate": "2018-07-17"
        },
        {
            "id": 909,
            "user": "Home",
            "type": "laser",
            "start": "2018-07-18",
            "duration": 2,
            "label": "James Dean Story, The",
            "dayoff": 0,
            "dayoffdate": "2018-07-14"
        },
        {
            "id": 910,
            "user": "Tools",
            "type": "jcb",
            "start": "2018-07-06",
            "duration": 4,
            "label": "I Like It Like That",
            "dayoff": 0,
            "dayoffdate": "2018-08-14"
        },
        {
            "id": 911,
            "user": "Health",
            "type": "jcb",
            "start": "2018-07-28",
            "duration": 2,
            "label": "Missing, The",
            "dayoff": 1,
            "dayoffdate": "2018-08-09"
        },
        {
            "id": 912,
            "user": "Outdoors",
            "type": "jcb",
            "start": "2018-08-26",
            "duration": 4,
            "label": "Cheyenne Autumn",
            "dayoff": 0,
            "dayoffdate": "2018-07-29"
        },
        {
            "id": 913,
            "user": "Electronics",
            "type": "diners-club-enroute",
            "start": "2018-07-22",
            "duration": 3,
            "label": "Queen of Spades, The",
            "dayoff": 0,
            "dayoffdate": "2018-08-19"
        },
        {
            "id": 914,
            "user": "Kids",
            "type": "instapayment",
            "start": "2018-08-28",
            "duration": 4,
            "label": "Janky Promoters, The",
            "dayoff": 0,
            "dayoffdate": "2018-07-03"
        },
        {
            "id": 915,
            "user": "Home",
            "type": "jcb",
            "start": "2018-08-06",
            "duration": 3,
            "label": "Teenage Caveman",
            "dayoff": 1,
            "dayoffdate": "2018-08-11"
        },
        {
            "id": 916,
            "user": "Industrial",
            "type": "americanexpress",
            "start": "2018-07-25",
            "duration": 6,
            "label": "Intermission",
            "dayoff": 1,
            "dayoffdate": "2018-07-22"
        },
        {
            "id": 917,
            "user": "Garden",
            "type": "maestro",
            "start": "2018-07-28",
            "duration": 5,
            "label": "Nanny Diaries, The",
            "dayoff": 1,
            "dayoffdate": "2018-07-03"
        },
        {
            "id": 918,
            "user": "Industrial",
            "type": "jcb",
            "start": "2018-08-22",
            "duration": 2,
            "label": "House of Strangers",
            "dayoff": 0,
            "dayoffdate": "2018-07-30"
        },
        {
            "id": 919,
            "user": "Toys",
            "type": "jcb",
            "start": "2018-08-24",
            "duration": 1,
            "label": "Voyage to the End of the Universe (Ikarie XB 1)",
            "dayoff": 0,
            "dayoffdate": "2018-07-18"
        },
        {
            "id": 920,
            "user": "Sports",
            "type": "jcb",
            "start": "2018-08-30",
            "duration": 1,
            "label": "Richie Rich",
            "dayoff": 0,
            "dayoffdate": "2018-08-06"
        },
        {
            "id": 921,
            "user": "Health",
            "type": "jcb",
            "start": "2018-08-12",
            "duration": 4,
            "label": "I Saw Mommy Kissing Santa Claus",
            "dayoff": 1,
            "dayoffdate": "2018-07-15"
        },
        {
            "id": 922,
            "user": "Baby",
            "type": "switch",
            "start": "2018-07-19",
            "duration": 3,
            "label": "She's the Man",
            "dayoff": 0,
            "dayoffdate": "2018-08-05"
        },
        {
            "id": 923,
            "user": "Computers",
            "type": "maestro",
            "start": "2018-07-24",
            "duration": 2,
            "label": "Joe the King",
            "dayoff": 1,
            "dayoffdate": "2018-08-13"
        },
        {
            "id": 924,
            "user": "Clothing",
            "type": "jcb",
            "start": "2018-08-29",
            "duration": 1,
            "label": "Century",
            "dayoff": 0,
            "dayoffdate": "2018-08-18"
        },
        {
            "id": 925,
            "user": "Games",
            "type": "visa-electron",
            "start": "2018-07-17",
            "duration": 3,
            "label": "Men with Guns",
            "dayoff": 1,
            "dayoffdate": "2018-07-14"
        },
        {
            "id": 926,
            "user": "Sports",
            "type": "jcb",
            "start": "2018-07-09",
            "duration": 2,
            "label": "Footprints on the Moon (Le orme) (Primal Impulse)",
            "dayoff": 1,
            "dayoffdate": "2018-07-08"
        },
        {
            "id": 927,
            "user": "Grocery",
            "type": "americanexpress",
            "start": "2018-08-24",
            "duration": 2,
            "label": "Wet Hot American Summer",
            "dayoff": 0,
            "dayoffdate": "2018-07-08"
        },
        {
            "id": 928,
            "user": "Movies",
            "type": "jcb",
            "start": "2018-07-12",
            "duration": 6,
            "label": "Two Deaths",
            "dayoff": 0,
            "dayoffdate": "2018-08-18"
        },
        {
            "id": 929,
            "user": "Movies",
            "type": "maestro",
            "start": "2018-07-18",
            "duration": 3,
            "label": "Inferno",
            "dayoff": 0,
            "dayoffdate": "2018-08-29"
        },
        {
            "id": 930,
            "user": "Jewelery",
            "type": "jcb",
            "start": "2018-07-01",
            "duration": 5,
            "label": "Magus, The",
            "dayoff": 1,
            "dayoffdate": "2018-08-02"
        },
        {
            "id": 931,
            "user": "Clothing",
            "type": "mastercard",
            "start": "2018-07-03",
            "duration": 1,
            "label": "Madhouse",
            "dayoff": 0,
            "dayoffdate": "2018-08-08"
        },
        {
            "id": 932,
            "user": "Movies",
            "type": "maestro",
            "start": "2018-08-23",
            "duration": 2,
            "label": "Dirigible",
            "dayoff": 0,
            "dayoffdate": "2018-08-28"
        },
        {
            "id": 933,
            "user": "Movies",
            "type": "bankcard",
            "start": "2018-08-19",
            "duration": 5,
            "label": "To Have, or Not (En avoir (ou pas))",
            "dayoff": 0,
            "dayoffdate": "2018-07-31"
        },
        {
            "id": 934,
            "user": "Clothing",
            "type": "jcb",
            "start": "2018-07-01",
            "duration": 5,
            "label": "Corn on the Cop",
            "dayoff": 0,
            "dayoffdate": "2018-07-06"
        },
        {
            "id": 935,
            "user": "Home",
            "type": "diners-club-carte-blanche",
            "start": "2018-07-09",
            "duration": 6,
            "label": "10 to Midnight",
            "dayoff": 0,
            "dayoffdate": "2018-07-02"
        },
        {
            "id": 936,
            "user": "Health",
            "type": "jcb",
            "start": "2018-07-22",
            "duration": 5,
            "label": "Live and Let Die",
            "dayoff": 0,
            "dayoffdate": "2018-08-13"
        },
        {
            "id": 937,
            "user": "Clothing",
            "type": "mastercard",
            "start": "2018-07-06",
            "duration": 2,
            "label": "Unmarried Woman, An",
            "dayoff": 0,
            "dayoffdate": "2018-07-23"
        },
        {
            "id": 938,
            "user": "Books",
            "type": "maestro",
            "start": "2018-08-20",
            "duration": 1,
            "label": "Dark Half, The",
            "dayoff": 1,
            "dayoffdate": "2018-08-09"
        },
        {
            "id": 939,
            "user": "Clothing",
            "type": "jcb",
            "start": "2018-07-30",
            "duration": 5,
            "label": "Dear Brigitte",
            "dayoff": 0,
            "dayoffdate": "2018-08-09"
        },
        {
            "id": 940,
            "user": "Health",
            "type": "diners-club-carte-blanche",
            "start": "2018-08-09",
            "duration": 5,
            "label": "Stromberg - Der Film",
            "dayoff": 1,
            "dayoffdate": "2018-08-04"
        },
        {
            "id": 941,
            "user": "Sports",
            "type": "jcb",
            "start": "2018-07-20",
            "duration": 3,
            "label": "My Way (Mai Wei)",
            "dayoff": 1,
            "dayoffdate": "2018-07-21"
        },
        {
            "id": 942,
            "user": "Beauty",
            "type": "diners-club-enroute",
            "start": "2018-08-04",
            "duration": 6,
            "label": "Nora",
            "dayoffdate": "2018-07-09"
        },
        {
            "id": 943,
            "user": "Home",
            "type": "jcb",
            "start": "2018-08-05",
            "duration": 6,
            "label": "Crimson Tide",
            "dayoff": 1,
            "dayoffdate": "2018-07-17"
        },
        {
            "id": 944,
            "user": "Toys",
            "type": "switch",
            "start": "2018-07-20",
            "duration": 2,
            "label": "Fubar II (Fubar: Balls to the Wall)",
            "dayoff": 1,
            "dayoffdate": "2018-08-30"
        },
        {
            "id": 945,
            "user": "Automotive",
            "type": "jcb",
            "start": "2018-07-31",
            "duration": 6,
            "label": "Millennium",
            "dayoff": 0,
            "dayoffdate": "2018-08-07"
        },
        {
            "id": 946,
            "user": "Movies",
            "type": "bankcard",
            "start": "2018-07-08",
            "duration": 6,
            "label": "Jönssonligan på Mallorca",
            "dayoff": 0,
            "dayoffdate": "2018-07-20"
        },
        {
            "id": 947,
            "user": "Jewelery",
            "type": "diners-club-carte-blanche",
            "start": "2018-08-24",
            "duration": 6,
            "label": "Soul Men",
            "dayoff": 1,
            "dayoffdate": "2018-07-26"
        },
        {
            "id": 948,
            "user": "Computers",
            "type": "switch",
            "start": "2018-08-05",
            "duration": 5,
            "label": "Condo Painting",
            "dayoff": 0,
            "dayoffdate": "2018-08-21"
        },
        {
            "id": 949,
            "user": "Books",
            "type": "bankcard",
            "start": "2018-08-19",
            "duration": 1,
            "label": "What Just Happened",
            "dayoff": 0,
            "dayoffdate": "2018-08-24"
        },
        {
            "id": 950,
            "user": "Outdoors",
            "type": "jcb",
            "start": "2018-07-24",
            "duration": 3,
            "label": "D.C. Cab",
            "dayoff": 1,
            "dayoffdate": "2018-07-07"
        },
        {
            "id": 951,
            "user": "Clothing",
            "type": "jcb",
            "start": "2018-07-21",
            "duration": 2,
            "label": "Trapped in Paradise",
            "dayoff": 1,
            "dayoffdate": "2018-08-15"
        },
        {
            "id": 952,
            "user": "Kids",
            "type": "mastercard",
            "start": "2018-07-14",
            "duration": 1,
            "label": "44500 Max",
            "dayoff": 1,
            "dayoffdate": "2018-07-06"
        },
        {
            "id": 953,
            "user": "Shoes",
            "type": "mastercard",
            "start": "2018-07-28",
            "duration": 3,
            "label": "Snipes",
            "dayoff": 0,
            "dayoffdate": "2018-07-18"
        },
        {
            "id": 954,
            "user": "Clothing",
            "type": "jcb",
            "start": "2018-07-14",
            "duration": 6,
            "label": "Carriers Are Waiting, The (Convoyeurs attendent, Les)",
            "dayoff": 0,
            "dayoffdate": "2018-07-29"
        },
        {
            "id": 955,
            "user": "Music",
            "type": "laser",
            "start": "2018-08-07",
            "duration": 3,
            "label": "Crush, The (La cotta)",
            "dayoff": 1,
            "dayoffdate": "2018-08-28"
        },
        {
            "id": 956,
            "user": "Industrial",
            "type": "jcb",
            "start": "2018-07-12",
            "duration": 3,
            "label": "Ivan's Childhood (a.k.a. My Name is Ivan) (Ivanovo detstvo)",
            "dayoff": 1,
            "dayoffdate": "2018-07-28"
        },
        {
            "id": 957,
            "user": "Outdoors",
            "type": "jcb",
            "start": "2018-08-07",
            "duration": 5,
            "label": "Yes, But... (Oui, mais...)",
            "dayoff": 1,
            "dayoffdate": "2018-08-04"
        },
        {
            "id": 958,
            "user": "Outdoors",
            "type": "mastercard",
            "start": "2018-07-13",
            "duration": 2,
            "label": "Fatty Drives the Bus",
            "dayoff": 0,
            "dayoffdate": "2018-08-07"
        },
        {
            "id": 959,
            "user": "Computers",
            "type": "jcb",
            "start": "2018-08-13",
            "duration": 6,
            "label": "Blind (Beul-la-in-deu)",
            "dayoff": 1,
            "dayoffdate": "2018-07-31"
        },
        {
            "id": 960,
            "user": "Outdoors",
            "type": "jcb",
            "start": "2018-08-16",
            "duration": 3,
            "label": "Phish: Bittersweet Motel",
            "dayoff": 1,
            "dayoffdate": "2018-07-18"
        },
        {
            "id": 961,
            "user": "Outdoors",
            "type": "mastercard",
            "start": "2018-08-05",
            "duration": 5,
            "label": "Plan 9 from Outer Space",
            "dayoff": 0,
            "dayoffdate": "2018-07-07"
        },
        {
            "id": 962,
            "user": "Sports",
            "type": "jcb",
            "start": "2018-07-15",
            "duration": 3,
            "label": "Big Blonde, The (Iso vaalee)",
            "dayoff": 1,
            "dayoffdate": "2018-08-25"
        },
        {
            "id": 963,
            "user": "Electronics",
            "type": "visa-electron",
            "start": "2018-08-08",
            "duration": 3,
            "label": "Satan's Sword (Daibosatsu tôge)",
            "dayoff": 0,
            "dayoffdate": "2018-08-08"
        },
        {
            "id": 964,
            "user": "Automotive",
            "type": "jcb",
            "start": "2018-07-01",
            "duration": 6,
            "label": "Destination Tokyo",
            "dayoff": 1,
            "dayoffdate": "2018-07-01"
        },
        {
            "id": 965,
            "user": "Books",
            "type": "diners-club-carte-blanche",
            "start": "2018-07-10",
            "duration": 3,
            "label": "Side by Side",
            "dayoff": 1,
            "dayoffdate": "2018-07-04"
        },
        {
            "id": 966,
            "user": "Jewelery",
            "type": "solo",
            "start": "2018-08-10",
            "duration": 4,
            "label": "Holiday Inn",
            "dayoffdate": "2018-08-26"
        },
        {
            "id": 967,
            "user": "Automotive",
            "type": "americanexpress",
            "start": "2018-07-18",
            "duration": 1,
            "label": "Gunfighter, The",
            "dayoffdate": "2018-07-20"
        },
        {
            "id": 968,
            "user": "Industrial",
            "type": "jcb",
            "start": "2018-08-10",
            "duration": 2,
            "label": "Manzanar Fishing Club, The",
            "dayoff": 0,
            "dayoffdate": "2018-07-16"
        },
        {
            "id": 969,
            "user": "Beauty",
            "type": "diners-club-international",
            "start": "2018-07-25",
            "duration": 6,
            "label": "Steak",
            "dayoff": 1,
            "dayoffdate": "2018-08-01"
        },
        {
            "id": 970,
            "user": "Grocery",
            "type": "visa-electron",
            "start": "2018-08-01",
            "duration": 2,
            "label": "Evil Cult, The (Lord of the Wu Tang) (Yi tian tu long ji: Zhi mo jiao jiao zhu)",
            "dayoffdate": "2018-08-20"
        },
        {
            "id": 971,
            "user": "Books",
            "type": "visa-electron",
            "start": "2018-07-03",
            "duration": 2,
            "label": "Suicide Kings",
            "dayoff": 1,
            "dayoffdate": "2018-08-02"
        },
        {
            "id": 972,
            "user": "Beauty",
            "type": "jcb",
            "start": "2018-07-31",
            "duration": 5,
            "label": "Some Guy Who Kills People",
            "dayoff": 1
        },
        {
            "id": 973,
            "user": "Sports",
            "type": "diners-club-carte-blanche",
            "start": "2018-08-14",
            "duration": 6,
            "label": "Paradise Road",
            "dayoff": 1,
            "dayoffdate": "2018-07-31"
        },
        {
            "id": 974,
            "user": "Home",
            "type": "jcb",
            "start": "2018-07-30",
            "duration": 2,
            "label": "Delusion",
            "dayoff": 1
        },
        {
            "id": 975,
            "user": "Shoes",
            "type": "maestro",
            "start": "2018-08-23",
            "duration": 6,
            "label": "Entrapment",
            "dayoff": 0,
            "dayoffdate": "2018-07-09"
        },
        {
            "id": 976,
            "user": "Games",
            "type": "jcb",
            "start": "2018-07-20",
            "duration": 1,
            "label": "Mrs. Winterbourne",
            "dayoff": 0,
            "dayoffdate": "2018-07-06"
        },
        {
            "id": 977,
            "user": "Electronics",
            "type": "visa-electron",
            "start": "2018-07-12",
            "duration": 3,
            "label": "Underworld",
            "dayoff": 0
        },
        {
            "id": 978,
            "user": "Industrial",
            "type": "mastercard",
            "start": "2018-08-05",
            "duration": 4,
            "label": "Casanova '70",
            "dayoff": 0,
            "dayoffdate": "2018-08-23"
        },
        {
            "id": 979,
            "user": "Baby",
            "type": "instapayment",
            "start": "2018-07-12",
            "duration": 6,
            "label": "11 Harrowhouse",
            "dayoff": 0,
            "dayoffdate": "2018-08-11"
        },
        {
            "id": 980,
            "user": "Outdoors",
            "type": "jcb",
            "start": "2018-07-29",
            "duration": 2,
            "label": "Blue Collar Comedy Tour: The Movie",
            "dayoff": 0,
            "dayoffdate": "2018-08-05"
        },
        {
            "id": 981,
            "user": "Outdoors",
            "type": "instapayment",
            "start": "2018-08-28",
            "duration": 4,
            "label": "Marjorie Morningstar",
            "dayoff": 1,
            "dayoffdate": "2018-07-03"
        },
        {
            "id": 982,
            "user": "Outdoors",
            "type": "jcb",
            "start": "2018-08-25",
            "duration": 4,
            "label": "Imagine Me & You",
            "dayoff": 0,
            "dayoffdate": "2018-08-20"
        },
        {
            "id": 983,
            "user": "Toys",
            "type": "jcb",
            "start": "2018-07-30",
            "duration": 6,
            "label": "Riptide",
            "dayoff": 0
        },
        {
            "id": 984,
            "user": "Clothing",
            "type": "jcb",
            "start": "2018-07-26",
            "duration": 3,
            "label": "Poker House, The",
            "dayoff": 0,
            "dayoffdate": "2018-07-22"
        },
        {
            "id": 985,
            "user": "Kids",
            "type": "solo",
            "start": "2018-08-03",
            "duration": 1,
            "label": "Saints and Soldiers: The Void",
            "dayoff": 1,
            "dayoffdate": "2018-08-13"
        },
        {
            "id": 986,
            "user": "Shoes",
            "type": "jcb",
            "start": "2018-07-01",
            "duration": 1,
            "label": "Journey 2: The Mysterious Island",
            "dayoff": 1,
            "dayoffdate": "2018-08-02"
        },
        {
            "id": 987,
            "user": "Movies",
            "type": "visa-electron",
            "start": "2018-08-17",
            "duration": 2,
            "label": "Price Check",
            "dayoff": 1,
            "dayoffdate": "2018-07-14"
        },
        {
            "id": 988,
            "user": "Clothing",
            "type": "americanexpress",
            "start": "2018-07-08",
            "duration": 1,
            "label": "Foxfire",
            "dayoff": 0,
            "dayoffdate": "2018-07-12"
        },
        {
            "id": 989,
            "user": "Shoes",
            "type": "jcb",
            "start": "2018-08-24",
            "duration": 2,
            "label": "Queen Bee",
            "dayoff": 0,
            "dayoffdate": "2018-07-09"
        },
        {
            "id": 990,
            "user": "Outdoors",
            "type": "jcb",
            "start": "2018-07-22",
            "duration": 6,
            "label": "Century of Cinema, A",
            "dayoff": 0,
            "dayoffdate": "2018-07-11"
        },
        {
            "id": 991,
            "user": "Computers",
            "type": "jcb",
            "start": "2018-07-15",
            "duration": 3,
            "label": "Fitzcarraldo",
            "dayoff": 0,
            "dayoffdate": "2018-08-18"
        },
        {
            "id": 992,
            "user": "Toys",
            "type": "jcb",
            "start": "2018-07-25",
            "duration": 3,
            "label": "Devil Dared Me To, The",
            "dayoff": 0
        },
        {
            "id": 993,
            "user": "Toys",
            "type": "jcb",
            "start": "2018-07-16",
            "duration": 4,
            "label": "Nutcracker, The",
            "dayoff": 0,
            "dayoffdate": "2018-08-23"
        },
        {
            "id": 994,
            "user": "Baby",
            "type": "jcb",
            "start": "2018-08-15",
            "duration": 2,
            "label": "Vincent",
            "dayoff": 0,
            "dayoffdate": "2018-08-02"
        },
        {
            "id": 995,
            "user": "Toys",
            "type": "visa-electron",
            "start": "2018-08-05",
            "duration": 5,
            "label": "Sweet Land",
            "dayoff": 1,
            "dayoffdate": "2018-07-04"
        },
        {
            "id": 996,
            "user": "Music",
            "type": "maestro",
            "start": "2018-07-20",
            "duration": 2,
            "label": "Boy and His Dog, A",
            "dayoff": 0,
            "dayoffdate": "2018-07-26"
        },
        {
            "id": 997,
            "user": "Jewelery",
            "type": "maestro",
            "start": "2018-08-09",
            "duration": 6,
            "label": "Ugly, The",
            "dayoff": 1,
            "dayoffdate": "2018-08-03"
        },
        {
            "id": 998,
            "user": "Automotive",
            "type": "jcb",
            "start": "2018-08-03",
            "duration": 3,
            "label": "Snow (Snijeg)",
            "dayoff": 0,
            "dayoffdate": "2018-08-04"
        },
        {
            "id": 999,
            "user": "Garden",
            "type": "jcb",
            "start": "2018-08-21",
            "duration": 1,
            "label": "Serial",
            "dayoff": 0,
            "dayoffdate": "2018-08-04"
        },
        {
            "id": 1000,
            "user": "Garden",
            "type": "instapayment",
            "start": "2018-07-23",
            "duration": 1,
            "label": "Nine Lives",
            "dayoff": 1,
            "dayoffdate": "2018-07-26"
        }
    ]
));

/**
 * Custom type for data row ID
 */
type TDataId = number;

/**
 * Data interface for input data
 */
interface IDataRow {
    /**
     * Record ID
     */
    id: TDataId;

    /**
     * User name
     */
    user: string;

    /**
     * Task type
     */
    type: string;

    /**
     * Start date YYYY-MM-DD
     */
    start: string;

    /**
     * Task duration
     */
    duration: number;

    /**
     * Task label
     */
    label: string;

    /**
     * Day off count
     */
    dayoff: number;

    /**
     * Exactly date of day off
     */
    dayoffdate: string;
}

/**
 * Class of calendar data row description
 */
class CalendarDataRow {

    /**
     * ID of data row
     */
    private _id: TDataId;

    /**
     * User name
     */
    private _user: string;

    /**
     * Task type
     */
    private _type: string;

    /**
     * Task start date
     * @type IMoment
     */
    private _start: IMoment;

    /**
     * Task duration
     */
    private _duration: number;

    /**
     * Task label
     */
    private _label: string;

    /**
     * Count of day off
     */
    private _dayoff: number;

    /**
     * Exactly date of day off
     * @type IMoment|null
     */
    private _dayoffdate: IMoment | null;

    /**
     * Class constructor
     *
     * @param {IDataRow} obj Input row with data, which compare with IDataRow interface
     */
    public constructor(obj: IDataRow) {
        this._id = obj.id;
        this._user = obj.user;
        this._type = obj.type;

        // Make Moment from date
        this._start = new Moment(obj.start);
        this._duration = obj.duration;
        this._label = obj.label;
        this._dayoff = obj.dayoff;
        this._dayoffdate = null;

        // If we have day offs
        if (this._dayoff) {

            // Lets check on day off date declaration
            if (obj.dayoffdate) {

                // Make Moment from date
                this._dayoffdate = new Moment(obj.dayoffdate);
            }
        }
    }

    /**
     * Return row ID
     * @returns {TDataId}
     */
    public getId(): TDataId {
        return this._id;
    }

    /**
     * Return user name
     * @returns {string}
     */
    public getUser(): string {
        return this._user;
    }

    /**
     * Return task type
     * @returns {string}
     */
    public getType(): string {
        return this._type;
    }

    /**
     * Return task start date
     * @returns {IMoment}
     */
    public getStart(): IMoment {
        return this._start;
    }

    /**
     * Return task duration
     * @returns {number}
     */
    public getDuration(): number {
        return this._duration;
    }

    /**
     * Return task label
     * @returns {string}
     */
    public getLabel(): string {
        return this._label;
    }

    /**
     * Return day off count
     * @returns {number}
     */
    public getDayoff(): number {
        return this._dayoff;
    }

    /**
     * Return day off date
     * @returns {IMoment}
     */
    public getDayoffdate(): IMoment | null {
        return this._dayoffdate;
    }
}

class CalendarSettings {
    // public static periodStart:IMoment;
}

/**
 * Calendar class
 *
 * Main class, which render calendar UI. This is entery point of calendar application
 */
class Calendar {

    /**
     * Collection of tasks
     * @type {any}
     * @private
     */
    private _taskCollection: CalendarTaskCollection | null = null;

    /**
     * HTML page font size
     * @type {number}
     * @private
     */
    private _htmlFontSize: number = parseFloat(window.getComputedStyle(document.querySelector('html') as HTMLElement).getPropertyValue('font-size'));

    /**
     * HTML page font family
     * @type {string}
     * @private
     */
    private _htmlFontFamily: string = window.getComputedStyle(document.querySelector('html') as HTMLElement).getPropertyValue('font-family');

    /**
     * HTML element which will contain calendar UI part
     */
    private _div: HTMLElement;

    /**
     * First date of month
     * @type {number}
     * @private
     */
    private _monthStart = new Moment().startOf('month').getDate();

    /**
     * Last date of month
     * @type {number}
     * @private
     */
    private _monthEnd = new Moment().endOf('month').getDate();

    /**
     * Current month number (from 0)
     * @type {number}
     * @private
     */
    private _currentMonth: number = new Moment().getMonth();

    /**
     * Current year
     * @type {number}
     * @private
     */
    private _currentYear: number = new Moment().getYear();

    /**
     * Return start date for calendar
     * @returns {IMoment}
     */
    public static getStartPeriod(): IMoment {
        return new Moment().startOf('month').add(-1, 'weeks');
    }

    /**
     * Return end date for calendar
     * @returns {IMoment}
     */
    public static getEndPeriod(): IMoment {
        return new Moment().endOf('month').add(4, 'days');
    }

    /**
     * Class constructor
     */
    public constructor(selector: string) {
        // Find container for calendar
        this._div = document.querySelector(selector) as HTMLElement;
    }

    /**
     * Loading data to calendar
     * @param data
     * @returns {Calendar}
     */
    public setData(data: any): Calendar {
        this._taskCollection = new CalendarTaskCollection();
        this._taskCollection.loadArray(data);
        return this;
    }

    /**
     * Rerender calendar
     */
    public refresh() {
        this.render();
    }

    /**
     * Rendering calendar UI
     */
    public render() {
        // Make header
        let row: HTMLElement;

        // Get start of calendars period
        let startMmt = Calendar.getStartPeriod();

        // Get end of calendars period
        let endMmt = Calendar.getEndPeriod();

        // Calculate count of days in period
        let diffDays = endMmt.diff(startMmt) + 1;

        let label: HTMLElement;

        // Create wrapper for calendar
        let cWrapper: HTMLElement = document.createElement('div');
        cWrapper.classList.add('task-calendar');

        // Create month names
        row = CalendarHtml.createRow(true);
        row.classList.add('month-header');

        label = CalendarHtml.createRowGroup();
        label.classList.add('group-user');
        row.appendChild(label);

        label = CalendarHtml.createRowGroup();
        label.classList.add('group-type');
        row.appendChild(label);

        this.generateDateRange(row, startMmt, diffDays, true);

        cWrapper.appendChild(row);


        // Create date header
        row = CalendarHtml.createRow(true);
        row.classList.add('date-header');

        label = CalendarHtml.createRowGroup('User');
        row.appendChild(label);

        label = CalendarHtml.createRowGroup('Task type');
        row.appendChild(label);

        // Create period dates
        this.generateDateRange(row, startMmt, diffDays);

        cWrapper.appendChild(row);

        // Check if data loaded
        if (!this._taskCollection) {
            console.log('Data not loaded. Use method "setData" before render');
            // throw new Exep
            return;
        }

        // Check, if we have data
        if (this._taskCollection.getSize() > 0) {

            // Create variable for trace user name changing
            let prevUser: string = '';

            // Loop at data and create rows for UI
            for (let j = 0; j < this._taskCollection.getSize(); j++) {
                let cRow = this._taskCollection.getByIndex(j);
                if (!cRow) {
                    continue;
                }

                // Create row tag
                let row: HTMLElement = CalendarHtml.createRow();

                // Add CSS class if user name has change
                if (prevUser && prevUser !== cRow.getUser()) {
                    row.classList.add('row-block-start');
                }
                prevUser = cRow.getUser();

                // Create cell with user name
                let label = CalendarHtml.createRowGroup(cRow.getUser());
                row.appendChild(label);

                // Create cell with task type
                label = CalendarHtml.createRowGroup(cRow.getType());
                row.appendChild(label);

                // Loop at all dates in period
                for (let i = 0; i < diffDays; i++) {

                    // Create moment of current iteration
                    let mmt = startMmt.clone().add(i);

                    // Create cell with simple day
                    let day = CalendarHtml.createDay(mmt);

                    // Adding CSS classes and check if it first day of month
                    let firstDayOfMonth: boolean = this.addDayData(day, mmt, i, diffDays);

                    // Check if it first work day
                    let firstWorkDayOfMonth: boolean = mmt.isFirstWorkDayOfMonth();

                    // Get task on current date
                    let task = cRow.getTaskOnDate(mmt);
                    if (task) {
                        // Get calendar task date
                        let calDate = task.getCTDate(mmt);

                        if (calDate) {

                            // Render date from data
                            calDate.render(day, task.getId());

                            // Create local vars
                            let idx = task.getLastDateIndex();
                            let duration = task.getDataRow().getDuration();
                            let firstDateOfMonth: IMoment = mmt.startOf('month');
                            let lastDateOfMonth: IMoment = mmt.endOf('month');
                            let tillEndOfMonth: number = lastDateOfMonth.diff(mmt);
                            let tillStartOfMonth: number = firstDateOfMonth.diff(mmt);
                            let tillEndOfPeriod: number = endMmt.diff(mmt);
                            let tillStartOfPeriod: number = startMmt.diff(mmt);
                            let daysLeft: number = (idx >= 0) ? (duration - idx - 1) : 365;
                            let daysSpent: number = (idx >= 0) ? (idx + 1) : 0;
                            let spaceToNextTask: number = cRow.getSpaseToNextTask(mmt);
                            let daysInTask: number = task.getEndDate().diff(task.getStartDate()) + 1;
                            let textWidth: number = this.getLabelLengthInDays(task.getDataRow().getLabel());
                            let prevRowTaskId: number = task.getPrevRowTaskId();
                            let nextRowTaskId: number = task.getNextRowTaskId();
                            let isStartPeriod: boolean = calDate.getMoment().isSame(Calendar.getStartPeriod(), 'y-m-d');

                            // Create corresponding values in dataset
                            day.dataset.taskDuration = String(duration);
                            day.dataset.taskTillEndOfMonth = String(tillEndOfMonth);
                            day.dataset.taskTillStartOfMonth = String(tillStartOfMonth);
                            day.dataset.taskTillEndOfPeriod = String(tillEndOfPeriod);
                            day.dataset.taskTillStartOfPeriod = String(tillStartOfPeriod);
                            day.dataset.taskSpaceToNextTask = String(spaceToNextTask);
                            day.dataset.daysInTask = String(daysInTask);

                            if (prevRowTaskId) {
                                day.dataset.prevRowTaskId = String(prevRowTaskId);
                            }
                            if (nextRowTaskId) {
                                day.dataset.nextRowTaskId = String(nextRowTaskId);
                            }

                            if (idx >= 0) {
                                day.dataset.taskDaysLeft = String(daysLeft);
                                day.dataset.taskDaysSpent = String(daysSpent);
                            }


                            // Add label to first day of task or to first day of period/month,
                            // if task start is outside of it
                            if (calDate.isFirst || (!calDate.isFirst && firstWorkDayOfMonth) || (!calDate.isFirst && isStartPeriod)) {
                                // Add CSS class to task whitch contain task label
                                day.classList.add('labeled');

                                // Lets calculate label length
                                // Label should not cross other label and should not be outside month or period
                                // To check it wi get minimum between:
                                // * spaceToNextTask        days count between current and next tasks start dates
                                // * tillEndOfMonth + 1     +1 because we should count current day too
                                // * tillEndOfPeriod + 1    +1 because we should count current day too
                                // * textWidth              label width

                                // let min: number = this.getMinNumber([spaceToNextTask, tillEndOfMonth + 1, tillEndOfPeriod + 1]);
                                // let labelLength: number = this.getMinNumber([min, textWidth]);
                                let labelLength: number = this.getMinNumber([spaceToNextTask, tillEndOfMonth + 1, tillEndOfPeriod + 1, textWidth]);

                                // Get date where last label symbol is
                                let labelEndDate: IMoment = mmt.clone().add(labelLength - 1);

                                // Create task label HTML element
                                let span = CalendarHtml.createTaskText(task.getDataRow().getLabel());

                                // Add some CSS classes
                                span.classList.add('task-label');
                                span.classList.add('task-label-length-' + String(labelLength));

                                // Add extra CSS class to label element, which text is longer that days count till end of month/period or next task start date
                                if (textWidth > labelLength) {
                                    if (task.isApplyedToDate(labelEndDate)) {
                                        span.classList.add('end-task');
                                    } else if (labelEndDate.isDayoff()) {
                                        span.classList.add('end-dayoff');
                                    } else if (labelLength == spaceToNextTask || labelLength == tillEndOfPeriod + 1) {
                                        span.classList.add('end-day');
                                    }
                                }

                                day.appendChild(span);
                            }

                        }
                    }

                    // If it first day of month, add gap between monthes
                    if (firstDayOfMonth && i != 0) {
                        let monthBreak = CalendarHtml.createCell();
                        monthBreak.classList.add('month-break');
                        row.appendChild(monthBreak);
                    }
                    row.appendChild(day);
                }
                cWrapper.appendChild(row);
            }
        }

        this._div.appendChild(cWrapper);

        console.log('rendered');
    }

    /**
     * Return minimum from input numbers array
     * @param {Array<number>} inputs
     * @returns {number}
     */
    private getMinNumber(inputs: Array<number>): number {
        return this.getMinMaxNumber(inputs, true);
    }

    /**
     * Return maximum from input numbers array
     * @param {Array<number>} inputs
     * @returns {number}
     */
    private getMaxNumber(inputs: Array<number>): number {
        return this.getMinMaxNumber(inputs);
    }

    /**
     * Return minimum/maximum from input numbers array
     * @param {Array<number>} inputs
     * @param {boolean} min
     * @returns {number}
     */
    private getMinMaxNumber(inputs: Array<number>, min: boolean = false): number {
        inputs.sort((a: number, b: number) => {
            return a - b
        });
        if (min) {
            return inputs.shift() as number;
        } else {
            return inputs.pop() as number;
        }
    }

    /**
     * Generate date range
     * @param {HTMLElement} row
     * @param {IMoment} startMmt
     * @param {number} diffDays
     * @param {boolean} asCell
     */
    private generateDateRange(row: HTMLElement, startMmt: IMoment, diffDays: number, asCell: boolean = false) {
        // Loop for all days in period
        for (let i = 0; i < diffDays; i++) {

            // Create date on each day
            let mmt = startMmt.clone().add(i);
            let day: HTMLElement;
            if (asCell) {
                day = CalendarHtml.createCell();
            } else {
                day = CalendarHtml.createDay(mmt);
                let label = CalendarHtml.createText(mmt.format('d'));
                day.appendChild(label);
            }
            let firstDayOfMonth = this.addDayData(day, mmt, i, diffDays);

            // If it first day of month add gap
            if (firstDayOfMonth && i != 0) {
                let monthBreak = CalendarHtml.createCell();
                monthBreak.classList.add('month-break');
                row.appendChild(monthBreak);
            }

            row.appendChild(day);
        }
    }

    /**
     * Add data to HTML day
     * @param {HTMLElement} day
     * @param {IMoment} mmt
     * @param {number} i
     * @param {number} diffDays
     * @returns {boolean}
     */
    private addDayData(day: HTMLElement, mmt: IMoment, i: number, diffDays: number): boolean {

        // Create moment of first and last date of month
        let firstDayOfMonth: boolean = mmt.isFirstDayOfMonth();
        let lastDayOfMonth: boolean = mmt.isLastDayOfMonth();

        // If start of period
        if (i == 0) {
            let endOfMonth = mmt.clone().endOf('month');
            let len = mmt.diff(endOfMonth) + 1;
            day.classList.add('period-start');
            day.classList.add('cell-span-' + String(len));
            day.dataset.monthLength = String(len);
        }

        // If it is end of period
        if (i == diffDays - 1) {
            day.classList.add('period-end');
        }

        // It it is first day of month
        if (firstDayOfMonth) {
            day.classList.add('month-start');
        }

        // If it is last day of month
        if (lastDayOfMonth) {
            day.classList.add('month-end');
        }

        return firstDayOfMonth;
    }

    /**
     * Calculate and return label length
     * @param {string} text
     * @returns {number}
     */
    private getLabelLengthInDays(text: string): number {
        // Create canvas
        let canvas = document.createElement('canvas');

        // Get 2D context
        let ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

        // Set font size and font family
        ctx.font = this._htmlFontSize + 'px ' + this._htmlFontFamily;

        // Get text length in pixels
        let w = ctx.measureText(text).width;

        // FIXME: 1.7 is $day-cell-width in app.scss. Move it to calendar settings
        // Calculate text length in calendar days
        w = w / (this._htmlFontSize * 1.7);

        // Round up
        w = Math.ceil(w);

        return w;
    }
}

/**
 * Helper class
 */
class CalendarTools {

    /**
     * Return formatted number with fixed length 2 and leading zeros
     * @param {number} i
     * @returns {string}
     */
    public static formatNumber(i: number): string {
        return CalendarTools.pad(i);
    }

    /**
     * Return formatted number of fixed length with leading zeros
     * @param {number} i
     * @param {number} length
     * @returns {string}
     */
    public static pad(i: number, length: number = 2): string {
        let s = i.toString();
        for (let i = s.length; i < length; i++) {
            s = '0' + s;
        }
        return s;
    }
}

/**
 * Helper class for generate HTML objects
 */
class CalendarHtml {

    /**
     * Create text node
     * @param {string} label
     * @returns {Text}
     */
    public static createText(label: string): Text {
        return document.createTextNode(label);
    }

    /**
     * Create DIV tag with CSS classes:
     * - row
     * - [row-header]
     *
     * @param {boolean} bHeader
     * @returns {HTMLElement}
     */
    public static createRow(bHeader?: boolean): HTMLElement {
        let div: HTMLElement = document.createElement('div');
        div.classList.add('row');
        if (bHeader) {
            div.classList.add('row-header');
        }
        return div;
    }

    /**
     * Create DIV tag for calendar day cell with CSS classes using moment
     * Add CSS classes:
     * - col
     * - day
     * - [day-off]
     * - [now]
     *
     * Fill datasets:
     * - date
     *
     * @param {IMoment} mmt
     * @returns {HTMLElement}
     */
    public static createDay(mmt: IMoment): HTMLElement {
        let day: HTMLElement = document.createElement('div');

        day.classList.add('col');
        day.classList.add('day');
        day.dataset.date = mmt.format('y-m-d');

        if (mmt.isDayoff()) {
            day.classList.add('day-off');
        }

        // FIXME: Use mmt instad new Moment(mmt.getYear(), mmt.getMonth(), mmt.getDate())
        if ((new Moment())
            .isSame(new Moment(mmt.getYear(), mmt.getMonth(), mmt.getDate()), 'YYYYMMDD')) {
            day.classList.add('now');
        }
        return day;
    }

    /**
     * Create HTML DIV element with CSS classes:
     * - col
     * - day
     * @returns {HTMLElement}
     */
    public static createCell(): HTMLElement {
        let div: HTMLElement = document.createElement('div');

        div.classList.add('col');
        div.classList.add('day');

        return div;
    }

    /**
     * Create SPAN tag with text node for task label
     * @param {string} label
     * @returns {HTMLElement}
     */
    public static createTaskText(label: string): HTMLElement {
        let span: HTMLElement = document.createElement('span');
        let text = CalendarHtml.createText(label);
        span.appendChild(text);
        return span;
    }

    /**
     * Create DIV tag with CSS classes for cell with user name and task type values
     * Add CSS classes:
     * - col
     * - group
     *
     * @param {string} label
     * @returns {HTMLElement}
     */
    public static createRowGroup(label: string = ''): HTMLElement {
        let div: HTMLElement = document.createElement('div');
        div.classList.add('col');
        div.classList.add('group');

        if (label) {
            let text: Text = document.createTextNode(label);
            div.appendChild(text);
        }

        return div;
    }

}

/**
 * Interface for moment
 */
interface IMoment {
    /**
     * Return year
     * @returns {number}
     */
    getYear(): number;

    /**
     * Return number of month (starting with 0)
     * @returns {number}
     */
    getMonth(): number;

    /**
     * Return date of month
     * @returns {number}
     */
    getDate(): number;

    /**
     * Return number of day of week (starting with 0)
     * @returns {number}
     */
    getDay(): number;

    /**
     * Return TRUE if moment is day off
     * @returns {boolean}
     */
    isDayoff(): boolean;

    /**
     * Create clone of moment
     * @returns {IMoment}
     */
    clone(): IMoment;

    /**
     * Subtract count of units to date
     * Available measures are:
     * - days
     * - weeks
     * - months
     * - years
     * - hours
     * - minutes
     * - seconds
     * - milliseconds
     *
     * @param {number} count
     * @param {string} measure
     * @returns {IMoment}
     */
    subtract(count: number, measure?: string): IMoment;

    /**
     * Add count of units to date
     * Available measures are:
     * - days
     * - weeks
     * - months
     * - years
     * - hours
     * - minutes
     * - seconds
     * - milliseconds
     *
     * @param {number} count
     * @param {string} measure
     * @returns {IMoment}
     */
    add(count: number, measure?: string): IMoment;

    /**
     * Format moment by mask
     *
     * @param {string} mask
     * @returns {string}
     */
    format(mask: string): string;

    /**
     * Set milliseconds
     * @returns {number}
     */
    setMilliseconds(): number;

    /**
     * Return TRUE if moment is equal by mask
     * By default mask is 'YYYY-MM-DD HH:ii:SS'
     *
     * @param {IMoment} date
     * @param {string} mask
     * @returns {boolean}
     */
    isSame(date: IMoment, mask?: string): boolean;

    /**
     * Return moment which equal to start of period
     *
     * @param {string} measure
     * @returns {IMoment}
     */
    startOf(measure: string): IMoment;

    /**
     * Return moment which equal to end of period
     * @param {string} measure
     * @returns {IMoment}
     */
    endOf(measure: string): IMoment;

    /**
     * Return TRUE if moment between two dates
     * @param {IMoment} from
     * @param {IMoment} to
     * @returns {boolean}
     */
    isBetween(from: IMoment, to: IMoment): boolean

    /**
     * Return Date object of moment
     * @returns {Date}
     */
    toDate(): Date;

    /**
     * Return difference between current moment and given moment in units of measure
     * Unit of measure is 'days' by default
     *
     * @param {IMoment} date
     * @param {string} measure
     * @returns {number}
     */
    diff(date: IMoment, measure?: string): number;

    /**
     * Return TRUE if it is last day of month
     * @returns {boolean}
     */
    isLastDayOfMonth(): boolean;

    /**
     * Return TRUE if it is first day of month
     * @returns {boolean}
     */
    isFirstDayOfMonth(): boolean;

    /**
     * Return TRUE if current moment is Great or Equal than input moment
     * Default mask is YYYY-MM-DD HH:ii:SS
     *
     * @param {IMoment} date
     * @param {string} mask
     * @returns {boolean}
     */
    isGE(date: IMoment, mask?: string): boolean;

    /**
     * Return TRUE if current moment is Less or Equal than input moment
     * Default mask is YYYY-MM-DD HH:ii:SS
     *
     * @param {IMoment} date
     * @param {string} mask
     * @returns {boolean}
     */
    isLE(date: IMoment, mask?: string): boolean;

    /**
     * Return TRUE if current moment is Greater than input moment
     * Default mask is YYYY-MM-DD HH:ii:SS
     *
     * @param {IMoment} date
     * @param {string} mask
     * @returns {boolean}
     */
    isGT(date: IMoment, mask?: string): boolean;

    /**
     * Return TRUE if current moment is Lower than input moment
     * Default mask is YYYY-MM-DD HH:ii:SS
     *
     * @param {IMoment} date
     * @param {string} mask
     * @returns {boolean}
     */
    isLT(date: IMoment, mask?: string): boolean;

    /**
     * Return TRUE if current moment is Equal to input moment
     * Default mask is YYYY-MM-DD HH:ii:SS
     *
     * @param {IMoment} date
     * @param {string} mask
     * @returns {boolean}
     */
    isEQ(date: IMoment, mask?: string): boolean;

    /**
     * Return TRUE if current moment is first work day of month
     * @returns {boolean}
     */
    isFirstWorkDayOfMonth(): boolean;
}

// TODO: Create default mask constant
// TODO: Create named list with popular masks
/**
 * Moment
 */
class Moment implements IMoment {

    /**
     * Date storage
     * @type {Date}
     * @private
     */
    private _oDate: Date = new Date();

    /**
     * Class constructor
     *
     * @param {string | Date | number | IMoment} sDate
     * @param {number} month
     * @param {number} date
     * @param {number} hours
     * @param {number} minutes
     * @param {number} seconds
     */
    public constructor(private sDate: string | Date | number | IMoment = '', month?: number, date?: number, hours?: number, minutes?: number, seconds?: number) {

        if (this.sDate == '' || this.sDate == 'undefined' || this.sDate == null || this.sDate == 'function') {
            this._oDate = new Date(Date.now());
        } else {
            let pType = typeof (sDate);
            if (pType == 'string') {
                this._oDate = new Date(Date.parse(String(this.sDate)));
            } else if (pType == 'object') {
                if (typeof ((this.sDate as any).instanceOf) == 'function') {
                    this._oDate = (this.sDate as IMoment).toDate();
                    this.sDate = this.format('YYYY-MM-DD HH:ii:SS');
                } else {
                    this._oDate = this.sDate as Date;
                    this.sDate = this.format('YYYY-MM-DD HH:ii:SS');
                }
            } else if (pType == 'number') {
                switch ('undefined') {
                    case typeof (month):
                        month = 0;
                    case typeof (date):
                        date = 1;
                    case typeof (hours):
                        hours = 0;
                    case typeof (minutes):
                        minutes = 0;
                    case typeof (seconds):
                        seconds = 0;
                }
                this._oDate = new Date(Number(sDate), Number(month), date, hours, minutes, seconds, 1);
                this.sDate = this.format('YYYY-MM-DD HH:ii:SS');
            }
        }
    }

    /**
     * Return year
     * @returns {number}
     */
    public getYear(): number {
        return this._oDate.getFullYear();
    }

    /**
     * Return number of month starting at 0
     * @returns {number}
     */
    public getMonth(): number {
        return this._oDate.getMonth();
    }

    /**
     * Return date
     * @returns {number}
     */
    public getDate(): number {
        return this._oDate.getDate();
    }

    /**
     * Return number of day of week
     * @returns {number}
     */
    public getDay(): number {
        return this._oDate.getDay();
    }

    /**
     * Return TRUE if current day is day off
     * @returns {boolean}
     */
    public isDayoff(): boolean {
        return this.getDay() == 0 || this.getDay() == 6;
    }

    /**
     * Make a clone
     * @returns {IMoment}
     */
    public clone(): IMoment {
        return new Moment(this.sDate);
    }

    /**
     * Set milliseconds
     * @returns {number}
     */
    public setMilliseconds(): number {
        return this._oDate.getMilliseconds();
    }

    /**
     * Substruct count of units to date
     * Available measures are:
     * - days
     * - weeks
     * - months
     * - years
     * - hours
     * - minutes
     * - seconds
     * - miliseconds
     *
     * @param {number} count
     * @param {string} measure
     * @returns {IMoment}
     */
    public subtract(count: number, measure: string = 'days'): IMoment {
        return this.add(-count, measure);
    }

    /**
     * Add count of units to date
     * Available measures are:
     * - days
     * - weeks
     * - months
     * - years
     * - hours
     * - minutes
     * - seconds
     * - miliseconds
     *
     * @param {number} count
     * @param {string} measure
     * @returns {IMoment}
     */
    public add(count: number, measure: string = 'days'): IMoment {
        if (!count) return this;

        switch (measure) {
            case 'days':
                this._oDate.setDate(this._oDate.getDate() + count);
                break;
            case 'weeks':
                this._oDate.setDate(this._oDate.getDate() + (count * 7));
                break;
            case 'months':
                this._oDate.setMonth(this._oDate.getMonth() + count);
                break;
            case 'years':
                this._oDate.setFullYear(this._oDate.getFullYear() + count);
                break;
            case 'hours':
                this._oDate.setHours(this._oDate.getHours() + count);
                break;
            case 'minutes':
                this._oDate.setMinutes(this._oDate.getMinutes() + count);
                break;
            case 'seconds':
                this._oDate.setSeconds(this._oDate.getSeconds() + count);
                break;
            case 'milliseconds':
                this._oDate.setMilliseconds(this._oDate.getMilliseconds() + count);
                break;
        }

        this.sDate = this.format('y-m-d h:i:s');

        return this;
    }

    /**
     * Convert number to string of defined length with leading/trailing symbols
     *
     * @param {number} num
     * @param {number} length
     * @param {string} fill
     * @param {boolean} trailing
     * @returns {string}
     */
    private pad(num: number, length: number = 2, fill: string = '0', trailing: boolean = false): string {
        let sNum = String(num);
        let sym = fill[0];
        for (let i = 0; i < length - sNum.length; i++) {
            if (trailing) {
                sNum += sym;
            } else {
                sNum = sym + sNum;
            }
        }
        return sNum;
    }

    /**
     * Convert date to string using mask
     * @param {string} mask
     * @returns {string}
     */
    public format(mask: string): string {
        // TODO: extend format RegExp
        return mask.replace(/y{1,4}/gi, this._oDate.getFullYear().toString())
            .replace(/m{1,2}/gi, this.pad(this._oDate.getMonth() + 1))
            .replace(/d{1,2}/gi, this.pad(this._oDate.getDate()))
            .replace(/h{1,2}/gi, this.pad(this._oDate.getHours()))
            .replace(/i{1,2}/gi, this.pad(this._oDate.getMinutes()))
            .replace(/s{1,2}/gi, this.pad(this._oDate.getSeconds()));
    }

    /**
     * Return TRUE if moment is equal by mask
     * By default mask is 'YYYY-MM-DD HH:ii:SS'
     *
     * @param {IMoment} date
     * @param {string} mask
     * @returns {boolean}
     */
    public isSame(date: IMoment, mask: string = 'YYYY-MM-DD HH:ii:SS'): boolean {
        let current: string = this.format(mask);
        let compare: string = date.format(mask);
        return current == compare;
    }

    /**
     * Return TRUE if current moment is Great or Equal than input moment
     * Default mask is YYYY-MM-DD HH:ii:SS
     *
     * @param {IMoment} date
     * @param {string} mask
     * @returns {boolean}
     */
    public isGE(date: IMoment, mask: string = 'YYYY-MM-DD HH:ii:SS'): boolean {
        return this.compare(date, mask, '>=');
    }

    /**
     * Return TRUE if current moment is Less or Equal than input moment
     * Default mask is YYYY-MM-DD HH:ii:SS
     *
     * @param {IMoment} date
     * @param {string} mask
     * @returns {boolean}
     */
    public isLE(date: IMoment, mask: string = 'YYYY-MM-DD HH:ii:SS'): boolean {
        return this.compare(date, mask, '<=');
    }

    /**
     * Return TRUE if current moment is Greater than input moment
     * Default mask is YYYY-MM-DD HH:ii:SS
     *
     * @param {IMoment} date
     * @param {string} mask
     * @returns {boolean}
     */
    public isGT(date: IMoment, mask: string = 'YYYY-MM-DD HH:ii:SS'): boolean {
        return this.compare(date, mask, '>');
    }

    /**
     * Return TRUE if current moment is Lower than input moment
     * Default mask is YYYY-MM-DD HH:ii:SS
     *
     * @param {IMoment} date
     * @param {string} mask
     * @returns {boolean}
     */
    public isLT(date: IMoment, mask: string = 'YYYY-MM-DD HH:ii:SS'): boolean {
        return this.compare(date, mask, '<');
    }

    // FIXME: make union with isSame method
    /**
     * Return TRUE if current moment is Equal to input moment
     * Default mask is YYYY-MM-DD HH:ii:SS
     *
     * @param {IMoment} date
     * @param {string} mask
     * @returns {boolean}
     */
    public isEQ(date: IMoment, mask: string = 'YYYY-MM-DD HH:ii:SS'): boolean {
        return this.compare(date, mask, '=');
    }

    /**
     * Compare current date with input date using sign
     * Available signs are:
     * - [>]
     * - [<]
     * - [>=]
     * - [<=]
     * - [=] as default
     *
     * @param {IMoment} date
     * @param {string} mask
     * @param {string} sign
     * @returns {boolean}
     */
    private compare(date: IMoment, mask: string, sign: string = '='): boolean {
        let current: string = this.format(mask);
        let compare: string = date.format(mask);
        let currentDate: Date = new Date(Date.parse(current));
        let compareDate: Date = new Date(Date.parse(compare));
        if (sign == '>') {
            return currentDate > compareDate;
        }
        if (sign == '<') {
            return currentDate < compareDate;
        }
        if (sign == '>=') {
            return currentDate >= compareDate;
        }
        if (sign == '<=') {
            return currentDate <= compareDate;
        }

        return currentDate == compareDate;
    }

    /**
     * Return moment which equal to start of period
     * Available units are:
     * - month
     * - workmonth (first working day of month)
     *
     * @param {string} measure
     * @returns {IMoment}
     */
    public startOf(measure: string): IMoment {
        let res: IMoment = new Moment();
        switch (measure) {
            case 'month':
                res = new Moment(new Date(this._oDate.getFullYear(), this._oDate.getMonth(), 1));
                break;
            // FIXME: move out of this method
            // TODO: make extra measurement
            case 'workmonth':
                let mmt = new Moment(new Date(this._oDate.getFullYear(), this._oDate.getMonth(), 1));
                res = mmt.clone();
                while (res.isDayoff()) {
                    res.add(1, 'days');

                    if (res.isGT(mmt, 'ym')) {
                        break;
                    }
                }
                break;
        }
        return res;
    }

    // TODO: make extra measurement
    /**
     * Return moment which equal to end of period
     * Available measure are:
     * - month
     *
     * @param {string} measure
     * @returns {IMoment}
     */
    public endOf(measure: string): IMoment {
        let res: IMoment = new Moment();
        switch (measure) {
            case 'month':
                res = new Moment(new Date(this._oDate.getFullYear(), this._oDate.getMonth() + 1, 0));
                break;
        }
        return res;
    }

    // FIXME: add date format mask
    /**
     * Return TRUE if moment between two dates
     *
     * @param {IMoment} from
     * @param {IMoment} to
     * @returns {boolean}
     */
    public isBetween(from: IMoment, to: IMoment): boolean {
        return (this._oDate <= to.toDate() && this._oDate >= from.toDate());
    }

    /**
     * Return Date object
     * @returns {Date}
     */
    public toDate(): Date {
        return this._oDate;
    }

    // TODO: make extra measurement
    /**
     * Return difference between current moment and given moment in units of measure
     * Units of measure are:
     * - [days] by default
     *
     * @param {IMoment} date
     * @param {string} measure
     * @returns {number}
     */
    public diff(date: IMoment, measure: string = 'days'): number {
        let timeValues = {
            ms2s: 1000,
            s2i: 60,
            i2h: 60,
            h2d: 24
        }
        let timeDiff = Math.abs(this._oDate.getTime() - date.toDate().getTime());
        let devider = 1;
        switch (measure) {
            case 'days':
                devider = timeValues.ms2s * timeValues.s2i * timeValues.i2h * timeValues.h2d;
                break;
        }
        return Math.ceil(timeDiff / devider);
    }

    /**
     * Return TRUE if it is last day of month
     * @returns {boolean}
     */
    public isLastDayOfMonth(): boolean {
        let date = this.clone().endOf('month');
        return this.isSame(date, 'y-m-d');
    }

    /**
     * Return TRUE if it is first day of month
     * @returns {boolean}
     */
    public isFirstDayOfMonth(): boolean {
        let date = this.clone().startOf('month');
        return this.isSame(date, 'y-m-d');
    }

    /**
     * Return TRUE if it is first day of month which is not day off
     * @returns {boolean}
     */
    public isFirstWorkDayOfMonth(): boolean {
        let date = this.clone().startOf('workmonth');
        return this.isSame(date, 'y-m-d');
    }

    // TODO: make method isLastWorkDayOfMonth
}

/**
 *
 */
class CalendarTaskDate {
    public hasNext: boolean = false;
    public hasPrev: boolean = false;
    public isFirst: boolean = false;
    public isLast: boolean = false;

    public constructor(private _date: IMoment) {
    }

    public getMoment(): IMoment {
        return this._date;
    }

    public render<T>(day: HTMLElement, taskId: T) {
        day.classList.add('task');
        day.dataset.taskId = String(taskId);
        day.classList.add('task-' + taskId);
        day.addEventListener('mouseenter', (event) => {
            this.mouseEvent(event, 'mouseenter');
        }, false);
        day.addEventListener('mouseleave', (event) => {
            this.mouseEvent(event, 'mouseleave');
        }, false);

        if (this.isFirst) {
            day.classList.add('task-start');
        }
        if (this.isLast) {
            day.classList.add('task-end');
        }
        if (this.hasNext) {
            day.classList.add('task-has-next');
        }
        if (this.hasPrev) {
            day.classList.add('task-hasprev');
        }
    }

    public mouseEvent(event: MouseEvent, eventName: string) {
        // TODO: find NEXT and PREV tasks in the same row
        event.preventDefault();
        let trg: HTMLElement = event.target as HTMLElement;
        let dta = trg.dataset.taskId;
        let els = document.querySelectorAll('div[data-task-id="' + dta + '"]');
        for (let i = 0; i < els.length; i++) {
            if (eventName == 'mouseleave') {
                els[i].classList.remove('task-hover');
            } else if (eventName == 'mouseenter') {
                els[i].classList.add('task-hover');
            }
        }
    }
}

class CalendarTask {
    public _dates: CalendarTaskDate[] = [];
    // private _taskId: string;
    private _lasfFoundedDateIndex: number = -1;
    public static taskNum: number = 0;
    private _nextRowTaskId: TDataId = 0 as TDataId;
    private _prevRowTaskId: TDataId = 0 as TDataId;

    public constructor(private _dataRow: CalendarDataRow) {
        CalendarTask.taskNum++;
        // this._taskId = 'task-' + CalendarTask.taskNum;
        // this._taskId = 'task-' + this._dataRow.getId();

        this.fillDates();
    }

    public getNextRowTaskId(): TDataId {
        return this._nextRowTaskId;
    }

    public setNextRowTaskId(id: TDataId) {
        this._nextRowTaskId = id;
    }

    public getPrevRowTaskId(): TDataId {
        return this._prevRowTaskId;
    }

    public setPrevRowTaskId(id: TDataId) {
        this._prevRowTaskId = id;
    }

    public getDataRow(): CalendarDataRow {
        return this._dataRow;
    }

    public getId(): number {
        return this._dataRow.getId();
    }

    private fillDates(): void {
        this._dates = [];

        let dayoffCnt: number = this._dataRow.getDayoff();
        let duration: number = this._dataRow.getDuration();

        for (let i = 0; i < duration; i++) {
            let nextDate = this._dataRow.getStart().clone();
            nextDate.add(i, 'days');

            let calDate = new CalendarTaskDate(nextDate);

            // set if start date
            calDate.isFirst = this.isFirst();

            // check if not start date
            if (!calDate.isFirst) {
                let prevDate = this._dates[this._dates.length - 1];
                let tmpDate = prevDate.getMoment().clone().add(1, 'days');
                calDate.hasPrev = tmpDate.isSame(calDate.getMoment(), 'YYYYMMDD');
                prevDate.hasNext = tmpDate.isSame(calDate.getMoment(), 'YYYYMMDD');
                this._dates[this._dates.length - 1] = prevDate;
            }

            if (calDate.getMoment().isDayoff()) {
                if (dayoffCnt > 0) {
                    if (this._dataRow.getDayoffdate()) {
                        let doff = this._dataRow.getDayoffdate();
                        if (doff) {
                            if (doff.isSame(calDate.getMoment(), 'YYYYMMDD')) {
                                dayoffCnt--;
                                this._dates.push(calDate);
                            } else {
                                duration++;
                            }
                        }
                    } else {
                        dayoffCnt--;
                        this._dates.push(calDate);
                    }
                } else {
                    duration++;
                }
            } else {
                this._dates.push(calDate);
            }
        }

        let prevDate = this._dates[this._dates.length - 1];
        prevDate.isLast = true;


        // TODO: use day off as array

        ////-----------------------------------------------------------------------------
        // if (this._dayoff > 0) {
        //     for (let i = 0; i < this._dayoff; i++) {
        //         let doff = moment(this._dayoffdate);
        //         this._dates.push(doff);
        //     }
        // }
    }

    private isFirst(): boolean {
        return this._dates.length == 0;
    }

    public isApplyedToDate(date: IMoment): boolean {
        return this.getCTDate(date) !== null;
    }

    public getCTDate(date: IMoment): CalendarTaskDate | null {
        for (let i = 0; i < this._dates.length; i++) {
            let cdt = this._dates[i] as CalendarTaskDate;
            if (cdt.getMoment().isSame(date, 'y-m-d')) {
                this._lasfFoundedDateIndex = i;
                return cdt;
            }
        }
        this._lasfFoundedDateIndex = -1;
        return null;
    }

    public getLastDateIndex(): number {
        return this._lasfFoundedDateIndex;
    }

    public isCrossPeriod(periodStart: IMoment, periodEnd: IMoment): boolean {
        for (let i = 0; i < this._dates.length; i++) {
            let currentDate = this._dates[i];
            if (currentDate.getMoment().isBetween(periodStart, periodEnd)) {
                return true;
            }
        }
        return false;
    }

    public getStartDate(): IMoment {
        return this._dates[0].getMoment();
    }

    public getEndDate(): IMoment {
        return this._dates[this._dates.length - 1].getMoment();
    }

}

class KeyValuePair {
    public constructor(private key: any, private value: any) {

    }

    public getKey(): any {
        return this.key;
    }
    public setKey(k: any) {
        this.key = k;
    }
    public getValue(): any {
        return this.value;
    }
    public setValue(v: any) {
        this.value = v;
    }
}
class KeyValuePairCollection {
    private _data: Array<KeyValuePair> = [];
    public constructor() {

    }
    public getSize(): number {
        return this._data.length;
    }

    public get(key: any): any {
        let idx = this.findKeyIndex(key);
        if (idx === false) {
            return null;
        }
        return this._data[idx].getValue();
    }

    public set(key: any, value: any) {
        let idx = this.findKeyIndex(key);
        let data = new KeyValuePair(key, value);
        if (idx === false) {
            this._data.push(data);
        } else {
            this._data[idx] = data;
        }
    }

    public getKeys(): Array<any> {
        let keys: Array<any> = [];
        if (this.getSize() >= 0) {
            for (let i = 0; i < this.getSize(); i++) {
                keys.push(this._data[i].getKey());
            }
        }
        return keys;
    }
    public getValues(): Array<any> {
        let values: Array<any> = [];
        if (this.getSize() >= 0) {
            for (let i = 0; i < this.getSize(); i++) {
                values.push(this._data[i].getValue());
            }
        }
        return values;
    }

    public sortByKeys() {
        this._data.sort((a: KeyValuePair, b: KeyValuePair) => {
            let aKey = a.getKey();
            let bKey = b.getKey();
            if (aKey < bKey) {
                return -1;
            }
            if (aKey > bKey) {
                return 1;
            }
            return 0;
        })
    }
    public sort(callbackFn?: any) {
        if (!callbackFn) {
            this._data.sort((a: KeyValuePair, b: KeyValuePair) => {
                let aKey = a.getValue();
                let bKey = b.getValue();
                if (aKey < bKey) {
                    return -1;
                }
                if (aKey > bKey) {
                    return 1;
                }
                return 0;
            });
        } else {
            this._data.sort(callbackFn);
        }
    }

    public has(key: any): boolean {
        return this.findKeyIndex(key) !== false;
    }

    private findKeyIndex(key: any): number | false {
        if (this.getSize() < 0) return false;
        for (let i = 0; i < this.getSize(); i++) {
            let kv = this._data[i];
            if (kv.getKey() == key) {
                return i;
            }
        }
        return false;
    }

    public toArray(): Array<KeyValuePair> {
        return this._data;
    }
}

class CalendarTaskCollection {
    private _dataTasks: Array<CalendarTask> = [];
    private _cRows: Array<CalendarRow> = [];

    public constructor() {

    }

    public loadArray(jsonOArray: IDataRow[]) {
        this._dataTasks = [];
        if (jsonOArray.length > 0) {
            for (let j = 0; j < jsonOArray.length; j++) {
                let dataRow: CalendarDataRow = new CalendarDataRow(jsonOArray[j]);
                let cTask = new CalendarTask(dataRow);
                if (!cTask.isCrossPeriod(Calendar.getStartPeriod(), Calendar.getEndPeriod())) {
                    continue;
                }
                this._dataTasks.push(cTask);
            }
        }
        this.sort();
        this.group();
    }

    private sort() {
        let that = this;
        this._dataTasks.sort((a, b) => {
            let aKey = that.makeKey(a);
            let bKey = that.makeKey(b);
            if (aKey < bKey) {
                return -1;
            }
            if (aKey > bKey) {
                return 1;
            }
            return 0;
        });
    }

    public getSize(): number {
        return this._cRows.length;
    }

    public getByIndex(idx: number): CalendarRow | null {
        if ((idx || idx >= 0) && this._cRows.length > 0 && idx < this._cRows.length) {
            return this._cRows[idx];
        }
        return null
    }

    private group() {
        let _map = new KeyValuePairCollection();
        for (let j = 0; j < this._dataTasks.length; j++) {
            let cTask = this._dataTasks[j];
            let key = this.makeKey(cTask);
            // if (key !== 'Baby_jcb' && key !== 'Beauty_mastercard') continue;
            // if (key !== 'Automotive_jcb') continue;
            // if (key !== 'Baby_jcb') continue;
            // if (key !== 'Books_maestro' && key !== 'Books_mastercard' && key !== 'Computers_jcb') continue;
            // if (key !== 'Computers_jcb') continue;
            // if (key !== 'Books_maestro') continue;
            if (key !== 'Automotive_solo') continue;

            if (_map.has(key)) {
                let mapped = _map.get(key) as KeyValuePairCollection;
                mapped.set(mapped.getSize() + 1, cTask);
            } else {
                let newCollection = new KeyValuePairCollection();
                newCollection.set(0, cTask);
                _map.set(key, newCollection);
            }
        }

        for (let i = 0; i < _map.getKeys().length; i++) {
            let value = _map.get(_map.getKeys()[i]);
            value.sort(
                (a: KeyValuePair, b: KeyValuePair) => {
                    let aDate: IMoment = a.getValue().getDataRow().getStart();
                    let bDate: IMoment = b.getValue().getDataRow().getStart();

                    if (aDate.isLT(bDate, 'y-m-d')) {
                        return -1;
                    } else if (aDate.isGT(bDate, 'y-m-d')) {
                        return 1;
                    } else {
                        return 0;
                    }
                }
            );
        }

        this._cRows = [];

        for (let k = 0; k < _map.getKeys().length; k++) {
            let kvpc: Array<KeyValuePair> = _map.get(_map.getKeys()[k]).toArray();
            let acTasks: Array<CalendarTask> = (_map.get(_map.getKeys()[k]) as KeyValuePairCollection).getValues() as Array<CalendarTask>;
            let tmpTasks: Array<CalendarTask> = [];
            let i = 0;
            while (true) {
                i++;
                let cRow = new CalendarRow();
                while (acTasks.length > 0) {
                    let item = acTasks.shift();
                    if (!item || typeof (item) == 'undefined') {
                        continue;
                    }

                    let added: boolean = cRow.add(item);
                    if (!added) {
                        tmpTasks.push(item);
                    } else {
                        if (cRow.getTasksCount() > 1) {
                            let prevCT: CalendarTask = cRow.getByIndex(cRow.getTasksCount() - 2) as CalendarTask; // -2 because we have previous element and current element which one we just added
                            prevCT.setNextRowTaskId(item.getId());
                            item.setPrevRowTaskId(prevCT.getId());
                        }
                    }
                }
                this._cRows.push(cRow);
                if (tmpTasks.length == 0) {
                    break;
                } else {
                    acTasks = tmpTasks;
                    tmpTasks = [];
                }
                if (i == 20) {
                    console.log('i=', i, 'Breaked/ Maximum rows limit detected.');
                    break;
                }
            }
        }
    }

    private makeKey(dataTask: CalendarTask): string {
        return dataTask.getDataRow().getUser() + '_' + dataTask.getDataRow().getType();
    }
}

class CalendarRow {
    private _user: string = '';
    private _type: string = '';
    private _tasks: Array<CalendarTask> = [];

    public constructor() {

    }

    public getUser(): string {
        return this._user;
    }

    public getType(): string {
        return this._type;
    }

    public add(task: CalendarTask): boolean {
        this._user = task.getDataRow().getUser();
        this._type = task.getDataRow().getType();
        if (this._tasks.length > 0) {
            let lastTask = this._tasks[this._tasks.length - 1];
            let diff: number = lastTask.getEndDate().diff(task.getStartDate());

            if (diff <= 1 || lastTask.getEndDate().toDate() > task.getStartDate().toDate()) {
                return false;
            }
        }
        this._tasks.push(task);
        return true;
    }

    public getTaskOnDate(date: IMoment): CalendarTask | null {
        if (this._tasks.length > 0) {
            for (let i = 0; i < this._tasks.length; i++) {
                let task = this._tasks[i];
                if (task.isApplyedToDate(date)) {
                    return task;
                }
            }
        }
        return null;
    }

    public getTasksCount(): number {
        return this._tasks.length;
    }

    public getByIndex(idx: number): CalendarTask | null {
        if (idx >= this._tasks.length || idx < 0) {
            return null;
        }
        return this._tasks[idx];
    }

    public getNextTask(currentTask: CalendarTask): CalendarTask | null {
        let currentLast: IMoment = currentTask.getEndDate();

        if (this._tasks.length > 0) {
            for (let i = 0; i < this._tasks.length; i++) {
                let task = this._tasks[i];
                let taskStart = task.getStartDate();
                if (currentLast.isLT(taskStart, 'y-m-d')) {
                    return task;
                }
            }
        }
        return null;
    }

    public getSpaseToNextTask(mmt: IMoment): number {
        let currentTask: CalendarTask | null = this.getTaskOnDate(mmt);
        if (!currentTask) {
            return 365;
        }
        let nextTask: CalendarTask | null = this.getNextTask(currentTask);
        if (!nextTask) {
            return 365;
        }

        return mmt.diff(nextTask.getStartDate()) - 1;
    }
}

let app = new Calendar('#calendar');
app.setData(data).render();