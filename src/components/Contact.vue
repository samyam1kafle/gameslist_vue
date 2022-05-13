<template>
  <HeaderPage />

  <body>
    <div class="main-container">
      <div class="tab-box flex-css-row-start">
        <router-link to="/"> Video Games</router-link>
        <router-link to="/Contact" class="Contact-link" active-class="active"
          >Contact</router-link
        >
      </div>

      <div class="video-box flex-css-row-sb">
        <div class="contact">
          <h1>GET IN TOUCH</h1> <br/>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex maiores
            omnis vitae libero, accusamus laborum praesentium impedit esse
            consequuntur nemo id mollitia possimus quae non ad nobis blanditiis
            corporis eius.
          </p>
          <div class="contact-box">
  <div class="form-box">
    <div class="title">
            <h1>Contact Form</h1>
          </div>
            <div class="input-box">
              <label for="Name">Name *</label> <br />
              <input
                type="text"
                v-model="form.name"
              />
            </div>
            <div class="input-box">
              <label for="Email Address">Email Address *</label> <br />
              <input
                type="text"
                v-model="form.email"
              />
            </div>

            <div class="input-box">
              <label for="Order by">Message</label> <br />
              <textarea v-model="form.message" cols="30" rows="10"></textarea>
            </div>

            <div class="button-container flex-css-end">
              <a @click="submitForm" href="#">Send</a>
            </div>
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
  email: "",
  message: "",
};
export default {
  name: "ContactPage",
  components: {
    HeaderPage,
  },
  data() {
    return {
      form: defaultForm,
    };
  },
  methods: {
    clearFormValues() {
      this.form.name = "";
      this.form.email = "";
      this.form.message = "";
      return true;
    },
    submitForm( e ) {
      e.preventDefault()
      alert("Form was sent successfully")
      // Code To submit the form here
      return 1
    }
  },
};
</script>
