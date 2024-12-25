export default async function getDataFromUrl(url) {
    const data = await fetch(url);
    const json = await data.json();

    return json;
}
