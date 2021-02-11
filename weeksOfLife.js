function weekBoxes(){
        var doBirth = document.getElementById('year').value + "-" + document.getElementById('month').value + "-" + document.getElementById('date').value;
        var today = new Date();
        var dobMili = new Date(doBirth);
        var weeks = Math.round((today - dobMili)/604800000);
        var i, j = 1, k = 0, output = "";
        for (i = 1; i < 4265; i++){
          if(i < weeks){
            if(i % 52 == 0){
              j++;
              output += '<div class="box week"></div>' + '<br/>';
              if (j % 5 == 0){
                k += 5;
                output += '<div class="years">' + k + '</div>';
              }
            }
            else{
              output += '<div class="box week"></div>';
            }
          }
          else{
            if(i % 52 == 0){
              j++;
              output += '<div class="box"></div>' + '<br/>';
              if (j % 5 == 0){
                k += 5;
                output += '<div class="years">' + k + '</div>';
              }
            }
            else{
              output += '<div class="box"></div>';
            }
          }
        }
        document.getElementById('boxy').innerHTML = output;
      }
