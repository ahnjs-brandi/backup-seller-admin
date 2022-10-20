import moment from "moment";

const filters = {
  number(value: number) {
    // 숫자 3자리 단위 콤마 표시
    if (!value) {
      return value;
    } else if (value) {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
  },
  dateTime(value: string) {
    // 날짜 포맷
    if (!value) {
      return value;
    } else if (value) {
      return moment(value).format('YYYY-MM-DD HH:mm');
    }
  }
}

export default filters;