const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1fb252a164mshfc91a499b4fda0ap14f54fjsn849a5c16819b',
		'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
	}
};


const random=()=>{
    const englishWords = [
        "ablaze",
        "accord",
        "adulate",
        "afflict",
        "aloof",
        "amass",
        "animate",
        "appease",
        "ascent",
        "assuage",
        "astound",
        "avarice",
        "avenge",
        "banal",
        "beckon",
        "belittle",
        "bemoan",
        "berserk",
        "besiege",
        "betrayal",
        "bewilder",
        "blunder",
        "boisterous",
        "broach",
        "cachet",
        "callous",
        "camaraderie",
        "candor",
        "capricious",
        "captivate",
        "carouse",
        "cavort",
        "chagrin",
        "chaotic",
        "cherish",
        "clamor",
        "clandestine",
        "cloying",
        "cogitate",
        "collude",
        "commotion",
        "compunction",
        "conciliate",
        "confound",
        "congeal",
        "conjure",
        "contrive",
        "convoke",
        "copious",
        "coyness",
        "craven",
        "crumble",
        "crusty",
        "debase",
        "debauch",
        "debilitate",
        "debacle",
        "decry",
        "defame",
        "defile",
        "deign",
        "demoralize",
        "denigrate",
        "denounce",
        "deride",
        "desecrate",
        "desist",
        "despondent",
        "destroy",
        "devastate",
        "didactic",
        "diffident",
        "dilute",
        "disarray",
        "disconcert",
        "discreet",
        "disdain",
        "disseminate",
        "dissipate",
        "divest",
        "dodge",
        "efface",
        "effervescent",
        "effrontery",
        "egoistic",
        "elate",
        "elicit",
        "emaciate",
        "enamor",
        "enervate",
        "enfranchise",
        "enhance",
        "enigma",
        "ensconce",
        "entice",
        "ephemeral",
        "equanimity",
        "evade",
        "evanescent",
        "evocative"
      ];

      const randomWord = englishWords[Math.floor(Math.random() * englishWords.length)];
      console.log(randomWord);  // Outputs a random word from the array

      fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word='+randomWord, options)
      .then(response => response.json())
      .then(response =>{
        
        
        definition2.innerHTML=response.definition
        word2.innerHTML=response.word
        


        
        
})
.catch(err => console.error(err));
      



      
}

const meaning=(input)=>
{
    fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word='+input, options)
	.then(response => response.json())
	.then(response =>{
        
        console.log(response)
        if(response.valid==true)
        {
          
        


        
        definition.innerHTML=response.definition
        word.innerHTML=response.word
        const text=response.definition
        sp.addEventListener("click", (e) => {
            e.preventDefault()
            speak(text);
           
             
            
        
            
            
            
        }
        )
      }
      else
      {
        definition.innerHTML="Please enter valid word";
        word.innerHTML="given word is not a valid word";

}
        

       
        


        
        
})
	.catch(err => console.error(err));


}


function speak(text) {
    // Check if the browser supports the SpeechSynthesis API
    if ('speechSynthesis' in window) {
      // Get the synthesis object
      const synthesis = window.speechSynthesis;
  
      // Create a new utterance object
      const utterance = new SpeechSynthesisUtterance(text);
  
      // Set the voice and rate properties
      utterance.voice = synthesis.getVoices().filter(function(voice) {
        return voice.name == 'Google US English';
      })[0];
      utterance.rate = 0.8;
  
      // Start speaking
      synthesis.speak(utterance);
    }
  }





    submit.addEventListener("click", (e) => {
        e.preventDefault()
    
        meaning(input.value);
        
        
    }
    )

   

    random();




