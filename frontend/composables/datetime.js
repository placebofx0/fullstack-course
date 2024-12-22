import moment from 'moment';

export const useYearOptions = (startYear) => {
    const currentYear = new Date().getFullYear();
    const years = [];

    startYear = startYear || 1980;
    while (startYear <= currentYear) {
        years.push({
            name: startYear,
            value: startYear,
        });

        startYear++;
    }

    return years;
}

export const useMonthOptions = () => {
    const months = [];

    for (let i = 1; i <= 12; i++) {
        const date = new Date();
        date.setMonth(i);

        months.push({
            name: date.toLocaleString('en-US', { month: 'long' }),
            value: i,
        })
    }

    return months;
}

export const useDateRangeDiff = (startDate, endDate) => {
    const dynamicEndDate = endDate ?? new Date();

    const diffInMonth = Math.ceil(moment(dynamicEndDate).diff(moment(startDate), 'months', true));
    const diffInYear = Math.ceil(moment(dynamicEndDate).diff(moment(startDate), 'years', true));

    return {
        diffInMonth,
        diffInYear,
    }
}