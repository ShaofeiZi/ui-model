/**
 * 设置状态
 */
export interface StateListener {
  setState(state: { [name: string]: any }): void;
}
