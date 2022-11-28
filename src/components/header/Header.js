import {ExcelComponent} from '@core/ExcelComponent'
import {changeTitle} from '@/redux/actions'
import {$} from '@core/dom'
import {defaultTitle} from '@/constants'
import {debounce} from '@core/utils'
import {ActiveRoute} from '@core/routes/ActiveRoute'

export class Header extends ExcelComponent {
  static className = 'excel__header'

  constructor($root, options) {
    super($root, {
      name: 'Header',
      listeners: ['input', 'click'],
      ...options
    })
  }

  prepare() {
    this.onInput = debounce(this.onInput, 300)
  }

  toHTML() {
    const title = this.store.getState().title || defaultTitle
    return `
      <input type="text" value="${title}" class="input" />
      <div>
        <div class="button" data-button="remove">
          <i class="material-icons" data-button="remove">delete</i>
        </div>
        <div class="button" data-button="exit">
          <i class="material-icons" data-button="exit">exit_to_app</i>
        </div>
      </div>
    `
  }

  onClick(event) {
    const $target = $(event.target)
    const param = ActiveRoute.param
    console.log($target)
    if ($target.data.button === 'remove') {
      const decision = confirm('Вы действительно хотите удалить эту таблицу?')
      console.log(ActiveRoute.param)
      if (decision) {
        localStorage.removeItem('excel:' + param)
        ActiveRoute.navigate('')
      }
    } else if ($target.data.button === 'exit') {
      console.log(ActiveRoute.param)

      ActiveRoute.navigate('')
    }
  }

  onInput(event) {
    const $target = $(event.target)
    this.$dispatch(changeTitle($target.text()))
  }
}
