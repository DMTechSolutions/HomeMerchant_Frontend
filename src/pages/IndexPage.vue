<template>
  <q-page style="margin-top: 10px; max-width: 99%; margin: auto;">
   <div class="row justitv-center">
    <div class="stack-item" v-for="(image, i) in images" :key="i">
       <img class="img" :src="image.urls.small" :alt="image.alt_description" />
      </div>
    </div>
  </q-page>
</template>

<script>
import axios from "axios";

export default {
  name: "HomePage",
  props: {
    page: String
  },
  data() {
    return {
      images: [],
      pageCount: 1,
      isLoaded: false,
      columnNum: 0
    };
  },
  methods: {
    getImages(topic) {
      axios
        .get(
          `https://api.unsplash.com/search/photos?query=${topic}&per_page=30&page=${this.pageCount}`,
          {
            headers: {
              Authorization:
                "Client-ID cq6La0BAF3iV8t4LisXY1n8XORHw2nIo6Oe1CjLZiqM",
              "Accept-Version": "v1"
            }
          }
        )
        .then(response => {
          // this.images = response.data.results;
          this.images = this.images.concat(response.data.results);
          this.isLoaded = true;
        })
        .catch(() => {
          this.images = [];
          this.isLoaded = false;
        });
    }
  },
  created() {
    this.getImages(this.page);
    this.columnNum = Math.floor(window.innerWidth / 230);
  },
  mounted() {
    window.onscroll = () => {
      let bottomOfWindow =
        window.pageYOffset + window.innerHeight - document.body.offsetHeight;

      if (bottomOfWindow > -30 && this.isLoaded) {
        this.pageCount++;
        this.isLoaded = false;
        this.getImages(this.page);
      }
    };
  }
};
</script>

<style scoped>
.stack-item {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: fit-content;
  margin: 2px;
}
</style>
