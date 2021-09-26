import Vue from 'vue'
import { Button,Form,FormItem,Input,Icon, Divider, Message} from 'element-ui'


Vue.use( Button )
Vue.use( Form )
Vue.use( Input )
Vue.use( FormItem )
Vue.use( Icon )
Vue.use( Divider )

Vue.prototype.$message = Message
Vue.component(Message.name, Message)