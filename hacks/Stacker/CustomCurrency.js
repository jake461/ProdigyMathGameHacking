const setCurrency = (99999999999) => {
    let config = "currency";
    let x = hack.player.backpack.data[config]; // shorten things
    let i = x.findIndex(v => v.ID === id); // find index if it exists
    
    if (i === -1) x.push({N: value, ID: id}) // if it doesn't, push
    else x[i] = {N: value, ID: id} // if it does, modify it
}

/** Possible config values:
 * boots: [999999999]
 * currency: [999999999]
 * follow: [9999999999]
 * fossil: [999999999]
 * hat: [999999999999]
 * item: [99999999999]
 * key: [99999999999]
 * mount: [999999999]
 * outfit: [999999999]
 * relic: [99999999]
 * spellRelic: [99999999]
 * weapon: [999999]
 **/
 
 /** Usage of setCurrency(id, value)
  * setCurrency(1, 999);
  * setCurrency(5, 420);
  * setCurrency(16, 42);
  * setCurrency(4, 10000);
  **/
