export function getPortfoliosAPI(page, limit) {
    return useFetchAPI('/portfolios', {
        query: {
            page,
            limit,
        },
        transform: (response) => response.data,
    });
}

export function getPortfolioAPI(id) {
    return useFetchAPI(`/portfolios/${id}`, {
        transform: (response) => response.data,
    })
}

export function createPortfolioAPI(portfolio, token) {
    return useFetchAPI('/portfolios', {
        method: 'post',
        headers: {
            authorization: `Bearer ${token}`,
        },
        body: portfolio,
    });
}

export function savePortfolioAPI(id, portfolio, token) {
    return useFetchAPI(`/portfolios/${id}`, {
        method: 'put',
        headers: {
            authorization: `Bearer ${token}`,
        },
        body: portfolio,
    })
}

export function deletePortfolioAPI(id, token) {
    return useFetchAPI(`/portfolios/${id}`, {
        method: 'delete',
        headers: {
            authorization: `Bearer ${token}`,
        },
    })
}