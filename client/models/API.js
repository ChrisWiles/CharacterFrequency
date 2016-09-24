import axios from 'axios'
import {characterFrequency} from './helpers'

export function frequency(string) {
  console.log("frequency", characterFrequency(string))
   return axios.post('/frequency', {string})
}
