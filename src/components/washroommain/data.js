// Shared washroom data
export const WASHROOMS = [
  {
    id: "294",
    name: "New Manish Nagar Chowk",
    location_types: { name: "Manish Nagar Zone" },
    current_cleaning_score: 7.0,
    averageRating: 8.7,
    cleaner_assignments: [
      { status: "assigned", cleaner_user: { name: "Nikhil Tupkar", phone: "7777777777" } },
      { status: "unassigned", cleaner_user: { name: "Raju Chaudhari", phone: "8210370052" } },
      { status: "unassigned", cleaner_user: { name: "Suresh Mane", phone: "9527632627" } }
    ],
    facility_companies: { name: "N/A" },
    status: false,
    latitude: 21.085,
    longitude: 79.067
  },
  {
    id: "289",
    name: "SBT Japnese garden",
    location_types: { name: "Dhantoli" },
    current_cleaning_score: 8.9,
    averageRating: 9.6,
    cleaner_assignments: [
      { status: "assigned", cleaner_user: { name: "Raju Choudhary", phone: "8210370052" } }
    ],
    facility_companies: { name: "N/A" },
    status: true,
    latitude: 21.161,
    longitude: 79.064
  },
  {
    id: "278",
    name: "Budhawar Bazaar",
    location_types: { name: "Nehru Nagar Zone" },
    current_cleaning_score: 8.5,
    averageRating: 8.9,
    cleaner_assignments: [
      { status: "assigned", cleaner_user: { name: "Ankit Choudhary", phone: "7499667264" } }
    ],
    facility_companies: { name: "N/A" },
    status: true,
    latitude: 21.127,
    longitude: 79.111
  }
];
