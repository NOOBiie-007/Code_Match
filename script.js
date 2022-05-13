
        // Random Generate number event handler-----Start
        const gbtn = document.getElementById('generatebtn');
        gbtn.addEventListener('click',function(){
           random_generate();
        })
        function random_generate(){
            const random = document.getElementById('randominput');
            var number = Math.floor(1000 + Math.random() * 9000);
            random.value =number; 
        }
        //Random Generate number event handler-----End

        var string ="";
        var str ="";
        // For 7
        const svn = document.getElementById('seven');
        svn.addEventListener('click',function(){
            final_string(7);     
        })
        // For 8
        const egt = document.getElementById('eight');
        egt.addEventListener('click',function(){
            final_string(8);
        })
        // For 9
        const nin = document.getElementById('nine');
        nin.addEventListener('click',function(){
            final_string(9);
        })
        // For 4
        const fur = document.getElementById('four');
        fur.addEventListener('click',function(){
            final_string(4);
        })
        // For 5
        const fiv = document.getElementById('five');
        fiv.addEventListener('click',function(){
            final_string(5);
        })
        // For 6
        const sx = document.getElementById('six');
        sx.addEventListener('click',function(){
            final_string(6);
        })
        // For 1
        const on = document.getElementById('one');
        on.addEventListener('click',function(){
            final_string(1);
        })
        // For 2
        const tw = document.getElementById('two');
        tw.addEventListener('click',function(){
            final_string(2);
        })
        // For 3
        const thre = document.getElementById('three');
        thre.addEventListener('click',function(){
            final_string(3);
        })
        // For 0
        const zro = document.getElementById('zero');
        zro.addEventListener('click',function(){
            final_string(0);
        })
        // For clear
        const clr = document.getElementById('clear');
        clr.addEventListener('click',function(){
            string="";
            document.getElementById('numberinput').value = string;
        })
        // function for input number
        function final_string(num){
            string=string+num;
            document.getElementById('numberinput').value = string;
        }

        // Submit button handler
        
        const submt = document.getElementById('sub');
        submt.addEventListener('click',function(){
            var n = document.getElementById('randominput').value;
            var m=parseInt(string);
            if(n==m){
                document.getElementById('numberinput').value ="";
                document.getElementById('randominput').value="";
                document.getElementById('true').style.display = 'block';
                document.getElementById('false').style.display = 'none';
                document.getElementById('try_number').innerText=3; 
            }
            else{
                var t=document.getElementById('try_number').innerText;
            t=t-1;
            document.getElementById('try_number').innerText=t;
            if(t==0){
                alert("Thank you,Now you can leave")
                window.location.reload();
            }
                document.getElementById('false').style.display = 'block';
                document.getElementById('true').style.display = 'none';
            }
            string="";
        })

        // Backspace button handle
        const dlt = document.getElementById('delete');
        dlt.addEventListener('click',function(){
            var wrd = document.getElementById('numberinput').value;
            console.log(wrd);
            for(let i=0;i<wrd.length-1;i++){
                str=str+wrd[i];
            }
            document.getElementById('numberinput').value = str;
            string=str;
            str="";

            console.log(string);     
        })
