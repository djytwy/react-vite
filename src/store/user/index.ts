import { action, computed, makeAutoObservable } from 'mobx';

class Store {
  // 被观察者，你可以理解成Vuex中的State，也就是说，声明一些想要观察的状态，变量。
  // 被观察者可以是：JS基本数据类型、引用类型、普通对象、类实例、数组和映射
  public num: number =0 ;
  public map: Map<string, object> = new Map();
  public list: Array<string> = ['a','b','c'];
  public obj: object = {name: "Mobx"};

  constructor() {
    makeAutoObservable(this)
  }

  @computed
  public get computedNum () {
    return `computed: ${this.num}`
  }

  @computed
  public get addNum() {
    return this.num + 33
  }

  // 使用@action 更改被观察者
  @action.bound
  addOne() {
    this.num ++
  }
}

export const user = new Store() 