window.onload = () => {
    let button1 = document.querySelector("#btn");
  
    //let calculated = calculateBMI();
    button1.addEventListener("click", calculateBMI);

    let button2 = document.querySelector("#btn1");
    button2.addEventListener("click", Diabeticbefore);
    //button.addEventListener("click", Guidelines(calculated));

    let button3 = document.querySelector("#btn2");
    button3.addEventListener("click", Diabeticafter);

	let button4 = document.querySelector("#btn3");
    button4.addEventListener("click", BloodPressureU);
   
};



  
function calculateBMI() {
  
    
    let height = parseInt(document
            .querySelector("#height").value);
  
    
    let weight = parseInt(document
            .querySelector("#weight").value);
    
  
    let result = document.querySelector("#result");
  
    
    if (height === "" || isNaN(height)) 
        result.innerHTML = "ಮಾನ್ಯವಾದ ಎತ್ತರವನ್ನು ನಮೂದಿಸಿ";
  
    else if (weight === "" || isNaN(weight)) 
        result.innerHTML = "ಮಾನ್ಯವಾದ ತೂಕವನ್ನು ನಮೂದಿಸಿ";
  
   
    else {
  
        let bmi = (weight / ((height * height) / 10000)).toFixed(2);
        if (bmi < 18.6)
       
        result.innerHTML =
            `ಕಡಿಮೆ ತೂಕ : <span>${bmi}</span> <br/>
           ಮಾರ್ಗಸೂಚಿಗಳು : ಒಬ್ಬ ವ್ಯಕ್ತಿಯು ಕಡಿಮೆ ತೂಕವನ್ನು ಹೊಂದಿದ್ದರೆ, ತೂಕವನ್ನು ಹೆಚ್ಚಿಸಲು ವಿವಿಧ ವಿಧಾನಗಳಿವೆ.1. ವ್ಯಕ್ತಿಯು ತಿಂಡಿಗಳನ್ನು ಸೇರಿಸುವುದು, ಹೆಚ್ಚುವರಿ ಆಹಾರಗಳನ್ನು ಸೇರಿಸುವುದು ಅಥವಾ ಖಾಲಿ ಕ್ಯಾಲೊರಿಗಳನ್ನು ತಪ್ಪಿಸುವಂತಹ ಆಹಾರ ಪದ್ಧತಿಯನ್ನು ಸುಧಾರಿಸಬಹುದು2. ವಾರದಲ್ಲಿ ಕನಿಷ್ಠ ಮೂರು-ನಾಲ್ಕು ಬಾರಿ ತೂಕ ತರಬೇತಿ, ಇದು ಸ್ನಾಯುವಿನ ದ್ರವ್ಯರಾಶಿಯನ್ನು ಪಡೆಯಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.3. ಸ್ನಾಯುಗಳ ಬೆಳವಣಿಗೆಗೆ ಸಹಾಯ ಮಾಡಲು ಹೆಚ್ಚು ಪ್ರೋಟೀನ್ಗಳನ್ನು ಸೇವಿಸಿ`;
        
        
        else if (bmi >= 18.6 && bmi < 24.9) 
            result.innerHTML = 
                `ಸಾಮಾನ್ಯ ತೂಕ  : <span>${bmi}</span>`;
  
        else result.innerHTML =
            `ಅಧಿಕ ತೂಕ : <span>${bmi}</span>`;
    
    }
    
    
}

function Diabeticbefore (){
   // document.write("ಉಪಹಾರ ಸೇವಿಸುವ ಮೊದಲು")
   let result = document.querySelector("#resultdia");
    let reading = parseInt(document.querySelector("#reading").value);
    if(reading<80)
            result.innerHTML = 
			`ನಿಮ್ಮ ರಕ್ತದಲ್ಲಿನ ಸಕ್ಕರೆ ಮಟ್ಟವು kadimeವಾಗಿದೆ`;
           // document.write("ನಿಮ್ಮ ರಕ್ತದಲ್ಲಿನ ಸಕ್ಕರೆಯ ಮಟ್ಟವು ಕಡಿಮೆಯಾಗಿದೆ");
    else if(reading > 126)
    result.innerHTML = `ನಿಮ್ಮ ರಕ್ತದಲ್ಲಿನ ಸಕ್ಕರೆ ಮಟ್ಟವು ಅಧಿಕವಾಗಿದೆ : <span>${reading}</span><br/>
	`;
           // document.write("ನಿಮ್ಮ ರಕ್ತದಲ್ಲಿನ ಸಕ್ಕರೆ ಮಟ್ಟವು ಅಧಿಕವಾಗಿದೆ");
    else
    result.innerHTML = "ನಿಮ್ಮ ರಕ್ತದಲ್ಲಿನ ಸಕ್ಕರೆ ಪ್ರಮಾಣವು ಸಾಮಾನ್ಯವಾಗಿದೆ";
       // document.write("ನಿಮ್ಮ ರಕ್ತದಲ್ಲಿನ ಸಕ್ಕರೆ ಪ್ರಮಾಣವು ಸಾಮಾನ್ಯವಾಗಿದೆ");

    
}


function Diabeticafter(){
    let result = document.querySelector("#resultdiaafter");
    let reading = parseInt(document.querySelector("#areading").value);
    if(reading < 170)
        result.innerHTML = `ನಿಮ್ಮ ರಕ್ತದಲ್ಲಿನ ಸಕ್ಕರೆಯ ಮಟ್ಟವು ಕಡಿಮೆಯಾಗಿದೆ 
		ನಿಮ್ಮ ರಕ್ತದಲ್ಲಿನ ಸಕ್ಕರೆಯ ಮಟ್ಟವು ಕಡಿಮೆಯಾಗಿದೆ : <span>${reading}</span><br/>  
			ಹೈಪೊಗ್ಲಿಸಿಮಿಯಾ (ಕಡಿಮೆ ರಕ್ತದ ಸಕ್ಕರೆ) ಅಮೇರಿಕನ್ ಡಯಾಬಿಟಿಸ್ ಸೊಸೈಟಿಯು ಕಡಿಮೆ ರಕ್ತದ ಸಕ್ಕರೆಯ ಚಿಕಿತ್ಸೆಗಾಗಿ 15-15 ನಿಯಮವನ್ನು ಶಿಫಾರಸು ಮಾಡುತ್ತದೆ. ಇದನ್ನು ಈ ಕೆಳಗಿನಂತೆ ಪಟ್ಟಿ ಮಾಡಲಾಗಿದೆ 
			ಎ. ನಿಮ್ಮ ರಕ್ತದಲ್ಲಿನ ಸಕ್ಕರೆಯನ್ನು ಹೆಚ್ಚಿಸಲು 15 ಗ್ರಾಂ ಕಾರ್ಬೋಹೈಡ್ರೇಟ್‌ಗಳನ್ನು ತಿನ್ನಿರಿ ಅಥವಾ ಕುಡಿಯಿರಿ. 
			ಬಿ. 15 ನಿಮಿಷಗಳ ನಂತರ, ನಿಮ್ಮ ರಕ್ತದಲ್ಲಿನ ಸಕ್ಕರೆಯನ್ನು ಪರೀಕ್ಷಿಸಿ. 
			ಸಿ. ಇದು ಇನ್ನೂ 70 mg/dL ಗಿಂತ ಕಡಿಮೆಯಿದ್ದರೆ, ಇನ್ನೊಂದು 15 ಗ್ರಾಂ ಕಾರ್ಬೋಹೈಡ್ರೇಟ್‌ಗಳನ್ನು ಹೊಂದಿರಿ.  
			ಡಿ. ನಿಮ್ಮ ರಕ್ತದ ಸಕ್ಕರೆ ಕನಿಷ್ಠ 70 mg/dL ಆಗುವವರೆಗೆ ಪುನರಾವರ್ತಿಸಿ. 
			
			15-15 ನಿಯಮ ಕೆಲಸ ಮಾಡದಿದ್ದರೆ, ವೈದ್ಯರಿಗೆ ಭೇಟಿ ನೀ`;
    else if(reading > 220)
        result.innerHTML = `ನಿಮ್ಮ ರಕ್ತದಲ್ಲಿನ ಸಕ್ಕರೆ ಮಟ್ಟವು ಅಧಿಕವಾಗಿದೆ : <span>${reading}</span><br/>
		ಹೈಪರ್ಗ್ಲೈಸೀಮಿಯಾ (ಅಧಿಕ ರಕ್ತದ ಸಕ್ಕರೆ)

ಅಧಿಕ ರಕ್ತದ ಸಕ್ಕರೆ ಹೊಂದಿರುವ ಯಾರಾದರೂ ತಮ್ಮ ಸಕ್ಕರೆ ಮಟ್ಟವನ್ನು ನೈಸರ್ಗಿಕವಾಗಿ ಕಡಿಮೆ ಮಾಡಲು ಈ ಕೆಳಗಿನವುಗಳನ್ನು ಮಾಡಿ ಎಂದು ವಿಶ್ವ ಆರೋಗ್ಯ ಸಂಸ್ಥೆ ಶಿಫಾರಸು ಮಾಡುತ್ತದೆ

ಎ. ಮಧ್ಯಮ ತೂಕವನ್ನು ಕಾಪಾಡಿಕೊಳ್ಳಲು ನಿಯಮಿತವಾಗಿ ವ್ಯಾಯಾಮ ಮಾಡಿ, ಇದು ನಿಮ್ಮ ಸ್ನಾಯುಗಳು ಚಲನೆಗೆ ರಕ್ತದಲ್ಲಿನ ಸಕ್ಕರೆಯನ್ನು ಬಳಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.
ಬಿ. ಸಾಕಷ್ಟು ಫೈಬರ್ ಅನ್ನು ತಿನ್ನುವುದು ರಕ್ತದಲ್ಲಿನ ಸಕ್ಕರೆಯನ್ನು ನಿಯಂತ್ರಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ
ಸಿ. ಸಾಕಷ್ಟು ನೀರು ಕುಡಿಯಿರಿ ಮತ್ತು ಹೈಡ್ರೇಟೆಡ್ ಆಗಿರಿ
ಡಿ. ನಿಮ್ಮ ಒತ್ತಡದ ಮಟ್ಟವನ್ನು ನಿರ್ವಹಿಸಲು ಪ್ರಯತ್ನಿ`;
    else
        result.innerHTML = `ನಿಮ್ಮ ರಕ್ತದಲ್ಲಿನ ಸಕ್ಕರೆ ಪ್ರಮಾಣವು ಸಾಮಾನ್ಯವಾಗಿದೆ`;
}


function BloodPressureU(){
    let result = document.querySelector("#resultbpu");
    let upper_reading = parseInt(document.querySelector("#bpu").value);
    let lower_reading = parseInt(document.querySelector("#bpl").value);
    if(upper_reading>120)
        result.innerHTML = `ನಿಮ್ಮ ರಕ್ತದೊತ್ತಡ ಹೆಚ್ಚಾಗಿದೆ <span>${upper_reading}</span><br/>
		ಅಧಿಕ ರಕ್ತದೊತ್ತಡದ ಚಿಕಿತ್ಸೆಗಾಗಿ,

ಎ. ಕಡಿಮೆ ಉಪ್ಪಿನೊಂದಿಗೆ ಹೃದಯ-ಆರೋಗ್ಯಕರ ಆಹಾರವನ್ನು ಸೇವಿಸುವುದು.
ಬಿ. ನಿಯಮಿತ ದೈಹಿಕ ಚಟುವಟಿಕೆಯನ್ನು ಪಡೆಯುವುದು
ಸಿ. ಆರೋಗ್ಯಕರ ತೂಕವನ್ನು ಕಾಪಾಡಿಕೊಳ್ಳುವುದು ಅಥವಾ ತೂಕವನ್ನು ಕಳೆದುಕೊಳ್ಳುವುದು
ಡಿ. ಆಲ್ಕೋಹಾಲ್ ಅನ್ನು ಮಿತಿಗೊಳಿಸುವುದು
ಇ. ಧೂಮಪಾನ ಮಾಡಬೇಡಿ
f. ಪ್ರತಿದಿನ 7 ರಿಂದ 9 ಗಂಟೆಗಳ ನಿದ್ದೆ ಪಡೆಯುವು`;
    else if(lower_reading<80)
        result.innerHTML = `ನಿಮ್ಮ ರಕ್ತದೊತ್ತಡ ಕಡಿಮೆಯಾಗಿದೆ <span>${lower_reading}</span><br/>
		ಕಡಿಮೆ ರಕ್ತದೊತ್ತಡದ ಚಿಕಿತ್ಸೆಗಾಗಿ,
		ಎ. ಹೆಚ್ಚು ಉಪ್ಪು ಇರುವ ಆಹಾರವನ್ನು ಸೇವಿಸಿ
		ಬಿ. ಆಲ್ಕೊಹಾಲ್ಯುಕ್ತ ಪಾನೀಯಗಳನ್ನು ತಪ್ಪಿಸಿ
		ಸಿ. ಹೆಚ್ಚು ನೀರು ಕುಡಿ
		ಡಿ. ಹಠಾತ್ ಸ್ಥಾನ ಬದಲಾವಣೆಗಳನ್ನು ತಪ್ಪಿ`;
    else
        result.innerHTML = `ನಿಮ್ಮ ರಕ್ತದೊತ್ತಡ ಸಾಮಾನ್ಯವಾಗಿದೆ`;
    
}


//function Guidelines(bmi){
    
  //  let result = document.querySelector("#result");
    //if (bmi < 18.6) result.innerHTML = `ಒಬ್ಬ ವ್ಯಕ್ತಿಯು ಕಡಿಮೆ ತೂಕವನ್ನು ಹೊಂದಿದ್ದರೆ, ತೂಕವನ್ನು ಹೆಚ್ಚಿಸಲು ವಿವಿಧ ವಿಧಾನಗಳಿವೆ.1. ವ್ಯಕ್ತಿಯು ತಿಂಡಿಗಳನ್ನು ಸೇರಿಸುವುದು, ಹೆಚ್ಚುವರಿ ಆಹಾರಗಳನ್ನು ಸೇರಿಸುವುದು ಅಥವಾ ಖಾಲಿ ಕ್ಯಾಲೊರಿಗಳನ್ನು ತಪ್ಪಿಸುವಂತಹ ಆಹಾರ ಪದ್ಧತಿಯನ್ನು ಸುಧಾರಿಸಬಹುದು2. ವಾರದಲ್ಲಿ ಕನಿಷ್ಠ ಮೂರು-ನಾಲ್ಕು ಬಾರಿ ತೂಕ ತರಬೇತಿ, ಇದು ಸ್ನಾಯುವಿನ ದ್ರವ್ಯರಾಶಿಯನ್ನು ಪಡೆಯಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.3. ಸ್ನಾಯುಗಳ ಬೆಳವಣಿಗೆಗೆ ಸಹಾಯ ಮಾಡಲು ಹೆಚ್ಚು ಪ್ರೋಟೀನ್ಗಳನ್ನು ಸೇವಿಸಿ.`;
    
    //document.write("ಒಬ್ಬ ವ್ಯಕ್ತಿಯು ಕಡಿಮೆ ತೂಕವನ್ನು ಹೊಂದಿದ್ದರೆ, ತೂಕವನ್ನು ಹೆಚ್ಚಿಸಲು ವಿವಿಧ ವಿಧಾನಗಳಿವೆ.1. ವ್ಯಕ್ತಿಯು ತಿಂಡಿಗಳನ್ನು ಸೇರಿಸುವುದು, ಹೆಚ್ಚುವರಿ ಆಹಾರಗಳನ್ನು ಸೇರಿಸುವುದು ಅಥವಾ ಖಾಲಿ ಕ್ಯಾಲೊರಿಗಳನ್ನು ತಪ್ಪಿಸುವಂತಹ ಆಹಾರ ಪದ್ಧತಿಯನ್ನು ಸುಧಾರಿಸಬಹುದು2. ವಾರದಲ್ಲಿ ಕನಿಷ್ಠ ಮೂರು-ನಾಲ್ಕು ಬಾರಿ ತೂಕ ತರಬೇತಿ, ಇದು ಸ್ನಾಯುವಿನ ದ್ರವ್ಯರಾಶಿಯನ್ನು ಪಡೆಯಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.3. ಸ್ನಾಯುಗಳ ಬೆಳವಣಿಗೆಗೆ ಸಹಾಯ ಮಾಡಲು ಹೆಚ್ಚು ಪ್ರೋಟೀನ್ಗಳನ್ನು ಸೇವಿಸಿ.")

    //guidelines.innerHTML("ಒಬ್ಬ ವ್ಯಕ್ತಿಯು ಕಡಿಮೆ ತೂಕವನ್ನು ಹೊಂದಿದ್ದರೆ, ತೂಕವನ್ನು ಹೆಚ್ಚಿಸಲು ವಿವಿಧ ವಿಧಾನಗಳಿವೆ.1. ವ್ಯಕ್ತಿಯು ತಿಂಡಿಗಳನ್ನು ಸೇರಿಸುವುದು, ಹೆಚ್ಚುವರಿ ಆಹಾರಗಳನ್ನು ಸೇರಿಸುವುದು ಅಥವಾ ಖಾಲಿ ಕ್ಯಾಲೊರಿಗಳನ್ನು ತಪ್ಪಿಸುವಂತಹ ಆಹಾರ ಪದ್ಧತಿಯನ್ನು ಸುಧಾರಿಸಬಹುದು2. ವಾರದಲ್ಲಿ ಕನಿಷ್ಠ ಮೂರು-ನಾಲ್ಕು ಬಾರಿ ತೂಕ ತರಬೇತಿ, ಇದು ಸ್ನಾಯುವಿನ ದ್ರವ್ಯರಾಶಿಯನ್ನು ಪಡೆಯಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.3. ಸ್ನಾಯುಗಳ ಬೆಳವಣಿಗೆಗೆ ಸಹಾಯ ಮಾಡಲು ಹೆಚ್ಚು ಪ್ರೋಟೀನ್ಗಳನ್ನು ಸೇವಿಸಿ."
    //<button onclick="getElementById('guidelines').innerHTML") 
    
        /*else if (bmi >= 18.6 && bmi < 24.9) 
            result.innerHTML = 
                `ಸಾಮಾನ್ಯ ತೂಕ  : <span>${bmi}</span>`;
  
        else result.innerHTML =
            `ಅಧಿಕ ತೂಕ : <span>${bmi}</span>`;*/