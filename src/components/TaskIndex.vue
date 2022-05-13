<template>
  <HeaderPage />

  <body>
    <div class="main-container">
      <div class="tab-box flex-css-row-start">
        <router-link to="/" class="video-link" active-class="active"
          >Video Games</router-link
        >
        <router-link to="/Contact">Contact</router-link>
      </div>
      <div class="video-box flex-top-row-sb">
        <div class="left-box">
          <div class="title">
            <h1>Filter Results</h1>
          </div>
          <div class="form-box">
            <div class="input-box">
              <label for="Name">Name(contains)</label> <br />
              <input
                @keyup="hasChanged"
                type="text"
                placeholder="Text String"
                v-model="form.name"
              />
            </div>
            <div class="input-box">
              <label for="Minimum Score">Minimum Score</label> <br />
              <input
                @keyup="hasChanged"
                type="text"
                placeholder="1-10 "
                v-model="form.min_score"
              />
            </div>

            <div class="input-box">
              <label for="Order by">Order by</label> <br />
              <div class="select-wrapper flex-css-row-sb">
                <div class="icon-box flex-css">
                  <i class="fa-solid fa-arrow-up"></i>
                </div>
                <!-- <router-link to="/">Videos</router-link>
  <router-link to="/Contact">Contact</router-link> -->
                <select
                  @change="hasChanged"
                  name="option"
                  id="option"
                  v-model="form.order_by"
                >
                  <option value="first_release_date">Released Date</option>
                  <option value="rating">Score</option>
                  <option value="name">Name</option>
                </select>
              </div>
            </div>

            <div class="button-container flex-css-end">
              <a @click="clearFilter" href="#">Clear</a>
            </div>
          </div>
        </div>
        <div class="right-box">
          <div
            class="game-list flex-css-row-start"
            v-for="(value, key) in this.game"
            :key="key"
          >
            <div class="img-container">
              <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.zkGgtNv9OOnRuWWI8XgI4AHaEK%26pid%3DApi&f=1"
                alt=""
              />
            </div>

            <div class="info">
              <div class="title">
                <h1>{{ value.name }}</h1>
                <p>Release Date: {{ value.first_release_date }}</p>
              </div>
              <div class="desc">
                <p>{{ value.summary }}</p>
              </div>
            </div>
            <div class="rating">
              <p>{{ value.rating }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import HeaderPage from "./Header.vue";
const defaultForm = {
  name: "",
  min_score: "",
  order_by: "",
};
export default {
  name: "TaskIndex",
  components: {
    HeaderPage,
  },
  props: {
    data: Object,
  },
  data() {
    return {
      copyData: null,
      game: null,
      form: defaultForm,
    };
  },
  computed: {
    hasChanged() {
      return this.getFilteredData;
    },
    clearFilter() {
      return this.clearSearchFilter;
    },
    getOrderBy() {
      return this.form.order_by;
    },
    // sortedArray() {
    //   this.game = this.game.sort((a, b) => {
    //     let fa = a.getOrderBy,
    //       fb = b.getOrderBy;
    //     if (fa < fb) {
    //       return -1;
    //     }
    //     if (fa > fb) {
    //       return 1;
    //     }
    //     return 0;
    //   });
    // },
  },

  async mounted() {
    const response = await fetch(
      "https://public.connectnow.org.uk/applicant-test/"
    );
    const game = await response.json();
    this.game = game;
    this.copyData = [...this.game];
  },
  methods: {
    getFilteredData() {
      let self = this;
      let tempArr = [];

      const gameObj = JSON.parse(JSON.stringify(self.copyData));

      if (
        (self.form.name.length > 0 || self.form.min_score.length > 0) &&
        gameObj.length > 0
      ) {
        gameObj.forEach((element) => {
          var arrayNameText = element.name.toLowerCase();
          // return
          // var arrayminSoreText = element.rating.toString().toLowerCase();
          var arrayminSoreText = parseInt(element.rating, 10)

          if (self.form.name.length > 0) {
            arrayNameText.match(self.form.name.toLowerCase())
              ? tempArr.push(element)
              : "";
          }
          if (self.form.min_score.length > 0) {
            if ( arrayminSoreText >= parseInt(self.form.min_score, 10) ) {
              tempArr.push(element)
            }
           
          }
        });
        self.game = tempArr;
      } else {
        self.game = self.copyData;
      }
      // Sorting The array after the search is completed
      if (self.form.order_by.length > 0) {
        // const gameArr = JSON.parse(JSON.stringify(self.game));

        // let sortArr = []
        // gameArr.forEach((element) => {
        //   if ( element.) {

        //   }
        // });
        // return this.sortedArray
        // console.log();
      }
    },
    clearFormValues() {
      this.form.name = "";
      this.form.min_score = "";
      this.form.order_by = "";
      return true;
    },
    clearSearchFilter() {
      this.clearFormValues();
      this.game = this.copyData;
      return;
    },
  },
};
</script>

