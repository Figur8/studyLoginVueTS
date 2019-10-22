<template>
    <Page>
        <ActionBar title="Home" class="action-bar" />
        <ScrollView>
            <StackLayout class="home-panel">
                <Button text="Get My Location" @tap="getLocation" class="btn btn-primary" />

                <Label :text="'Latitude: ' + lat" class="lbl" />
                <Label :text="'Longitude: ' + lon" class="lbl" />

            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script lang="ts">
    import Vue from 'nativescript-vue';
    import {Component} from 'vue-property-decorator';
    import * as geolocation from 'nativescript-geolocation';
    import { Accuracy } from "tns-core-modules/ui/enums";

    @Component
    export default class Home extends Vue {
        private lat: string = "";
        private lon: string = "";
        private speed: string = "";
        private addr: string = "";

        getLocation() {
            geolocation.enableLocationRequest();
            geolocation.getCurrentLocation({ desiredAccuracy: Accuracy.high, maximumAge: 5000, timeout: 20000 })
                .then(res => {
                    this.lat = res.latitude;
                    this.lon = res.longitude;
                });
        }
    }
</script>

<style scoped>

</style>