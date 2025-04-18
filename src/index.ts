import { AppleScriptFramework } from "./framework.js";
import { systemCategory } from "./categories/system.js";
import { calendarCategory } from "./categories/calendar.js";
import { finderCategory } from "./categories/finder.js";
import { clipboardCategory } from "./categories/clipboard.js";
import { notificationsCategory } from "./categories/notifications.js";
import { itermCategory } from "./categories/iterm.js";
import { mailCategory } from "./categories/mail.js";
import { pagesCategory } from "./categories/pages.js";
import { shortcutsCategory } from "./categories/shortcuts.js";
import { messagesCategory } from "./categories/messages.js";
import { musicCategory } from "./categories/music.js";

const server = new AppleScriptFramework({
  name: "applescript-server",
  version: "1.0.3",
  debug: true,
});

// Add all categories
server.addCategory(systemCategory);
server.addCategory(calendarCategory);
server.addCategory(finderCategory);
server.addCategory(clipboardCategory);
server.addCategory(notificationsCategory);
server.addCategory(itermCategory);
server.addCategory(mailCategory);
server.addCategory(pagesCategory);
server.addCategory(shortcutsCategory);
server.addCategory(messagesCategory);
server.addCategory(musicCategory);

// Start the server
server.run().catch(console.error);
