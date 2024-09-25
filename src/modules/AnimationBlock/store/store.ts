import {makeAutoObservable, runInAction} from 'mobx';
import {getData} from '../api/getData';
import {IStore} from './store.interfaces';

class Store implements IStore {
    private _data: any = []
    dataLength: number = 0
    indexForText: number = 0  // Добавляем indexForText
    isLoadingStore: boolean = true

    get data() {
        return this._data
    }

    constructor() {
        makeAutoObservable(this)
    }

    getDataAction = async () => {
        try {
            this.isLoadingStore = true;
            const res: any = await getData()
            runInAction(() => {
                this._data = res
                this.dataLength = res.length
                this.indexForText = this.dataLength
                this.isLoadingStore = false;
            })
        } catch (error) {
            runInAction(() => {
                this.isLoadingStore = false;
            });
            console.error('Ошибка загрузки данных:', error);
        }
    }

    setIndexForText = (index: number) => {
        this.indexForText = index;
    }
}

export default Store;

