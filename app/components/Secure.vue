<template>
    <Page>
        <StackLayout class="input-field">
            <Button text="Log In" class="btn btn-primary" @tap="test" ></Button>
        </StackLayout>
    </Page>
</template>

<script lang="ts">
    import Vue from 'nativescript-vue';
    import {Component} from 'vue-property-decorator';
    import { LocalNotifications } from "nativescript-local-notifications";
    import {Telephony} from 'nativescript-telephony';

    @Component
    export default class Secure extends Vue {
        private simData: JSON;
        private imei: string;
        constructor() {

            LocalNotifications.hasPermission();

        }
        test(){
            console.log(this.getImei());


        }

        localNotification(imei: string){

            LocalNotifications.schedule(
                [{
                    id: 1,
                    title: 'Nova mensagem em nMobile',
                    subtitle: this.imei,
                    body: imei,
                    bigTextStyle: false,
                    forceShowWhenInForeground: true,
                    icon: "res://logo",
                    image: "res://icon",
                    channel: "vue-channel",
                }])
            LocalNotifications.requestPermission().then(
                function(granted) {
                    console.log("Permission granted? " + granted);
                }
            )
        }

        getImei(){
           return Telephony().then((responseDevice) => {
               this.simData = responseDevice;
               this.imei = this.simData.deviceId;
               this.localNotification(this.imei);
           })

        }
    }
</script>

<style scoped>

</style>