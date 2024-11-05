<template>
  <div>
    <div v-if="$viewport.isGreaterThan('mobileWide')">
      <LogoMedium />
    </div>
    <div v-if="$viewport.isLessThan('mobileWide')">
      <LogoSmall />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
