import {Page} from '@core/Page'
import {$} from '@core/dom'

export class DashboardPage extends Page {
  getRoot() {
    return $.create('div', 'db').html(`
        <div class="db__header">
            <h1>Excel Dashboard</h1>
        </div>
        <div class="db__new">
            <div class="db__view"></div>
            <a href="#" class="db__create">Новая <br /> таблица</a>
        </div>
        <div class="db__table db__view">
            <div class="db__list-header">
                <span>Название</span>
                <span>Дата открытия</span>
            </div>

            <div class="db__list">
                <li class="db__record">
                    <a href="#">Таблица №1</a>
                    <strong>01.11.2022</strong>
                </li>
            </div>
        </div>
    `)
  }
}
