import moment from 'moment';

export const useNewPortfolio = () => ({
    cover: '',
    images: [],
    skills: [],
    title: '',
    content: '',
    publishedAt: moment().toISOString(),
})