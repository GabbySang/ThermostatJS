'use strict'

describe ('Thermostat', function() {

var thermostat;

beforeEach(function() {
  thermostat = new Thermostat();
});

  it('starts at 20 degrees', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('increases temperature using up', function () {
  thermostat.up();
  expect(thermostat.getCurrentTemperature()).toEqual(21);
});

  it ('decreases temperature using down', function () {
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it ('has a minimum temperature of 10 degrees', function () {
    for (let i = 0; i < 11; i++ ) {
      thermostat.down();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  it ('has power saving mode on by default', function () {
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it ('can switch power saving mode off', function () {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  });

  it ('can switch PSM back on', function () {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
    thermostat.switchPowerSavingModeOn();
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  describe('when power saving mode is on', function () {
    it ('has a maximum temperature of 25 degrees', function () {
      for (let i = 0; i < 6; i++) {
        thermostat.up();
      }
        expect(thermostat.getCurrentTemperature()).toEqual(25);
    });
  });

});
