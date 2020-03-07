import { Model } from '../models/Model';

export interface Handler {
  [key: string]: () => void;
}

export abstract class View<T extends Model<K>, K> {
  public regions: { [key: string]: Element } = {};

  constructor(public parent: Element, public model: T) {
    this.bindModel();
  }

  abstract template(): string;

  protected eventsMap(): Handler {
    return {};
  }

  public regionsMap(): { [key: string]: string } {
    return {};
  }

  private bindModel(): void {
    this.model.on('change', () => {
      this.render();
    });
  }

  public bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':');

      fragment.querySelectorAll(selector).forEach(element => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  public mapRegions(fragment: DocumentFragment): void {
    const regionsMap = this.regionsMap();

    for (let key in regionsMap) {
      const selector = regionsMap[key];
      const element = fragment.querySelector(selector);
      if (element) {
        this.regions[key] = element;
      }
    }
  }

  public onRender(): void {}

  public render(): void {
    // empty parent element
    this.parent.innerHTML = '';

    const tplElement = document.createElement('template');
    tplElement.innerHTML = this.template();

    this.bindEvents(tplElement.content);
    this.mapRegions(tplElement.content);

    this.onRender();

    this.parent.append(tplElement.content);
  }
}
