import { expect } from "chai";

import {
  allFixtures,
  openFixtures,
  resolvedFixtures,
  openMarket,
  balancedMarket,
  yesMarket,
  noMarket,
} from "./fixtures/markets";

describe("market fixtures", function () {
  it("contains several example markets", function () {
    expect(
      allFixtures(),
    ).to.have.length(4);
  });

  it("contains an open market", function () {
    expect(
      openMarket.resolved,
    ).to.equal(false);
  });

  it("contains a balanced market", function () {
    expect(
      balancedMarket.yes,
    ).to.equal(
      balancedMarket.no,
    );
  });

  it("contains a YES result", function () {
    expect(
      yesMarket.result,
    ).to.equal("YES");

    expect(
      yesMarket.resolved,
    ).to.equal(true);
  });

  it("contains a NO result", function () {
    expect(
      noMarket.result,
    ).to.equal("NO");

    expect(
      noMarket.resolved,
    ).to.equal(true);
  });

  it("filters open markets", function () {
    expect(
      openFixtures(),
    ).to.have.length(2);
  });

  it("filters resolved markets", function () {
    expect(
      resolvedFixtures(),
    ).to.have.length(2);
  });

  it("keeps fixture ids unique", function () {
    const ids =
      allFixtures().map(
        (market) =>
          market.id.toString(),
      );

    expect(
      new Set(ids).size,
    ).to.equal(ids.length);
  });
});
