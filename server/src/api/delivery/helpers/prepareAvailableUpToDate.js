const prepareAvailableUpToDate = (createdAt) => {
  const existingDate = new Date(createdAt)
  existingDate.setDate(existingDate.getDate() + 7)

  const year = existingDate.getFullYear()
  const month = existingDate.getMonth() + 1 < 10 ? `0${existingDate.getMonth() + 1}` : existingDate.getMonth() + 1
  const date = existingDate.getDate() < 10 ? `0${existingDate.getDate()}` : existingDate.getDate()
  const updatedDateString = `${year}-${month}-${date}T00:00:00.000Z`

  return updatedDateString
}

export default prepareAvailableUpToDate
