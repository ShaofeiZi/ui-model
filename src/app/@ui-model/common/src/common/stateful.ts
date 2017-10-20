import { StateListener } from '../utils/state-listener';
import { isFunction, isString } from '../utils/typings';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
export abstract class Stateful {
  constructor(private stateListener?: StateListener, private stateKey?: string) {
  }

  private _changes = new Subject<this>();
  // asObservable 返回自身
  get changes(): Observable<this> {
    return this._changes.asObservable();
  }

  protected changed(): void {
    this._changes.next(this);
    // 是否实例化了stateListener 并且有setState这个方法
    if (this.stateListener && isFunction(this.stateListener.setState)) {
      // 验证是否有字符串类型的状态关键字
      if (!isString(this.stateKey)) {
        throw new Error('必须有一个状态关键字');
      }
      this.stateListener.setState({ [this.stateKey]: this });
    }
  }
}
