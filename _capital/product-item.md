---
layout: default
title: Product item
categories: product
---

_To access Capital's product item settings, select **Product item** from the **General settings** tab of your theme settings._

You can adjust how products appear throughout your shop by using the product item settings. If you sell many products from the same brand, or if you have many variants of the same item, these settings can enhance how customers browse your store and choose the items best for them.

Some of the settings below depend on how you've set up your products and collections. If you need more information about setting up products and collections in Shopify, see their articles [Products](https://help.shopify.com/manual/products) and [Building product collections](https://help.shopify.com/manual/products/collections).

<dl>
  <dt>Product image aspect ratio</dt>
  <dd>Choose whether product images on collection pages should be displayed at their default ratio (Natural), landscape orientation (3:2), square orientation (1:1), or portrait oriented (2:3). <a href="#aspect-ratio">See some examples</a>.</dd>
  <dt>Show brand</dt>
  <dd>Select this checkbox to show brand names on product pages and provide links to other products from the same brand. <a href="#show-brand">See an example</a>.</dd>
  <dt>Link brand names to tag filtered collection</dt>
  <dd>Select this checkbox to filter the current collection by a tag equal to the selected brand name. <a href="#link-brand-names">Get more information</a>.</dd>
  <dt>Show product type</dt>
  <dd>Select this checkbox to show the product type on the product page. You can set the product type when you are adding or editing products. <a href="#product-type">See an example</a>.</dd>
  <dt>Enable color swatches</dt>
  <dd>Enter the name of the product option you wish to turn into color swatches. In most circumstances, you would insert the word <code>Color</code> here. Note that this only affects products with multiple color variants (like black, white, and red product options). <a href="#color-swatches">See an example</a>.</dd>
  <dt>Enable size swatches</dt>
  <dd>Enter the name of the product option you wish to turn into size swatches. In most circumstances, you would insert the word <code>Size</code> here. Note that this only affects products with multiple size variants (like small, medium, and large sizes). <a href="#size-swatches">See an example</a>.</dd>
  <dt>Show low stock indicator</dt>
  <dd>Enter a number that defines low stock. If product stock is below this number, a message, <strong>Only [number] left</strong> is displayed on the item's product image. <a href="#low-stock">See an example</a>.</dd>
</dl>

## Product image aspect ratio {#aspect-ratio}

The product aspect ratio setting allows you to change the shape of product images in your store. This setting does not affect featured images for collections, your logo, or any other images you've uploaded from Capital's theme setting – this setting affects only product photos.

If you require a special aspect ratio for your product photos, you can use the Natural setting. However, for best results we recommend that all your product images are the same size and aspect ratio.

See our recommended image dimensions and layout information for your product images (and every other image in Capital) on the [Image dimensions](../image-dimensions) page.

## Show brand {#show-brand}

Select the **Show brand** checkbox to show the name of the brand as it is configured in your product details. When a user follows the brand name link, it filters all of the products in the store with the same brand name. (However, you can change this functionality by using the [Link brand names to filtered collections](#link-brand-names) checkbox below.)

In the image below, you can see what **Show brand** enabled looks like turned on the left product, and what it looks like turned off on the right product.

![Product details with Show brand enabled](../images/show-brand-name.png)

## Link brand names to filtered collections {#link-brand-names}

Select the **Link brand names to tag filtered collection** checkbox to change the behavior of brand name links when the **[Show brand](#show-brand)** checkbox is selected.

By default, brand names link to all to a brand page; a page listing all of the shop's products with the same brand name. While this page is similar in layout to a collection page, it is without some of its functionality. With this setting enabled, brand names link only to the current collection's products, filtered by a tag equal to the selected brand name. In this way, we're able to retain the use of the filter sidebar, and remain within the context of the collection that your customer is viewing.

## Swatches

Capital allows you to enable swatches for color and size on each product page.

![Color and size swatches enabled](../images/swatches.png)

### Enable color swatches {#color-swatches}

If you sell a product that comes in many colors, you can use the **Enable color swatches** setting to make color swatches appear beautifully as little colored squares. Customers can then pick the color they are interested in by simply selecting one of the color swatches.

This setting only affects products that have color variants set up. You need to enter the name of the configured product option (for example, `Color`) in order for color swatches to work properly. For information on setting up product variants and product options, see Shopify's article [Variants](https://help.shopify.com/manual/products/variants).

### Enable size swatches {#size-swatches}

If you sell a product that comes in many sizes, you can use the **Enable size swatches** setting to make buttons with the names of available sizes appear in the product details. Customers can then pick the size they are interested in by pressing the associated button.

This setting only affects products that have size variants set up. You need to enter the name of the configured product option (for example, `Size`) in order for size swatches to work properly. For information on setting up product variants and product options, see Shopify's article [Variants](https://help.shopify.com/manual/products/variants).

## Show low stock indicator {#low-stock}

When enabled, the low stock indicator is displayed on product images. The indicator only appears when the item's stock is tracked in the Shopify admin and stock left is equal to or less than the number defined by this setting. To enable this setting, enter a number that defines low stock.

If product stock is below this number, a message, **Only [number] left** is displayed on the item's product image:

![Product with low stock indicator active](../images/low-stock-indicator.png)
