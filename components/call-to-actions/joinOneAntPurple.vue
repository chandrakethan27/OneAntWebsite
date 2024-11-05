<template>
    <div>
      <v-dialog max-width="500">
        <template v-slot:activator="{ props: activatorProps }">
          <v-btn
            v-bind="activatorProps"
            color="secondary"
        
            class="rounded-0 text-capitalize font-weight-bold"
            variant="flat"
          >Join One Ant <v-icon>mdi-arrow-right</v-icon> </v-btn>
        </template>
  
        <template v-slot:default="{ isActive }">
          <v-card title="Join One Ant " class="pa-5">
            <form>
              <p class="text-body-2 my-5 ">
                🐜 Calling all ant-venturers!! Dive into the ant-icipated world of
                OneAnt – be part of the colony shaping a sustainable future! 🚀🐜
                #BetaTestAntics #OneAntAdventure
              </p>
              <label for="Email" >Email</label>
              <v-text-field class="my-3" variant="outlined" ></v-text-field>
              <v-card-actions>
                <v-spacer></v-spacer>
  
                <v-btn
                  text="Close Dialog"
                  class=""
                  size="small"
                  @click="isActive.value = false"
                ></v-btn>
                <v-btn
                  class="bg-secondary"
                  size="small"
                  type="submit"
                  @click="isActive.value = false"
                > Submit </v-btn>
              </v-card-actions>
            </form>
          </v-card>
        </template>
      </v-dialog>
    </div>
  </template>
  
  <script setup lang="ts"></script>
  
  <style scoped></style>
  