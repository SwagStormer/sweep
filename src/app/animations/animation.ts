// To create an animation class, we extend the abstract class
// of animation. We have a description (so we know what it does)
// and then the animation itself is returned inside of self

export abstract class Animation {
  abstract description: string;
  abstract self(): any;
}
