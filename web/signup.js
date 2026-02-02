let api = "http://48.8.4.43:8080/auth/signup";

async function submit() {
  let x = document.getElementById("n").value;
  let y = document.getElementById("e").value;
  let z = document.getElementById("p").value;

  let objData = {
    name: x,
    email: y,
    password: z
  };

  console.log("DTO:", JSON.stringify(objData, null, 2));
try{
  let res = await fetch(api, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(objData)
  });

  let data = await res.json();
  console.log("Response:", data);
} 
if (res.ok) {
    alert("signup success");
  }
}
catch (error) {
  console.log(error);
}