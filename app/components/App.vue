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
                    <Label class="message" :text="result"/>
                </StackLayout>

                <StackLayout class="input-field">
                    <TextField v-model="password"  hint="Password" secure="true" class="input">
                    </TextField>
                </StackLayout>
                <Button text="Log In" class="btn btn-primary" @tap="clientLogin" ></Button>
                <Button text="Home" class="btn btn-primary" @tap="goTo" ></Button>
            </StackLayout>

        </FlexboxLayout>

    </Page>
</template>

<script lang="ts">
    import Vue from 'nativescript-vue';
    import {Component} from 'vue-property-decorator';
    import client from "@/lib/fusionAuthClientInstance";
    import Home from "@/components/Home.vue";
    import { topmost } from 'tns-core-modules/ui/frame';

    const home = {
        template: `
    <Page>
       <ActionBar title="Home" class="action-bar" />
        <ScrollView>
            <StackLayout class="home-panel">
                <Label>Funciona</Label>
            </StackLayout>
        </ScrollView>
    </Page>
  `
    };

    const secure = {
        template: `
    <Page>
       <ActionBar title="Second" class="action-bar" />
        <ScrollView>
            <StackLayout class="home-panel">
                <Label>Second action action</Label>
            </StackLayout>
        </ScrollView>
    </Page>
  `
    };

    @Component
    export default class App extends Vue {
        public email: string ;
        public password: string;
        private request: Object;
        private result: JSON = [];
        components: {
            Home
        }

        goTo(){
            this.$navigateTo(home);
        };

        requestProvider(){
            this.request =  {
                "loginId": this.email,
                "password": this.password,
                "applicationId": "fca4814f-645c-4c3f-a9b0-2b2ca7a2e835"
            };
            return this.request;
        };
        clientLogin() {
            // this.$navigateTo(secure);
            return client.login(this.requestProvider())
                .then(this.handleResponse, this.handleErrorResponse)
                .then(response => {
                    this.result = response;
                    console.log(this.result);
                });
        };
        handleResponse(clientResponse) {
            return JSON.stringify(clientResponse);
        };
        handleErrorResponse(clientResponse) {
            return JSON.stringify(clientResponse);
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
