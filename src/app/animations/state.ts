
export class State {

  private isFirstState = true;

  constructor(
    private firstState: string,
    private secondState: string, ) {}

  public get state(): string {
    return this.isFirstState ? this.firstState : this.secondState;
  }

  public get toggled(): boolean {
    return !this.isFirstState;
  }

  public toggle() {
    this.isFirstState = !this.isFirstState;
  }
}
