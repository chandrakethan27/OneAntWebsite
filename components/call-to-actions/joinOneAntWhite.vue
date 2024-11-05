<template>
  <div>
    <v-dialog max-width="500">
      <template v-slot:activator="{ props: activatorProps }">
        <button
          v-bind="activatorProps"
          class="px-12 py-3 font-bold !text-red-500 bg-white rounded-md shadow-sm text-capitalize"
          variant="flat"
        >
          <span class="text-red-600">Join OneAnt</span>
        </button>
      </template>

      <template v-slot:default="{ isActive }">
        <v-card title="Join One Ant " class="pa-5">
          <form>
            <p class="my-5 text-body-2">
              🐜 Calling all ant-venturers!! Dive into the ant-icipated world of
              OneAnt – be part of the colony shaping a sustainable future! 🚀🐜
              #BetaTestAntics #OneAntAdventure
            </p>
            <label for="Email">Email</label>
            <v-text-field class="my-3" variant="outlined"></v-text-field>
            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn
                text="Close Dialog"
                class=""
                size="small"
                @click="isActive.value = false"
              ></v-btn>
              <v-btn
                text="Submit"
                class="bg-red"
                size="small"
                type="submit"
                @click="isActive.value = false"
              ></v-btn>
            </v-card-actions>
          </form>
        </v-card>
      </template>
    </v-dialog>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
