export function jobService(context) {
    const ad = require("tns-core-modules/utils/utils").ad;
    android.app.job.JobService.extend("com.tns.notifications.MyJobService", {
        onStartJob: function(params) {
            console.log("Job execution ...");

            // Do something useful here, fetch data and show notification for example
            const builder = new android.app.Notification.Builder(context);
            builder.setContentTitle("Alerta!")
                .setAutoCancel(true)
                .setColor(android.R.color.holo_purple)//getResources().getColor(R.color.colorAccent))
                .setContentText("Preste atenção em seus sintomas, pois talvez você esteja contaminado")
                .setVibrate([100, 200, 100])
                .setSmallIcon(android.R.drawable.btn_star_big_on);

            // will open main NativeScript activity when the notification is pressed
            const mainIntent = new android.content.Intent(context, com.tns.NativeScriptActivity.class);

            // example for custom intent passing custom data via the broadcast receiver
            let intent = new android.content.Intent("customservice");
            var broadcastManager = androidx.localbroadcastmanager.content.LocalBroadcastManager.getInstance(ad.getApplicationContext());
            broadcastManager.sendBroadcast(intent);

            const mNotificationManager = context.getSystemService(android.content.Context.NOTIFICATION_SERVICE);

            // The id of the channel.
            const channelId = "my_channel_01";
            // The user-visible name of the channel.
            const name = "Channel name";
            // The user-visible description of the channel.
            const description = "Channel description";
            const importance = android.app.NotificationManager.IMPORTANCE_LOW;
            const mChannel = new android.app.NotificationChannel(channelId, name,importance);
            // Configure the notification channel.
            mChannel.setDescription(description);
            mChannel.enableLights(true);
            // Sets the notification light color for notifications posted to this
            // channel, if the device supports this feature.
            mChannel.setLightColor(android.graphics.Color.RED);
            mChannel.enableVibration(true);
            mNotificationManager.createNotificationChannel(mChannel);

            builder.setChannelId(channelId);

            mNotificationManager.notify(1, builder.build());

            return false;
        },

        onStopJob: function() {
            console.log("Stopping job ...");
        }
    });
}

export function teste(context){
    console.log("o que caralhos está acontecendo")
    // Create a component from the JobService that should be triggered
    let component = new android.content.ComponentName(context, com.tns.notifications.MyJobService.class);
    console.log("creating a content.Component :",component)

    // Set the id of the job to something meaningful for you
    const builder = new android.app.job.JobInfo.Builder(1, component);

    // Optional: Set how often the task should be triggered. The minimum is 15min.
    builder.setPeriodic(5 * 60 * 1000);

    // Optional: Set additional requirements under what conditions your job should be triggered
    builder.setRequiresCharging(false);

    const jobScheduler = context.getSystemService(android.content.Context.JOB_SCHEDULER_SERVICE);
    console.log("Job Scheduled: " + jobScheduler.schedule(builder.build()));
    console.log("Pelo menos rodou essa disgraça")
}
