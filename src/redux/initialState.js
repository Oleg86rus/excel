import {storage} from '@core/utils'
import {defaulsStyles} from '@/constants'

const defaultState = {
  rowState: {},
  colState: {},
  dataState: {},
  stylesState: {},
  currentText: '',
  currentStyles: defaulsStyles
}

const normalize = state => ({
  ...state,
  currentStyles: defaulsStyles,
  currentText: ''
})

export const initialState = storage('excel-state')
  ? normalize(storage('excel-state'))
  : defaultState
