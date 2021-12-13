
function checkExt() {
 if(document.mainForm.myfile.value.lastIndexOf(".txt")==-1) {
    alert("Please upload only .txt extention file");
    return false;
 }
}