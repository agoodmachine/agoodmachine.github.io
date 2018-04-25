---
layout: default
title: Departments
categories: other-pages
---

Departments are Capital's headline feature. We made Capital specifically for shops with large inventories. Just like a traditional department store, Capital's department features makes it easy for customers to browse the types of products they are most interested in. For example, if you set up a Shoes department, then customers can more easily find inventory that are shows or related to shoes.

You can start to see why departments are useful when you sell a lot of completely different types of products – like shoes, jewelry, leathers, pet accessories, and books. Departments give your customers a logical way to look through different product types in your inventory while still allowing them to quickly understand the broader array of products that your shop offers.

## Getting started

In order to set up the departments feature for your shop, there are a few configuration steps required. Make sure you set aside some time to configure it correctly.

You will need to create additional pages, [product collections](https://help.shopify.com/manual/products/collections) and navigation menus that are used specifically by the departments feature.

## Here are the main configuration steps for setting up the department page:

  1. Add a page for each of your departments.  
     Use the `page.department` template when you add each department page.
  2. Add navigation menus for each department that you created.  
     These menus will contain your department-specific product collections.

To help you set up departments, this page will go through these steps in detail, using the example of the "Mens" department on Capital's [Berlin](https://capital-theme-berlin.myshopify.com) demo. Here is what the "Mens" department will look like when it's finished:

!["Mens" department in the department navigation menu](../images/departments-mens-full-menu.png)

### Add a department page for each of your departments

For each department, you need to create a page that represents the department. Capital provides a special page template specifically for this purpose, called `page.department`.

For each of your departments, create a page using the following steps:

  1. Navigate to **Online Store ► Pages** in your Shopify admin area.
  2. Use the **Add page** button to add a new page.
  3. Give your new page a title that matches the department. For example, `Shoes`.
  4. In the Templates settings area, change the template from `page` to `page.department` using the dropdown menu.
  5. Save your new department page.
  6. Repeat steps 2–5 until you've created a department page for all of your departments.

![The Templates settings area when adding or editing a page](../images/departments-page-templates-settings.png)


### Add navigation menus for each department

It's now time to associate each department page with your product collections. You can do this by creating a navigation menu for _each_ department that contains each of the department's sections. This menu tells the Department page which collections to display, and in what order. 

For example, the "Mens" department now has its own department page. Within the "Mens" department, we want sections for boots, shoes, accessories, and any other mens-related products that we sell.

In order to populate the "Mens" department, Capital needs a navigation menu that matches the name of the department page.

So, in this example, let's make a navigation menu called `Mens`.

![The Mens department's navigation menu](../images/department-section-navigation-menu.png)

Now that we have a `Mens` department navigation menu, we want to fill it with logical sections – like Boots, Shoes, Accessories and Boot Care. Each of these items will be a product collection for the "Mens" department. In the navigation settings of the department menu you've just created, add links to the collections you'd like to include in this department, and in the order you'd like to include them. _Note that these have to be links to collections for them to display properly on the department page_

_This step assumes you have set up product collections before. If you don't know what Shopify product collections are, see their [Building product collections](https://help.shopify.com/manual/products/collections) article._

  
Congratulations! You've created a Department Page, which adds one more way to organize and categorize your products and collections. 

Why not add those departments and collections as items in a mega-menu so your customers can easily navigate your inventory? [Click here to find out how.](/capital/mega-menus/)




