/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css } from 'lit';

export class RecipeDetails extends LitElement {
  createRenderRoot() { return this; }

  static properties = {
    duration: { type: Number },
    cal: { type: Number }
  };

  get durationUnit() {
    return this.duration > 60 ? 'h' : 'min';
  }

  get humanDuration() {
    if (this.duration < 60) { return this.duration }

    return Math.round(this.duration / 60);
  }

  render() {
    return html`
              <span class="recipe-details">
              <span><i class="far fa-clock"></i> <span class="ezinteger-field">${this.humanDuration}</span> ${this.durationUnit}</span>
              <span><i class="fas fa-fire"></i> <span class="ezinteger-field">${this.cal}</span> cal</span>
              </span>
         `;
  }
}

window.customElements.define('recipe-details', RecipeDetails);
