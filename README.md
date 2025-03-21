# Добро пожаловать в Gleede

## Начало работы

1.  Установите:

    - [Node.js](https://nodejs.org/)
    - [Python 2.7](https://www.python.org/downloads/release/python-2710/)
    - [Microsoft Visual Studio C++ 2013](https://support.microsoft.com/ru-ru/help/3179560/update-for-visual-c-2013-and-visual-c-redistributable-package)

2.  Установите зависимости:

         npm i

    Для использования глобальных пакетов:

         npm install <список пакетов> -g
         npm link <список пакетов>

3.  Для запуска проекта:

        gulp

4.  Редактируйте файлы в папке `assets`. Результаты будут в папке `dist`. Для сборки оптимизированной версии:

        gulp build

5.  Проверка HTML:

        gulp validation

6.  Линтинг стилей:

        gulp cssLint

---

## Работа с JavaScript

- Основные скрипты создавайте в папке `/assets/js`.
- Дополнительные (плагины, библиотеки) добавляйте в `/assets/js/all`.  
  Они объединяются в файл `all.js`.

---

## Создание iconfont

1.  Установите пакеты:

        npm install gulp-iconfont@4.0.0 gulp-iconfont-css -D

2.  Поместите иконки в папку `/assets/i/icons`.
3.  Измените переменную `fontName` в `gulpfile.js` (по умолчанию 'iconfont').
4.  Разкомментируйте задачу `iconfont` и выполните:

        gulp iconfont

5.  Найдите шрифт в папке `/assets/fonts/icons` и стили в файле `/assets/sass/_icons.scss`.

---

## Создание SVG-спрайта

1.  Установите пакеты:

        npm install gulp-svg-sprite gulp-svgmin gulp-cheerio gulp-replace -g
        npm link gulp-svg-sprite gulp-svgmin gulp-cheerio gulp-replace

2.  Поместите иконки в папку `/assets/i/icons`.
3.  Разкомментируйте задачу `svgSpriteBuild` и выполните:

        gulp svgSpriteBuild

4.  Найдите `sprite.svg` в папке `/assets/i/sprite`. Для стилей используйте файл `_sprite.scss`.

---

## Работа с изображениями через PostCSS

```scss
.test_block {
	width: width("rub.png");
	height: height("rub.png");
	background: resolve("rub.png") no-repeat;
	background-size: size("rub.png");
}
```

---

## Тестирование

1.  Установите пакеты:

        npm i chrome-launcher fs http node-static path pixelmatch pngjs puppeteer -g
        npm link chrome-launcher fs http node-static path pixelmatch pngjs puppeteer

2.  В `gulpfile.js` добавьте имена тестируемых страниц в массив `pageList`.
3.  Создайте эталонные скриншоты командой:

         gulp test-init

    Или добавьте их вручную в папку `test/before/`.

4.  Для сравнения текущего состояния страниц с эталонными выполните:

        gulp test-compare
