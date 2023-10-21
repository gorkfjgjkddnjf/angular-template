# Быстрый старт

## Шаг 1. Установка зависимостей

`npm i`

## Шаг 2. Настройка Husky

`npm run prepare`

## Шаг 3. Eslint

1. Следуем по вложенностям в интерфейсе WebStorm — `File -> Settings -> Languages & Frameworks -> Javascript -> Code Quality Tools -> ESLint`
2. Выбрать radio button `Automatic ESLint configuration`
3. Выбрать checkbox `Run eslint --fix on save`

## Шаг 4. Stylelint

1. Следуем по вложенностям в интерфейсе WebStorm — `File -> Settings -> Languages & Frameworks -> Style Sheets -> Stylelint`
2. Устанавливаем checkbox `Enable`
3. В после `Stylelint package` устанавливаем путь до пакета `stylelint` в директории `node_modules` проекта
4. В поле `Run for files` пишем необходимый паттерн, например `{**/*,*}.{scss}`
