import {ExcelComponent} from '@core/ExcelComponent'
import {createTable} from '@/components/table/table.template'

export class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor($root) {
    super($root, {
      // listeners: ['click', 'mousedown', 'mousemove', 'mouseup']
    })
  }

  toHTML() {
    return createTable(100)
  }

  // onClick() {
  //   console.log('click')
  // }
  //
  // onMousedown(event) {
  //   console.log('mouseDown', event.target)
  // }
  //
  // onMousemove() {
  //   console.log('mousemove')
  // }
  //
  // onMouseup() {
  //
  // }
}
