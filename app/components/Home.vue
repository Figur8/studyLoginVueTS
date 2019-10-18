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

    @Component
    export default class Home extends Vue {

    }
</script>

<style scoped>

</style>