import Head from "next/head";
import { useEffect, useState } from "react";
import boosters from "../boosters";

export default function Home() {
  const [booster, setBooster] = useState();
  const [permission, setPermission] = useState();
  useEffect(() => {
    console.log("boosters", boosters);

    const randomBooster = boosters[Math.floor(Math.random() * boosters.length)];
    console.log("randomBooster:", randomBooster);
    setBooster(randomBooster);
    setPermission(Notification.permission);
    const notif2 = new Notification("Daily Boost");
    console.log("notif2:", notif2);
  }, []);

  const allowNotifications = () => {
    console.log("clicked");
    Notification.requestPermission().then(function (result) {
      console.log(result);
      setPermission(result);
    });
  };

  const createNotification = () => {
    console.log("create notifi");
    const notif = new Notification("Daily Boost", {
      body: booster,
    });
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        {booster}

        <button
          onClick={allowNotifications}
          type="button"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Allow notification permission
        </button>
        {permission}
        <button
          onClick={createNotification}
          type="button"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Get notification
        </button>
      </main>
    </div>
  );
}
