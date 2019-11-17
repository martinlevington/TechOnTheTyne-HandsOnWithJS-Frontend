import Vue from 'vue'
import UIKit from 'uikit/dist/js/uikit-core'
import Icons from 'uikit/dist/js/uikit-icons'

UIKit.use(Icons)
UIKit.container = '#__nuxt'

Vue.prototype.$uikit = UIKit