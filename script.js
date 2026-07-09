const SCRIPT_URL = "DÁN_URL_EXEC_MỚI_VÀO_ĐÂY";

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
