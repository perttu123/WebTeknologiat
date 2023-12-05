

export async function fetchData() {
    const response = await fetch('https://api.porssisahko.net/v1/latest-prices.json');
    const result = await response.json();
    return result.prices;
}