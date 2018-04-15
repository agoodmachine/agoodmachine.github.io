---
layout: default
title: Collection
categories: collection-page
---

_This page is all about the **Collection** section. See [Collections](../collections) for some more general information about collections in Capital._

You can adjust how collection pages look in Capital. In order to change the settings, you need to navigate to a collections page while using Shopify's theme editor. That way, the **Collection** area appears in the list of theme settings, and you can preview the changes you make to those settings right away.

<dl>
  <dt>Products per row</dt>
  <dd>Choose how many products should appear per row for customers using larger screens. You can choose <em>3</em>, <em>4</em>, or <em>5</em> products per row. Note that on most mobile devices, Capital always displays <em>2</em> products per row. <a href="#products-per-row">See an example</a>.</dd>
  <dt>Enable collection sorting</dt>
  <dd>Select this checkbox to add a dropdown menu. This menu allows customers to sort products by name, price, date added, and most popular.</dd>
  <dt>Enable brand filtering</dt>
  <dd>Select this checkbox to turn on a list of brands that customers can use to filter the current collection.</dd>
  <dt>Enable product type filtering</dt>
  <dd>Select this checkbox to turn on a list of product types that customers can use to filter the current collection.</dd>
  <dt>Enable tag filtering</dt>
  <dd>Select this checkbox to enable the default tag filtering. This will list all product tags within the current conllection.</dd>
  <dt>Enable product option filtering</dt>
  <dd>Create filters for up to five product options (e.g., Color, Size) that customers can use to filter the current collection.</dd>
</dl>

## Products per row {#products-per-row}

The products per row setting allows you to quickly change how many products appear per row of products.

![Products per row setting: 3 products per row](../images/products-per-row-3-collection.png)

![Products per row setting: 5 products per row](../images/products-per-row-5-collection.png)

Mobile devices do not honor this setting. On smaller screens, Capital only displays 2 products per row. This ensures that the products are big enough for customers to select.

## Enable collection sorting {#collection-sorting}

Use the **Enable collection sorting** checkbox to turn on the sorting dropdown menu. This dropdown menu appears at the top, right-hand side of every collection page and allows customers to reorder the products in the collection by name, price, date added, and most popular.

Here's what the dropdown menu looks like on a collection page:

![Collection sorting dropdown menu](../images/collection-sorting.png)

## Collection filtering

You can enable many different types of collection filters. To make the filters work effectively, you need to use your product tags, product types, and product vendor fields strategically. See the sections below for more information.

![Collection filtering turned on](../images/collection-filtering.png)

On mobile devices, the collection filters can be accessed using the **Filter products** button at the top of each collection page. The filters then appear as a modal window.

![Collection filtering mobile](../images/filter-collection-mobile.png)

### Enable brand filtering {#brand-filter}

Use the **Enable brand filtering** checkbox to turn on the brand filter. This adds a list of brands that appear in the collection and allows customers to filter products by a specific brand.

Brands can be set using the **Vendor** field when you add or edit products in the Shopify admin area. For brand filter, you also need to add the vendor as a tag on each product.

### Enable product type filtering {#type-filter}

Use the **Enable product type filtering** checkbox to turn on the product type filter. This adds a list of product types that appear in the collection and allows customers to filter products by product type.

Product types can be set using the **Product type** field when you add or edit products in the Shopify admin area. For the product type filter, you also need to add the product type as a tag on each product.

### Enable product option filtering {#option-filter}

Adding **Product option filters** allows your customers to filter product collections by attributes, like color or size. To add a filter, use the **Add product option filter** button within your **Collection** settings, and enter the title of one of your product's options. Note: Product options are case-sensitive.

In order to use option filters, product variant values must be added to those products as tags. Tags are case-sensitive, so if your product's options are `Black`, `White`, or `Red`, the tags must match this case, for example: `Black`, `White`, and `Red`, __not__ `black`, `white`, and `red`.

The following example shows a product with tags for brand ("Helm"), type ("Boot"), and product option filtering:

![Collection option filtering](../images/collection-option-filtering.png)
