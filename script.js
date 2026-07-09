const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzt9flnRru-DxvIxDzk6qWutZuEVj7F978tmoOJs30cO-ZPnrygVDSDB84tw79dFqU/exec";

document.getElementById("f").addEventListener("submit", async function(e){

    e.preventDefault();

    const data = {
        name:name.value,
        phone:phone.value,
        website:website.value,
        service:service.value,
        message:message.value
    };

    try{

        await fetch(SCRIPT_URL,{
            method:"POST",
            mode:"no-cors",
            headers:{
                "Content-Type":"text/plain"
            },
            body:JSON.stringify(data)
        });

        alert("Đã gửi thành công");

        this.reset();

    }catch(err){

        console.log(err);

        alert("Không gửi được");

    }

});
