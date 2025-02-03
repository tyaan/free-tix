import Event from '../models/Event'

const dummyEvents: Event[] = [
  {
    id: 1,
    title: "Music Concert",
    overview: "An amazing music concert featuring top artists.",
    description: "Join us for an unforgettable night of music with performances by top artists from around the world. Enjoy a variety of genres and a vibrant atmosphere.",
    imgURL: "https://example.com/concert.jpg",
    location: "Madison Square Garden, New York",
    startTime: new Date('2023-12-01T19:00:00'),
    endTime: new Date('2023-12-01T22:00:00'),
    ticketID: [101, 102, 103]
  },
  {
    id: 2,
    title: "Art Exhibition",
    overview: "A showcase of contemporary art.",
    description: "Explore the latest in contemporary art at our annual exhibition. Featuring works from emerging and established artists, this event is a must-see for art enthusiasts.",
    imgURL: "https://example.com/art.jpg",
    location: "The Art Gallery, Los Angeles",
    startTime: new Date('2023-11-15T10:00:00'),
    endTime: new Date('2023-11-15T18:00:00'),
    ticketID: [201, 202, 203]
  },
  {
    id: 3,
    title: "Tech Conference",
    overview: "A conference on the latest in technology.",
    description: "Stay ahead of the curve with insights from industry leaders at our tech conference. Topics include AI, blockchain, cybersecurity, and more.",
    imgURL: "https://example.com/tech.jpg",
    location: "Silicon Valley Conference Center, San Francisco",
    startTime: new Date('2023-10-20T09:00:00'),
    endTime: new Date('2023-10-20T17:00:00'),
    ticketID: [301, 302, 303]
  },
  {
    id: 4,
    title: "Food Festival",
    overview: "A celebration of culinary delights.",
    description: "Indulge in a variety of cuisines at our food festival. From street food to gourmet dishes, there's something for every palate.",
    imgURL: "https://example.com/food.jpg",
    location: "Central Park, New York",
    startTime: new Date('2023-09-10T11:00:00'),
    endTime: new Date('2023-09-10T20:00:00'),
    ticketID: [401, 402, 403]
  },
  {
    id: 5,
    title: "Film Festival",
    overview: "A festival showcasing independent films.",
    description: "Discover the best in independent cinema at our film festival. Featuring screenings, Q&A sessions, and networking opportunities.",
    imgURL: "https://example.com/film.jpg",
    location: "Sundance Film Festival, Utah",
    startTime: new Date('2023-08-25T10:00:00'),
    endTime: new Date('2023-08-25T22:00:00'),
    ticketID: [501, 502, 503]
  },
  {
    id: 6,
    title: "Book Fair",
    overview: "A fair for book lovers.",
    description: "Meet your favorite authors and discover new books at our book fair. Enjoy book signings, readings, and panel discussions.",
    imgURL: "https://example.com/book.jpg",
    location: "Book Expo, Chicago",
    startTime: new Date('2023-07-15T09:00:00'),
    endTime: new Date('2023-07-15T17:00:00'),
    ticketID: [601, 602, 603]
  },
  {
    id: 7,
    title: "Fashion Show",
    overview: "A showcase of the latest fashion trends.",
    description: "See the latest trends in fashion at our annual fashion show. Featuring designs from top designers and emerging talent.",
    imgURL: "https://example.com/fashion.jpg",
    location: "Fashion Week, Paris",
    startTime: new Date('2023-06-05T18:00:00'),
    endTime: new Date('2023-06-05T21:00:00'),
    ticketID: [701, 702, 703]
  },
  {
    id: 8,
    title: "Comedy Night",
    overview: "A night of laughter with top comedians.",
    description: "Enjoy a night of laughter with performances by top comedians. A perfect event for a fun night out with friends.",
    imgURL: "https://example.com/comedy.jpg",
    location: "Comedy Club, Los Angeles",
    startTime: new Date('2023-05-20T20:00:00'),
    endTime: new Date('2023-05-20T23:00:00'),
    ticketID: [801, 802, 803]
  },
  {
    id: 9,
    title: "Science Fair",
    overview: "A fair showcasing scientific innovations.",
    description: "Explore the latest in scientific innovations at our science fair. Featuring exhibits, demonstrations, and interactive activities.",
    imgURL: "https://example.com/science.jpg",
    location: "Science Museum, London",
    startTime: new Date('2023-04-10T10:00:00'),
    endTime: new Date('2023-04-10T16:00:00'),
    ticketID: [901, 902, 903]
  },
  {
    id: 10,
    title: "Charity Run",
    overview: "A run to raise funds for a good cause.",
    description: "Join us for a charity run to raise funds for a good cause. Participate in the run and enjoy a day of fun activities.",
    imgURL: "https://example.com/charity.jpg",
    location: "City Park, Boston",
    startTime: new Date('2023-03-15T08:00:00'),
    endTime: new Date('2023-03-15T12:00:00'),
    ticketID: [1001, 1002, 1003]
  }
]

export default dummyEvents