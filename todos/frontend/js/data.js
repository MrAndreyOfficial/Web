export async function getAllDataFromJson(url, id) {
    const response = !id ? await fetch(url) : await fetch(`${url}/?id=${id}`);
    const json = await response.json();

    return json;
}

export async function deleteDataFromJsonById(url, id) {
    const response = await fetch(`${url}/?id=${id}`);
    const json = await response.json();

    return json;
}

export async function addDataToJson(url, data) {
    await fetch(`${url}/?todo=${data}`);
}

export async function updateDataToJsonById(url, value) {
    await fetch(`${url}/?id=${value}`);
}
