const fs = require('fs').promises;
const URL = 'https://jsonplaceholder.typicode.com/users';

(async function main() {
    try {
        const response = await fetch(URL);
        if (!response.ok) {
            throw new Error(`Сервер вернул статус ${response.status}`);
        }

        const users = await response.json();
        const randomId = Math.floor(Math.random() * 10) + 1;
        const user = users.find(u => u.id === randomId);

        if (!user) {
            console.error(`Пользователь с id=${randomId} не найден в ответе API.`);
            return;
        }

        const content =
            `1. Name: "${user.name}"\n` +
            `2. Username: "${user.username}"\n` +
            `3. Email: "${user.email}"\n`;

        await fs.writeFile('user.txt', content, 'utf8');
        console.log(`OK: записан пользователь с id=${randomId} в файл user.txt`);

    } catch (err) {
        console.error('Ошибка выполнения программы:', err.message);
    }
})();
