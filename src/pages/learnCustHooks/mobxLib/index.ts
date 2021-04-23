import { makeAutoObservable } from 'mobx';

export class Timer {
  seconds = 0

  constructor () {
    makeAutoObservable(this)
  }

  increase () {
    this.seconds += 1
  }

  reset () {
    this.seconds = 0
  }
}

export const myTimer = new Timer()