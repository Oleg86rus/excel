export class TableSelection {
  constructor() {
    this.group = []
  }
  // $el instanceof DOM == true
  select($el) {
    this.group.push($el)
    $el.addCless('selected')
  }

  selectGroup() {

  }
}
