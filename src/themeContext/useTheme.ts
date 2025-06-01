import React, { useContext } from 'react'
import type { ThemeContextType } from './ThemeContext'
import ThemeContext from './ThemeContext'

// 1️⃣ Импорт зависимостей
// useContext — это хук React, который позволяет получать доступ к данным, хранящимся в контексте.
// ThemeContext — сам контекст, который был создан в файле themeContext.tsx
//  (он был экспортирован там и теперь импортируется сюда).
// { ThemeContextType } — это тип, который описывает структуру данных,
//  хранящихся в контексте (например, { theme: string, toggleTheme: () => void }).


export default function useTheme():ThemeContextType {
 // Функция useTheme() — это кастомный хук, который возвращает данные из ThemeContext.
// Он гарантирует, что внутри компонента будет доступ к контексту и автоматически выбрасывает ошибку,
// если хук используется вне ThemeProvider.   

// Получение данных из контекста
const context = useContext(ThemeContext);


// Проверка на наличие контекста

if (!context){
    throw new Error("useTheme must be used withina ThemeProvider")
    //Если context равен undefined, то выбрасывается ошибка.
// Это защищает от ситуации, когда кто-то попытается использовать useTheme() в компоненте,
//  который не обернут в ThemeProvider.
}
  return context
}
