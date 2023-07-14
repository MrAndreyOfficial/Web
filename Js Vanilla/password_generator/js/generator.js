export default function generatePassword(length) {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let password = '';

    for (let i = 0; i < length; i++) {
        const char = charset[Math.floor(Math.random() * charset.length)];

        password += char;
    }

    return password;
}
