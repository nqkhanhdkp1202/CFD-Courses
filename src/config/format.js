import moment from "moment/moment";

export const moneyFormat = (input) => {
    input = new Intl.NumberFormat('de-DE', { currency: 'VND' }).format(input)
    return input
}

export const timeFormat = (input) => {
    return moment(input).format('DD/MM/YYYY');
}