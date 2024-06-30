export default function generateNumber(min, max) {
    const generatedNumber = Math.floor(Math.random() * (max - min + 1) + min);

    return generatedNumber;
}
