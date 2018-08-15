import dayjs from 'dayjs'

export class FilterService {
  static dateFormat(date, fmt = "yyyy-MM-dd hh:mm:ss") {
    // 空数据处理
    if (date === null || date === undefined || date === '') {
      return ''
    }

    return dayjs(date).format(fmt)
  }

  static ellipsis(str, length) {
    if (str.length <= length) {
      return str
    }

    return str.slice(0, length) + "..."
  }
}
