var ques = document.getElementById('ques');
var res = document.getElementById('res');


function startConverting () {
                ques.innerHTML='';
                var finalTranscripts = '';
				if('webkitSpeechRecognition' in window){
					var speechRecognizer = new webkitSpeechRecognition();
					speechRecognizer.continuous = true;
					speechRecognizer.interimResults = true;
					speechRecognizer.lang = 'en-IN';
					speechRecognizer.start();

					

					speechRecognizer.onresult = function(event){
						var interimTranscripts = '';
						for(var i = event.resultIndex; i < event.results.length; i++){
							var transcript = event.results[i][0].transcript;
							transcript.replace("\n", "<br>");
							if(event.results[i].isFinal){
								finalTranscripts += transcript;
							}else{
								interimTranscripts += transcript;
							}
						}
						ques.innerHTML = finalTranscripts + '<span style="color:#999">' + interimTranscripts + '</span>';
                       
                        
                        res.innerHTML=showAnswer(finalTranscripts);
                        
                        
                        
					};
					speechRecognizer.onerror = function (event) {
					};
				}else{
					ques.innerHTML = 'Your browser is not supported. If google chrome, please upgrade!';
				}
            
            
    
			}

function showAnswer(ques){
    
    var q=["what is your name?","how are you?","where do you live?","are you married?","aur laude?"];
    var a=["Abhishek","Fine","Prayagraj","No","Bol Bhosdike"];
    
    //console.log();
    
    for(i=0;i<q.length;i++){
        
        if(ques==q[i]){
            return a[i];
        }
        
    }
    
    return "looking for the answer...";
}
