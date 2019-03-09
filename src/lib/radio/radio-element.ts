import { customElement, html } from "lit-element";
import { TemplateResult } from "lit-html";
import { IRadioBehaviorProperties, RadioBehavior } from "../behavior/radio/radio-behavior";

import "../ripple";
import { cssResult } from "../util/css";

import styles from "./radio-element.scss";

/**
 * Properties of the radio.
 */
export interface IRadioElementProperties extends IRadioBehaviorProperties {
}

/**
 * Select one option from a set.
 */
@customElement("radio-element")
export class RadioElement extends RadioBehavior implements IRadioElementProperties {
	static styles = [...RadioBehavior.styles, cssResult(styles)];

	/**
	 * Returns the template for the element.
	 */
	protected render (): TemplateResult {
		return html`
            <div id="dot"></div>
			<ripple-element id="ripple" .target="${this}" focusable overlay unbounded centered initialDuration="200"></ripple-element>
			${this.renderFormElement()}
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"radio-element": RadioElement;
	}
}
