function displayData(n){
    result.value+=n
}
function evaluateValue(){
    result.value=eval(result.value)
}
function clearValue(){
    result.value=""
}
function deletevalue(){
  result.value=result.value.slice(0,-1)
}