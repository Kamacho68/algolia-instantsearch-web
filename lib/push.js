import _ from 'lodash';
import fs from 'fs';
import fetch from "node-fetch";
import algoliasearch from 'algoliasearch';
let appId = 'LDR5HX0YRX';
let indexName = 'ecommerce_demo';

// Check if the apiKey in ENV and local file
let apiKey = process.env.ALGOLIA_API_KEY;

if (fs.existsSync('./_algolia_api_key')) {
    apiKey = fs.readFileSync('./_algolia_api_key', 'utf8');
}

if (!apiKey) {
    console.info('Usage:');
    console.info('$ ALGOLIA_API_KEY=XXXXX npm run push');
    process.exit();
}

// Create a client using the specified API key & App ID
const client = algoliasearch(appId, apiKey);

// Configure Index
const index = client.initIndex(indexName);

index.setSettings({
    // Select the attributes you want to search in
    searchableAttributes: [
        'brand', 'name', 'categories', 'description'
    ],
    // Define business metrics for ranking and sorting
    customRanking: [
        'desc(popularity)'
    ],
    // Set up some attributes to filter results on
    attributesForFaceting: [
        'categories', 'searchable(brand)', 'price'
    ]
})

fetch("https://alg.li/doc-ecommerce.json")
    .then((response) => {
        return response.json();
    })
    .then((products) => {
        return index.saveObjects(products, {
            autoGenerateObjectIDIfNotExist: true
        });
    })
    .catch(function(err) {
        console.log("Unable to fetch -", err);
    });