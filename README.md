# Electronjs + Typescript + Eslint setup

Вариант приложения из туториала electronjs вместе с настроенным тайпскриптом и линтером

- Подтягивание типов достигается за счет импортирования без require
- Линтер проверяет, чтобы использовались именно импорты
- При этом затранспиленный код использует require (нет специфической настройки под ESM)
