import { User, UserProps } from '../models/User';
import { Handler, View } from './View';

export class UserForm extends View<User, UserProps> {
  protected eventsMap(): Handler {
    return {
      'click:.set-age': this.onSetAge.bind(this),
      'click:.set-name': this.onSetName.bind(this),
      'click:.save': this.onSave.bind(this)
    };
  }

  public onSave(): void {
    this.model.save();
  }

  public onSetAge(): void {
    this.model.setRandomAge();
  }

  public onSetName(): void {
    const input = this.parent.querySelector('input.name') as HTMLInputElement;

    if (input) {
      const name = input.value;
      this.model.set({ name });
    }
  }

  public template(): string {
    return `
      <div>
        <input class="name" type="text" placeholder="${this.model.get(
          'name'
        )}" />
        <div>
          <button class="set-name">Change name</button>
          <button class="set-age">Set random age</button>
        </div>
        <div>
          <button class="save">Save</button>
        </div>
      </div>
    `;
  }
}
