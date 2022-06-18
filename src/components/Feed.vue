<template>
  <div class="feed">
      <div class="stack-item" v-for="(image, i) in images" :key="i">
        <OverlayComp :image="image" />
      </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import OverlayComp from './Overlay.vue'

  export default {
    name: "FeedCompo",
    props: {
      page: String
    },
    data() {
      return {
        images: [],
        pageCount: 1,
        isLoaded: false,
        columnNum: 0
      }
    },
    components: { OverlayComp },
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
            console.log(response);
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
  }
</script>
<style scoped>
  .feed {
    padding: 2px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .stack-item {
    width: 46%;
    justify-content: space-between;
    align-items: center;
    margin: auto;
  }
</style>
