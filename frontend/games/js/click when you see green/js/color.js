const colors = [
    'red',
    'yellow',
    'green'
];

export default function generateRandomColor() {
    const colorIndex = parseInt(Math.random() * colors.length);

    return colors[colorIndex];
}
