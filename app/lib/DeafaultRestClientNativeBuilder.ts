import IRESTClientBuilder from "@fusionauth/typescript-client/build/src/IRESTClientBuilder";
import DefaultRESTClientNative from "@/lib/DefaultRESTClientNative";
import IRESTClient from "@fusionauth/typescript-client/build/src/IRESTClient";

export default class DefaultRESTClientNativeBuilder implements IRESTClientBuilder{
    build(host): IRESTClient {
        return new DefaultRESTClientNative(host);
    }
}