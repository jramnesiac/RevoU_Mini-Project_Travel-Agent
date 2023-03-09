    const slider = document.querySelector(".hero-slider");
    const nextBtn = document.querySelector(".next-btn");
    const prevBtn = document.querySelector(".prev-btn");
    const slides = document.querySelectorAll(".slide");
    const slideIcons = document.querySelectorAll(".slide-icon");
    const numberOfSlides = slides.length;
    var slideNumber = 0;

    nextBtn.addEventListener("click", () => {
        slides.forEach((slide) => {
          slide.classList.remove("active");
        });
        slideIcons.forEach((slideIcon) => {
          slideIcon.classList.remove("active");
        });
  
        slideNumber++;
  
        if(slideNumber > (numberOfSlides - 1)){
          slideNumber = 0;
        }
  
        slides[slideNumber].classList.add("active");
        slideIcons[slideNumber].classList.add("active");
      });

      prevBtn.addEventListener("click", () => {
        slides.forEach((slide) => {
          slide.classList.remove("active");
        });
        slideIcons.forEach((slideIcon) => {
          slideIcon.classList.remove("active");
        });
  
        slideNumber--;
  
        if(slideNumber < 0){
          slideNumber = numberOfSlides - 1;
        }
  
        slides[slideNumber].classList.add("active");
        slideIcons[slideNumber].classList.add("active");
      });

      var playSlider;

    var repeater = () => {
      playSlider = setInterval(function(){
        slides.forEach((slide) => {
          slide.classList.remove("active");
        });
        slideIcons.forEach((slideIcon) => {
          slideIcon.classList.remove("active");
        });

        slideNumber++;

        if(slideNumber > (numberOfSlides - 1)){
          slideNumber = 0;
        }

        slides[slideNumber].classList.add("active");
        slideIcons[slideNumber].classList.add("active");
      }, 8000);
    }
    repeater();

    slider.addEventListener("mouseover", () => {
        clearInterval(playSlider);
      });
  
    slider.addEventListener("mouseout", () => {
        repeater();
      });


      function validate(){
        var name = document.getElementById("name").value;
        var subject = document.getElementById("alamat").value;
        var phone = document.getElementById("nohp").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;
        var error_message = document.getElementById("error_message");
        
        error_message.style.padding = "10px";
        
        var text;
        if(name.length < 5){
          text = "Masukan Nama duluu";
          error_message.innerHTML = text;
          return false;
        }
        if(subject.length < 10){
          text = "Tuliskan Alamat yg benar";
          error_message.innerHTML = text;
          return false;
        }
        if(isNaN(phone) || phone.length != 10){
          text = "masukin no HP yaa";
          error_message.innerHTML = text;
          return false;
        }
        if(email.indexOf("@") == -1 || email.length < 6){
          text = "Email jangan lupaaa";
          error_message.innerHTML = text;
          return false;
        }
        if(message.length <= 140){
          text = "Jangaan kepanjangan harus 140 kata";
          error_message.innerHTML = text;
          return false;
        }
        alert("Form Submitted Successfully!");
        return true;
      }

  

   