import { assertEquals } from "@std/assert";
import { FakeTime } from "@std/testing/time";

// ! Temporal に対してのFakeTimeは出来ない

const saturdayNight = () => {
  const today = new Date();
  return today.getDay() == 6 && today.getHours() > 18;
};

Deno.test("time-dependent tests", () => {
  // Create a fake time starting at a specific date (a Monday)
  const mockedTime: FakeTime = new FakeTime(new Date(2026, 1, 2, 0, 0, 0));

  try {
    // Test with the mocked Monday
    assertEquals(saturdayNight(), false);

    // Move time forward to Saturday
    mockedTime.tick(5 * 24 * 60 * 60 * 1000); // Advance 5 days
    assertEquals(saturdayNight(), false);

    // Move time foward to Night
    mockedTime.tick(19 * 60 * 60 * 1000); // Advance 19 Hours
    assertEquals(saturdayNight(), true);
  } finally {
    // Always restore the real time
    mockedTime.restore();
  }
});
