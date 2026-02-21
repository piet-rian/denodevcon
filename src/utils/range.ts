export abstract class Range<T> {
  constructor(protected start: T, protected end: T) {}
  abstract constain(t: T): boolean;
}

export class RangeOO<T> extends Range<T> {
  constain(t: T): boolean {
    return this.start < t && t < this.end;
  }
}

export class RangeCC<T> extends Range<T> {
  constain(t: T): boolean {
    return this.start <= t && t <= this.end;
  }
}

export class RangeOC<T> extends Range<T> {
  constain(t: T): boolean {
    return this.start < t && t <= this.end;
  }
}

export class RangeCO<T> extends Range<T> {
  constain(t: T): boolean {
    return this.start <= t && t < this.end;
  }
}
