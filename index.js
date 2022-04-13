document.getElementById('button-search').addEventListener('click', ()=>{
    const inputText = document.getElementById('input-text').value;
    document.getElementById('input-text').value=''
    url=`https://openapi.programming-hero.com/api/phones?search=${inputText}`;
    fetch(url)
    .then(res => res.json())
    .then(data =>loadPhone(data.data))
    
 })
 
 const loadPhone =(phones)=>{
  const container = document.getElementById('phone-container');
  container.innerHTML =''
   phones.forEach(phone =>{
     
       const div = document.createElement("div")
       div.classList.add('col');
       div.innerHTML =`
         <div class="col">
         <div class="card m-3">
           <img width="90%" height=""src="${phone.image}" class="card-img-top" alt="..."> 
           <div class="card-body">
             <h5 class="card-title">${phone.phone_name}</h5>
             <p class="card-text">${phone.brand}</p>
             <button onclick="showDetails('${phone.slug}')">Show Details</button>
           </div>
         </div>
     </div>
     `
     container.appendChild(div);
   })
 }
 
 const showDetails =(detail) => {
  const url =`https://openapi.programming-hero.com/api/phone/${detail}`
  fetch(url)
  .then(res =>res.json())
  .then(data => singlePhoneDetails(data.data))
 }
 
 const singlePhoneDetails = (details) => {
     
    const singleContain = document.getElementById('singlePhone');
    singleContain.textContent =''
    const div = document.createElement('div');
    div.innerHTML=`
    <img src="${details.image}" >
    <h4>${details.name}</h4>
    <h5>Release Date : ${details.releaseDate}</h5>
    <p>ChipSet : ${details.mainFeatures.chipSet}</p>
    <p>Display Size : ${details.mainFeatures.displaySize}</p>
    <p>Memory : ${details.mainFeatures.memory}</p>
    <p>Storage : ${details.mainFeatures.storage}</p>
    
    
    
    `
    singleContain.appendChild(div)
   
 
 }