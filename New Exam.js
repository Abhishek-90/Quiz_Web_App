function addQuestion(){
    var ques = document.createElement("input");
    ques.setAttribute("type","text");
    ques.setAttribute("placeholder","Enter Question.....");
    ques.setAttribute("class","questions");

    var ques_div = document.getElementById("Question");
    ques_div.append(ques);
}