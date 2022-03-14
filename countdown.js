// ele指元素 timer指的就是倒计时的时间
function countdown(ele, timer) {
  let time = setInterval( () => {
    ele.innerText = timer;
    timer--;
    if (timer === 0) {
      // 时间为0，则停止定时器，以免减成负数。
      clearInterval(time);
      ele.innerText = '结束啦';
    } else {
      ele.innerText = timer;
    }
  }, 1000)
}
