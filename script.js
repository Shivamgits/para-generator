const input = document.getElementById("numOfwords");
const container = document.querySelector(".container");
const getWords = (n) => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let data = "";
  
    
    for(let i =0;i<n;++i){
        const random = (Math.random() * 25).toFixed(0);
      data += letters[random];
    }

    return data;

}
//console.log(getWords());
const getData = () => {
  const  numOfWords = Number(input.value);
    const para = document.createElement("p");
    let text = "";
    for(let i = 0;i< numOfWords;++i){
        const random1 = (Math.random() * 15).toFixed(0);
        text += getWords(random1);
        text+= " ";
    }
    para.innerText = text;
    para.setAttribute("class" , "paras");
 container.append(para);
}