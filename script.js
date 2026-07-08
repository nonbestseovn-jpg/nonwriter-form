const SCRIPT_URL='https://script.google.com/macros/s/AKfycbxR2d-ICiOh3SoMkglZOf8dk_N0_tkNhKgeAfkpHUB1OO3jzWrfU2_febWcjn41-Aqq/exec';
document.getElementById('f').addEventListener('submit',async e=>{
e.preventDefault();
const data={name:name.value,phone:phone.value,website:website.value,service:service.value,message:message.value};
try{
await fetch(SCRIPT_URL,{method:'POST',mode:'no-cors',headers:{'Content-Type':'text/plain'},body:JSON.stringify(data)});
alert('Đã gửi thành công!');
e.target.reset();
}catch(err){alert('Lỗi gửi dữ liệu');}
});
