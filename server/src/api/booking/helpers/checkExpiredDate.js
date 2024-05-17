import db from '../../../database/postgres/instance/index.js'

const checkExpiredDate = async (id) => {
  const {Booking} = db

  const booking = await Booking.findOne({where: {id}})

  const currentDate = new Date().getDate()
  const createdAtDate = new Date(booking.dataValues.createdAt).getDate()
  const isExpired = currentDate > createdAtDate + 1 // add 1 day to the current date because the booking is expired and ready  to be deleted after 2 days from creation date

  return isExpired
}

export default checkExpiredDate
