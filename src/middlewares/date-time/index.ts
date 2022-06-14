type ParsedDate = {
  fullDate: string,
  month: string,
  year: string,
  hours: string,
  minutes: string,
  seconds: string
}

class DateTime {
  public static getTimestamp() {
    const date_object = new Date();

    const fullDate = ("0" + date_object.getDate()).slice(-2);
    const month = ("0" + (date_object.getMonth() + 1)).slice(-2);
    const year = (date_object.getFullYear()).toString();
    const hours = (date_object.getHours()).toString();
    const minutes = (date_object.getMinutes()).toString();
    const seconds = (date_object.getSeconds()).toString();

    return (year + "-" + month + "-" + fullDate + " " + hours + ":" + minutes + ":" + seconds);
  }

  public static getDate() {
    const date_object = new Date();

    const fullDate = ("0" + date_object.getDate()).slice(-2);
    const month = ("0" + (date_object.getMonth() + 1)).slice(-2);
    const year = (date_object.getFullYear()).toString();

    return (year + "-" + month + "-" + fullDate)
  }
}

export default DateTime;

