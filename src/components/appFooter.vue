<template>
    <footer  class="footer">
      <div class="logo-container">
      <img src="@/assets/logo-vertical.png" alt="Logo">
    </div>
    <p class="copyright">© 2022. All rights reserved by <span class="animated-text">Rainbow-Themes</span></p>
 
    </footer>
  </template>
  
  <script>
 export default {
  name: 'appFooter',

}
  </script>
  
  <style scoped>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');



  .footer {;
  margin-top: 100px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom:100px;
  }
  
  .logo-container {
    display: flex;
    justify-content: center; 
    align-items: center; 
  }
  .copyright {
  font-size: 15px;
  color: #c4cfde;
  margin-top: 20px;
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  font-weight: 450;
  letter-spacing: 0.1px; 
  text-decoration: none;
}

.animated-text {
  font-family: 'Poppins', sans-serif;
    position: relative; 
    display: inline-block;
    text-decoration: none; 
    font-size: 15px;
}

.animated-text::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px; 
    background-color:  #f9004d; 
    transition: width 0.3s ease; 
  }


  .animated-text:hover::before,
  .animated-text:hover::after {
    width: 100%; 

  }
  .animated-text:hover{
    color: #f9004d;

  }


  </style>
