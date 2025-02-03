export default interface Event {
  id: number
  title: string
  overview: string
  description: string
  imgURL: string
  location: string
  startTime: Date
  endTime: Date
  ticketID: number[]
}