import { json1 } from './json';
import { Effect, EffectName, Json1 } from './models';

class JsonParser {
  json: Json1;

  constructor(json: Json1) {
    this.json = json;
  }

  get() {
    return this.json;
  }

  getEffectByName(effectName: EffectName): Effect | undefined {
    const effect = this.json.data.effects.find((effect) => effect.name === effectName);
    return effect;
  }
}

const jsonParser = new JsonParser(json1 as Json1);

// console.log(jsonParser.get());
console.log(jsonParser.getEffectByName(EffectName.VI));

