import { getDateUIFormat } from "../getDateUIFormat"

describe.only("the test suites for getDateUIFormat ts file", () => {
  describe("tests for the `dateToTimeString` function", () => {
    it("should format a date form ISO 8601 to english format", () => {
      const dateISOInput = "2021-03-04T12:28:55.319Z"
      let result = new Date(dateISOInput).toTimeString()

      expect(result).toBe("13:28:55 GMT+0100 (GMT+01:00)")
    })
  })
  describe("tests for the `removeFirstStringTypo` function", () => {
    it("should remove the first character of the string input `if = '0'`", () => {
      const input = "03:28pm (GMT+01:00)"

      let result = input[0] === "0" ? input.substring(1) : input

      expect(result).toBe("3:28pm (GMT+01:00)")
    })
    it("should not remove the first character of the string input `if = '1'`", () => {
      const input = "13:28am (GMT+01:00)"
      let result = input[0] === "0" ? input.substring(1) : input

      expect(result).toBe("13:28am (GMT+01:00)")
    })
  })
  describe("tests for the `getDateUIFormat` function", () => {
    it("should show the result string date formatted as wanted", () => {
      const dateISOInput = "2021-03-04T12:28:55.319Z"
      let result = getDateUIFormat(dateISOInput)

      expect(result).toBe("13:28am (GMT+01:00)")
    })
    it("should match with special pattern including `am`", () => {
      const dateISOInput = "2021-03-04T12:28:55.319Z"
      let result = getDateUIFormat(dateISOInput)

      expect(result).toMatch(/13:28am/i)
    })
    it("should match with special pattern including `pm`", () => {
      const dateISOInput = "2021-03-04T00:28:55.319Z"
      let result = getDateUIFormat(dateISOInput)

      expect(result).toMatch(/1:28pm/i)
    })
  })
})
