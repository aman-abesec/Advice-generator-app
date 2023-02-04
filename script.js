function main() {
  const apiLink='https://api.adviceslip.com/advice';
  var advId=document.getElementById('advice-id');
  var adv=document.getElementById('advice');
  var fetchData=fetch(apiLink);
  fetchData.then((data)=>{
    return data.json()
  }).then((data)=>{
    advId.innerHTML="Advice #"+data.slip.id;
    adv.innerHTML="\""+data.slip.advice+"\"";
  })
}
main();
