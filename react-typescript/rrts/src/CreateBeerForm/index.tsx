import React, { useState } from 'react';

// import { Container } from './styles';
export interface IBeerFormState {
  name: string;
  selectedType: string;
  hasCorn: boolean;
  ingredients: string;
}

export default function CreateBeerForm() {
  const INITIAL_STATE: IBeerFormState = {
    name: '',
    selectedType: 'default',
    hasCorn: false,
    ingredients: ''
  };
  const [formState, setFormState] = useState(INITIAL_STATE);

  /**
   * Change state based on a given value.
   * @param key - formState key
   * @param value - formState value to be changed
   */
  function handleChange(key: string, value: string | boolean) {
    setFormState({ ...formState, [key]: value });
  }

  /**
   * Handle Form subimit method.
   */
  function handleSubmit() {
    console.log(formState);
  }

  return (
    <>
      <form className="col my-5">
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="Beer name"
            value={formState.name}
            onChange={event => handleChange('name', event.target.value)}
          />
        </div>
        <div className="form-group">
          <select
            name="selectedType"
            className="form-control"
            value={formState.selectedType}
            onChange={event => handleChange('selectedType', event.target.value)}
          >
            <option disabled value="default">
              Choose one
            </option>
            <option value="Ale">Ale</option>
            <option value="Lager">Lager</option>
            <option value="Stout">Stout</option>
          </select>
        </div>
        <div className="form-group">
          <div className="form-check">
            <input
              type="checkbox"
              name="hasCorn"
              id="hasCorn"
              className="form-check-input"
              checked={formState.hasCorn}
              onChange={() => handleChange('hasCorn', !formState.hasCorn)}
            />
            <label className="form-check-label" htmlFor="hasCorn">
              Has Corn?
            </label>
          </div>
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            name="ingredients"
            cols={30}
            rows={10}
            value={formState.ingredients}
            onChange={event => handleChange('ingredients', event.target.value)}
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onSubmit={handleSubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
}
