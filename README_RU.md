# Скрипт автоматической трассировки для Adobe Illustrator [Beta]
Скрипт автоматически трассирует с помощью Adobe Illustrator все растровые файлы 
в выбранном каталоге и сохраняет их в EPS в соответствии с требованиям к дистрибуции стока FreePick

## Требования
* Adobe Illustrator

## Релиз
<Ссылка на релиз будет позже>

## Как воспользоваться скриптом
1. Скачайте(ссылка) файл скрипта
2. Поместите файл скрипта в директорию `scripts`:
    * для MacOS: `/Applications/Adobe Illustrator 2021/Presets/en-GB/Scripts/`
    * для Windows: `C:\Program Files\Adobe\Adobe Illustrator 2021\Presets\en_GB\Scripts\`
3. Запустите `Adobe Illustrator` и в меню `Файл -> Скрипты` (`File -> Sctipts`) выберите скрипт для запуска.

## Как собрать скрипт последней версии

Для сборки вам необходимы следующие установленные инструменты:

* NodeJS
* NPM
* Git

```bash
git clone https://github.com/devoll/trace-image-batch-ai.git
cd trace-image-batch-ai
npm install
npm run build
```

После завершения сборки заберите собранную версию скрипта из `dist`
