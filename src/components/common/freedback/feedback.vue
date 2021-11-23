<template>
  <div>
    <v-row>
      <!-- Influencing The Influencer -->
      <!-- Stumptown Roasters. -->
      <v-col
        sm="6"
        cols="12"
      >
        <v-card>
          <div class="d-flex flex-column-reverse flex-md-row">
            <div>
              <v-card-title>
                Stumptown Roasters
              </v-card-title>
              <v-card-text class="d-flex align-center flex-wrap body-1">
                <v-rating
                  v-model="rating"
                  color="warning"
                  background-color="warning"
                  dense
                  class="me-3 flex-shrink-0"
                ></v-rating>
                <span class="text-sm">5 Star | 98 reviews</span>
              </v-card-text>
              <v-card-text>
                Before there was a United States of America, there were coffee houses, because how are you supposed to build.
              </v-card-text>
              <v-card-actions class="dense">
                <v-btn
                  text
                  color="primary"
                  dark
                >
                  Location
                </v-btn>
                <v-btn
                  dark
                  text
                  color="primary"
                >
                  Reviews
                </v-btn>
              </v-card-actions>
            </div>
            <div class="pa-4">
              <v-img
                src="@/assets/images/pages/card-basic-clock.jpg"
                :class="$vuetify.breakpoint.mdAndUp ? 'rounded-lg':'rounded-0'"
                height="100%"
                :max-width="$vuetify.breakpoint.mdAndUp ? '220':'100%'"
              ></v-img>
            </div>
          </div>
        </v-card>
      </v-col>
      </v-row>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
import {
  mdiChevronUp,
  mdiChevronDown,
  mdiCartPlus,
  mdiShareVariantOutline,
  mdiLockOpenOutline,
  mdiStarOutline,
  mdiAccountOutline,
  mdiTrendingUp,
  mdiHelpCircleOutline,
} from '@mdi/js'

export default {
  setup() {
    const isCardDetailsVisible = false
    const rating = ref(5)

    return {
      isCardDetailsVisible,
      rating,

      // icons
      icons: {
        mdiChevronUp,
        mdiChevronDown,
        mdiCartPlus,
        mdiShareVariantOutline,
        mdiLockOpenOutline,
        mdiStarOutline,
        mdiAccountOutline,
        mdiTrendingUp,
        mdiHelpCircleOutline,
      },
    }
  },
}
</script>

<style lang="scss" scoped>

.avatar-center {
  top: -2rem;
  left: 1rem;
  border: 3px solid white;
  position: absolute;
}

// membership pricing
@include theme--child(memberpricing-bg) using ($material) {
  background-color: rgba(map-deep-get($material, 'primary-shade'), map-deep-get($material, 'states', 'hover'));
}

.memberpricing-bg {
  position: relative;
}
.membership-pricing {
  text-align: center;
  sup {
    font-size: 3.75rem;
    top: 9px;
  }
}
</style>
