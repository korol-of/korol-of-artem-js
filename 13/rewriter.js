const fs = require("fs");
const path = require("path");

function die(msg, code = 1) {
  console.error(msg);
  process.exit(code);
}

const filePathArg = process.argv[2];
if (!filePathArg) {
  die("Использование: node rewriter.js <путь-к-файлу.txt>");
}

const filePath = path.resolve(process.cwd(), filePathArg);

if (!fs.existsSync(filePath)) {
  die(`Ошибка: файл не найден: ${filePath}`);
}

let oldText = "";
try {
  oldText = fs.readFileSync(filePath, "utf8");
} catch (e) {
  die(`Ошибка чтения файла: ${e.message}`);
}

console.log("=== ТЕКУЩЕЕ СОДЕРЖИМОЕ ФАЙЛА ===");
process.stdout.write(oldText);
if (!oldText.endsWith("\n")) console.log();
console.log("=== КОНЕЦ ТЕКУЩЕГО СОДЕРЖИМОГО ===\n");

console.log("Введите НОВЫЙ текст для файла.");
console.log("Завершите ввод:");
console.log("- Ctrl+D (Linux/macOS)");
console.log("- Ctrl+Z затем Enter (Windows)\n");

process.stdin.setEncoding("utf8");

let newText = "";
let cancelled = false;

process.on("SIGINT", () => {
  cancelled = true;
  console.log("\nОтмена (Ctrl+C). Файл НЕ изменён.");
  process.exit(0);
});

process.stdin.on("data", (chunk) => {
  newText += chunk;
});

process.stdin.on("end", () => {
  if (cancelled) return;

  try {
    fs.writeFileSync(filePath, newText, "utf8");
    console.log(`\nГотово: файл полностью перезаписан: ${filePath}`);
  } catch (e) {
    die(`Ошибка записи файла: ${e.message}`);
  }
});

process.stdin.resume();