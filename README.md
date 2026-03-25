# 🚀 Avito Seller Dashboard — AI-ассистент для улучшения объявлений

Тестовое задание для стажёра Frontend (весенняя волна 2026).  
Веб-приложение — личный кабинет продавца с интеграцией AI-ассистента (локальная LLM через Ollama). Позволяет управлять объявлениями, улучшать описания и получать рекомендации по цене.

[Макеты в Figma](https://www.figma.com/design/mkeo1cvzQpEqmN3txeDNBo/%D0%9C%D0%B0%D0%BA%D0%B5%D1%82-%D1%82%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B3%D0%BE-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D1%8F-%D1%81%D1%82%D0%B0%D0%B6%D1%91%D1%80%D0%B0%D0%BC?node-id=16-1388&p=f&t=outUVTh9O2CIiDpq-0)

---

## 🛠 Технологический стек

- **Frontend**: React 18, TypeScript, Vite, Mantine UI, Zustand, React Query, React Hook Form + Zod, Framer Motion, Swiper
- **Backend**: Node.js (предоставленный сервер), REST API
- **LLM**: Ollama с моделью llama3
- **Docker**: контейнеризация всех сервисов (frontend, backend, ollama)

---

## 📋 Требования

- **Docker** и **Docker Compose** (рекомендуемый способ)  
  Или
- **Node.js** v20+, **npm** (для локального запуска)
- **Ollama** (только при локальном запуске без Docker)

---

## 🐳 Запуск через Docker Compose (рекомендуемый)

1. **Клонируйте репозиторий**

   ```bash
   git clone https://github.com/m-tsaroev/avito-seller-profile-test.git
   cd avito-seller-dashboard
   ```

2. **Запустите все сервисы**

   ```bash
   docker-compose up --build
   ```

   При первом запуске будет загружена модель `llama3` (~4 ГБ) — это может занять несколько минут.

3. **Откройте приложение**
   - Фронтенд: [http://localhost](http://localhost)
   - Бэкенд API: [http://localhost:8080/items](http://localhost:8080/items)
   - Ollama API: [http://localhost:11434](http://localhost:11434)

4. **Удаление контейнеров**
   ```bash
   docker-compose down -v   # удалит контейнеры и тома (модель будет загружена заново при следующем запуске)
   ```

---

### 🔧 Изменения в серверной части

В исходном предоставленном бэкенде эндпоинт `GET /items` возвращал список объявлений без поля `id`. Для корректной маршрутизации на фронтенде (переход на страницы `/ads/:id`) в ответ была добавлена информация об идентификаторе каждого объявления.

**Было:**

```typescript
return {
  items: filteredItems
    .toSorted((item1, item2) => {
      let comparisonValue = 0

      if (!sortDirection) return comparisonValue

      if (sortColumn === 'title') {
        comparisonValue = item1.title.localeCompare(item2.title)
      } else if (sortColumn === 'createdAt') {
        comparisonValue =
          new Date(item1.createdAt).valueOf() -
          new Date(item2.createdAt).valueOf()
      }

      return (sortDirection === 'desc' ? -1 : 1) * comparisonValue
    })
    .slice(skip, skip + limit)
    .map((item) => ({
      category: item.category,
      title: item.title,
      price: item.price,
      needsRevision: doesItemNeedRevision(item),
    })),
  total: filteredItems.length,
}
```

**Стало:**

```typescript
return {
  items: filteredItems
    .toSorted((item1, item2) => {
      let comparisonValue = 0

      if (!sortDirection) return comparisonValue

      if (sortColumn === 'title') {
        comparisonValue = item1.title.localeCompare(item2.title)
      } else if (sortColumn === 'createdAt') {
        comparisonValue =
          new Date(item1.createdAt).valueOf() -
          new Date(item2.createdAt).valueOf()
      }

      return (sortDirection === 'desc' ? -1 : 1) * comparisonValue
    })
    .slice(skip, skip + limit)
    .map((item) => ({
      id: item.id,
      category: item.category,
      title: item.title,
      price: item.price,
      needsRevision: doesItemNeedRevision(item),
    })),
  total: filteredItems.length,
}
```

Остальные эндпоинты (`GET /items/:id`, `PUT /items/:id`) остались без изменений. Данное изменение не нарушает работу оригинального API и необходимо для функционирования фронтенда.

---

## 💻 Локальный запуск (без Docker)

### 1. Запустите бэкенд

```bash
cd server
npm install
npm start   # порт 8080
```

### 2. Запустите Ollama

- [Установите Ollama](https://ollama.com)
- Загрузите модель:
  ```bash
  ollama pull llama3
  ```
- Убедитесь, что Ollama запущена (обычно работает фоном). При необходимости выполните `ollama serve`.

### 3. Запустите фронтенд

```bash
cd frontend
npm install
npm run dev   # порт 5173
```

### 4. Откройте приложение

[http://localhost:5173](http://localhost:5173)

---

## 🧠 Принятые решения

- **Mantine UI** — быстрая разработка, встроенная поддержка тем, кастомизация, компоненты высокого уровня.
- **Zustand** — простота, persist для сохранения темы и фильтров, минимальный бойлерплейт.
- **React Query** — кэширование, инвалидация, управление состоянием запросов.
- **React Hook Form + Zod** — типобезопасная валидация, динамические поля (зависящие от категории), работа с черновиками.
- **Framer Motion** — плавные анимации появления карточек, hover-эффекты, галерея.
- **Swiper** — карусель изображений с навигацией и миниатюрами.
- **Docker Compose** — полная изоляция окружения, автоматическая загрузка модели Ollama.

---

## 📁 Структура проекта

```
.
├── frontend/               # React-приложение
│   ├── src/
│   ├── public/
│   ├── Dockerfile
│   ├── nginx.conf
│   └── package.json
├── server/                 # Бэкенд API (предоставлен)
│   ├── Dockerfile
│   └── package.json
├── docker-compose.yml
└── README.md
```

---

## 👤 Автор

Цароев Мухаммад Идрисович
