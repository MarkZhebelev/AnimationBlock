export interface Root {
    data: DataItem[]
}

export interface DataItem {
    id: string
    start: number
    end: number
    nameEvents: string
    events: Event[]
}

export interface Event {
    id: string
    year: number
    text: string
}

export interface IStore {
    data: Root
    dataLength: number
    indexForText: number
    isLoadingStore: boolean
}