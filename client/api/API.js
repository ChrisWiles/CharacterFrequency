import axios from 'axios'
import {characterFrequency} from './helpers'

export function frequency(string) {
   return axios.post('/frequency', {
      string: characterFrequency(string)
   })
}
