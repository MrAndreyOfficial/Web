export default async function getAllDataFromUrl(url) {
    const response = await fetch(url);
    const json = response.json();

    return json;
}
