import { expect } from "chai";

import {
  allFixtures,
} from "./fixtures/markets";

describe("market lifecycle fixtures", function () {
  it("has both unresolved and resolved examples", function () {
    const markets =
      allFixtures();

    const unresolved =
      markets.filter(
        (market) =>
          !market.resolved,
      );

    const resolved =
      markets.filter(
        (market) =>
          market.resolved,
      );

    expect(unresolved.length)
      .to.be.greaterThan(0);

    expect(resolved.length)
      .to.be.greaterThan(0);
  });

  it("resolved markets have results", function () {
    const markets =
      allFixtures().filter(
        (market) =>
          market.resolved,
      );

    for (const market of markets) {
      expect(
        market.result,
      ).to.not.equal(undefined);
    }
  });

  it("unresolved markets do not need results", function () {
    const markets =
      allFixtures().filter(
        (market) =>
          !market.resolved,
      );

    for (const market of markets) {
      expect(
        market.result,
      ).to.equal(undefined);
    }
  });

  it("fixtures cover different vote distributions", function () {
    const markets =
      allFixtures();

    const totals =
      markets.map(
        (market) =>
          market.yes +
          market.no,
      );

    expect(
      new Set(
        totals.map(
          (value) =>
            value.toString(),
        ),
      ).size,
    ).to.be.greaterThan(1);
  });
});
