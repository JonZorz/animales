const { createApp } = Vue;

createApp({
  template: `
    <div>
      <h1>Lista de Animales</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Animal</th>
            <th>País</th>
            <th>Continente</th>
            <th>Imagen</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="animal in paginatedAnimales" :key="animal.id">
            <td>{{ animal.id }}</td>
            <td>{{ animal.animal }}</td>
            <td>{{ animal.country }}</td>
            <td>{{ animal.continent }}</td>
            <td><img :src="animal.imagen" :alt="animal.animal" width="100" height="100" /></td>
          </tr>
        </tbody>
      </table>

      <div class="pagination">
        <button @click="prevPage" :disabled="currentPage === 1">Anterior</button>
        <span>Página {{ currentPage }} de {{ totalPages }}</span>
        <button @click="nextPage" :disabled="currentPage === totalPages">Siguiente</button>
      </div>
    </div>
  
  `,
  data() {
    return {
      animales: [
        { id: 1, animal: "Camaleon",  country: "Sahara del Sur", continent: "Africa", imagen: "img/camaleon.webp" },
        { id: 2, animal: "Delfin", country: "Océano Atlántico", continent: "América/Europa/Africa", imagen: "img/delfin.webp" },
        { id: 3, animal: "Erizo ",  country: "España", continent: "Europa", imagen: "img/erizo.webp" },
        { id: 4, animal: "Gato Bengali",  country: "Estados Unidos", continent: "America", imagen: "img/gato.webp" },
        { id: 5, animal: "Guepardo",  country: "Sudafrica", continent: "Africa", imagen: "img/guepardo.webp" },
        { id: 6, animal: "Hipopotamo",  country: "Zambia", continent: "Africa", imagen: "img/hipopotamo.webp" },
        { id: 7, animal: "Kanguro",  country: "Australia", continent: "Oceania", imagen: "img/kanguro.webp" },
        { id: 8, animal: "Koala",  country: "Australia", continent: "Oceania", imagen: "img/koala.webp" },
        { id: 9, animal: "Lemur", country: "Madagascar", continent: "Africa", imagen: "img/lemur.webp" },
        { id: 10, animal: "Leopardo",  country: "Kirguistán", continent: "Asia", imagen: "img/leopardo.webp" },
        { id: 11, animal: "Loro",  country: "Ghana", continent: "Africa", imagen: "img/loro.webp" },
        { id: 12, animal: "Pingüino", country: "Antartida", continent: "Antartida", imagen: "img/pinguino.webp" },
        { id: 13, animal: "Suricata", country: "Namibia", continent: "Africa", imagen: "img/suricata.webp" },
        { id: 14, animal: "Zebra",  country: "Namibia", continent: "Africa", imagen: "img/zebra.webp" },
        { id: 15, animal: "Zorro", country: "Estados Unidos", continent: "America", imagen: "img/zorro.webp" } 
      ],
      currentPage: 1,
      itemsPerPage: 5,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.animales.length / this.itemsPerPage);
    },
    paginatedAnimales() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.animales.slice(start, end);
    },
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++;
    },
    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
    },
  },
}).mount('#app');