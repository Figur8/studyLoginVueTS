<template>
    <Page>
        <FlexboxLayout class="page">
            <StackLayout class="form">
                <Image
                        src="https://www.carnegietechnologies.com/sites/ct/assets/image/logo-octopus.png"
                        loadMode="async" stretch="aspectFit"></Image>

                <StackLayout class="input-field">
                    <TextField v-model="email" hint="email" class="input" keyboardType="email"
                               autocorrect="false" autocapitalizationType="none" >
                    </TextField>
                    <Label class="message" :text="email"/>
                </StackLayout>

                <StackLayout class="input-field">
                    <TextField hint="Password" secure="true" class="input">
                    </TextField>
                </StackLayout>
                <Button text="Log In" class="btn btn-primary" @tap="clientLogin" ></Button>
                <Button text="Log In" class="btn btn-primary"
                        @tap="goTo"></Button>
            </StackLayout>
        </FlexboxLayout>
    </Page>
</template>

<script lang="ts">

    import Vue from 'nativescript-vue';
    import {Component} from 'vue-property-decorator';

    import Home from "./Home";
    import client from "@/lib/fusionAuthClientInstance";

    @Component
    export default class App extends Vue {
        public login: string = 'ismaelteste';
        public password: string = '123456789';
        public email: string = 'adasdasd';
        private request: Object;

        requestProvider(){

            this.request =  {
                "loginId": this.email,
                "password": this.password,
                "applicationId": "fca4814f-645c-4c3f-a9b0-2b2ca7a2e835"
            };
            return this.request;
        };

        clientLogin() {

            return client.login(this.requestProvider())
                .then(this.handleResponse, this.handleErrorResponse);
        };
        handleResponse(clientResponse) {

            console.log(JSON.stringify(clientResponse, null, 2));
        };
        handleErrorResponse(clientResponse) {
            console.log("passei aqui com erro");
            console.error(JSON.stringify(clientResponse, null, 2));
        };
    }
</script>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }
</style>
