/**
 * Create the category Fields
 * @param {HTMLFormElement} parent
 */

export const createCategoryFields = parent => {
  //Will update when fetched data promise is resolved
  //Used to populate select inputs
  let categoryOptions = [];

  const updateCategory = () => {
    let selectCategory = document.querySelector('#category');
    categoryOptions.forEach(option => {
      let selectOption = document.createElement('option');
      selectOption.value = option.name;
      selectOption.textContent = option.name;
      selectCategory.appendChild(selectOption);
    });
  };

  /**
   * Handle the update Event
   * @param {HTMLSelectElement : change} e
   */
  const updateSubcategory = e => {
    let selectSubcategory = document.querySelector('#subcategory');
    //Clearing previous subcategory options if any
    while (selectSubcategory.lastElementChild) {
      selectSubcategory.removeChild(selectSubcategory.lastElementChild);
    }
    if (categoryOptions.length) {
      categoryOptions.forEach(category => {
        //If all is selecteed display all subcategories
        if (e.target.value === 'All') {
          if (category.subCategories)
            category.subCategories.forEach(subcategory => {
              let option = document.createElement('option');
              option.value = subcategory.name;
              option.textContent = subcategory.name;
              selectSubcategory.appendChild(option);
            });
          //Display only matching subcategory names
        } else if (e.target.value === category.name && category.subCategories) {
          category.subCategories.forEach(subcategory => {
            let option = document.createElement('option');
            option.value = subcategory.name;
            option.textContent = subcategory.name;
            selectSubcategory.appendChild(option);
          });
        }
      });
    }
  };

  const fetchUrl = async () => {
    let url = 'https://run.mocky.io/v3/0b8fbded-6ce4-4cb2-bf2f-d2c39207506b';

    try {
      const response = await fetch(url);
      const data = await response.json();
      categoryOptions = data;
    } catch (err) {
      //Console.toast(?)
      console.log(err);
    } finally {
      //Update select options
      updateCategory();
    }
  };

  let groupingContainer = document.createElement('div');
  groupingContainer.classList.add('form', 'options');

  parent.appendChild(groupingContainer);

  let categoryWrapper = document.createElement('div');
  let subCategoryWrapper = document.createElement('div');
  categoryWrapper.classList.add('form-options');
  groupingContainer.appendChild(categoryWrapper);
  groupingContainer.appendChild(subCategoryWrapper);

  //Creating the Category field
  let selectCategory = document.createElement('select');
  selectCategory.ariaLabel = 'category';
  selectCategory.id = 'category';
  selectCategory.classList.add('form-input');
  //When something new is selected update the subcategory select options
  selectCategory.addEventListener('change', updateSubcategory);

  let selectSubcategory = document.createElement('select');
  selectSubcategory.ariaLabel = 'subcategory';
  selectSubcategory.id = 'subcategory';
  selectSubcategory.classList.add('form-input');

  categoryWrapper.appendChild(selectCategory);
  subCategoryWrapper.appendChild(selectSubcategory);

  //Fetching populating data
  fetchUrl();
};

export default createCategoryFields;
