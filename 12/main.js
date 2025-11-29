function inputEmail() {
    const emailReg = /^[A-Za-z0-9.-]+@[A-Za-z.-]+\.[A-Za-z]{2,6}$/;
 
    while (true) {
        let email = prompt("Введите email в формате что-то@домен:");

        if (email === null) {
            alert("Ввод email отменён.");
            return null;
        }

        email = email.trim();

        if (emailReg.test(email)) {
            alert("Email принят: " + email);
            return email;
        } else {
            alert("Неверный формат email. Разрешены буквы, цифры, точки и тире до '@', после '@' — буквы и точки, домен 2–6 букв.");
        }
    }
}

function inputCity() {
    const cityReg = /^(?=.{2,}$)[A-Za-zА-Яа-яЁё\- ]+$/;

    while (true) {
        let city = prompt("Введите город проживания:");

        if (city === null) {
            alert("Ввод города отменён.");
            return null;
        }

        city = city.trim();

        if (cityReg.test(city)) {
            alert("Город принят: " + city);
            return city;
        } else {
            alert("Неверное название города.\n" +
                  "Условия:\n" +
                  "• минимум 2 символа;\n" +
                  "• только буквы (без цифр);\n" +
                  "• допускаются пробел и дефис.");
        }
    }
}

const userEmail = inputEmail();
const userCity  = inputCity();

if (userEmail && userCity) {
    alert("Данные пользователя:\nEmail: " + userEmail + "\nГород: " + userCity);
}
