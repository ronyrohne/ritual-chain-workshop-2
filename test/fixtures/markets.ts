export type MarketFixture = {
  id: bigint;
  question: string;
  yes: bigint;
  no: bigint;
  resolved: boolean;
  result?: "YES" | "NO";
};

export const openMarket: MarketFixture = {
  id: 101n,
  question:
    "Will ETH reach the target?",
  yes: 10n,
  no: 5n,
  resolved: false,
};

export const balancedMarket: MarketFixture = {
  id: 102n,
  question:
    "Will BTC stay above the target?",
  yes: 8n,
  no: 8n,
  resolved: false,
};

export const yesMarket: MarketFixture = {
  id: 103n,
  question:
    "Will the YES side win?",
  yes: 20n,
  no: 4n,
  resolved: true,
  result: "YES",
};

export const noMarket: MarketFixture = {
  id: 104n,
  question:
    "Will the NO side win?",
  yes: 3n,
  no: 18n,
  resolved: true,
  result: "NO",
};

export function allFixtures(): MarketFixture[] {
  return [
    openMarket,
    balancedMarket,
    yesMarket,
    noMarket,
  ];
}

export function resolvedFixtures(): MarketFixture[] {
  return allFixtures().filter(
    (market) =>
      market.resolved,
  );
}

export function openFixtures(): MarketFixture[] {
  return allFixtures().filter(
    (market) =>
      !market.resolved,
  );
}
