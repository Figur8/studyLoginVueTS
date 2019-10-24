<template>
    <Page>
        <>
    </Page>
</template>

<script lang="ts">
    import Vue from 'nativescript-vue';
    import {Component} from 'vue-property-decorator';
    import { LocalNotifications } from "nativescript-local-notifications";
    import { setInterval, clearInterval } from "tns-core-modules/timer";
    @Component
    export default class Secure extends Vue {
        constructor() {
            LocalNotifications.hasPermission()
            this.test();
        }
        test(){

            LocalNotifications.schedule(
                [{
                    id: 1,
                    title: 'Nova mensagem em nMobile',
                    subtitle: 'Mensagem de nTopus',
                    body: "message.message",
                    bigTextStyle: false,
                    forceShowWhenInForeground: true,
                    icon: "res://logo",
                    image: "res://icon",
                    channel: "vue-channel",
                    at: new Date(new Date().getTime() + (10 * 1000))
                }])
            LocalNotifications.requestPermission().then(
                function(granted) {
                    console.log("Permission granted? " + granted);
                }
            )
        }
    }
</script>

<style scoped>

</style>