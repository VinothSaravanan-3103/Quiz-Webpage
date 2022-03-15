var pos=0,board,qus,choices,A,B,C,cor=0;
        var questions=[
           ["Main circuit board in a computer is", "Decoder","Mother board","mouse","B"],
           ["shortcut of paste","CTRL+A","CTRL+B","CTRL+V","C"],
           ["20+50","70","67","80","A"],
           ["100/10","80","10","30","B"]
        ];

        function displayQuestion()
        {
            board=document.getElementById("board");
            if(pos>=questions.length)
            {
                board.innerHTML="<h2>YOU GOT  "+ cor +" of "+questions.length+"<h2>";
                document.getElementById("status").innerHTML="QUIZ completed";
                pos=0;
                cor=0;
                return false;
            }
            document.getElementById("status").innerHTML="Question  "+(pos+1)+"  of  "+ questions.length;
            qus=questions[pos][0];
            A=questions[pos][1];
            B=questions[pos][2];
            C=questions[pos][3];
            board.innerHTML="<h3>"+qus+"</h3>";
            board.innerHTML+="<label><input type='radio' name='choices' value='A'>"+A+"</label>";
            board.innerHTML+="<label><input type='radio' name='choices' value='B'>"+B+"</label>";
            board.innerHTML+="<label><input type='radio' name='choices' value='C'>"+C+"</label>";
            board.innerHTML+="<button onclick='checkanswer()'> SUBMIT Answer </button>";
        }
        function checkanswer()
        {
            var choice;
            choices=document.getElementsByName("choices");
            for(var i=0;i<choices.length;i++)
            {
                if(choices[i].checked)
                {
                    choice=choices[i].value;
                }
            }
            if(choice==questions[pos][4])
            {
                cor++;
            }   
            pos++; 
            displayQuestion();
         }