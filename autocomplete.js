let results = document.querySelector('.search-results');
let loc = document.querySelector('.search');
const res=()=>{
    let details =[];
    if(loc.value.length > 0){
        results.style.display = 'unset';
    details = cities.filter((key) =>{
        return key.toLowerCase().includes(loc.value.toLowerCase());
    })
    console.log(details);
    
    align(details);
}else {
    results.style.display = 'none';
}
}
const select =(e)=>{
    loc.value = e.innerHTML;
    results.style.display = 'none';
}
function align(details){
    const constant = details.map((list)=>{
        return `<pre onclick="select(this)"><i class="fa-solid fa-magnifying-glass"> </i>${list}</pre>`;
    });
    results.innerHTML = `<ul>${constant.join('')}</ul>`;
   
}
