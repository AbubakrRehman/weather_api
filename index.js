input_box=document.querySelectorAll("input");
lat=input_box[0];
longi=input_box[1];
go_btn=document.querySelector("button");
output=document.querySelector(".output");
outputnot=document.querySelector(".outputnot");
main=document.querySelector("#main");

opt1=document.querySelector("#opt1");
opt2=document.querySelector("#opt2");
opt3=document.querySelector("#opt3");
opt4=document.querySelector("#opt4");
go_btn.onclick=function(){
    if(lat.value=="" || longi.value==""){
        output.style.display="none";
        outputnot.innerHTML = "Value is missing ";
        
        outputnot.style.display="block";
        
     
    }else{
        reqq=new XMLHttpRequest();
        reqq.open("GET", `https://api.openweathermap.org/data/2.5/onecall?lat=${lat.value}&lon=${longi.value}&units=metric&exclude=hourly,daily,minutely&appid=2302822d4059e6a4c73ec7fe2ff3e1f4`, true);
        reqq.send();
        
        reqq.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
               // Typical action to be performed when the document is ready:
               
                response_obj=JSON.parse(reqq.responseText);
                timezone=response_obj.timezone;
                humidity=response_obj.current.humidity;
                temp=response_obj.current.temp;
                pressure=response_obj.current.pressure;
                console.log(timezone,humidity,temp,pressure);
                
                opt1.innerHTML="Timezone: "+timezone;
                opt2.innerHTML="Temp: "+temp+" celcius";
                opt3.innerHTML="Humidity: "+humidity+" %";
                opt4.innerHTML="Pressure: "+pressure+" hPa";
                outputnot.style.display="none";
               output.style.display="block";
            }
    };

}



};