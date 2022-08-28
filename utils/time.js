import dateFormat from "dateformat"

function format(date) {
  const formatedDate = dateFormat(date, 'd-m-yyyy')
  return formatedDate
}

export default format