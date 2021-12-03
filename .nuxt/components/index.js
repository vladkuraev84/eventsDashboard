export { default as Logo } from '../../components/Logo.vue'
export { default as Navbar } from '../../components/Navbar.vue'
export { default as NavbarChats } from '../../components/NavbarChats.vue'
export { default as SearchInput } from '../../components/SearchInput.vue'
export { default as SwitchSize } from '../../components/SwitchSize.vue'
export { default as Burger } from '../../components/Burger/Burger.vue'
export { default as Home } from '../../components/Home/Home.vue'
export { default as HomeWelcome } from '../../components/Home/Welcome.vue'
export { default as MainHeader } from '../../components/MainHeader/MainHeader.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
