console.log("Sharath")

let input_ele = document.getElementById("input_name").value
let sign_in_ele = document.getElementById("sign_in")

function sign_in() {
    let update_name = input_ele
    let verify_text = "HI" + " " + update_name + " " + "your account is under verifying";
    sign_in_ele.textContent = verify_text;

}

