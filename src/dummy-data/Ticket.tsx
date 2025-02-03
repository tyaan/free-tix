import Ticket from '../models/Ticket'

const dummyTickets: Ticket[] = [
  { id: 1, eventId: 1, price: 50, details: "General Admission" },
  { id: 2, eventId: 1, price: 100, details: "VIP Admission" },
  { id: 3, eventId: 2, price: 30, details: "Standard Entry" },
  { id: 4, eventId: 2, price: 60, details: "Premium Entry" },
  { id: 5, eventId: 3, price: 75, details: "Conference Pass" },
  { id: 6, eventId: 3, price: 150, details: "All Access Pass" },
  { id: 7, eventId: 4, price: 20, details: "Food Festival Entry" },
  { id: 8, eventId: 4, price: 40, details: "Food Festival VIP Entry" },
  { id: 9, eventId: 5, price: 25, details: "Film Screening" },
  { id: 10, eventId: 5, price: 50, details: "Film Screening + Q&A" },
  { id: 11, eventId: 6, price: 10, details: "Book Fair Entry" },
  { id: 12, eventId: 6, price: 20, details: "Book Fair VIP Entry" },
  { id: 13, eventId: 7, price: 100, details: "Front Row Seat" },
  { id: 14, eventId: 7, price: 200, details: "Backstage Pass" },
  { id: 15, eventId: 8, price: 15, details: "Comedy Show Entry" },
  { id: 16, eventId: 8, price: 30, details: "Comedy Show VIP Entry" },
  { id: 17, eventId: 9, price: 5, details: "Science Fair Entry" },
  { id: 18, eventId: 9, price: 10, details: "Science Fair VIP Entry" },
  { id: 19, eventId: 10, price: 25, details: "Charity Run Entry" },
  { id: 20, eventId: 10, price: 50, details: "Charity Run VIP Entry" }
]

export default dummyTickets