<template>
	<u-navbar :title="title" :is-back="isBack" back-icon-color="#000000" title-color="#0000000" :background="background"></u-navbar>
</template>

<script>
	export default {
		name: "headerNav",
		props: {
			title: {
				type: String,
				default: "",
			},
			isBack: {
				type: Boolean,
				default: true,
			},
		},
		data() {
			return {
				background: {
					background: "#ffffff",
				},
			};
		},
	};
</script>

<style lang="scss"></style>
