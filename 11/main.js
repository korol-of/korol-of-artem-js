const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => resolve(answer));
  });
}

async function main() {
  const userText = await ask("1) Введите строку текста: ");

  try {
    fs.writeFileSync("output.txt", userText, "utf8");
    console.log('→ Строка сохранена в файл "output.txt".');
  } catch (err) {
    console.error("Ошибка при записи в output.txt:", err.message);
  }

  console.log('\n2) Анализ файла "data.txt"...');

  try {
    const content = fs.readFileSync("data.txt", "utf8");

    const lineCount =
      content === "" ? 0 : content.split(/\r?\n/).length;

    const charCount = content.replace(/\r/g, "").length;

    console.log(`Количество строк: ${lineCount}`);
    console.log(`Количество символов: ${charCount}`);
  } catch (err) {
    console.error(
      'Не удалось прочитать "data.txt". Убедитесь, что файл существует.',
      "\nТекст ошибки:",
      err.message
    );
  }

  console.log(
    '\n3) Ввод строк для записи в "log.txt". ' +
      'Каждая строка будет добавлена в конец файла.'
  );
  console.log('   Для завершения введите: stop\n');

  startLogLoop();
}

function startLogLoop() {
  process.stdout.write("> ");

  rl.on("line", (input) => {
    const trimmed = input.trim();

    if (trimmed.toLowerCase() === "stop") {
      console.log("Программа завершена.");
      rl.close();
      return;
    }

    fs.appendFile("log.txt", input + "\n", (err) => {
      if (err) {
        console.error("Ошибка при записи в log.txt:", err.message);
      }
    });

    process.stdout.write("> ");
  });
}

main();
