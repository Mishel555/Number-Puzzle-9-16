

  let desk = document.getElementById('desk');
  let button = document.getElementsByTagName('button')[0];
  let itemCnt;
  function getVal(event) {
    itemCnt = event.target.value
  }
  button.addEventListener('click',function() {
    let arr = [];
    let numbers = [];

    for(let i = 0 ; i<itemCnt-1;i++){
      arr[i]=i+1;
    }
    let randomVal = function() {

      for(let i = 1;i <= itemCnt-1;i++){
        let val = Math.floor(Math.random()*arr.length)
        numbers[i-1]=arr[val];
        arr.splice(val, 1);
        // console.log(arr);
      }
      // console.log(arr);
      return numbers;
    }
    let res = randomVal();
    console.log(res);
    desk.innerHTML = '';
    if(itemCnt == 9 || itemCnt == 16){
      for(let i = 0; i < itemCnt ;i++){
        let div = document.createElement('div');
        div.classList.add('simpleDiv');
        div.innerHTML = res[i] || '';
        desk.appendChild(div);
      }
      let divs = document.getElementsByTagName('div');
      $(divs).mouseover(function() {
        $('body').css('cursor','pointer')
      })
      if(itemCnt==9){
        desk.style.width = "300px";
        desk.style.height = 'auto';
        ///////////////////////////
        for(let i =0;i<divs.length;i++){
          divs[i].addEventListener('click',function() {
            console.log(this.innerHTML);
            if(divs[i+1] && divs[i+1] != divs[3] && divs[i+1] != divs[6] && divs[i+1].innerHTML == ''){
              console.log('barev');
              divs[i+1].innerHTML=this.innerHTML;
              this.innerHTML = '';
            }else if (divs[i-1] && divs[i-1] != divs[5] && divs[i-1] != divs[2] && divs[i-1].innerHTML == '') {
              console.log('barev');
              divs[i-1].innerHTML=this.innerHTML;
              this.innerHTML = '';
            }else if (divs[i+3] && divs[i+3].innerHTML == '') {
              console.log('barev');
              divs[i+3].innerHTML=this.innerHTML;
              this.innerHTML = '';
            }else if (divs[i-3] && divs[i-3].innerHTML == '') {
              console.log('barev');
              divs[i-3].innerHTML=this.innerHTML;
              this.innerHTML = '';
            }
          })
        }
      }else {
        desk.style.width = "400px";
        desk.style.height = 'auto';
        ///////////////////////////
        for(let i =0;i<divs.length;i++){
          divs[i].addEventListener('click',function() {
            console.log(this.innerHTML);
            if(divs[i+1] && divs[i+1] != divs[4] && divs[i+1] != divs[8] && divs[i+1] != divs[12] && divs[i+1].innerHTML == ''){
              console.log('barev');
              divs[i+1].innerHTML=this.innerHTML;
              this.innerHTML = '';
            }else if (divs[i-1] && divs[i-1] != divs[3]&& divs[i-1] != divs[7]&& divs[i-1] != divs[11] && divs[i-1].innerHTML == '') {
              console.log('barev');
              divs[i-1].innerHTML=this.innerHTML;
              this.innerHTML = '';
            }else if (divs[i+4] && divs[i+4].innerHTML == '') {
              console.log('barev');
              divs[i+4].innerHTML=this.innerHTML;
              this.innerHTML = '';
            }else if (divs[i-4] && divs[i-4].innerHTML == '') {
              console.log('barev');
              divs[i-4].innerHTML=this.innerHTML;
              this.innerHTML = '';
            }
          })
        }
      }
    }else {
      alert('it can be 9 or 16')
      return
    }
    console.log(itemCnt);


  })
