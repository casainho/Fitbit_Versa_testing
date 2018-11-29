import { display } from "display";
import { me } from "appbit";

me.appTimeoutEnabled = false;

let counter = 0;

display.autoOff = false;
display.on = true;

setInterval(() => {
  counter += 1;
  if (counter > 100) counter = 0;
  display.brightnessOverride = counter / 100;

  console.log("Counter: " + counter + " : " + display.brightnessOverride);
}, 100);

