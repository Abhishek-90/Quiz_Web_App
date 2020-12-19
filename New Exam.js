function addQuestion(){
    var ques = document.createElement("input");
    ques.setAttribute("type","text");
    ques.setAttribute("placeholder","Enter Question.....");
    ques.setAttribute("class","questions");
    var ques_ans_div = document.getElementById("Question-Answer");

    ques_ans_div.append(ques);

    var array = ["checkbox","radio"/*,"text"*/];
    var text_array = ["Multiple Ans", "Single Ans"/*, "Paragraph"*/]

    var sel = document.createElement("select");
    sel.setAttribute("class","ans");
    
    var option = document.createElement("option");
    option.setAttribute("disabled","");
    option.setAttribute("selected","");
    option.text="Answer Type";
    sel.appendChild(option);

    for(var i=0;i<array.length;i++){
        var option = document.createElement("option");
        option.setAttribute("value",array[i]);
        option.text = text_array[i];
        sel.appendChild(option);
    }

    ques_ans_div.appendChild(sel);

    var option_1 = document.createElement("input");
    option_1.setAttribute("type","text");
    option_1.setAttribute("class","answer");

    var option_2 = document.createElement("input");
    option_2.setAttribute("type","text");
    option_2.setAttribute("class","answer");

    var option_3 = document.createElement("input");
    option_3.setAttribute("type","text");
    option_3.setAttribute("class","answer");
    
    var option_4 = document.createElement("input");
    option_4.setAttribute("type","text");
    option_4.setAttribute("class","answer");

    ques_ans_div.append(option_1);
    ques_ans_div.append(option_2);
    ques_ans_div.append(option_3);
    ques_ans_div.append(option_4);

}