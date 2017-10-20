import { Directive, ElementRef, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
/**
 * 是否点击的是本节点
 * 如果点击的不是本节点或者按Esc 发射一个事件
 * @export
 * @class ClickOutsideDirective
 * @implements {OnInit}
 * @implements {OnDestroy}
 */
@Directive({
  selector: '[uiClickOutside]',
})
export class ClickOutsideDirective implements OnInit, OnDestroy {
  constructor(private element: ElementRef) {
  }
  // Output 装饰器支持一个可选的参数，用来指定组件绑定属性的名称。如果没有指定，则默认使用 @Output 装饰器，装饰的属性名。具体示例如下：
  @Output('uiClickOutside') onClickOutside: EventEmitter<void> = new EventEmitter<void>();
  escKeyListener = (event: KeyboardEvent) => {
    // Esc的keyCode为27
    if (event.keyCode === 27) {
      this.onClickOutside.emit();
    }
  }

  clickListener = (event: Event) => {
    /**
       * 兼容IE的写法
       * IE下,event对象有srcElement属性,但是没有target属性;
       * Firefox下,event对象有target属性,但是没有srcElement属性.但他们的作用是相当的
       */
    if (!isSelfOrAncestorNode(this.element.nativeElement, event.target as Node || event.srcElement)) {
      this.onClickOutside.emit();
    }
  }

  ngOnInit(): void {
    // 初始化监控鼠标弹起和键盘弹起
    document.addEventListener('mouseup', this.clickListener);
    document.addEventListener('keyup', this.escKeyListener);
  }

  ngOnDestroy(): void {
    // 指令销毁时销毁监控  释放内存
    document.removeEventListener('mouseup', this.clickListener);
    document.removeEventListener('keyup', this.escKeyListener);
  }
}
// 是否是自己或者父级的DOM节点
function isSelfOrAncestorNode(ancestor: Node, node: Node): boolean {
  while (node) {
    if (node === ancestor) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
}
