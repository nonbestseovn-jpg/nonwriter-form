const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxR2d-ICiOh3SoMkglZOf8dk_N0_tkNhKgeAfkpHUB1OO3jzWrfU2_febWcjn41-Aqq/exec";

document.getElementById("f").addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    website: document.getElementById("website").value,
    service: document.getElementById("service").value,
    message: document.getElementById("message").value
  };

  try {
    const response = await fetch(SCRIPT_URL, {
      method: "POST",
      redirect: "follow",
      headers: {
        "Content-Type": "text/plain;charset=utf-8"
      },
      body: JSON.stringify(data)
    });

    console.log(response);

    alert("Đã gửi thành công!");
    document.getElementById("f").reset();

  } catch (error) {
    console.error(error);
    alert("Không gửi được dữ liệu.");
  }
});
