function countdown(ele, timer) {
  let time = setInterval( () => {
    ele.innerText = timer;
    timer--;
    if (timer === 0) {
      clearInterval(time);
      ele.innerText = '结束啦';
    } else {
      ele.innerText = timer;
    }
  }, 1000)
}
