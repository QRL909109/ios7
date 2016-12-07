/**
 * Created by Administrator on 2016/11/19.
 */
import moment from 'moment'
moment.locale('zh-cn');
export default(Vue) => {
    Vue.filter('moment' , function(value , formatString){
        formatString = formatString || 'YYYY-MM-DD HH:mm:ss'
        return moment(value).format(formatString)
    })
}
