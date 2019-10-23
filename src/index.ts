import 'intersection-observer'
import lottie, { AnimationItem } from 'lottie-web'
import Postcard from './postcard'

class IndexPage {
  window: Window
  document: Document

  loadingAnimation: AnimationItem
  postcard: Postcard

  constructor(window: Window) {
    this.window = window
    this.document = window.document

    this.setup()
    this.start()

    this.resize()
    window.addEventListener('resize', this.resize)
  }

  setup = () => {
    // - setup loading
    this.loadingAnimation = lottie.loadAnimation({
      container: this.document.getElementById('loading-animation'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path:
        'https://assets4.lottiefiles.com/datafiles/rFr1le9E8lhiQjf/data.json'
    })

    // - setup postcard
    this.postcard = new Postcard(
      this.document.getElementById('postcard'),
      this.window
    )
  }

  start = () => {
    setTimeout(() => {
      this.document.getElementById('postcard').style.visibility = 'visible'
      this.loadingAnimation.destroy()
      this.document.querySelector('body').classList.remove('overflow-hidden')
      this.document.getElementById('loading-container').style.visibility =
        'hidden'
    }, 700)
  }

  resize = () => {
    // get navigation element height
    const navbar = this.document.getElementById('navbar')
    const navHeight = navbar.offsetHeight

    // offset the postcard by half the navHeight
    this.postcard.setTopOffset(navHeight / 2)
  }
}

;(function(window) {
  new IndexPage(window)
})(window)
