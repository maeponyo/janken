import Strategy from "../strategy/round-robin";
import Card from "../card";

function swap(list, from, to) {
  const tmp = list[to];
  list[to] = list[from];
  list[from] = tmp;
  return list;
}

class History {
  constructor(n = 10) {
    const cards = [Card.create(0), Card.create(1), Card.create(2)];
    while (n > 0) {
      const from = Math.floor(Math.random() * 100) % cards.length;
      const to = Math.floor(Math.random() * 100) % cards.length;
      swap(cards, from, to);
      n = n - 1;
    }
    this._strategy = new Strategy(cards);
  }
  get strategy() {
    return this._strategy;
  }
  action() {
    return this.strategy.action();
  }
}

export { History as default };
export { History };
