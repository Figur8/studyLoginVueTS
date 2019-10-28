<template for="r in result">
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
                </StackLayout>
                <StackLayout class="input-field">
                    <TextField v-model="password"  hint="Password" secure="true" class="input">
                    </TextField>
                </StackLayout>
                <Button text="Log In" class="btn btn-primary" @tap="clientLogin" ></Button>
            </StackLayout>
        </FlexboxLayout>
    </Page>
</template>

<script lang="ts">
    import Vue from 'nativescript-vue';
    import {Component, Prop} from 'vue-property-decorator';
    import client from "@/lib/fusionAuthClientInstance";
    import Home from "@/components/Home.vue";
    import { Fontawesome } from 'nativescript-fontawesome';


    export interface result {
        statusCode: string,
        response: JSON,
        registration: Array<string>,
    }

    @Component
    export default class App extends Vue {
        constructor() {

            Fontawesome.init();
        }

        private email: string ;
        private password: string;
        private request: Object;
        private roles: JSON;
        private user: JSON;
        public post: string;


        goTo(roleInFusionAuth){
            if(roleInFusionAuth == "view-security-message" || roleInFusionAuth == "admin"){
                this.$navigateTo(Home, {
                    props: {
                        role: this.post,
                    }
                });
            }else{
                alert({
                    title: "TRETA",
                    message: "Usuário ou senha incorretos",
                    okButtonText: "try Again"
                }).then(() => {
                    console.log("Alert dialog closed");
                });
            };

        };

        requestProvider(){
            this.request =  {
                "loginId": this.email,
                "password": this.password,
                "applicationId": "fca4814f-645c-4c3f-a9b0-2b2ca7a2e835"
            };
            return this.request;
        };

        testFusionAuthMethods() {
            return client.searchUsers("901904d8-5eeb-441f-a80e-8c8c595825b5")
                .then(response => {
                    console.log(response);
                });
        };

        clientLogin() {
            // this.$navigateTo(secure);
            return client.login(this.requestProvider())
                .then(this.handleResponse, this.handleErrorResponse)
                .then(response => {
                    this.result = response;
                    this.user = this.result;
                    this.roles = this.user.response.user.registrations;
                    this.post = this.roles[0].roles[0];
                    console.log(this.roles[0].roles[0]);
                    // this.user = this.result.response;
                    // this.roles = this.user.user.registrations;
                    // this.post = this.roles[0].roles[0];
                })
                .then(responsibility =>{
                     console.log(this.post);
                    this.goTo(this.roles[0].roles[0]);
                 });
        };



        handleResponse(clientResponse) {
            return clientResponse;
        };
        handleErrorResponse(clientResponse) {
            return clientResponse;
        };

        components: {
            Home,
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
    .fa {
        Font-family: 'Font Awesome 5 Free';
    }
</style>
