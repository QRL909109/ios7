/**
 * Created by Administrator on 2016/11/22.
 */
export default(Vue) => {
    Vue.directive('touch', {
        bind: function (el, binding, vnode) {
            var touchType = binding.arg; //传入的模式 longTap swipeRight swipeLeft swipeTop swipeDowm Tap
            var timeOutEvent = 0;
            var direction = '';
            //滑动处理
            var startX, startY;

            //返回角度
            function GetSlideAngle(dx, dy) {
                return Math.atan2(dy, dx) * 180 / Math.PI;
            }

            //根据起点和终点返回方向 1：向上，2：向下，3：向左，4：向右,0：未滑动
            function GetSlideDirection(startX, startY, endX, endY) {
                var dy = startY - endY;
                var dx = endX - startX;
                var result = 0;

                //如果滑动距离太短
                if (Math.abs(dx) < 2 && Math.abs(dy) < 2) {
                    return result;
                }

                var angle = GetSlideAngle(dx, dy);
                if (angle >= -45 && angle < 45) {
                    result = 'swiperight';
                } else if (angle >= 45 && angle < 135) {
                    result = 'swipeup';
                } else if (angle >= -135 && angle < -45) {
                    result = 'swipedown';
                }
                else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
                    result = 'swipeleft';
                }
                return result;
            }


            el.addEventListener('touchstart', function (ev) {
                startX = ev.touches[0].pageX;
                startY = ev.touches[0].pageY;

                //判断长按
                timeOutEvent = setTimeout(() =>{
                    timeOutEvent = 0 ;
                    if(touchType === 'press'){
                        binding.value()
                    }
                } , 500);

            }, false);

            el.addEventListener('touchmove' , function (ev) {
                clearTimeout(timeOutEvent)
                timeOutEvent = 0;
            });

            el.addEventListener('touchend', function (ev) {
                var endX, endY;
                endX = ev.changedTouches[0].pageX;
                endY = ev.changedTouches[0].pageY;
                direction = GetSlideDirection(startX, startY, endX, endY);

                clearTimeout(timeOutEvent)

                switch (direction) {
                    case 0:

                        break;
                    case 'swipeup':
                        if(touchType === 'swipeup'){
                            binding.value()
                        }
                        break;
                    case 'swipedown':
                        if(touchType === 'swipedown'){
                            binding.value()
                        }
                        break;
                    case 'swipeleft':
                        if(touchType === 'swipeleft'){
                            binding.value()
                        }
                        break;
                    case 'swiperight':
                        if(touchType === 'swiperight'){
                            binding.value()
                        }
                        break;
                    default:
                }
            }, false);
        }
    })
}