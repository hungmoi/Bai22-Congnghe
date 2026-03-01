function check(button, correct){
    let result = document.getElementById("result");
    if(correct){
        result.innerHTML = "Đúng!";
        result.style.color = "lightgreen";
    } else {
        result.innerHTML = "Sai rồi!";
        result.style.color = "red";
    }
}
