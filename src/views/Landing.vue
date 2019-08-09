<template><div>
  <section class="hero is-primary has-navbar-fixed-top is-medium">
    <!-- Hero head: will stick at the top -->
    <div class="hero-head">
      <Navbar />
    </div>

    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <div class="container has-text-centered my-content">
        <h1 class="title is-2">Welcome to your new app! 🎉</h1>
        <h2 class="subtitle is-4">
          Deploying a Firebase Progressive Web App has never been this easy!
        </h2>
      </div>
    </div>
  </section>
  <section class="content landing-body">
    <div class="hello">
    <h2>🏁 Getting started</h2>
    <p>
      Lets go through the things that you need to do to start using your app.
    </p>
    <h3>🔥 Integrate to Firebase</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt, eros a faucibus sollicitudin, nunc nunc feugiat metus, vel ullamcorper metus sem at dolor. Vivamus posuere elementum mauris, vitae porttitor risus maximus non. Sed pulvinar ipsum ut orci tincidunt iaculis.
    </p>
    <h3>⚙️ Configure the template</h3>
    <p>
      Sed pulvinar ipsum ut orci tincidunt iaculis. Aliquam condimentum vestibulum leo, vitae posuere turpis auctor ac. Praesent ligula mauris, euismod a ante vitae, sodales volutpat dolor. Morbi pharetra erat non efficitur accumsan. Nullam mattis maximus ipsum sed pretium. Integer eget purus volutpat, mollis dui quis, pulvinar velit.</p>
    
    <h2>🍺 Adding your content</h2>
    <p>
      Lets talk about adding your own views to the app.
    </p>
    <h3>↗️ Using the router</h3>
    <p>
      Aliquam condimentum vestibulum leo, vitae posuere turpis auctor ac. Praesent ligula mauris, euismod a ante vitae, sodales volutpat dolor. Morbi pharetra erat non efficitur accumsan. Nullam mattis maximus ipsum sed pretium. Integer eget purus volutpat, mollis dui quis, pulvinar velit.
    </p>
  </div>
  </section>
  </div>
</template>

<script>
import Navbar from "../components/NavbarLanding.vue";

export default {
  components: { Navbar },
  mounted: function() {
    document.getElementById("app").classList.remove("has-navbar-fixed-top");
  }
};
</script>

<style scoped>
  .my-content {
    max-width: 52em;
  }
  .custom-field {
    max-width: 32em;
  }
  .landing-body {
    margin: 3em auto;
    max-width: 66rem;
    padding: 0 2rem 0 2rem;
  }
  .shadow {
    box-shadow: 0px 0px 12px -6px rgb(20, 20, 20);
  }
</style>
