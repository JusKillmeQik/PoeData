'use strict';

// Default settings
const settingsDefault = {
  cacheLifetime: 60 * 24 * 7
};
// Base data structure
const dataBase = {
  // https://www.pathofexile.com/api/trade/data/leagues
  leagues: null,
  // https://www.pathofexile.com/api/trade/data/static
  cards: null,
  currency: null,
  mapsTier1: null,
  MapsTier2: null,
  MapsTier3: null,
  MapsTier4: null,
  MapsTier5: null,
  MapsTier6: null,
  MapsTier7: null,
  MapsTier8: null,
  MapsTier9: null,
  MapsTier10: null,
  MapsTier11: null,
  mapsTier12: null,
  mapsTier13: null,
  mapsTier14: null,
  mapsTier15: null,
  mapsTier16: null,
  essences: null,
  fossils: null,
  fragments: null,
  incubators: null,
  leaguestones: null,
  resonators: null,
  scarabs: null,
  vials: null,
  // https://www.pathofexile.com/api/trade/data/stats
  stats: null
};

// Nodejs dependencies
const request = require('request');

// Internal dependencies
const CachedStorage = require('./cached-storage.js');

class PoeTradeApiReader extends CachedStorage {
  constructor(settings) {
    super(Object.assign({}, settingsDefault, settings, { ident: "trade-api" }));
    // Ensure data structures are present
    this.data = Object.assign({}, dataBase, this.data);
  }
  handleLeagues(apiData) {
    // Leagues
    this.data.leagues = {};
    for (let leagueIndex = 0; leagueIndex < apiData.result.length; leagueIndex++) {
      let leagueData = apiData.result[leagueIndex];
      this.data.leagues[leagueData.id] = leagueData.text;
    }
  }
  handleStatic(apiData) {
    for (let staticIndex = 0; staticIndex < apiData.result.length; staticIndex++) {
      if (apiData.result[staticIndex].id == "Cards"){
        // Cards
        this.data.cards = {};
        //for (let cardIndex = 0; cardIndex < apiData.result.cards.length; cardIndex++) {
        for (let cardIndex = 0; cardIndex < apiData.result[staticIndex].length; cardIndex++) {
          let cardData = apiData.result[staticIndex].entries[cardIndex];
          this.data.cards[cardData.id] = cardData.text;
        }
      }
      if (apiData.result[staticIndex].id == "Currency"){
        // Currency
        this.data.currency = {};
        for (let currencyIndex = 0; currencyIndex < apiData.result[staticIndex].length; currencyIndex++) {
          let currencyData = apiData.result[staticIndex].entries[currencyIndex];
          this.data.currency[currencyData.id] = currencyData.text;
        }
        log.info(this.data.currency);
      }
      if (apiData.result[staticIndex].id == "Essences"){
        // Essences
        this.data.essences = {};
        for (let essenceIndex = 0; essenceIndex < apiData.result[staticIndex].length; essenceIndex++) {
          let essenceData = apiData.result[staticIndex].entries[essenceIndex];
          this.data.essences[essenceData.id] = essenceData.text;
        }
      }
      if (apiData.result[staticIndex].id == "Fossils"){
        // Fossils
        this.data.fossils = {};
        for (let fossilIndex = 0; fossilIndex < apiData.result[staticIndex].length; fossilIndex++) {
          let fossilData = apiData.result[staticIndex].entries[fossilIndex];
          this.data.fossils[fossilData.id] = fossilData.text;
        }
      }
      if (apiData.result[staticIndex].id == "Fragments"){
        // Fragments
        this.data.fragments = {};
        for (let fragmentIndex = 0; fragmentIndex < apiData.result[staticIndex].length; fragmentIndex++) {
          let fragmentData = apiData.result[staticIndex].entries[fragmentIndex];
          this.data.fragments[fragmentData.id] = fragmentData.text;
        }
      }
      if (apiData.result[staticIndex].id == "Incubators"){
        // Incubators
        this.data.incubators = {};
        for (let incubatorIndex = 0; incubatorIndex < apiData.result[staticIndex].length; incubatorIndex++) {
          let incubatorData = apiData.result[staticIndex].entries[incubatorIndex];
          this.data.incubators[incubatorData.id] = incubatorData.text;
        }
      }
      if (apiData.result[staticIndex].id == "Leaguestones"){
        // Leaguestones
        this.data.leaguestones = {};
        for (let leaguestoneIndex = 0; leaguestoneIndex < apiData.result[staticIndex].length; leaguestoneIndex++) {
          let leaguestoneData = apiData.result[staticIndex].entries[leaguestoneIndex];
          this.data.leaguestones[leaguestoneData.id] = leaguestoneData.text;
        }
      }
      if (apiData.result[staticIndex].id == "Resonators"){
        // Resonators
        this.data.resonators = {};
        for (let resonatorIndex = 0; resonatorIndex < apiData.result[staticIndex].length; resonatorIndex++) {
          let resonatorData = apiData.result[staticIndex].entries[resonatorIndex];
          this.data.resonators[resonatorData.id] = resonatorData.text;
        }
      }
      if (apiData.result[staticIndex].id == "Scarabs"){
        // Scarabs
        this.data.scarabs = {};
        for (let scarabIndex = 0; scarabIndex < apiData.result[staticIndex].length; scarabIndex++) {
          let scarabData = apiData.result[staticIndex].entries[scarabIndex];
          this.data.scarabs[scarabData.id] = scarabData.text;
        }
      }
      if (apiData.result[staticIndex].id == "Vials"){
        // Vials
        this.data.vials = {};
        for (let vialIndex = 0; vialIndex < apiData.result[staticIndex].length; vialIndex++) {
          let vialData = apiData.result[staticIndex].entries[vialIndex];
          this.data.vials[vialData.id] = vialData.text;
        }
      }
      if (apiData.result[staticIndex].id == "MapsTier1"){
        // Maps
        this.data.mapsTier1 = {};
        for (let mapIndex = 0; mapIndex < apiData.result[staticIndex].length; mapIndex++) {
          let mapData = apiData.result[staticIndex].entries[mapIndex];
          this.data.mapsTier1[mapData.id] = mapData.text;
        }
      }
      if (apiData.result[staticIndex].id == "MapsTier2"){
        // Maps
        this.data.mapsTier2 = {};
        for (let mapIndex = 0; mapIndex < apiData.result[staticIndex].length; mapIndex++) {
          let mapData = apiData.result[staticIndex].entries[mapIndex];
          this.data.mapsTier2[mapData.id] = mapData.text;
        }
      }
      if (apiData.result[staticIndex].id == "MapsTier3"){
        // Maps
        this.data.mapsTier3 = {};
        for (let mapIndex = 0; mapIndex < apiData.result[staticIndex].length; mapIndex++) {
          let mapData = apiData.result[staticIndex].entries[mapIndex];
          this.data.mapsTier3[mapData.id] = mapData.text;
        }
      }
      if (apiData.result[staticIndex].id == "MapsTier4"){
        // Maps
        this.data.mapsTier4 = {};
        for (let mapIndex = 0; mapIndex < apiData.result[staticIndex].length; mapIndex++) {
          let mapData = apiData.result[staticIndex].entries[mapIndex];
          this.data.mapsTier4[mapData.id] = mapData.text;
        }
      }
      if (apiData.result[staticIndex].id == "MapsTier5"){
        // Maps
        this.data.mapsTier5 = {};
        for (let mapIndex = 0; mapIndex < apiData.result[staticIndex].length; mapIndex++) {
          let mapData = apiData.result[staticIndex].entries[mapIndex];
          this.data.mapsTier5[mapData.id] = mapData.text;
        }
      }
      if (apiData.result[staticIndex].id == "MapsTier6"){
        // Maps
        this.data.mapsTier6 = {};
        for (let mapIndex = 0; mapIndex < apiData.result[staticIndex].length; mapIndex++) {
          let mapData = apiData.result[staticIndex].entries[mapIndex];
          this.data.mapsTier6[mapData.id] = mapData.text;
        }
      }
      if (apiData.result[staticIndex].id == "MapsTier7"){
        // Maps
        this.data.mapsTier7 = {};
        for (let mapIndex = 0; mapIndex < apiData.result[staticIndex].length; mapIndex++) {
          let mapData = apiData.result[staticIndex].entries[mapIndex];
          this.data.mapsTier7[mapData.id] = mapData.text;
        }
      }
      if (apiData.result[staticIndex].id == "MapsTier8"){
        // Maps
        this.data.mapsTier8 = {};
        for (let mapIndex = 0; mapIndex < apiData.result[staticIndex].length; mapIndex++) {
          let mapData = apiData.result[staticIndex].entries[mapIndex];
          this.data.mapsTier8[mapData.id] = mapData.text;
        }
      }
      if (apiData.result[staticIndex].id == "MapsTier9"){
        // Maps
        this.data.mapsTier9 = {};
        for (let mapIndex = 0; mapIndex < apiData.result[staticIndex].length; mapIndex++) {
          let mapData = apiData.result[staticIndex].entries[mapIndex];
          this.data.mapsTier9[mapData.id] = mapData.text;
        }
      }
      if (apiData.result[staticIndex].id == "MapsTier10"){
        // Maps
        this.data.mapsTier10 = {};
        for (let mapIndex = 0; mapIndex < apiData.result[staticIndex].length; mapIndex++) {
          let mapData = apiData.result[staticIndex].entries[mapIndex];
          this.data.mapsTier10[mapData.id] = mapData.text;
        }
      }
      if (apiData.result[staticIndex].id == "MapsTier11"){
        // Maps
        this.data.mapsTier11 = {};
        for (let mapIndex = 0; mapIndex < apiData.result[staticIndex].length; mapIndex++) {
          let mapData = apiData.result[staticIndex].entries[mapIndex];
          this.data.mapsTier11[mapData.id] = mapData.text;
        }
      }
      if (apiData.result[staticIndex].id == "MapsTier12"){
        // Maps
        this.data.mapsTier12 = {};
        for (let mapIndex = 0; mapIndex < apiData.result[staticIndex].length; mapIndex++) {
          let mapData = apiData.result[staticIndex].entries[mapIndex];
          this.data.mapsTier12[mapData.id] = mapData.text;
        }
      }
      if (apiData.result[staticIndex].id == "MapsTier13"){
        // Maps
        this.data.mapsTier13 = {};
        for (let mapIndex = 0; mapIndex < apiData.result[staticIndex].length; mapIndex++) {
          let mapData = apiData.result[staticIndex].entries[mapIndex];
          this.data.mapsTier13[mapData.id] = mapData.text;
        }
      }
      if (apiData.result[staticIndex].id == "MapsTier14"){
        // Maps
        this.data.mapsTier14 = {};
        for (let mapIndex = 0; mapIndex < apiData.result[staticIndex].length; mapIndex++) {
          let mapData = apiData.result[staticIndex].entries[mapIndex];
          this.data.mapsTier14[mapData.id] = mapData.text;
        }
      }
      if (apiData.result[staticIndex].id == "MapsTier15"){
        // Maps
        this.data.mapsTier15 = {};
        for (let mapIndex = 0; mapIndex < apiData.result[staticIndex].length; mapIndex++) {
          let mapData = apiData.result[staticIndex].entries[mapIndex];
          this.data.mapsTier15[mapData.id] = mapData.text;
        }
      }
      if (apiData.result[staticIndex].id == "MapsTier16"){
        // Maps
        this.data.mapsTier16 = {};
        for (let mapIndex = 0; mapIndex < apiData.result[staticIndex].length; mapIndex++) {
          let mapData = apiData.result[staticIndex].entries[mapIndex];
          this.data.mapsTier16[mapData.id] = mapData.text;
        }
      }
    }
  }
  handleStats(apiData) {
    // Leagues
    this.data.stats = {};
    for (let statTypeIndex = 0; statTypeIndex < apiData.result.length; statTypeIndex++) {
      let statTypeData = apiData.result[statTypeIndex];
      this.data.stats[statTypeData.label] = {};
      for (let entryIndex = 0; entryIndex < statTypeData.entries.length; entryIndex++) {
        let entryData = statTypeData.entries[entryIndex];
        this.data.stats[statTypeData.label][entryData.id] = entryData.text;
      }
    }
  }
  updateApiData(dataType) {
    let url = "https://www.pathofexile.com/api/trade/data/"+dataType;
    return new Promise((resolve, reject) => {
      request({
        'method': 'GET',
        'uri': url,
        'json': true,
      }, (error, response, body) => {
          if (error) reject(error);
          if (response.statusCode !== 200) {
              reject('Invalid status code <' + response.statusCode + '>');
          }
          resolve(body);
      });
    });
  }
  async refresh() {
    // Check cache for wiki data
    if (!this.isCacheValid(this.settings["cacheLifetime"])) {
      this.invokeCallback("update-start");
      let promiseLeagues = this.updateApiData("leagues");
      let promiseStatic = this.updateApiData("static");
      let promiseStats = this.updateApiData("stats");
      this.handleLeagues(await promiseLeagues);
      this.handleStatic(await promiseStatic);
      this.handleStats(await promiseStats);
      this.writeCache();
      this.invokeCallback("update-done");
    }
  }
}

module.exports = PoeTradeApiReader;
