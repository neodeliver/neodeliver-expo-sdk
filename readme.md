NeoDeliver Expo SDK
===================

The **NeoDeliver Expo SDK** simplifies tracking push notification statistics for apps using [NeoDeliver](https://www.neodeliver.com). It integrates seamlessly with Expo.dev and allows effortless monitoring of notification delivery, interactions, and more.

**Features**
------------

*   Track push notification stats with minimal setup.
    
*   Designed for **Expo.dev Push Notification Tokens**.
    
*   Lightweight, simple, and developer-friendly.
    

**Installation**
----------------

Install the package using npm:

```bash
npm install @neodeliver/expo-sdk
```

**Getting Started**
-------------------

### **1\. Import the Listener**

In your Expo project, import the useNeodeliverListener hook:

```javascript
import { useNeodeliverListener } from '@neodeliver/expo-sdk';
```

### **2\. Add the Listener to Your App**

Use the useNeodeliverListener hook in your main app component. The listener will automatically track notification events for NeoDeliver.

```javascript
import React from 'react';
import { useNeodeliverListener } from '@neodeliver/expo-sdk';

export default function App() {
  // Initialize the NeoDeliver listener
  useNeodeliverListener();

  return (
    <YourMainAppComponent />
  );
}
```

That’s it! NeoDeliver will handle the rest.

**How It Works**
----------------

The useNeodeliverListener hook listens for push notification events such as:


*   **Notification opened**
    

These events are automatically sent to your NeoDeliver account for detailed analytics and insights.

**Requirements**
----------------

*   [Expo SDK](https://expo.dev)
    
*   A NeoDeliver account. [Sign up here](https://www.neodeliver.com).
    

**Support**
-----------

For any questions, issues, or feature requests, please visit:

*   **GitHub Repository**: [NeoDeliver Expo SDK](https://github.com/neodeliver/neodeliver-expo-sdk)
    
*   **NeoDeliver Website**: [https://www.neodeliver.com](https://www.neodeliver.com)
    

**License**
-----------

This project is licensed under the MIT License.

Start tracking and optimizing your push notification campaigns today with **NeoDeliver Expo SDK**! 🚀