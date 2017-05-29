declare module jMess {
    class EventRegistry implements IEventRegistry {
        private _events;
        private _registry;
        private _logR;
        private _timeout;
        private _onRaise;
        constructor(logR: ILogR, onRaise: (event: string, data: Object) => void, timeout?: (delegate: () => void, delay: number) => void);
        getAvailableEvents(): string[];
        getHooksForEvent<T>(eventName: string): { (data: T): void; }[];
        hook<T>(eventToHook: string, delegate: (data: T) => void): () => void;
        hookOnce<T>(eventToHook: string, delegate: (data: T) => void): void;
        raise<T>(eventToRaise: string, data: T): void;
        register(eventsToRegister: string | string[] | Object): void;
        private _registerEventsObject(eventsObj);
        private _registerArrayOfEvents(eventsArray);
        private _registerSingleEvent(eventToRegister);
        private _eventExists(eventName);
    }
}
declare module jMess {
    interface IEventRegistry {
        getAvailableEvents(): string[];
        hook<T>(eventName: string, onRaise: (data: T) => void): () => void;
        hookOnce<T>(eventToHook: string, delegate: (data: T) => void): any;
        raise<T>(eventToRaise: string, data: T): void;
        register(eventsToRegister: string | string[] | Object): void;
    }
}
