---
layout: default
title: Departments
categories: collection-page
---

Departments are Capital's headline feature. We made Capital specifically for shops with large inventories. Just like a traditional department store, Capital's department features makes it easy for customers to browse the types of products they are most interested in. For example, if you set up a Shoes department, then customers can more easily find inventory that are shows or related to shoes.

You can start to see why departments are useful when you sell a lot of completely different types of products – like shoes, jewelry, leathers, pet accessories, and books. Departments give your customers a logical way to look through different product types in your inventory while still allowing them to quickly understand the broader array of products that your shop offers.

## Getting started

In order to set up the departments feature for your shop, there are a few configuration steps required. Make sure you set aside some time to configure it correctly.

You will need to create additional pages, [product collections](https://help.shopify.com/manual/products/collections) and navigation menus that are used specifically by the departments feature.

Here are the main configuration steps:

  1. Add a page for each of your departments.  
     Use the `page.department` template when you add each department page.
  2. Add a navigation menu that includes items to all of your department pages.
  3. Add navigation menus for each department that you created.  
     These menus will contain your department-specific product collections.
  4. Add additional navigation menus that filter your product collections by tag.

To help you set up departments, this page will go through these steps in detail, using the example of the Mens department on Capital's [Berlin](https://capital-theme-berlin.myshopify.com) demo. Here is what the Mens department will look like when it's finished:

![Mens department in the department navigation menu](../images/departments-mens-full-menu.png)

## Add a department page for each of your departments

For each department, you need to create a page that represents the department. Capital provides a special page template specifically for this purpose, called `page.department`.

For each of your departments, create a page using the following steps:

  1. Navigate to **Online Store ► Pages** in your Shopify admin area.
  2. Use the **Add page** button to add a new page.
  3. Give your new page a title that matches the department. For example, `Shoes`.
  4. In the Templates settings area, change the template from `page` to `page.department` using the dropdown menu.
  5. Save your new department page.
  6. Repeat steps 2–5 until you've created a department page for all of your departments.

![The Templates settings area when adding or editing a page](../images/departments-page-templates-settings.png)

## Add a navigation menu that lists all of your departments

Now that you have department pages set up, you can create a navigation menu that lists your departments.

  1. Navigate to **Online Store ► Navigation** in your Shopify admin area.
  2. Use the **Add menu** button to add a new menu.
  3. Give your new menu a descriptive title, like `Departments`. <p>Depending on your shop's navigation set up, you may end up changing this title later on.</p>
  4. Use the **Add menu item** button to add a new item. For example, let's add an item called "Mens".
  5. Use the dropdown menu to change the Link field to **Page**.
  6. Choose a page that correlates to a department page that  you made earlier.
  7. Repeat steps 4–6 until you've added all of your departments to the menu.

This navigation menu will be used to display the list of departments in your store's navigation menu. The name of this menu will appear in your main menu, alongside your other main pages. You may want to name this menu `Shop` or `Departments`.

![A list of departments in a navigation menu called Shop](../images/departments-navigation-menu.png)

## Add navigation menus for each department

Now that your departments are associated with a navigation menu, it's time to associate each department with your product collections. You can do this by creating a navigation menu for _each_ department that contains each of the department's sections.

For example, the Mens department now has its own department page, and it lives in your new `Shop` navigation menu that lists your departments. Within the Mens department, we want sections for boots, shoes, accessories, and any other mens-related products that we sell.

In order to populate the Mens department, Capital needs a navigation menu called `Mens`.

So, in this example, let's make another navigation menu called `Mens`.

![The Mens department's navigation menu](../images/department-section-navigation-menu.png)

In the next step, we'll go over what the Boots, Shoes, Accessories, and Boot Care menu items are linked to.

## Fill your department navigation menu with sections of your department.

_This step assumes you have set up product collections before. If you don't know what Shopify product collections are, see their [Building product collections](https://help.shopify.com/manual/products/collections) article._

Now that we have a `Mens` department navigation menu, we want to fill it with logical sections – like Boots, Shoes, Accessories and Boot Care. Each of these items will be a special product collection for the Mens department.

  1. Create a new product collection.  
     For example, the "Boots" collection. This collection will be filled with men's boots.
  2. While you are adding the new collection, scroll to the bottom of the page until you see a section called **Search engine listing preview**.
  3. Select the **Edit website SEO** link.  
     The SEO panel will open, revealing new fields to edit your collection with.
  4. Find the field labelled **URL and handle**.
  5. Replace the handle in the field with a new handle in the form `department-section`.  
  For example, if the department is "Mens" and the section name is Boots, put `mens-boots` in as the handle.

In you are having trouble, here is a short video that goes through the above steps:

<video autoplay loop nocontrols>
  <source src="../videos/departments-edit-website-seo.mp4" type="video/mp4">
  <source src="../videos/departments-edit-website-seo.webm" type="video/webm">
Your browser does not support the video tag. Try opening this page with a browser like Google Chrome, Mozilla Firefox, or Safari.
</video>

## Add additional navigation menus that filter your departments's product collections by tag

_Note that this navigation level requires that your products use Shopify's product tags feature. For more information see Shopify's [Tags](https://help.shopify.com/manual/products/add-update-products#tags) article._

You can create another sub-level for your department navigation by using collection filters for each product collection in a department.

For example, the Mens department has now sections for boots, shoes, accessories, and boot care. But because there are many types of boots, we want to organize the boots even more.

To do this, you can create another navigation menu that provides our Mens sections with sub-sections. In this example, we would call our new menu `Boots` in order to create sub-sections for types of boots.

  1. Create a new navigation menu for one of your department's sections.  
  For example, if you had a section called Boots in your Mens department, you would create a new navigation menu called `Boots`.
  2. In the **Handle** field of the new navigation menu, enter a name with the format `department-section`.  
  For example, a navigation menu with the handle `mens-boots` would be displayed as a sub-section within the Mens department's Boots section.

In your new navigation menu for that represents a sub-section of your department section, you can now add menu items that should be included in the sub-section. Each menu item should link to a product collection filtered by a specific tab.

![Navigation menu with sub-sections for departments](../images/department-sub-section-navigation-menu-with-tag-filtering.png)

For example, for our Boots section, we want all of the menu items to link to different kinds of boots. We can set up each menu item to link to a product that has a specific tag.

  1. Use the **Add menu item** button to add a new menu item.
  2. Use the dropdown to change the **Link** field to the collection that you want to filter through.
  3. Select the **Filter with tags** link and type in the tag filter you wish to add. For example, `work boot`.
  4. Repeat steps 1–3 until you're satisfied with the available collection filters.

## Summary

After following the steps above, you should now have a number of different navigation menus that point at one another using their titles and handles. You should have a departments navigation menu that points at your department pages, and navigation menus for each department section, and navigation menus for each department sections sub-sections.

This setup may seem scary at first, but taking it one step at a time, you'll have a logical department navigation system in no time. Once you've set up all of your departments and their sub-sections, you can head to your [Navigation](../navigation) settings and your [Department links](../department-links) settings to start displaying departments in your store.
