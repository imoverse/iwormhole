# iwormhole
Simple event library for the browser.

Whereas the eventemitter library is great for event handling in the browser, the EventEmitter instances still need to be shared between sender and reciever. iwormhole handles the event handler state within the module, so there is no need to create instances and share them. Simply import the module, subscribe to, or trigger events right away.

```
import { on, off, trigger } from '@imoverse/iwormhole';

const alertFn = (firstname, email) => {
  alert(`Great! We'll be in touch`);
};

on('sign-up', alertFn);

trigger('sign-up', 'John', 'john@doe.com');

off('sign-up', alertFn);
```

Invoke the trigger function with any number of arguments, and they will be passed on to the handler function. The handlers are all invoked sequentially in the order they was added.



