import { Grid, Hidden } from "@material-ui/core";
import React from "react";
import "./products.scss";
import ProductListCard from "./Product_List_Card";

// require("history").createBrowserHistory

export default function Products() {



	return (
		<Grid container className="product_container" spacing={3}>
			<Hidden smDown>
				<Grid item className="product_left_box" md={2}>
					<h2> SubMenu</h2>
					<h2> FilteringMenu</h2>
				</Grid>
			</Hidden>
			<Grid item className="product_right_box" md={10} xs={12}>
				<Grid container spacing={3} wrap="wrap">
					<Grid item xs={12} className="product_grid_item">
					<ProductListCard />
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}
