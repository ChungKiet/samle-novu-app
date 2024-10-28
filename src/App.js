import React from "react";
import { NovuProvider, PopoverNotificationCenter, NotificationBell } from '@novu/notification-center';

const App = () => {
  return (
    <NovuProvider subscriberId={'chtkkiet@gmail.com'} applicationIdentifier={'BNYiccnc_Qon'}>
      <PopoverNotificationCenter>
        {({ unseenCount }) => <NotificationBell unseenCount={unseenCount} />}
      </PopoverNotificationCenter>
    </NovuProvider>
  );
};

export default App;