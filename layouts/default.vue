<template>

  <v-app>
    <v-toolbar dark  class="secondaryy" >
      <v-toolbar-side-icon
        @click.native.stop = "sideNav = !sideNav"></v-toolbar-side-icon>
      <!-- class="hidden-sm-and-up" -->
      <v-toolbar-title >
        <router-link to="/" tag="span" style="cursor: pointer">Bactoria</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">


      </v-toolbar-items>
    </v-toolbar>


    <main>
      <v-content>
        <section>
          <img src="../assets/main_top.jpg" width="100%"></img>
        </section>

        <section>
          <v-layout row wrap>

            <!-- 왼쪽 -->
            <v-flex xs2>
              <category />
            </v-flex>

            <!-- 본문 -->
            <v-flex xs8>
              <nuxt />
            </v-flex>
            <!-- 오른쪽 -->
            <v-flex xs2>
              <v-card dark color="primary2">

                <v-card-title>asd</v-card-title>
              </v-card>
            </v-flex>

          </v-layout>
        </section>
      </v-content>

    </main>


  </v-app>
</template>

<script>
  import category from '../components/Category'

  export default {
    data () {
      return {
        sideNav: false,
        smile: false,
        checked: 'asd',
        iid: '4',
        unchecked: 'qwe',
        itsreal: 'real'



      }
    },
    components: {
      category
    }
  }
</script>
