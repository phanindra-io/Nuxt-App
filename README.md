Overview

1. Created a nuxt v2 app.
2. Integrated Vuetify for styling.
3. Defined the appliance info in the Vuex store.
4. Created two components MyForm and ConfigureElements.
5. MyForm will fetch the data from the Vuex store and display the appliance names in a dropdown.
6. When an appliance is selected and load button is clicked, its information will be loaded into the ConfigureElements component.
7. ConfigureElements will fetch the appliance data using the prop "id" from the Vuex store.
8. A user can edit the information displayed in the ConfigureElements component and on save will popup an alert box displaying the edited information.
9. Cleaned up the data provided in the json files and defined it in the Vuex store.
10. According to the data type, different input fields will be displayed as mentioned in the requirements.

Instruction to Start

npm install
npm run dev