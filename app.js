const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
const dropdown = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("button");
const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select");
const msg = document.querySelector(".msg");
for(let select of dropdown){
       for(currCode in countryList){
         let newOption = document.createElement("option");
          newOption.innerText=currCode;
          newOption.value=currCode;
          select.append(newOption);
          if(select.name==="from" && currCode==="USD"){
                newOption.selected="selected";
          } else if(select.name==="to" && currCode==="INR"){
              newOption.selected="selected";
          }
          select.addEventListener("change",(evt)=>{
             updateflag(evt.target);
          });
       }
}  
const updateflag=(element)=>{
  let currCode = element.value;
  let countryCode=countryList[currCode];
  console.log(countryCode);
  let newsrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src=newsrc;
}    
btn.addEventListener("click",async (evt)=>{
  evt.preventDefault();
  let amount = document.querySelector(".amount input");
  let amtval = amount.value;
     if(amtval==="" || amtval<1){
      amtval=1;
     }  
    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    let response = await fetch(URL);
     let data = await response.json();
     let rate = data[toCurr.value.toLowerCase()];
     let finalAmount = rate*amtval;
     msg.innerText = `${amtval} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
});

// const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
// const dropdown = document.querySelectorAll(".dropdown select");
// const btn = document.querySelector("button");
// const fromCurr=document.querySelector(".from select");
// const toCurr=document.querySelector(".to select");
// const msg = document.querySelector(".msg");
// for(let select of dropdown){
//     for(currCode in countryList){
//         let newOption = document.createElement("option");
//         newOption.innerText=currCode;
//         newOption.value=currCode;
//         if(select.name==="from" && currCode==="USD"){
//             newOption.selected="selected";
//         } else if(select.name==="to" && currCode==="INR"){
//             newOption.selected="selected";
//         }
//         select.append(newOption);
//         select.addEventListener("change",(evt)=>{
//             updateflag(evt.target);
//         });
//     }
// }
// const updateflag=(element)=>{
//    let currCode=element.value;
//    let countryCode = countryList[currCode];
//    console.log(countryCode);
//    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
//   let img = element.parentElement.querySelector("img");
//   img.src=newSrc;
// }
// btn.addEventListener("click",async(evt)=>{
//     evt.preventDefault();
//     let amount = document.querySelector(".amount input");
//     let amtval=amount.value;
//     if(amtval=="" || amtval<1){
//         amtval=1;
//         amount.value="1";
//     }
//     // console.log(fromCurr.value,toCurr.value);
    // const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
//     let response = await fetch(URL);
//     let data = await response.json();
//     let rate = data[toCurr.value.toLowerCase()];
//     let finalAmount = amtval*rate;
//     msg.innerText=`${amtval} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
// });

















