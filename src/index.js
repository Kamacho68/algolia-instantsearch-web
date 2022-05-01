import { style } from "./main.css";
import { hitTemplate } from "./helpers.js";
import "regenerator-runtime";

let appId = 'LDR5HX0YRX';
let apiKey = '11fe58a824d9aa83ca89cc98ca60b122';
let indexName = 'ecommerce_demo';

const search = instantsearch({
    appId: appId,
    apiKey: apiKey,
    indexName: indexName,
    // urlSync: true,
    searchParameters: {
        hitsPerPage: 5,
        attributesToSnippet: ["description:24"],
        snippetEllipsisText: " [...]"
    }
});

// Add a search bar to the widget.
search.addWidget(
    instantsearch.widgets.searchBox({
        container: "#searchbox",
        placeholder: "Search for products",
        autofocus: false
    })
);

// Add the hits list to the widget.
search.addWidget(
    instantsearch.widgets.hits({
        container: "#hits",
        templates: {
            empty: "No results.",
            item: function(hit) {
                return hitTemplate(hit);
            }
        }
    })
);

// Add the search stats to the widget.
search.addWidget(
        instantsearch.widgets.stats({
                container: "#stats",
                templates: {
                    body(hit) {
                        return `<span role="img" aria-label="emoji">⚡️</span> <strong>${hit.nbHits}</strong> results found ${hit.query != "" ? `for <strong>"${hit.query}"</strong>` : ``
                    } in <strong>${hit.processingTimeMS}ms</strong>`;
            }
        }
    })
);

// Add the categories list to the widget.
search.addWidget(
    instantsearch.widgets.refinementList({
        container: "#categories",
        attributeName: "categories",
        autoHideContainer: false,
        templates: {
            header: "Categories"
        }
    })
);

// Add the brands list to the widget.
search.addWidget(
    instantsearch.widgets.refinementList({
        container: "#brands",
        attributeName: "brand",
        searchForFacetValues: true,
        autoHideContainer: false,
        templates: {
            header: "Brands"
        }
    })
);

// Add the price range to the widget.
search.addWidget(
    instantsearch.widgets.rangeSlider({
        container: "#price",
        autoHideContainer: false,
        attributeName: "price",
        templates: {
            header: "Price"
        }
    })
);

// Add the pagination to the widget.
search.addWidget(
    instantsearch.widgets.pagination({
        container: "#pagination"
    })
);

search.start();