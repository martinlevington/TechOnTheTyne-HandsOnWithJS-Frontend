<template>  
<div>

  <a class="uk-button uk-button-primary uk-margin" @click="$router.go(-1)"><span uk-icon="arrow-left"></span> go back</a>

  <client-only>
  <div uk-grid>

      <!-- // Card  Left -->
      <div class="uk-width-1-3@m">
        <div v-for="item in takeaway.menuitems" class="uk-margin">
            <div class="uk-card uk-card-default">
                <div class="uk-card-media-top">
                    <img :src="'http://localhost:1337/' + item.image.url" alt="" />
                </div>
                <div class="uk-card-body">
                    <h3 class="uk-card-title">{{ item.name }} <span class="uk-badge">{{ item.price }}€</span></h3>
                    <p>{{ item.description }}</p>
                </div>
                <div class="uk-card-footer">
                  <button class="uk-button uk-button-primary">Add to basket</button>
                </div>
            </div>
        </div>
      </div>

      <!-- // Card right -->
      <div class="uk-width-expand@m">
      </div>

  </div>

  </client-only>
</div>  
</template>

<script>  
import takeawayQuery from '~/apollo/queries/takeaway/takeaway'

export default {  
  data() {
    return {
      takeaway: Object
    }
  },
  apollo: {
    takeaway: {
      prefetch: true,
      query: takeawayQuery,
      variables () {
        return { id: this.$route.params.id }
      }
    }
  }
}
</script>