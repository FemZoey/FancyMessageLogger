# FancyMessageLogger
> By: FemZoey

## Support:

[Join the discord!](https://discord.gg/UC7rye4GsK)

## Requirements:
- Colog ``npm i colog``;
- Discord.js v12.4.1 (outdated but still works) ``npm i discord.js@12.4.1``.

## How to use:

### For people who have followed the tutorial:
  On your bot folder you'll have an "**Event**" folder,
  all you need to do is insert this .js file in there and
  change the bot tag and the owner tag.
  
### For people who are coding without the tutorial:
  So you'll have to create a bot folder then paste the following into your
  main/index.js file:


```javascript
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args, client));
	} else {
		client.on(event.name, (...args) => event.execute(...args, client));
	}
 ```
 
 
  After you're done with this download the message logger and put it in your newly created
  events folder, then change the bot name, owner name and channel to log to.
  
  And done. You now have a fully functional message logger that logs to console and discord

## Screenshots:
![screenshot](https://cdn.discordapp.com/attachments/914218618781302874/922975030575501342/unknown.png "Proof of it working")

## Important:
THIS IS ONLY INTENDED TO LOG **ONE** DISCORD SERVER.
LOGGING MULTIPLE DISCORDS IS POSSIBLE BUT MAY BE MESSY.

## Thanks!
Thanks for looking at my project and considering to use it!
