import dayjs from 'dayjs'

export class FilterService {
  static dateFormat(date, fmt = "yyyy-MM-dd hh:mm:ss"): string {
    // 空数据处理
    if (date === null || date === undefined || date === '') {
      return ''
    }

    return dayjs(date).format(fmt)
  }

  static ellipsis(str, length): string {
    if (str.length <= length) {
      return str
    }

    return str.slice(0, length) + "..."
  }
}
