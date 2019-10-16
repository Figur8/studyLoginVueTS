import ClientResponse from "@fusionauth/typescript-client/build/src/ClientResponse";
import {HttpResponse, request} from "tns-core-modules/http";
import IRESTClient from "@fusionauth/typescript-client/build/src/IRESTClient";

export default class DefaultRESTClientNative implements IRESTClient{
    public credentials: RequestCredentials;
    public headers: {
        [key: string]: string;
    };
    public host: string;
    public parameters: {
        [key: string]: string;
    };
    protected uri: string;
    protected body: string;
    protected method: string;
    constructor(host: string) {
        this.host = host;
        this.headers = {};
        this.parameters = {};

    }
    /**
     * Sets the authorization header using a key
     *
     * @param {string} key The value of the authorization header.
     * @returns {DefaultRESTClient}
     */
    withAuthorization(key?: any): IRESTClient{
        if (key === null || typeof key === 'undefined') {
            return this;
        }
        this.withHeader('Authorization', key);
        return this;
    }
    /**
     * Adds a segment to the request uri
     */
    withUriSegment(segment?: any): IRESTClient {
        if (segment === null || segment === undefined) {
            return this;
        }
        if (this.uri === null) {
            this.uri = '';
        }
        if (this.uri.charAt(this.uri.length - 1) !== '/') {
            this.uri += '/';
        }
        this.uri = this.uri + segment;
        return this;
    }
    /**
     * Get the full url + parameter list
     */
    getFullUrl(): string {
        return this.host + this.uri + this.getQueryString();
    }
    /**
     * Adds a header to the request.
     *
     * @param key The name of the header.
     * @param value The value of the header.
     */
    withHeader(key: string, value: string): IRESTClient {
        this.headers[key] = value;
        return this;
    }
    /**
     * Sets the body of the client request.
     *
     * @param body The object to be written to the request body as JSON.
     */
    withJSONBody(body: object): IRESTClient {
        this.body = JSON.stringify(body);
        this.withHeader('Content-Type', 'application/json');
        // Omit the Content-Length, this is set auto-magically by the request library
        return this;
    }
    /**
     * Sets the http method for the request
     */
    withMethod(method: any): IRESTClient {
        this.method = method;
        return this;
    }
    /**
     * Sets the uri of the request
     */
    withUri(uri: any): IRESTClient {
        this.uri = uri;
        return this;
    }
    /**
     * Adds parameters to the request.
     *
     * @param name The name of the parameter.
     * @param value The value of the parameter, may be a string, object or number.
     */
    withParameter(name: any, value: any): IRESTClient {
        this.parameters[name] = value;
        return this;
    }
    /**
     * Run the request and return a promise. This promise will resolve if the request is successful
     * and reject otherwise.
     */
    go<T>(): Promise<ClientResponse<T>> {
        let clientResponse = new ClientResponse<any>();
        return new Promise((resolve, reject) => {
            request({
                url: this.getFullUrl(),
                method: this.method,
                headers: this.headers,
                content: this.body
            })
                .then((response) : ClientResponse<any> => {
                    clientResponse.statusCode = response.statusCode;
                    clientResponse.response = response.content.raw;
                    try { // Try parsing as json
                        clientResponse.response = response.content.toJSON();
                    }
                    catch (e) {
                    }
                    if (!clientResponse.wasSuccessful()) {
                        reject(clientResponse);
                        return;
                    }
                    resolve(clientResponse);
                },error => {
                    clientResponse.exception = error;
                    reject(clientResponse);
                })
        });
    }
    private getQueryString(): string {
        var queryString = '';
        for (let key in this.parameters) {
            queryString += (queryString.length === 0) ? '?' : '&';
            queryString += key + '=' + encodeURIComponent(this.parameters[key]);
        }
        return queryString;
    }

    withCredentials(value: "omit" | "same-origin" | "include"): IRESTClient {
        this.credentials = value;
        return this;
    }
}