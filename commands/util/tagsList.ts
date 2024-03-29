/*
 * Gabe Dunn 2018
 * Definitions of available tags.
 */

import {
  blue, green, orange, purple, red, yellow,
} from '../../utils/colors'

export const tags = {
  devops: {
    title: 'DevOps',
    color: green,
    description: [
      'DevOps is a way of working to combine joint effort form Development and Operations teams (hence Dev - Ops.)',
      'It is commonly associated with cloud native technologies such as Kubernetes, Containers, and CI/CD practices et al.\n',
      '[Martin Fowler\'s DevOps Culture](https://www.martinfowler.com/bliki/DevOpsCulture.html)',
    ].join('\n')
  },
  oss: {
    title: 'First Time Contributors',
    color: blue,
    description: [
      'Contributing to reputable open-source projects is a great way to build experience in the tech industry without doing free work for clients.',
      'https://yourfirstpr.github.io/',
      'https://www.firsttimersonly.com/',
    ].join('\n'),
  },
  bot: {
    title: 'Bot Channel',
    color: blue,
    description: 'Please use commands related to the bot in the' +
      ' <#271293371438333952> channel. Thanks.',
  },
  ask: {
    title: 'Asking to Ask',
    color: red,
    description: 'Instead of asking to ask, ask your question instead.' +
      ' People can help you better if they know your question.\n\n' +
      '[How do I ask a good question?](https://stackoverflow.com/help/how-to-ask)\n' +
      '[Don\'t ask to ask, just ask](https://dontasktoask.com)',
  },
  loweffort: {
    title: 'Low effort',
    color: red,
    description: 'Low effort posts will result in low effort responses. ' +
      'Please make sure you have researched your topic and have tried some solutions ' +
      'before posting it here. Devcord is not your 24/7 live support.\n' +
      'Continuous low effort posting will result in punitive action.\n\n' +
      'Additionally, use some time to review the following resources: \n' +
      '[Google](https://google.com)\n' +
      '[How to ask a question?](https://stackoverflow.com/help/how-to-ask)',
  },
  ideas: {
    title: 'Project Ideas',
    color: blue,
    description: [
      'Personal Blog',
      'IRC bot',
      'Echo Server',
      'Network proxy',
      'Read CPU fan sensors',
      'Make a Hackernews/reddit client (they have a nice JSON API)',
      'Rendering something in a window (Animated Sprite for example)',
      'Making a desktop app with GTK or QT',
      'Make a JSON editor GUI',
      'Create a Pokedex with the Pokemon API',
      'Headless CMS',
      'Build an Interpreter',
      'Weather App',
      'Tetris',
    ].map(idea => '- ' + idea).join('\n'),
  },
  jobs: {
    title: 'Jobs',
    color: blue,
    description: 'No job offers allowed on this server please. Free work is' +
      ' allowed, but not many people will want to work for free.',
  },
  sfw: {
    title: 'SFW (Safe for Work)',
    color: yellow,
    description: 'Please keep the messages safe for work here.',
  },
  channels: {
    title: 'Posting in Multiple Channels',
    color: orange,
    description: 'It would be greatly appreciated if you kept your posting' +
      ' to the channel designated for that topic. Additionally, please refrain' +
      ' from posting the same question in multiple channels.',
  },
  cs: {
    title: 'Christian Server',
    color: red,
    image: { url: 'https://cdn.discordapp.com/attachments/174075418410876928/377425219872096256/maxresdefault.png' },
  },
  canudont: {
    title: 'Can U Dont',
    color: blue,
    image: { url: 'https://cdn.discordapp.com/attachments/174075418410876928/428989988286365696/can_u_dont.jpg' },
  },
  code: {
    title: 'Use Code Blocks',
    color: blue,
    fields: [
      {
        name: 'To directly post code into Discord, type:',
        value: '\\`\\`\\`js\nconsole.log(\'hello this is js\')\n\\`\\`\\`' +
          '\nYou can replace `js` with other language names like `html`, `css` or even `jsx`. [Click here](https://support.discord.com/hc/en-us/articles/210298617) for more information.',
      }, {
        name: 'How it will look:',
        value: '```js\nconsole.log(\'hello this is js\')\n```',
      },
    ],
  },
  pen: {
    title: 'Post Your Code',
    color: blue,
    description: 'Post your code online. Here are some options:',
    fields: [
      {
        name: 'https://codesandbox.io - Supports node modules',
      }, {
        name: 'https://github.com - For full projects',
      }, {
        name: 'https://codepen.io - Great for beginners',
      }, {
        name: 'https://jsfiddle.net - Similar to codepen',
      }
    ],
  },
  roadmap: {
    title: 'Developer Roadmap',
    url: 'https://github.com/kamranahmedse/developer-roadmap',
    color: blue,
    description: 'This is a very nice outline on the general technologies' +
      ' recommended for the path of your choosing. Use the as an outline, and' +
      ' not as the sole source of authority. Make your own decisions as well.',
  },
  nice: {
    title: 'Nice',
    color: blue,
    image: { url: 'https://cdn.discordapp.com/attachments/287200463382642689/433326230495035412/1447912710960.jpg' },
  },
  editor: {
    title: 'IDEs & Code Editors',
    color: blue,
    fields: [
      {
        name: 'IDEs',
        value: 'IDEs (Integrated Development Environment) are programs that' +
          ' include a code editor, but also integrations with various other' +
          ' development tools (linters, version control,' +
          ' intellisense/autocomplete, automatic refactoring, database' +
          ' management, etc.).',
      },
      {
        name: 'Code Editors',
        value: 'Code editors are text editors that usually include syntax' +
          ' highlighting, simple project management, and other helpful code' +
          ' editing tools.',
      },
      {
        name: 'WebStorm/PHPStorm (or any other JetBrains Product)',
        value: 'These IDEs, as they have a full suite of tools for' +
          ' development. Additionally they have a plugin system for anything' +
          ' that they do not automatically include. [Webstorm Download](https://www.jetbrains.com/webstorm/), [PHPStorm Download](https://www.jetbrains.com/phpstorm/)',
      },
      {
        name: 'Visual Studio',
        value: 'Visual studio is a full IDE made by microsoft. It works well' +
          ' with .NET based languages, as they are made by the same people.' +
          ' They also include a plugin system. [Download](https://visualstudio.microsoft.com/)',
      },
      {
        name: 'Atom',
        value: 'Atom is a code editor based on web technology. It\'s made by' +
          ' GitHub, and has a massive community, with plugins for everything. [Download](https://atom.io/)',
      },
      {
        name: 'VS Code',
        value: 'VS Code is another editor based off of web technology, but' +
          ' is better optimized and runs faster. This is built by microsoft' +
          ' and has a large set of plugins as well. [Download](https://code.visualstudio.com/)',
      },
      {
        name: 'Sublime Text',
        value: 'Sublime text starts off as a nice small and fast editor.' +
          ' It\'s the fastest text editor that I\'ve seen. There is also a' +
          ' wide selection of plugins. [Download](https://www.sublimetext.com/)',
      },
      {
        name: 'Vim',
        value: 'Vim is a command line text editor with plugins that can do' +
          ' pretty much anything. It is largely popular, but has a learning' +
          ' curve before you can be productive in it. [Download](https://www.vim.org/)',
      },
      {
        name: 'Notepad++',
        value: 'Notepad++ is a very lightweight code editor, with a lot ' +
          'of plugins for everything you can think of. It is beyond excellent ' +
          'for quick edit or doodle work. [Download](https://notepad-plus-plus.org/)',
      },
    ],
  },
  framework: {
    title: 'Frameworks (& Libraries)',
    color: green,
    description: 'There is a large debate as to which framework is the best' +
      ' for your webapp, and this is just an overview of the top contenders.',
    fields: [
      {
        name: 'Vue',
        value: 'Vue is a web framework that is easy to learn and use while' +
          ' being quite powerful. It has been described as taking the best' +
          ' from both React and Angular, and combining them. They have a large' +
          ' community, and it\'s quite fun to use. It has separation of' +
          ' concerns while being all in the same file, and has a large' +
          ' community of people and plugins. There are projects like ream and' +
          ' nuxt for SSR, and it\'s lightweight (smaller file than jQuery).' +
          ' Vue also has nativescript-vue and weex to write mobile apps using' +
          ' the same Vue syntax.',
      },
      {
        name: 'React',
        value: 'React is not a framework, and is rather a library. It is' +
          ' backed by Facebook, and has a lot of useful features. It uses JSX,' +
          ' which is writing your HTML (or XML, actually) in javascript, and' +
          ' makes for a bit of a learning curve, but in the short time it' +
          ' takes to learn it\'s interesting to use. React also has React' +
          ' native which allows mobile development using the same syntax and' +
          ' application logic as your rect webapp.',
      },
      {
        name: 'Angular',
        value: 'I do not know as much about Angular as I do Vue and React,' +
          ' (please make a PR if you have more knowledge), I do know that to' +
          ' use Angular, it\'s almost required to use typescript. Angular is a' +
          ' full MVC, so it provided the entire suite of tools including' +
          ' routing, state management, etc. This does lead to a more' +
          ' opinionated way of doing things, but makes making decisions a lot' +
          ' easier.',
      },
    ],
    footer: {
      text: 'My personal recommendation is Vue but definitely try out the' +
        ' others and use what you prefer.',
    },
  },
  invite: {
    title: 'https://discord.gg/devcord',
    color: blue,
  },
  doubt: {
    title: '[x] Doubt',
    color: blue,
    image: { url: 'https://media.discordapp.net/attachments/174075418410876928/435482310612221993/doubt.jpg?width=400&height=228' },
  },
  sqlinjection: {
    title: 'Bind your parameters to prevent SQL injection',
    color: blue,
    description: 'Don\'t get hacked, use prepared statements as explained here:',
    fields: [
      {
        name: 'PDO',
        value: '[Prepared statements with PDO](https://secure.php.net/manual/en/pdo.prepared-statements.php).',
      }, {
        name: 'Mysqli',
        value: '[Prepared statements with mysqli](https://secure.php.net/manual/en/mysqli.quickstart.prepared-statements.php).',
      },
    ],
  },
  template: {
    title: 'Template',
    color: blue,
    description: 'The information needed to post your project in this channel.',
    fields: [
      {
        name: 'Project Description',
        value: 'A short description of the project.',
      },
      {
        name: 'Time Commitment',
        value: 'How long will this project take? How much time can someone expect to commit to this project? Is there a deadline or desired date of completion?',
      },
      {
        name: 'Languages',
        value: 'List all relevant languages.',
      },
      {
        name: 'Skill Level',
        value: 'What skill level are you looking for? Are you willing to work with junior developers or prefer middle/senior level developers?',
      },
      {
        name: 'Communication',
        value: 'What is the preferred method of communication? If a developer is interested, how should they contact you? Do NOT give out email addresses or other personally identifiable information.',
      },
    ],
  },
  flexbox: {
    title: 'Flexbox',
    color: purple,
    description: 'The Flexible Box Module, usually referred to as flexbox, was' +
      ' designed as a one-dimensional layout model, and as a method that could' +
      ' offer space distribution between items in an interface and powerful alignment capabilities.',
    fields: [
      {
        name: 'MDN web docs',
        value: '[Flexbox documentation.](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)',
      },
      {
        name: 'Flexbox quickstart guide',
        value: '[Learn flexbox in minutes! Easy, and powerful!](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)',
      },
      {
        name: 'Flexbox Froggy',
        value: '[Get frogs to where they need to be with the magic of flexbox!](https://flexboxfroggy.com)',
      },
      {
        name: 'Flexbox Defense',
        value: '[Blast enemies into nothingness with defensive towers positioned by flexbox!](http://www.flexboxdefense.com/)',
      },
    ],
  },
  fetch: {
    title: 'JavaScript Fetch API',
    color: purple,
    description: 'The Fetch API provides an interface for fetching resources' +
      ' (including across the network). It will seem familiar to anyone who has used' +
      ' XMLHttpRequest, but the new API provides a more powerful and flexible feature set.',
    fields: [
      {
        name: 'MDN web docs',
        value: '[Fetch API documentation.](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)',
      },
      {
        name: 'Fetch HTTPlib',
        value: '[A Fetch library that assists with learning how to use fetch.](https://codepen.io/papaamazon-the-flexboxer/project/editor/DWwjNM)',
      },
      {
        name: 'Fetch tutorial',
        value: '[A tutorial that shows how to use fetch to get data from an API.](https://scotch.io/tutorials/how-to-use-the-javascript-fetch-api-to-get-data)',
      },
      {
        name: 'MDN fetch usage example',
        value: '[A very in depth write up write-up on how to use fetch.](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch_)',
      },
    ],
  },
  grid: {
    title: 'CSS Grid',
    color: purple,
    description: 'CSS Grid Layout excels at dividing a page into major' +
      'regions or defining the relationship in terms of size, position, and' +
      'layer, between parts of a control built from HTML primitives. \n' +
      'Like tables, grid layout enables an author to align elements into' +
      'columns and rows. However, many more layouts are either possible or' +
      'easier with CSS grid than they were with tables. For example, a grid' +
      'container\'s child elements could position themselves so they actually' +
      'overlap and layer, similar to CSS positioned elements.',
    fields: [
      {
        name: 'MDN Web Docs',
        value: '[CSS Grid Layout Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)',
      },
      {
        name: 'CSS Grid Quickstart Guide',
        value: '[A quick and dirty guide to CSS Grid.](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)',
      },
      {
        name: 'CSS Grid Garden',
        value: '[A game for learning CSS Grid.](http://cssgridgarden.com/)',
      },
      {
        name: 'CSS Grid Video Series',
        value: '[A CSS Grid video series by Wes Bos.](https://cssgrid.io/)',
      },
    ],
  },
  markdown: {
    title: 'Markdown Formatting',
    color: blue,
    description: 'A guide on markdown formatting in discord.',
    url: 'https://support.discordapp.com/hc/en-us/articles/210298617-Markdown-Text-101-Chat-Formatting-Bold-Italic-Underline-',
  },
  thanks: {
    title: 'Thanking people',
    color: blue,
    description: 'Thanking someone is a nice way to appreciate the help they have given you' +
      ' for solving a problem or explaining something. ' +
      ' You can thank someone by typing ``thanks @user#id``.' +
      ' Additionally any sentence with the word "thank" and a user tag will thank the user.',
  },
  design: {
    title: 'Design Articles',
    color: purple,
    description: 'Looking to improve your design skills? Here are some helpful' +
      'articles.',
    fields: [
      {
        name: '[7 Tips for Cheating at Design](https://medium.com/refactoring-ui/7-practical-tips-for-cheating-at-design-40c736799886)',
      },
      {
        name: '[10 Design Rules for Programmers](https://thoughtspile.github.io/2018/12/17/design-crash-course/)',
      },
      {
        name: '[The Secret Heroes of UX Design](https://link.medium.com/XrKhnmTAsT)',
      },
      {
        name: '[Color Pallete](https://refactoringui.com/previews/building-your-color-palette/)',
      },
      {
        name: '[Color Usage](https://www.smashingmagazine.com/2017/09/vibrant-colors-apps-websites/)',
      },
      {
        name: '[Using Gradients](https://www.smashingmagazine.com/2018/01/gradients-user-experience-design/)',
      },
    ],
  },
  helproles: {
    title: 'Help Roles',
    description: 'Use the command `.ping <role>` to ping a help role, and `.pingable` to get a list of help roles. You may only ping once an hour, and twice a day.',
  },
  fasy: {
    color: blue,
    image: { url: 'https://media.discordapp.net/attachments/174075418410876928/435887256843321354/loamy.jpg?width=401&height=84' },
  },
  dog: {
    color: blue,
    image: { url: 'https://cdn.discordapp.com/attachments/174075418410876928/436958508039012379/unknown.png' },
  },
  nofromme: {
    color: blue,
    image: {
      url: 'https://cdn.discordapp.com/attachments/763318123247173632/763417022440407040/bc6da3faeae3fcb81fc9201dbc8e588c--terrible-memes-tumblr-stuff.png',
    },
  },
  rust: {
    color: orange,
    title: 'Did someone say Rust?',
    image: { url: 'https://i.imgur.com/mczIGZK.jpg' },
  }, 
  donodohurtonme : {
    color: red,
    title: 'DO NO DO HURT ON ME',
    image: { url: 'https://i.imgur.com/yJ8h0KY.png' },
  },
}
