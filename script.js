const SCRIPT_URL='https://script.google.com/macros/s/AKfycbzo_a5kwljUo_YaRJHYfBua55IinUgFBuwF0T6mheIPArzD6aIpyhHeYd8ubvOHxLyv/exec';
document.getElementById('f').addEventListener('submit',async e=>{
e.preventDefault();
const data={name:name.value,phone:phone.value,website:website.value,service:service.value,message:message.value};
try{
await fetch(URL,{method:'POST',mode:'no-cors',headers:{'Content-Type':'text/plain'},body:JSON.stringify(data)});
alert('Đã gửi thành công!');
e.target.reset();
}catch(err){alert('Lỗi gửi dữ liệu');}
});
