
window.onload = () =>{
    //BT AT value
    let AtBtTime = {
        At : document.querySelector('#fcfs-time-2'),
        Bt : document.querySelector('#fcfs-time-1')
    }

    let AddRunBtn = {
        Add : document.querySelector('#fcfs-add'),
        Run : document.querySelector('#fcfs-run')
    }
    let ganntChart = document.querySelector('#fsfc-gannt-chart');
    let tBody = document.querySelector('#simu-table tbody')
    let atCount = -1;

    //creat tr
    function addtr(td1,td2,td3){
        let content =  `
        <td>${td1}</td>
        <td>${td2}</td>
        <td>${td3}</td>
    `
      return content;
    }

    AtBtTime.At.addEventListener('change',()=>{
        if(AtBtTime.At.value <= 0){
            AtBtTime.At.value = "0";
        }
        if(AtBtTime.At.value > 100){
            AtBtTime.At.value = "100";
        }
    })
    AddRunBtn.Add.addEventListener('click',()=>{
        let AtBtVal = {
            AtVal : AtBtTime.At.value,
            BtVal : AtBtTime.Bt.value, 
        }
       if(AtBtVal.AtVal && AtBtVal.BtVal && AtBtVal.AtVal>atCount)
       {
        let x = addtr("P"+ ++tBody.childElementCount,AtBtVal.BtVal,AtBtVal.AtVal);
        let tr = document.createElement('tr');
        tr.innerHTML = x;
        tBody.appendChild(tr);
        atCount = AtBtVal.AtVal;
        AtBtTime.At.value = "";
        AtBtTime.Bt.value = "";
       }
      
    })
    AddRunBtn.Run.addEventListener('click',()=>{
       setTimeout(() => {
        ganntChart.style.cssText = "display:block;"
       }, 2000);
       let fcfsContainer = document.querySelector('#fcfs-block-container');
       let Bt_string= []; 
       let At_string = [];
       let gapLenght = [];
       //get BT value
      for(let i = 1;i<=tBody.childElementCount;i++)
      {
        Bt_string.push(tBody.childNodes[i].childNodes[3].innerHTML)
      }
       //get AT value
      for(let i = 1;i<=tBody.childElementCount;i++)
      {
        At_string.push(tBody.childNodes[i].childNodes[5].innerHTML)
      }
      //cpu lenght
      //numbbber array
      let bt_values = Bt_string.map(Number);
      let at_values = At_string.map(Number);
      gapLenght[0] = bt_values[0];
      let sum = at_values[0]+bt_values[0];
      for(let i = 0;i<tBody.childElementCount-1;i++)
      {
        if(sum<at_values[i+1])
        {
            gapLenght.push(at_values[i+1]-sum);
            gapLenght.push(bt_values[i+1]);
            sum = sum + at_values[i+1]+bt_values[i+1];
        }
        else
        {
            gapLenght.push(bt_values[i+1]);
            sum = sum + bt_values[i+1];
        }
      }
      var gapSum = gapLenght.reduce((a,b)=>{
          return a+b;
      },0)
    for(let i = 0;i<gapLenght.length;i++)
    {
      let fcfsWid = (gapLenght[i]*100)/gapSum;
      let fcfsDiv = document.createElement('div');
      fcfsDiv.setAttribute("class","fcfs-block")
      fcfsDiv.style.width = fcfsWid + "%";
      fcfsContainer.appendChild(fcfsDiv);
    }
    })
    window.addEventListener('click',()=>{
        ganntChart.style.cssText = "diplay:none;"
    })
    
}