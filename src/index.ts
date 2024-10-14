import { useEffect, useRef } from 'react';
import * as Notifications from 'expo-notifications';

export function useNeodeliverListener(cb?: (response: Notifications.NotificationResponse) => void) {
  const responseListener = useRef<Notifications.Subscription>();

  useEffect(() => {
    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      const msg_id = response.notification.request.content.data?.message_id
      if(msg_id) {
        onClick(msg_id)
      }

      cb?.(response);
    });

    return () => {
      responseListener.current &&
        Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);
}

function onClick(msg_id: string) {
  const server = 'https://api.neodeliver.com'
  const url = `${server}/notification/open/${msg_id}`

  fetch(url)
    .catch(error => console.error(error))
}