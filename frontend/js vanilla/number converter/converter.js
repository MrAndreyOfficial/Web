export default function convertTo(type, value) {
    switch (type.toLowerCase()) {
        case 'int':
            return parseInt(value);
        case 'float':
            return parseFloat(value);
        default:
            return value;
    }
}
