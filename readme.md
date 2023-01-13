## Trading Economics - Sample App

Example single-page-application built for Trading Economics. Allows the user to compare the historical GDPs of Mexico, Sweden, New Zealand, and Thailand (these are the only available countries with free access to the TE API). Each country can be toggled on/off on the graph, and the y-axis scales accordingly.

To run application locally:
1. Clone this repository
2. Navigate to this directory and run `npm i`
3. Create a ".env" file in the root directory
4. In ".env", write your API key as such: `API_KEY="yourApiKeyHere"`
5. Run the following command: `npm run build && npm start`

The project will be available for viewing on port 3000
