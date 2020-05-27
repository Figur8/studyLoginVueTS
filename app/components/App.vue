<template for="r in result">
<!--    <StackLayout  class="page">-->
<!--        <TabView :selectedIndex="selectedIndex" @selectedIndexChange="indexChange" androidTabsPosition="bottom">-->
<!--            <TabViewItem title="Tab 1">-->
<!--                <Navigator :defaultRoute="'/home'"/>-->
<!--            </TabViewItem>-->
<!--            <TabViewItem title="Tab 2">-->
<!--                <Label text="Content for Tab 2" />-->
<!--            </TabViewItem>-->
<!--        </TabView>-->

<!--    </StackLayout>-->

    <Page>
        <FlexboxLayout class="page">
            <Home />
            <StackLayout class="form">
                <Label>teste</Label>
                <Image src="res://octopus" loadMode="async" stretch="aspectFit"></Image>
                <StackLayout class="input-field">
                    <TextField v-model="email" hint="email" class="input" keyboardType="email" autocorrect="false" autocapitalizationType="none" ></TextField>
                </StackLayout>
                <StackLayout class="input-field">
                    <TextField v-model="password"   hint="Password" secure="true" class="input"></TextField>
                </StackLayout>
                <Button text="Log In"  class="btn btn-primary" @tap="clientLogin"  ></Button>
                <Label class="fab" :text="'fa-git' | fonticon" />
                <Label class="fal" :text="'fa-plus-square' | fonticon" />
                <Label class="fa" :text="'fa-plus-square' | fonticon" />
                <Label class="fas" :text="'fa-wheelchair' | fonticon" />
            </StackLayout>
        </FlexboxLayout>

    </Page>
</template>

<script lang="ts">
    import { TabView } from "tns-core-modules/ui/tab-view";
    import Vue from 'nativescript-vue';
    import {Component, Prop} from 'vue-property-decorator';
    import client from "@/lib/fusionAuthClientInstance";
    import Home from "@/components/Home.vue";
    import {jobService, teste} from "@/notifications/teste";

    export interface Result<T> {
        statusCode: string,
        response: T,
        registration: Array<string>,
    }

    @Component({
        components: {
            Home,
        }
    })
    export default class App extends Vue {
        private email: string ;
        private password: string;
        private request: Object;
        private roles: JSON;
        private user: any;
        public post: string;
        public result: Result<any>;

        beforeCreate

        backgroundService() {
            var Observable = require("tns-core-modules/data/observable").Observable;
            var utils = require("tns-core-modules/utils/utils");
            teste(utils.ad.getApplicationContext())
            jobService(utils.ad.getApplicationContext())
        }
        goTo(roleInFusionAuth){

            // if(roleInFusionAuth == "view-security-message" || roleInFusionAuth == "admin"){
                this.$navigateTo(Home, {
                    props: {
                        role: this.post,
                    }
                });
            // }else{
            //     alert({
            //         title: "TRETA",
            //         message: "Usuário ou senha incorretos",
            //         okButtonText: "try Again"
            //     })
            // };

        };

        indexChange(args){
            let newIndex = args.value;
            console.log('Current tab index: ' + newIndex);
        };

        requestProvider(): any{
            this.request =  {
                "loginId": this.email,
                "password": this.password,
                "applicationId": "fca4814f-645c-4c3f-a9b0-2b2ca7a2e835"
            };
            return this.request;
        };
        clientLogin(){
          this.goTo(this.post);
            // return client.login(this.requestProvider())
            //     .then(this.handleResponse, this.handleErrorResponse)
            //     .then(response => {
            //         this.result = response;
            //         this.user = this.result.response;
            //         this.roles = this.user.user.registrations;
            //         this.post = this.roles[0].roles[0];
            //         console.log(this.post)
            //         this.goTo(this.post);
            //     });
        };
        handleResponse(clientResponse) {
            return clientResponse;
        };
        handleErrorResponse(clientResponse) {
            return clientResponse;
        };

        components: {
            Home,
        }

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
    .input{
        border-bottom: 1px solid #CCC;
    }

    .fa-glass:before {
        content: "\f000";
    }
    .fa-music:before {
        content: "\f001";
    }

</style>
