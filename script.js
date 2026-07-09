const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyWdXGw5bJQOwh-QA9vUA6DN7D_fsnU5Sb5a8HFaBHb1n12WL3_J9siYlk93sGt7Xjc/exec";

const form = document.getElementById("f");

form.addEventListener("submit", async function (e) {

    e.preventDefault();

    const data = {
        name: document.getElementById("name").value.trim(),
        phone: document.getElementById("phone").value.trim(),
        website: document.getElementById("website").value.trim(),
        service: document.getElementById("service").value.trim(),
        message: document.getElementById("message").value.trim()
    };

    try {

        const res = await fetch(SCRIPT_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await res.json();

        if(result.success){

            alert("Đăng ký thành công!");

            form.reset();

        }else{

            alert(result.error);

        }

    } catch (err) {

        console.log(err);

        alert("Không kết nối được Apps Script");

    }

});
