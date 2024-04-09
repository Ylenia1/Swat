
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Assicurati che il percorso del file sia corretto
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import Jumbotron from '@/components/Jumbotron.vue';

export default {
  components: {
    Jumbotron
  }
};
const app = createApp(App);

app.use(router);

app.component('Jumbotron', Jumbotron);

app.mount('#app');