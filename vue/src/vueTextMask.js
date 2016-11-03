import createTextMaskInputElement from '../../core/src/createTextMaskInputElement.js'

export default {
  textMaskInputElement: null,

  inputHandler({target: {value}}) {
    return this.textMaskInputElement.update(value)
  },

  bind(el, binding, vnode) {
    let self = binding.def

    let options = binding.value || {}
    options.inputElement = el
    self.textMaskInputElement = createTextMaskInputElement(options)

    self.inputHandler = self.inputHandler.bind(self);
    el.addEventListener('input', self.inputHandler);
  },

  unbind(el, binding, vnode) {
    let self = binding.def;
    
    el.removeEventListener('input', self.inputHandler);
  }
}
