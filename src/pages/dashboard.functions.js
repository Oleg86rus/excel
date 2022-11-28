function toHTML() {
  return `
      <li class="db__record">
        <a href="#">Таблица №1</a>
        <strong>01.11.2022</strong>
      </li>
	`
}

// excel:1212121
function getAllKeys() {
  const keys = []
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
	  if (!key.includes('excel')) {
      continue
	  }
    keys.push(key)
  }
  return keys
}

export function createRecordsTable() {
  const keys = getAllKeys()
  console.log('keys', keys)
  if (!keys.length) {
    return `<p>Вы пока не создали ни одной таблицы</p>`
  }
  return `
	<div className="db__list-header">
		<span>Название</span>
		<span>Дата открытия</span>
	</div>

	<ul className="db__list">
		${keys.map(toHTML).join('')}
	</ul>
`
}

