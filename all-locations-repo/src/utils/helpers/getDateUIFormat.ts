/**
 * @function getDateUIFormat
 * @param (string) - take string at ISO 801 format
 * @return (string) - returns the final string formatted
 */
export const getDateUIFormat = (str: string): string => {
  let finalSuffix = ""
  let dateFormatted
  /**
   * @function getAmPmString
   * @param (string) - a string at ISO 801 format
   * @return (string) - returns a string from the Date js object in an english format
   */
  const getAmPmString = (data: string, num?: any): string => {
    num = data.slice(11, 13)
    return Number(num) > 11 ? (finalSuffix = "am") : "pm"
  }
  /**
   * @function dateToTimeString
   * @param (string) - take `dateISO` string at ISO 801 format
   * @return (string) - returns a string from the Date js object in an english format
   */
  const dateToTimeString = (dateISO: string): string =>
    new Date(dateISO).toTimeString()

  /**
   * @function removeFirstStringTypo
   * @param (string) - take `str` as input
   * @return (string) - returns the string without the first character `if === 0`
   */
  const removeFirstStringTypo = (str: string): string =>
    str[0] === "0" ? str.substring(1) : str

  finalSuffix = getAmPmString(str)
  str = dateToTimeString(str)

  /* prettier-ignore  */
  dateFormatted = `${str.slice(0, 5)}${finalSuffix} (${str.slice(9, 15)}:${str.slice(15, 17)})`
  dateFormatted = removeFirstStringTypo(dateFormatted)

  return dateFormatted
}
/*
const date1 = "2021-03-04T12:28:55.319Z"
getDateUIFormat(date1)
*/
