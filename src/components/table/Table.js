import {ExcelComponent} from '@core/ExcelComponent'
import {createTable} from '@/components/table/table.template'
import {$} from '@core/dom'

export class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor($root) {
    super($root, {
      // listeners: ['click', 'mousedown', 'mousemove', 'mouseup']
      listeners: ['mousedown']

    })
  }

  toHTML() {
    return createTable(100)
  }

  onMousedown(event) {
    if (event.target.dataset.resize) {
      const $resizer = $(event.target)
      // const $parent = $resizer.$el.parentNode //bad
      // const $parent = $resizer.$el.closest('.column') // better
      const $parent = $resizer.closest('[data-type="resizeble"]')
      const coords = $parent.getCoords()


      document.onmousemove = e => {
        const delta = Math.floor(e.pageX - coords.right)
        const value = coords.width + delta
        $parent.$el.style.width = value + 'px'
        document.querySelectorAll(`[data-col="${$parent.data.col}"]`)
            .forEach(el => el.style.width = value + 'px')
      }
      document.onmouseup = () => {
        document.onmousemove = null
      }
    }
  }

  // onClick() {
  //   console.log('click')
  // }
  //

  //
  // onMousemove() {
  //   console.log('mousemove')
  // }
  //
  // onMouseup() {
  //
  // }
}
