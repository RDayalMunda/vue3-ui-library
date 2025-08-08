import './assets/main.css'
import RdmInput from './components/RdmInput.vue'
import RdmButton from './stories/RdmButton/RdmButton.vue'

export { RdmInput, RdmButton }

export default {
  install(app) {
    app.component('RdmInput', RdmInput)
    app.component('RdmButton', RdmButton)
  },
}
