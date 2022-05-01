# algolia-instantsearch-web

This tutorial shows you how to quickly build an instant search result page using the Algolia Web Instantsearch JS library.
This demo contains following features:

- Search bar
- Products hits list
- Search stats
- Categories list
- Brands List
- Price range
- Pagination

# Prerequisites

- Nodejs LTS
- Github
- Heroku account
- A web browser

## Quick Start

This section shows you how to prepare, and run the sample application on your local environment.

### Obtain an App ID, and the relevant API keys

To build and run the sample application, get an App ID:

1. Create a developer account at [algolia.com](https://www.algolia.com/users/sign_up). Once you finish the signup process, you will be redirected to the Dashboard.
2. Navigate in the Dashboard tree in the middle of the page click on **API Keys**.
3. By default the following will be generated for your default app:
   **Application ID**: This is your unique application identifier. It's used to identify you when using Algolia's API.
   **Search-Only API Key**: This is the public API key to use in your frontend code. This key is only usable for search queries and sending data to the Insights API.
   **Admin API Key**: This is the ADMIN API key. Please keep it secret and use it ONLY from your backend: this key is used to create, update and DELETE your indices. You can also use it to manage your API keys.
4. Save the **App ID** and the two keys from the Dashboard for later use.

### Install dependencies and integrate the Algolia instantsearch libraries

1. Using the Terminal app, enter the `install` command in your project directory. This command installs libraries that are required to run the sample application.
   ```bash
   # install dependencies
   npm install
   ```
2. Start the application by entering the `run push` command.
   The `run push` command is for loading the dataset to the Algolia index (and configure it properly). The dataset used here holds a list of electronic devices such phones, headsets etc...
   This also sets the following:

   - The attributes you want to search in
   - Define business metrics for ranking and sorting
   - Set up some attributes to filter results on

   ```bash
   # loads the data to algolia index
   npm run push
   ```

3. Start the application by entering the `run dev` or `run build` command.
   The `run dev` command is for development purposes.
   ```bash
   # serve with hot reload at localhost:5003
   npm run dev
   ```
   The `run build` command is for production purposes and minifies code.
   ```bash
   # build for production with minification
   npm run build
   ```
4. Your default browser should open and display the sample application.

   **Note:** In some cases, you may need to open a browser and enter `http://localhost:5003` as the URL.

## Resources

- You can find full API document at [Document Center](https://www.algolia.com/doc/guides/getting-started/how-algolia-works/in-depth/implementation-process/#configuring-relevance)
