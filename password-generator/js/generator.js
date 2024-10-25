export default function generatePassword(length) {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const lengthCharset = charset.length;

    let result = '';

    for (let i = 0; i < length; i++) {
        result += charset[parseInt(Math.random() * lengthCharset)];
    }

    return result;
}
