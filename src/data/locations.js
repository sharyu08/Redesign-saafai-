/**
 * Comprehensive Dataset for Washroom Locations
 * Includes: Position (Lat/Lng), Ratings, Staff History, and Facility Availability
 */
const locations = [
    {
        id: 1,
        name: "Sitabuldi Public Washroom",
        address: "Sitabuldi Metro Station, Nagpur",
        position: { lat: 21.147, lng: 79.089 },
        rating: 4.6,
        cleaner: "Ramesh Kumar",
        status: "TOP",
        // Drives the Color-Coded Availability Grid in InfoPanel
        availability: { mens: true, womens: true, disabled: true },
        // Populates the Cleaning History List
        cleaningHistory: [
            { cleanerName: "Ramesh Kumar", timestamp: "10:30 AM, Today" },
            { cleanerName: "Suresh Mane", timestamp: "06:15 PM, Yesterday" }
        ],
        amenities: ["Water", "Toilet", "Light", "Sanitary Pad Vending Machine", "Hand Dryer"],
        reviews: [
            { rating: 5, comment: "Very clean and safe for women." },
            { rating: 4, comment: "Well maintained by the staff." },
        ],
    },
    {
        id: 2,
        name: "Ambazari Garden Complex",
        address: "Ambazari Lake Side, Nagpur",
        position: { lat: 21.132, lng: 79.041 },
        rating: 4.2,
        cleaner: "Nikhil Tupkar",
        status: "ACTIVE",
        availability: { mens: true, womens: true, disabled: false },
        cleaningHistory: [
            { cleanerName: "Nikhil Tupkar", timestamp: "02:00 PM, Today" },
            { cleanerName: "Ankit Choudhary", timestamp: "08:00 AM, Today" }
        ],
        amenities: ["Water", "Basin", "Soap", "Dustbin"],
        reviews: [
            { rating: 4, comment: "Decent facility for a public park." },
            { rating: 3, comment: "Basin tap was leaking slightly." },
        ],
    },
    {
        id: 3,
        name: "Futala Lake Front",
        address: "Futala Lake Promenade, Nagpur",
        position: { lat: 21.155, lng: 79.052 },
        rating: 4.8,
        cleaner: "Raju Choudhary",
        status: "TOP",
        availability: { mens: true, womens: true, disabled: true },
        cleaningHistory: [
            { cleanerName: "Raju Choudhary", timestamp: "04:30 PM, Today" },
            { cleanerName: "Raju Choudhary", timestamp: "12:00 PM, Today" }
        ],
        amenities: ["Water", "Toilet", "Air Freshener", "Hand Dryer", "Shower", "Mirror"],
        reviews: [
            { rating: 5, comment: "Premium quality, very impressed with the hygiene!" },
        ],
    },
    {
        id: 4,
        name: "Dharampeth Market Center",
        address: "Zansi Rani Square, Dharampeth",
        position: { lat: 21.141, lng: 79.072 },
        rating: 3.5,
        cleaner: "Suresh Mane",
        status: "AVERAGE",
        availability: { mens: true, womens: true, disabled: false },
        cleaningHistory: [
            { cleanerName: "Suresh Mane", timestamp: "09:00 AM, Today" }
        ],
        amenities: ["Water", "Light", "Basin"],
        reviews: [
            { rating: 2, comment: "Needs better lighting at night." },
            { rating: 4, comment: "Clean during the morning hours." },
        ],
    },
    {
        id: 5,
        name: "Nagpur Railway Station West",
        address: "Platform No. 1 Entrance, Nagpur",
        position: { lat: 21.153, lng: 79.091 },
        rating: 4.0,
        cleaner: "Ankit Choudhary",
        status: "BUSY",
        availability: { mens: true, womens: false, disabled: true },
        cleaningHistory: [
            { cleanerName: "Ankit Choudhary", timestamp: "11:15 AM, Today" },
            { cleanerName: "Ramesh Kumar", timestamp: "05:00 AM, Today" }
        ],
        amenities: ["Water", "Urinals", "Light", "Exhaust Fan"],
        reviews: [
            { rating: 4, comment: "High usage area but managed efficiently." },
        ],
    },
    {
        id: 6,
        name: "Glocal Square Mall",
        address: "Sitabuldi Main Road, Nagpur",
        position: { lat: 21.148, lng: 79.085 },
        rating: 4.7,
        cleaner: "Sunita Bai",
        status: "TOP",
        availability: { mens: true, womens: true, disabled: true },
        cleaningHistory: [
            { cleanerName: "Sunita Bai", timestamp: "05:00 PM, Today" },
            { cleanerName: "Sunita Bai", timestamp: "01:00 PM, Today" }
        ],
        amenities: ["Water", "Toilet", "AC", "Sanitizer", "Soap Dispenser", "Baby Changing Station"],
        reviews: [
            { rating: 5, comment: "Mall standard cleanliness. Very helpful for parents." },
        ],
    },
    {
        id: 7,
        name: "Gandhi Sagar Lake",
        address: "Civil Lines, Nagpur",
        position: { lat: 21.162, lng: 79.075 },
        rating: 0,
        cleaner: "Unassigned",
        status: "UNASSIGNED",
        availability: { mens: false, womens: false, disabled: false },
        cleaningHistory: [],
        amenities: ["Water"],
        reviews: [],
    },
    {
        id: 8,
        name: "Kasturchand Park",
        address: "Sitabuldi, Nagpur",
        position: { lat: 21.152, lng: 79.082 },
        rating: 0,
        cleaner: "Unassigned",
        status: "UNASSIGNED",
        availability: { mens: false, womens: false, disabled: false },
        cleaningHistory: [],
        amenities: ["Water", "Toilet"],
        reviews: [],
    }
];

export default locations;