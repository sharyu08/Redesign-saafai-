// Shared mock data for user management (desktop + mobile)
export const initialUserRows = [
  {
    id: 103,
    name: "Rajesh Sahani",
    phone: "8955596876",
    email: "rajesh@saaf.ai",
    role: "Cleaner",
    userId: 182,
    locations: [
      { name: "Narendra nagar square", assignedDate: "20 Nov 2025", active: true, coordinates: "21.107, 79.079" },
      { name: "New Manish Nagar Chowk", assignedDate: "8 Dec 2025", active: true, coordinates: "21.085, 79.087" }
    ]
  },
  { id: 101, name: "Test Intern", phone: "9356150564", email: "test1@gmail.com", role: "Admin", userId: 180, locations: [] },
  {
    id: 102,
    name: "Omkar Supervisor",
    phone: "3333333333",
    email: "richom056@gmail.com",
    role: "Supervisor",
    userId: 181,
    locations: [{ name: "Narendra nagar square", assignedDate: "20 Nov 2025", active: true, coordinates: "21.107, 79.079" }]
  },
];
