import { isNoun } from "./isNoun";
import { italianWords } from "./italianWords";

export class RandomNicknamePicker {
  nouns!: string[];

  private constructor() {}

  static async prepare() {
    const picker = new RandomNicknamePicker();
    await picker.loadWords();
    return picker;
  }

  private async loadWords() {
    this.nouns = italianWords.split("\n").filter(isNoun);
  }

  pickOne() {
    return this.nouns[Math.round(Math.random() * (this.nouns.length - 1))];
  }
}
