<template>
<div>
  <q-layout view="hHh lpR fff" class="gt-sm">
    <q-header class="bg-white">
      <q-toolbar>
        <div class="row full-width" style="align-items: center">
          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-2 flex row center">
            <q-list borderless padding>
              <q-item>
                <q-item-section top avatar>
                  <q-avatar
                    color="primary"
                    text-color="white"
                    icon="mdi-home"
                  />
                </q-item-section>
                <q-item-section>
                  <q-item-label
                    class="text-black align-center text-bold"
                    style="font-weight: 800"
                  >
                    LLP COMPARATOR
                  </q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-8">
            <q-input dense filled type="search" placeholder="search">
              <template v-slot:append>
                <q-icon name="mdi-magnify" />
              </template>
            </q-input>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-4 col-lg-2">
            <q-btn class="text-black" flat no-caps>
              <q-icon
                name="mdi-account"
                size="xs"
                color="black"
                class="q-mr-xs"
              />
              Sign In
            </q-btn>
            <q-btn class="text-black" flat no-caps>
              <q-icon
                name="mdi-briefcase-account"
                size="xs"
                color="black"
                class="q-mr-xs"
              />
              Join in as Pro
            </q-btn>
          </div>
        </div>
      </q-toolbar>

      <q-separator inset />
    </q-header>
    <q-separator />
    <q-page-container class="doc-container" style="">
      <router-view></router-view>
    </q-page-container>
    <q-footer style="bca">
      <div class="row no-wrap items-center q-pa-xs rounded-borders">
        <q-img class="q-ml-sm q-mt-xs" style="width: 4%; height: 1%" />
        <q-space></q-space>
        <div class="text-caption q-mr-md">
          <q-icon
            class="cursor-pointer q-pr-md items-center"
            size="1.4em"
            name="mdi-email"
          ></q-icon
          >Email Us your feedback
        </div>
      </div>
    </q-footer>
  </q-layout>
  <q-layout view="hHh lpR fff" class="lt-md">
    <q-header class="bg-white">
      <div class="row justify-between q-mt-md">
        <div class="row justify-start">
          <div>
            <q-btn flat icon="mdi-menu" color="black">
              <q-menu>
                <q-list dense style="min-width: 100px">
                  <q-item clickable v-close-popup>
                    <q-item-section>Advice</q-item-section>
                  </q-item>
                  <q-separator />
                  <q-item clickable>
                    <q-item-section>Preferences</q-item-section>
                    <q-item-section side>
                      <q-icon name="mdi-menu-right" size="xs" />
                    </q-item-section>
                    <q-menu anchor="top end" self="top start">
                      <q-list>
                        <q-item v-for="n in 3" :key="n" dense clickable>
                          <q-item-section>Submenu Label</q-item-section>
                          <q-item-section side>
                            <q-icon name="mdi-menu-right" size="xs" />
                          </q-item-section>
                          <q-menu auto-close anchor="top end" self="top start">
                            <q-list>
                              <q-item v-for="n in 3" :key="n" dense clickable>
                                <q-item-section>3rd level Label</q-item-section>
                              </q-item>
                            </q-list>
                          </q-menu>
                        </q-item>
                      </q-list>
                    </q-menu>
                  </q-item>
                  <q-separator />
                  <q-item clickable v-close-popup>
                    <q-item-section>Quit</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </div>
          <div class="row justify-center">
            <div class="text-h6 text-black">LLP COMPARATOR</div>
          </div>
        </div>
        <div class="row">
          <div>
            <q-btn round flat>
              <q-avatar size="42px">
                <q-icon name="mdi-magnify" color="black" size="md" />
              </q-avatar>
            </q-btn>
          </div>
          <q-icon name="mdi-account" size="md" color="black" class="q-mr-xs" />
        </div>
      </div>
      <q-separator inset class="q-mb-lg" />
    </q-header>
    <q-page-container class="doc-container" style="">
      <router-view></router-view>
    </q-page-container>
  </q-layout>
  </div>
</template>
