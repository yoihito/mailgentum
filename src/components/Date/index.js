import moment from 'moment';

const Date = ({ date }) => {
    if (moment().isSame(date, 'day')) {
        return moment(date).format('LT');
    } else {
        return moment(date).format('L');
    }
}

export default Date;