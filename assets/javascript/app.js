$(document).ready(function(){
    $("#start-button").click(function(){
  // ----------------------------------------------------------------
   
        var number = 105;
      $("#start-button").on("click", start);   
      $("#submit").on("click", finish);  
      $("#restart").on("click", restart);   
  // ----------------------------------------------------------------
  // functions
      function start(){
          counter = setInterval(timer, 1000);
          showMe(".question");
          showMe(".answers");
          showMe("#submit");
          hideMe("#start-button");
          hideMe(".rules");
          showMe("#restart");
          showMe("#results");
      }
      function timer(){
        number-- // 
        $("#show-number").html("<h2>" + number + "</h2>" );
        if (number === 0){
          
          stop(); 
        }
      }
      function stop(){
          clearInterval(counter); 
          $("#results").show();
          $("#restart").show();
          $(".question").hide();
          $(".answers").hide();
          $("#submit").show();
      }
      function finish(){
          number = 1; 
          clearInterval(counter); 
          timer();
      }
  
      function restart(){
          number = 105;
          start();
      }
  
      function hideMe(e) {
          $(e).hide();
      }
      function showMe(e) {
          $(e).show();
      }
  
 
        start(); 
  });
  
  
})