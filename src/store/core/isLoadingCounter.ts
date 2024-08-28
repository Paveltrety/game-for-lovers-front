import { KnownActionTypes } from '@/store/core/actions';

export class IsLoadingCounter {
  private isLoadingCounter = 0;

  private readonly name: KnownActionTypes;

  hasError = false;

  constructor(name: KnownActionTypes) {
    this.name = name;
  }

  startLoading = (): true => {
    this.isLoadingCounter++;
    return true;
  };

  endLoading = (): boolean => {
    this.isLoadingCounter--;
    if (this.isLoadingCounter < 0) {
      this.hasError = true;

      console.error(`${this.name} reducer isLoading counter ${this.isLoadingCounter} < 0. Check ${this.name} reducers.`);
    }
    return this.hasError ? false : this.isLoadingCounter > 0;
  };

  getCounter = (): number => this.isLoadingCounter;
}
