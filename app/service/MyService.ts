declare var com: any

@JavaProxy("com.foo.MyService")
export class MyService extends com.pip3r4o.android.app.IntentService {

    protected onHandleIntent(intent: android.content.Intent): void {
        console.log('executing service')
    }


}
