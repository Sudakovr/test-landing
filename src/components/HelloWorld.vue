<template>
    <div>
      <button v-on:click="switchLocale()">{{ otherLocale }}</button>

      <p>{{ $t("message.hello") }}</p>
    </div>
</template>

<script>
export default {
  data: () => ({

  }),
	methods: {
		otherLocale() {
			let other = 'en';
			if(this.$i18n.locale === 'en') {
				other = 'ru'
        console.info("lang: ", other)
			}

		},
		switchLocale () {
			if (this.$i18n.locale === 'en') {
				this.$i18n.locale = 'ru'
			} else {
				this.$i18n.locale = 'en'
			}
		}
	}
};
</script>
