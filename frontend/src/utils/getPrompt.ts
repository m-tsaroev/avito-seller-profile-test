import type { AdFormValues } from '@/hooks/useUpdateForm'

export const getPrompt = (adData: AdFormValues, isForDescription: boolean) => {
	return isForDescription
		? `Напиши привлекательное описание для объявления на Авито:
          Категория: ${adData.category}
          Название: ${adData.title}
          Цена: ${adData.price} руб.
          Характеристики: ${JSON.stringify(adData.params)}
          Описание должно быть на русском языке, без маркетинговых клише.`
		: `Какая средняя рыночная стоимость для этого товара:
        Категория: ${adData.category}
        Название: ${adData.title}
        Цена: ${adData.price} руб.
        Характеристики: ${JSON.stringify(adData.params)}.
      Пиши на русском языке и пришли ответ в таком формате: "Средняя цена на MacBook Pro 16" M1 Pro (16/512GB):
115 000 – 135 000 ₽ — отличное состояние.
От 140 000 ₽ — идеал, малый износ АКБ.
90 000 – 110 000 ₽ — срочно или с дефектами.
    `
}

export const getAveragePricePrompt = (prompt: string) => {
	return `Есть вот такой промпт: "${prompt}" нужно досать из него рыночную цену. Ответь только числом, без текста и пояснений, и без лишних символов, только цифры.`
}
