export const getCard = () => ({
  description: [
    `Prepare for the pitch`,
    `Find money for travel`,
    `Eat something`,
  ][Math.floor(Math.random() * 3)],
  dueDate: Date.now() + 1 + Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000,
  dueTime: Date.now(),
  tags: new Set([`homework`, `theory`, `practice`, `intensive`, `keks`]),
  repeatingDays: {
    mo: false,
    tu: false,
    we: Boolean(Math.round(Math.random())),
    th: false,
    fr: false,
    sa: false,
    su: false,
  },
  color: [`black`, `yellow`, `blue`, `green`, `pink`][
    Math.floor(Math.random() * 5)
  ],
  isFavorite: Boolean(Math.round(Math.random())),
  isArchive: Boolean(Math.round(Math.random())),
});

export const getFilter = () => [
  {
    title: [`ALL`, `OVERDUE`, `TODAY`, `FAVORITES`, `REPEATING`, `ARCHIVE`],
  },
  {
    count(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
  },
];

export const getCardEdit = () => ({
  color: [`black`, `green`, `yellow`, `pink`, `red`, `blue`][
    Math.floor(Math.random() * 6)
  ],
  description: [
    `Prepare for the pitch`,
    `Find money for travel`,
    `Eat something`,
  ][Math.floor(Math.random() * 3)],
  isDate: Boolean(Math.round(Math.random())),
  isRepeat: Boolean(Math.round(Math.random())),
  date: Date.now(),
});