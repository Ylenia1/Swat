<template>
<div class="menu ombra">
  <nav class="navbar">
  <div class="conteinerlogo">
    <div class="logo">
      <img src="@/assets/logo.png" alt="Logo" >
      
    </div>
    
  </div>

    <button class="hamburger"  @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <div class="nav-links">
      <a :href="$route.path === '/' ? '/' : '/'" class="nav-btn" :class="{ active: isActive('/') }">  <span class="nav-link"> HOME </span> </a>
      <a :href="$route.path === '/#features' ? '/#features' : '/#features'" class="nav-btn" :class="{ active: isActive('/#features') }">  <span class="nav-link"> FEATURES </span> </a>
      <a :href="$route.path === '/#portfolio' ? '/portfolio' : 'portfolio'" class="nav-btn" :class="{ active: isActive('/#portfolio') }"> <span class="nav-link"> PORTFOLIO </span> </a>
      <a :href="$route.path === '/#resume' ? '/resume' : 'resume'" class="nav-btn" :class="{ active: isActive('/#resume') }"><span class="nav-link">RESUME</span></a>
      <a :href="$route.path === '/#clients' ? '/#clients' : '/#clients'" class="nav-btn" :class="{ active: isActive('/#clients') }"> <span class="nav-link">CLIENTS</span></a>
      <a :href="$route.path === '/#pricing' ? '/#pricing' : '/#pricing'" class="nav-btn" :class="{ active: isActive('/#pricing') }"> <span class="nav-link">PRICING</span></a>
      <a :href="$route.path === '/#blog' ? '/#blog' : '/#blog'" class="nav-btn" :class="{ active: isActive('/#blog') }"><span class="nav-link">BLOG</span></a>
      <a :href="$route.path === '/#contact' ? '/#contact' : '/#contact'" class="nav-btn" :class="{ active: isActive('/#contact') }"> <span class="nav-link">CONTACT</span></a>

    <li class="nav-link px-3 my-2 buy-now"> <router-link to="/buy" ><span class="fontBuyNow">BUY NOW</span></router-link></li>
</div>

<!-- 
    <div class="nav-links" >
    <ul>
      <li ><router-link to="/">HOME</router-link></li>
      <li ><router-link to="clients">FEATURES</router-link></li>
      <li><router-link to="/pricing">PORTFOLIO</router-link></li>
      <li ><router-link to="/resume">RESUME</router-link></li>

      <li ><router-link to="clients">CLIENTS</router-link></li>
      <li><router-link to="/pricing">PRICING</router-link></li>
      <li ><router-link to="/contact">CONTACT</router-link></li>

      <li class="nav-link px-3 my-2 buy-now"> <router-link to="/buy">BUY NOW</router-link></li>
    </ul>
  </div>
-->
  <div class="sidebar " :class="{ open: isOpen }">
    <div class="close-icon" @click="toggleMenu">X</div>
  <div class="sidebar-content">
    <div class="sidebar-logo">
      <img src="@/assets/logo.png" alt="Logo" style="width:40%" >
    </div>
   <p class="testosidebar">Inbio is a personal portfolio template. You can customize all.</p>
    
    <hr class="sidebar-divider">
    <ul>
      <li><router-link to="/">HOME</router-link></li> 
      <li><router-link to="/clients">FEATURES</router-link></li>
      <li><router-link to="/clients">PORTFOLIO</router-link></li>
      <li><router-link to="/clients">RESUME</router-link></li>
      <li><router-link to="/clients">CLIENTS</router-link></li>
      <li><router-link to="/pricing">PRICING</router-link></li>
      <li><router-link to="/blog">BLOG</router-link></li>
      <li><router-link to="/contact">CONTACT</router-link></li>
    </ul>
    <hr class="sidebar-divider">
    <p class="testosidebar">Find me</p>
    <!-- Aggiungi le icone social qui -->
    <div class="sidebarsocial">
      <span class="buy-now">
       <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
      </span>
      
      <span>
         <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12.001 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6m0-2a5 5 0 1 1 0 10a5 5 0 0 1 0-10m6.5-.25a1.25 1.25 0 0 1-2.5 0a1.25 1.25 0 0 1 2.5 0M12.001 4c-2.474 0-2.878.007-4.029.058c-.784.037-1.31.142-1.798.332a2.886 2.886 0 0 0-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.007 9.075 4 9.461 4 12c0 2.475.007 2.878.058 4.029c.037.783.142 1.31.331 1.797c.17.435.37.748.702 1.08c.337.336.65.537 1.08.703c.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.475 0 2.878-.007 4.029-.058c.782-.037 1.308-.142 1.797-.331a2.91 2.91 0 0 0 1.08-.703c.337-.336.538-.649.704-1.08c.19-.492.296-1.018.332-1.8c.052-1.103.058-1.49.058-4.028c0-2.474-.007-2.878-.058-4.029c-.037-.782-.143-1.31-.332-1.798a2.912 2.912 0 0 0-.703-1.08a2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.926 4.006 14.54 4 12 4m0-2c2.717 0 3.056.01 4.123.06c1.064.05 1.79.217 2.427.465c.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.047 1.066.06 1.405.06 4.122c0 2.717-.01 3.056-.06 4.122c-.05 1.065-.218 1.79-.465 2.428a4.884 4.884 0 0 1-1.153 1.772a4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465c-1.067.047-1.406.06-4.123.06c-2.717 0-3.056-.01-4.123-.06c-1.064-.05-1.789-.218-2.427-.465a4.89 4.89 0 0 1-1.772-1.153a4.905 4.905 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.012 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122c.05-1.065.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.637-.248 1.362-.415 2.427-.465C8.945 2.013 9.284 2 12.001 2"/></svg>
      </span>
      <span>
         <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></g></svg>
      </span> 
        </div>
  </div>
</div>

  </nav>
</div>
  <div class="overlay" v-if="isOpen" @click="toggleMenu"></div>

</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isOpen: false // Controllo dello stato del menu
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    isActive(hash) {
  return this.$route.hash === hash;
},
    scrollToFeatures() {

      const featuresElement = document.getElementById('features');
      if (featuresElement) {
        const yOffset = featuresElement.getBoundingClientRect().top;
  
        window.scrollTo({ top: yOffset, behavior: 'smooth' });
      }
    }


  


  }
}

</script>

<!--navbar -->
<style>

.fontBuyNow {
  font-size: 12px;
}


.ombra {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* Cambia i valori secondo le tue esigenze */
}

.nav-links {
  display: flex;
  align-items: center; 
  list-style-type: none;
  padding: 0;
  margin: 0;
  margin-top: -5px;
}

.nav-links .nav-btn {
  margin: 0 10px;
  text-decoration: none;
  color: grey;
  font-family: 'Montserrat', sans-serif;
  transition: var(--transition);
  font-size: 13px;
  font-weight: var(--s-regular);
  font-family: var(--font-secondary);
}
/*
 .nav-links .nav-btn:active {
  color: white;
}*/

@keyframes activateLink {
  from {
    color: grey; /* Colore iniziale */
  }
  to {
    color: white; /* Colore finale quando attivo */
  }
}


.nav-links .nav-btn:active {
  animation: activateLink ; 
}


.buy-now a {

  color: #ff014f;
  background: linear-gradient(145deg, #1e2024, #1a1c1f);
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.3s ease-in-out, transform 0.3s ease-in-out;
  box-shadow: -2px -5px 10px #2b2b2b;
  white-space: nowrap;
}

.buy-now a:hover {
  background: linear-gradient(145deg, #1a1e21, #121416);
  transform: translateY(-5px);
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  color: #ff014f;

}
.buy-now a:visited {
  color: #ff014f;

}


.menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #212529;
  z-index: 1000;

}

.navbar {
  margin: 30px;
  height: 40px;
  display: flex;
  flex-wrap: nowrap; 
  align-items: center;
  justify-content: space-between;
  font-family: 'Montserrat', sans-serif;
}


.logo{
  padding-left: 1rem;
  width: 90%;
  margin-top: -20px;
}

.logo img {
  display: block;
  max-width: 100%;
  height: auto;

}
ul {

}
ul {
  

  display: flex;
  align-items: center; 
  list-style-type: none;
  padding: 0;
  margin: 0;

}

li {
  margin: 0 10px;

}

a {
  text-decoration: none;
}


/* (visibile solo su schermi piccoli) */
.hamburger { 
  display: none; /* Nascosto*/
  outline: none;/* Decorazione ... */
  background: none; 
  border: none; 
  outline: none; 
  box-shadow: none; 
  padding: 0; 
  margin: 0;
}



.hamburger span {
  
  display: block;

  width: 25px;
  height: 3px;
  margin: 5px auto;
  margin-right: 20px;
  background-color: #ff014f;/* Colore da mettere rosso*/

}

@media (min-width: 768px) {
  .nav-links {
  display: flex; /* Visibile su schermi grandi */

}

.nav-links ul {
  display: flex;
  list-style: none;
  padding: 0;

}

.nav-links ul li {
  margin: 0 10px;

}

.nav-links ul li a {
  display: block;
  color: grey;
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
    transition: var(--transition);
    font-size: 13px;
    font-weight: var(--s-regular);
    font-family: var(--font-secondary);
  
}

.nav-links ul li a:hover {
  color: white;
}

.buy-now a {
  color: #ff014f; /* Imposta il colore del testo a rosso */
  background: linear-gradient(145deg, #1e2024, #1a1c1f); /* Sfondo del pulsante */
  border: none; /* Rimuove il bordo predefinito */
  padding: 10px 20px; /* il padding a piacimento */
  text-align: center; /* Allinea il testo al centro */
  text-decoration: none; /* Rimuove sottolineatura dai link */
  display: inline-block; /* Permette la personalizzazione di margini e padding */
  font-size: 16px; /* Dimensione del testo */
  margin: 4px 2px; /* Spaziatura esterna */
  cursor: pointer; /* Cambia il cursore in una mano quando sopra il pulsante */
  border-radius: 5px; /* Angoli arrotondati */
  transition: background 0.3s ease-in-out, transform 0.3s ease-in-out; /* Transizioni animate */
  box-shadow: -2px -5px 10px #2b2b2b;
  white-space: nowrap;

}

.buy-now a:hover {
  background: linear-gradient(145deg, #1a1e21, #121416); /* Cambia il gradient al passaggio del mouse */
  transform: translateY(-5px); /* Sposta leggermente in alto il pulsante */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); /* Aggiunge un'ombra per un effetto sollevato */
  color: #ff014f; /* Mantiene il colore del testo a rosso anche al passaggio del mouse */
}
.buy-now a:visited {
  color: #ff014f;
}
}


/* Stili della sidebar */



.sidebar {
  position: fixed;
  left: -300px; /* Parte nascosta a sinistra */
  top: 0;
  width: 300px;
  height: 100%;
 /* background-color: #212527; /* Colore di sfondo della sidebar */
 background-color: #212529; /* Colore di sfondo della sidebar */
  transition: left 0.3s; /* Animazione */
  z-index: 1000; /* Assicurati che sia sopra gli altri elementi */
  z-index: 1000; 
  color: white;
  font-family: 'Montserrat', sans-serif;
;
}
 .sidebar a{
  color:white;
 }
.sidebar.open {
  left: 0; /* Si sposta a sinistra quando aperta */
}

.sidebar-content {
  padding: 20px;
}

.sidebar-logo {
  display: flex;
  align-items: left;
  padding-left: 10px;
  margin-top: 10px;
}

.sidebar-divider {
  border: 0;
  height: 0.1px;
  background-color: #4a4a4a; /* Colore della linea */
  margin: 20px 0;
  width: 200px; /* Larghezza della linea */
  margin-left: auto;
  margin-right: auto;
}

.sidebar-content ul {
  list-style: none; /* Rimuove i puntini degli elenchi */
  padding: 0; /* Rimuove il padding di default */
  margin: 0; /* Rimuove il margine di default */
  display: flex; 
  flex-direction: column; /* Dispone gli elementi figli in colonna */
  align-items: flex-start; /* Allinea gli elementi a sinistra */
  padding: 20px;
}

.sidebar-content ul li {
  margin: 10px 0; /* Aggiunge un margine sopra e sotto ogni link per spaziarli */
}


.close-icon {
  position: absolute;
  top: 40px;
  right: 20px;
  cursor: pointer;
  font-size: 15px;
  width: 30px; /* Dimensione del cerchio */
  height: 30px; /* Dimensione del cerchio */
  border-radius: 60%; /* Crea il cerchio */
  background-color: #404040; /* Colore dello sfondo del cerchio (bianco in questo caso) */
  color: red; /* Colore dell'icona X */
  display: flex;
  align-items: center;
  justify-content: center;

}
.testosidebar{
  text-align: left;
  font-size: 14px;
  padding: 10px;
  margin-left: 10px;
  
}
.overlay {
  position: fixed; /* O absolute, a seconda della struttura del tuo layout */
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); /* Ombra semi-trasparente */
  z-index: 50; /* Assicurati che sia inferiore a quello della sidebar ma sopra il contenuto della pagina */

}

.sidebarsocial{
  display: flex;
  align-items: center; /* Centra verticalmente gli elementi */
  justify-content: center; /* Centra orizzontalmente gli elementi */
  gap: 10px; /* Distanza tra gli elementi */

}



.sidebarsocial span {
  color:white; /* Imposta il colore del testo a rosso */
  background: linear-gradient(145deg, #1e2024, #1a1c1f); /* Sfondo del pulsante */
  border: none; /* Rimuove il bordo predefinito */
  padding: 10px 20px; /* Aggiusta il padding a piacimento */
  text-align: center; /* Allinea il testo al centro */
  text-decoration: none; /* Rimuove sottolineatura dai link */
  display: inline-block; /* Permette la personalizzazione di margini e padding */
  font-size: 16px; /* Dimensione del testo */
  margin: 4px 2px; /* Spaziatura esterna */
  cursor: pointer; /* Cambia il cursore in una mano quando sopra il pulsante */
  border-radius: 5px; /* Angoli arrotondati */
  transition: background 0.3s ease-in-out, transform 0.3s ease-in-out; /* Transizioni animate */
  box-shadow: -2px -5px 10px #2b2b2b;
}

.sidebarsocial span:hover {
  background: linear-gradient(145deg, #1a1e21, #121416); /* Cambia il gradient al passaggio del mouse */
  transform: translateY(-5px); /* Sposta leggermente in alto il pulsante */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); /* Aggiunge un'ombra per un effetto sollevato */
  color: white; /* Mantiene il colore del testo a rosso anche al passaggio del mouse */
}

.sidebar ul li a, .sidebar ul li router-link {
  text-decoration: none; /* Rimuove la sottolineatura */
  color: inherit; /* Mantiene il colore del testo ereditato senza cambiarlo */
}
/* Media query */
/* Media query */
/* Media query */
/* Media query */



@media (max-width: 1100px) {
  .hamburger {
    display: block; /* Mostra l'hamburger */
  }
  .nav-links {
    display: none; /* Nascondi il menu orizzontale */
  }

  .nav-links ul {
    width: 100%;
  }

  .nav-links ul li {
    text-align: center;
    margin: 10px 0;
  }
  
  .nav-links.open {
    display: right;/* Mette hamburger a destra */
  }
}





</style>
