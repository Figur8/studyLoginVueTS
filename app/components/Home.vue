<template>
    <Page>
        <ActionBar title="Home" class="action-bar" />
        <ScrollView>
            <StackLayout class="home-panel">
                <Button text="Get My Location" @tap="getLocation" class="btn btn-primary" />
                <Button text="Secure" class="btn btn-primary" @tap="goToSecure" ></Button>

                <Label :text="'Latitude: ' + lat" class="lbl" />
                <Label :text="'Longitude: ' + lon" class="lbl" />
            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script lang="ts">
    import Vue from 'nativescript-vue';
    import {Component, Prop} from 'vue-property-decorator';
    import * as geolocation from 'nativescript-geolocation';
    import { Accuracy } from "tns-core-modules/ui/enums";
    import Secure from "@/components/Secure.vue";
    import * as utils from "tns-core-modules/utils/utils";

    @Component
    export default class Home extends Vue {
        private lat: string = "";
        private lon: string = "";
        private speed: string = "";
        private addr: string = "";
        @Prop() public role: string;

        goToSecure(){
            if(this.role == "admin") {
                this.$navigateTo(Secure);
            }else{
                alert({
                    title: "User Not is admin",
                    message: "volte osado",
                    okButtonText: "exit"
                }).then(() => {
                    console.log("Alert dialog closed");
                });
            };
        }

        getLocation() {
            geolocation.enableLocationRequest();
            geolocation.getCurrentLocation({ desiredAccuracy: Accuracy.high, maximumAge: 5000, timeout: 20000 })
                .then(res => {
                    this.lat = res.latitude;
                    this.lon = res.longitude;
                    utils.openUrl("https://www.google.com/maps/place/" +this.lat +','+ this.lon )
                });
        };

        goToTest(roleInFusionAuth: string){
            if(roleInFusionAuth == "view-security-message") {
                this.$navigateTo(Secure);
            }else{
                alert({
                    title: "TRETA",
                    message: "Usuário sem Permissão",
                    okButtonText: "OK"
                }).then(() => {
                    console.log("Alert dialog closed");
                });
            };
        }
        props:{
            nome: string,
        };
        components: {
            Secure,
        };

    }
</script>

<style scoped>

</style>