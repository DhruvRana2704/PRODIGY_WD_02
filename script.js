let time=document.querySelector(".showTime")
let elements=document.querySelector(".elements")
let startbtn=document.querySelector(".start");
let resetbtn=document.querySelector(".reset");
let lapbtn=document.querySelector(".lap");
let stopbtn=document.querySelector(".stop");
let sec=document.getElementById("sec")
let ms=document.getElementById("ms")
let myElement=document.body.childNodes[3];
ms_val=0;
sec_val=0;
min_val=0;
hr_val=0;

let myInterval;

function change(){
    ms_val+=10;
    ms.innerText=` . ${ms_val.toString().padStart(2,0)}`;
    if(ms_val>=90)
    {
        ms_val=0;
        sec_val+=1
        sec.innerText=` : ${sec_val.toString().padStart(2,0)}`;
        if(sec_val>=59)
        {
            sec_val=0;
            min_val+=1;
            min.innerText=` : ${min_val.toString().padStart(2,0)}`;
            if(min_val>=59)
            {
                min_val=0;
                hr_val+=1;
                hr.innerText=`${hr_val.toString().padStart(2,0)}`;
            }
        }

    }
}

startbtn.addEventListener("click",()=>{
if(startbtn.innerText==="Start")
{
    startbtn.innerText="Stop"
    startbtn.classList.add("stop")
    startbtn.classList.remove("start")
    myInterval=setInterval(change,100);
}

else if(startbtn.innerText==="Stop")
{
    startbtn.innerText="Start"
    startbtn.classList.add("start")
    startbtn.classList.remove("stop")
    
    clearInterval(myInterval);
}

})

resetbtn.addEventListener('click',()=>
{

ms_val=0;
sec_val=0;
min_val=0;
hr_val=0;

ms.innerText=`. ${ms_val.toString().padStart(2,0)}`
sec.innerText=`: ${sec_val.toString().padStart(2,0)}`
min.innerText=` : ${min_val.toString().padStart(2,0)}`
hr.innerText=` ${hr_val.toString().padStart(2,0)}`
document.body.childNodes[3].innerHTML=""
myElement.style.opacity=0;
n=1;
})


let n=1;
lapbtn.addEventListener('click',()=>{  
    let element=`Lap ${n} \xa0\xa0\xa0 ${min_val.toString().padStart(2,0)} : ${min_val.toString().padStart(2,0)} : ${sec_val.toString().padStart(2,0)} . ${ms_val.toString().padStart(2,0)}`
    let newDiv=document.createElement("div");
    let newContent= document.createTextNode(element)
    newDiv.style.marginTop="1rem";
    newDiv.style.backgroundColor="#FFDDD2";
    newDiv.style.color="#006D77";
    newDiv.style.padding="10px";
    newDiv.style.borderRadius="30px";
    if(window.matchMedia("(max-width: 700px)").matches)
        {
            newDiv.style.fontSize="5vw";
            
        }

    else{
    newDiv.style.fontSize="2vw";
    }
    myElement.style.opacity=1;
    newDiv.appendChild(newContent);
    document.body.childNodes[3].appendChild(newDiv);
    n++;
})
