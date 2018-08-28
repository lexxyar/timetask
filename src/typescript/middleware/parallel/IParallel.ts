/**
 * Интерфейс для задач, которые должны запускаться параллельно
 */
interface IParallel {
    /**
     * Запуск выполнения задачи
     */
    run(): void;

    /**
     * Возвращает статус готовности
     */
    isReady(): boolean;

    /**
     * Возвращает статус запущенности
     */
    isRunned(): boolean;

    /**
     * Возвращает идентификатор задачи
     */
    getId(): string;

    /**
     * Устанавливает иденитификатор задачи
     * @param id 
     */
    setId(id: string): void;

    /**
     * Возвращает результат работы задачи
     */
    getResult(): any;
}

/**
 * Отдельный тип для CallBack функции задачи
 */
type AsyncFetcherCallbackFn = (response: any) => void;