import axios from 'axios'
import {characterFrequency} from '../utils/helpers'

export function frequency(string) {
   return axios.post('/frequency', {
      string: characterFrequency(string)
   })
}
