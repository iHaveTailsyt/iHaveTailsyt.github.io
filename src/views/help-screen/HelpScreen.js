import React, { Component } from "react";

import "./HelpScreen.less";
import Version from "../../Version";
import persistenceService from "common/services/PersistenceService";

export default class HelpScreen extends Component {
	handleResetClick = () => {
		persistenceService.reset();
		window.location.reload();
	}

	render() {
		return (
			<div className="help-screen">
				<div className="header">
					<strong>Usage</strong>

					<div>Right-click or drag and drop to equip an item.</div>
					<div>CTRL + right-click to sell an item.</div>
					<div>You can also drag and drop the item on the vendor menu (<i className="fa fa-balance-scale" />) to sell it.</div>
					<div>Current game version is {Version}</div>
				</div>

				<div className="header">
					<button type="button" onClick={this.handleResetClick}>Start over</button>
				</div>

					</div>
		);
	}
}
