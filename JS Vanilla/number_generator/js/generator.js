export default function generateNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
