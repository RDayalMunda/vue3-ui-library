import RdmInput from './components/RdmInput.vue'
import RdmButton from './components/RdmButton.vue'

export { RdmInput, RdmButton }

export default {
  install(app) {
    app.component('RdmInput', RdmInput)
    app.component('RdmButton', RdmButton)
  },
}
